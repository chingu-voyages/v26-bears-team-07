import {
  initClient as urqlInit,
  operationStore,
  query,
  mutation,
  defaultExchanges,
} from "@urql/svelte";
import { devtoolsExchange } from "@urql/devtools"; // TODO: for dev only. Remove on prod

/** urql preconfigured fauna client */
export const initClient = (secret) =>
  urqlInit({
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
  });

/** Creates a query for a component to consume.
 * @param {object} variables
 */
export const queryOp = (gqlQuery, variables) =>
  query(operationStore(gqlQuery, variables));

/** Creates a mutation hook for a component to consume.
 * @param {function} cbVarsObj A callback that should destructure & restructure the object with variables passed in by
 * the component. It can set defaults/fallbacks and shape its returned variables object. If none specified, will pass var obj supplied unmodified.
 * Example:
 * ```js
 * ({ name = "no name entered", id }) => ({ name, id })
 * ```
 * @returns {Array} Tuple w/ mutation & store. Call tuple within component.
 * Usage:
 * ```js
 * const [noteCreate, noteStore] = useCreateNote();
 * $noteStore
 * noteCreate(variablesObj)
 * ```
 */
export function useMutation(gqlMutation, cbVarsObj = (variables) => variables) {
  const mutationStore = operationStore(gqlMutation);
  const mutationOp = mutation(mutationStore);
  /** When executed, runs the GQL mutation with provided variables.
   * @param {object} variables The variables object for the GraphQL mutation. Passed through cbVarsObj() for
   * restructuring.
   */
  function setMutation(variables) {
    return mutationOp(cbVarsObj(variables));
  }

  return [setMutation, mutationStore];
}
