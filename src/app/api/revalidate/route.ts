import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const secret = req.headers.get("x-shopify-revalidation-secret");
  if (secret !== process.env.SHOPIFY_REVALIDATION_SECRET) {
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
