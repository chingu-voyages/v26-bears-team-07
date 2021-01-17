// Fauna GQL query utility for browser
export async function query(secret, { query, variables = {} }) {
  const result = await fetch("https://graphql.fauna.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${secret}`,
    },
    body: JSON.stringify({ query, variables }),
  }).then((response) => response.json());

  // You can handle errors here if needed

  return result.data;
}

export function optProps(obj) {
  // util for creating optional GQL props. Create prop only if str has contents
  var str = "";
  for (const [key, value] of Object.entries(obj)) {
    if (value) str += `\n${key}: ${value}`;
  }
  return str;
}
