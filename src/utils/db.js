export async function query(secret, { query, variables = {} }) {
  /**
   * Fauna GQL query utility for browser. Wraps your GraphQL query and returns response.
   */
  const result = await fetch("https://graphql.fauna.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${secret}`,
    },
    body: JSON.stringify({ query, variables }),
  }).then((response) => response.json());

  // You can handle errors here if needed
  //    They'll be on result.errors

  return result.data;
}

export function optProps(obj) {
  /**
   * util for creating optional GQL props for query.
   * Accepts an object of props and their strings.
   * Creates props only if its str has contents.
   * It's only suited for string types at the moment, but can be adjusted to check type
   *   later.
   */
  var str = "";
  for (const [key, value] of Object.entries(obj)) {
    if (value) str += `\n${key}: "${value}"`;
  }
  return str;
}
