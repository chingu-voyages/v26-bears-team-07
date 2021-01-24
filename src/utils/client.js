import {
  setClient,
  createClient,
  operationStore,
  query,
  mutation,
  defaultExchanges,
} from "@urql/svelte";
import { devtoolsExchange } from "@urql/devtools"; // TODO: for dev only. Remove on prod

/**
 * Function to create a new urql client
 */
export function initClient(secret) {
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

/** Creates a query for a component to consume.
 * @param {string} gqlQuery
 * @param {object} variables
 */
export const queryOp = (gqlQuery, variables) =>
  query(operationStore(gqlQuery, variables));

/** Creates a mutation hook for a component to consume.
 * @param {string} gqlMutation - A template literal with your GraphQL mutation.
 * @param {function} cbVarsObj A callback that should destructure & restructure the object with variables passed in by
 * the component. It can set defaults/fallbacks and shape its returned variables object.
 * Example:
 * ```js
 * ({ name = "no name entered", id }) => ({ name, id })
 * ```
 * @returns {Array} A tuple with the mutation function and its store. Final tuple should only be retrieved by calling
 * in a component.
 * Usage:
 * ```js
 * const [noteStore, noteCreate] = useCreateNote();
 * ```
 */
export function useMutation(gqlMutation, cbVarsObj) {
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
