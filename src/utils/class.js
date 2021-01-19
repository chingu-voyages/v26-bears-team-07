import { query, optProps } from "./db";

/** Creates a classroom. Must provide a name and owner id.
 *
 * Link and invite code can be auto-generated.
 *
 * Warning:
 * Classes are unique by link. While not likely, a random string could generate the same
 * link it should be accounted for in a production environment, and errors should be dealt with.
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

// TODO: teacher role creation query: Currently unable to create teacher in same query.
// It is likely because of permissions being applied only on user, and the user is not
// an owner of the classroom yet because it's trying to create at the same time.
// In that case, need to use a second query to update teachers OR create the role
// inside teacher_role
// Remove teachers field from the createClass query when this is solved
