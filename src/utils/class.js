import { query, optProps } from "./db";

export const createClass = (
  /**
   * Creates a classroom. Must provide a name and owner id.
   *
   * Link and invite code can be auto-generated.
   *
   * Warning: Classes are unique by link. While not likely a random string is the same,
   * it should be accounted for in a production environment, and errors should be dealt with.
   */
  secret,
  {
    name,
    id,
    // random link string if link not provided
    link = Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15),
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
      owner: { connect: ${id} }
      link: "${link}"
      invite: "${invite}"
      teachers: { connect: ${id} }
      ${optProps({
        section,
        subject,
        room,
      })}
    }
  ) {
    _id
    link
    invite
  }
}
`,
  });
