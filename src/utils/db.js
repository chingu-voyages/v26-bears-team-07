// TODO: Pending removal. This is an old file!
//    May have to remove if Fauna's client driver
//    isn't fixed and it's unused.

// A simple wrapper function for querying Fauna on the client
// takes secret as first param
import { Client } from "faunadb";

export function query(secret, cb) {
  var { query } = new Client({ secret });
  return query(cb);
}

// import { query } from "./db";
// import { query as q } from "faunadb";
// var { Create, Collection } = q;

// Fauna client queries for the Classes collection
// export const createClass = (secret, { name, section, subject, room }) =>
//   query(
//     secret,
//     Create(Collection("Classes"), {
//       data: {
//         name,
//         section,
//         subject,
//         room,
//       },
//     })
//   );
