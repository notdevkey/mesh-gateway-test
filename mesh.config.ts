import {
  defineConfig,
  loadGraphQLHTTPSubgraph,
} from "@graphql-mesh/compose-cli";
import { loadOpenAPISubgraph } from "@omnigraph/openapi";

export const composeConfig = defineConfig({
  subgraphs: [
    {
      sourceHandler: loadGraphQLHTTPSubgraph("Countries", {
        endpoint: "https://countries.trevorblades.com",
      }),
    },
    {
      sourceHandler: loadOpenAPISubgraph("Petstore", {
        source: "https://petstore.swagger.io/v2/swagger.json",
        endpoint: "https://petstore.swagger.io/v2",
      }),
    },
  ],
});
