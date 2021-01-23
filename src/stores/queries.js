import { operationStore, query } from "@urql/svelte";

export const classesByUserID = ({ id }) =>
  query(
    operationStore(
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
    )
  );
