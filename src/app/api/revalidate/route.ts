import { createHmac, timingSafeEqual } from "crypto";
import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const secret = process.env.SHOPIFY_REVALIDATION_SECRET ?? "";
  const digest = createHmac("sha256", secret)
    .update(rawBody, "utf8")
    .digest("base64");
  const hmacHeader = req.headers.get("x-shopify-hmac-sha256") ?? "";

  let valid = false;
  try {
    const a = Buffer.from(digest);
    const b = Buffer.from(hmacHeader);
    valid = a.length === b.length && timingSafeEqual(a, b);
  } catch {
    valid = false;
  }
  if (!valid) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const topic = req.headers.get("x-shopify-topic");

  switch (topic) {
    case "products/create":
    case "products/update":
    case "products/delete":
      revalidateTag("products", "max");
      revalidateTag("collections", "max");
      break;
    case "collections/create":
    case "collections/update":
    case "collections/delete":
      revalidateTag("collections", "max");
      break;
    default:
      return NextResponse.json(
        { revalidated: false, reason: "Unsupported topic", topic },
        { status: 202 },
      );
  }

  return NextResponse.json({ revalidated: true, topic });
}
