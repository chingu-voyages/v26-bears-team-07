import { query, optProps } from "./db";

export const createClass = (
  secret,
  { name, id, link, invite, section = "", subject = "", room = "" }
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
  }
}
`,
  });
