import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const secret = req.headers.get("x-shopify-revalidation-secret");
  if (secret !== process.env.SHOPIFY_REVALIDATION_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  // TODO: parse topic and revalidate relevant tags
  return NextResponse.json({ revalidated: true });
}
