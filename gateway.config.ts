import { defineConfig } from "@graphql-hive/gateway";

export const gatewayConfig = defineConfig({
  supergraph: {
    type: "hive",
    endpoint: "<CDN ENDPOINT>/supergraph",
    key: "<CDN TOKEN>",
  },
});
