import { queryOp, useMutation } from "../utils/client";

const CLASS_FIELDS = `
fragment ClassFields on Class {
  name
  invite
  _id
}
`;

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
    ...ClassFields
  }
}
${CLASS_FIELDS}
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
        ...ClassFields
      }
    }
    attends {
      data {
        ...ClassFields
      }
    }
  }
}
${CLASS_FIELDS}
`,
    { id }
  );

export const usersByClassID = ({ classID }) =>
  queryOp(
    `
query FindClassByID($id: ID!) {
  result: findClassByID(id: $id) {
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

export const findClass = ({ classID }) =>
  queryOp(
    `
query FindClassByID($id: ID!) {
  result: findClassByID(id: $id) {
    _id
    name
    invite
  }
}
`,
    { id: classID }
  );
