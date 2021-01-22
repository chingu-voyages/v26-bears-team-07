import { query } from "./db";

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
    id,
    // random invite string of length 4
    invite = Math.random().toString(36).substring(2, 6),
    section = null,
    subject = null,
    room = null,
  }
) =>
  query(secret, {
    query: `
mutation CreateClass(
  $name: String!
  $id: ID!
  $invite: ID!
  $section: String
  $subject: String
  $room: String
) {
  createClass(
    data: {
      name: $name
      owner: { connect: $id }
      invite: $invite
      teachers: { connect: [$id] }
      section: $section
      subject: $subject
      room: $room
    }
  ) {
    _id
    invite
  }
}
`,
    variables: { name, id, invite, section, subject, room },
  });

export const classesByUserID = (secret, userID) =>
  query(secret, {
    query: `
query ClassesByUserID {
  findUserByID(id: "${userID}") {
    _id
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

export const usersByClassID = (secret, classID) =>
  query(secret, {
    query: `
    query FindClassByID {
findClassByID(id: "${classID}") {
  _id
  teachers {
    data {
      name
      _id
    }
  }
  students {
    data {
      name
      _id
    }
  }
}
`,
  });
