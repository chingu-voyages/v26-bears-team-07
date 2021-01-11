const { query } = require("./db");
const {
  Login,
  Match,
  Index,
  TimeAdd,
  Now,
  Create,
  Collection,
} = require("faunadb").query;

exports.login = (name, password) =>
  query(
    Login(Match(Index("Users_by_name"), name), {
      password,
      ttl: TimeAdd(Now(), 30, "days"),
    })
  );

exports.createUser = (name, password) =>
  query(
    Create(Collection("Users"), {
      data: {
        name,
      },
      credentials: {
        password,
      },
    })
  );
