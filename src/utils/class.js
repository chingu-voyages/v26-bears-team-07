import { query, optProps } from "./db";

/** Creates a classroom. Must provide a name and owner id.
 *
 * Invite code can be auto-generated and is optional.
 *
 * `_id` of the doc is used as the link to route to.
 */
export const createClass = (
  secret,
  {
    name,
    ownerID,
    // random invite string of length 4
    invite = Math.random().toString(36).substring(2, 6),
    section = "",
    subject = "",
    room = "",
  }
) =>
  query(secret, {
    query: `
mutation CreateClass {
  createClass(
    data: {
      name: "${name}"
      owner: { connect: "${ownerID}" }
      invite: "${invite}"
      teachers: { connect: "${ownerID}" }
      ${optProps({
        section,
        subject,
        room,
      })}
    }
  ) {
    _id
    invite
  }
}
`,
  });

/** Get all the classes a user ID is in. Useful for class homepage. */
export const classesByUser = (secret, userId) =>
  query(secret, {
    query: `
query ClassesByUser {
  findUserByID(id: "${userId}") {
    teaches {
      data {
        ...fields
      }
    }
    attends {
      data {
        ...fields
      }
    }
  }
}

fragment fields on Class {
  name
  _id
  invite
}
`,
  });
