import { queryOp, useMutation } from "../utils/client";

/** Creates a classroom. Must provide a name and owner id.
 * Invite code can be auto-generated and is optional.
 *
 * `_id` of the doc is used as the link to route to.
 */
export const useCreateClass = () =>
  useMutation(
    `
mutation CreateClass(
  $name: String!
  $id: ID!
  $invite: ID!
  $section: String
  $subject: String
  $room: String
) {
  result: createClass(
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
    ({
      name,
      id, // random invite string of length 4
      invite = Math.random().toString(36).substring(2, 6),
      section = null,
      subject = null,
      room = null,
    }) => ({
      name,
      id,
      invite,
      section,
      subject,
      room,
    })
  );

export const classesByUserID = ({ id }) =>
  queryOp(
    `
query ClassesByUserID($id: ID!) {
  result: findUserByID(id: $id) {
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
    { id }
  );

export const usersByClassID = (classID) =>
  queryOp(
    `
query FindClassByID($id: ID!) {
  result: findClassByID($id) {
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
}
`,
    { id: classID }
  );
