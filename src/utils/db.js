// TODO: Remove this file when finished migrating to URQL

/** Fauna GQL query utility for browser. Wraps your GraphQL query and returns response.*/
export async function query(secret, { query, variables = {} }) {
  const result = await fetch("https://graphql.fauna.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${secret}`,
      "X-Schema-Preview": "partial-update-mutation",
    },
    body: JSON.stringify({ query, variables }),
  }).then((response) => response.json());

  // You can handle errors here if needed
  //    They'll be on result.errors
  if (process.env.NODE_ENV == "development") {
    console.log(result);
  }

  return result.data;
}
