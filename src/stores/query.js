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
query FindUsersByClassID($id: ID!) {
  result: findClassByID(id: $id) {
    ...ClassFields
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
${CLASS_FIELDS}
`,
    { id: classID }
  );

export const findClass = ({ classID }) =>
  queryOp(
    `
query FindClassByID($id: ID!) {
  result: findClassByID(id: $id) {
    ...ClassFields
  }
}
${CLASS_FIELDS}
`,
    { id: classID }
  );

/** Joins a class provided a classID and userID
 * warn: Seems difficult to secure on the client side with privileges. In a prod env, likely easier to handle logic via serverless func.
 */
export const useJoinClass = () =>
  useMutation(`mutation JoinClass($userID: ID!, $classID: ID!) {
    result: partialUpdateClass(
      id: $classID
      data: { students: { connect: [$userID] } }
    ) {
      ...ClassFields
    }
  }
  ${CLASS_FIELDS}`);

export const findStreams = ({ classID }) =>
  queryOp(
    `
query findStreams($classID: ID!) {
  result: findClassByID(id: $classID) {
    streams {
      data {
        _id
        message
        author {
          _id
          name
        }
        comments {
          data {
            _id
            author {
              name
            }
            message
          }
        }
      }
    }
  }
}
`,
    { classID }
  );

export const useCreateStream = () =>
  useMutation(`
mutation CreateStream($userID: ID!, $classID: ID!, $message: String!) {
  result: createStream(
    data: {
      author: { connect: $userID }
      class: { connect: $classID }
      message: $message
    }
  ) {
    _id
    message
    author {
      name
      _id
    }
  }
}
`);

export const useCreateComment = () =>
  useMutation(`
mutation CreateComment($userID: ID!, $streamID: ID!, $message: String!) {
  result: createComment(
    data: {
      author: { connect: $userID }
      stream: { connect: $streamID }
      message: $message
    }
  ) {
    _id
    message
    stream {
      _id
      message
    }
    author {
      name
      _id
    }
  }
}
`);

export const useAddTeacher = () =>
  useMutation(`
mutation AddTeacher($classID: ID!, $userID: ID!) {
  partialUpdateClass(
    id: $classID
    data: {
      teachers: { connect: [$userID] }
      students: { disconnect: [$userID] }
    }
  ) {
    _id
  }
}
`);
