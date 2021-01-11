var faunadb = require("faunadb"),
  q = faunadb.query;

exports.handler = async ({ body }) => {
  var { name, password } = JSON.parse(body);

  var client = new faunadb.Client({ secret: process.env.FAUNA_KEY });
  try {
    var { secret = null } = await client.query(
      q.Login(q.Match(q.Index("Users_by_name"), name), {
        password,
        ttl: q.TimeAdd(q.Now(), 30, "days"),
      })
    );
  } catch (error) {
    return {
      statusCode: 400,
      body: "Not found or invalid password!",
    };
  }

  return (
    secret && {
      statusCode: 200,
      body: JSON.stringify({ secret }),
    }
  );
};
