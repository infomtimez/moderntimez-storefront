function getStorefrontConfig() {
  const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
  const token = process.env.SHOPIFY_STOREFRONT_API_TOKEN;
  const version = process.env.SHOPIFY_STOREFRONT_API_VERSION ?? "2025-04";

  if (!domain || !token) {
    throw new Error("Missing Shopify storefront configuration");
  }

  return {
    endpoint: `https://${domain}/api/${version}/graphql.json`,
    token,
  };
}

export async function storefront<T>(
  query: string,
  variables: Record<string, unknown> = {},
  tags: string[] = [],
): Promise<T> {
  const { endpoint, token } = getStorefrontConfig();
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({ query, variables }),
    next: { tags },
  });

  if (!res.ok) throw new Error(`Shopify API error: ${res.status}`);
  const json = await res.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors));
  return json.data as T;
}
