// A simple wrapper function for querying Fauna on the client
// takes secret as second param
import { Client } from "faunadb";

export function query(cb, secret) {
  var { query } = new Client({ secret });
  return query(cb);
}
