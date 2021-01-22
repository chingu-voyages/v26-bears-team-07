import { setClient, createClient, defaultExchanges } from "@urql/svelte";
import { devtoolsExchange } from "@urql/devtools"; // TODO: for dev only. Remove on prod

/**
 * Function to create a new urql client and export as default
 */

export default function initClient(secret) {
  return setClient(
    createClient({
      url: "https://graphql.fauna.com/graphql",
      exchanges: [devtoolsExchange, ...defaultExchanges], // TODO: for dev only. Remove on prod
      fetchOptions() {
        return {
          headers: {
            authorization: secret ? `Bearer ${secret}` : "",
            "X-Schema-Preview": "partial-update-mutation",
          },
        };
      },
    })
  );
}
