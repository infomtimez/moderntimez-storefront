import { config as loadEnv } from "dotenv";
import type { CodegenConfig } from "@graphql-codegen/cli";

loadEnv({ path: ".env.local" });

const config: CodegenConfig = {
  schema: {
    [`https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/${process.env.SHOPIFY_STOREFRONT_API_VERSION ?? "2025-04"}/graphql.json`]:
      {
        headers: {
          "X-Shopify-Storefront-Access-Token":
            process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN!,
        },
      },
  },
  ignoreNoDocuments: true,
  documents: ["src/**/*.{ts,tsx}", "!src/lib/shopify/types.generated.ts"],
  generates: {
    "src/lib/shopify/types.generated.ts": {
      plugins: [
        { add: { content: "/* eslint-disable */\n// @ts-nocheck" } },
        "typescript",
        "typescript-operations",
      ],
      config: { avoidOptionals: true, skipTypename: false, enumsAsTypes: true },
    },
  },
};

export default config;
