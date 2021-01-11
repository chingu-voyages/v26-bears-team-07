var faunadb = require("faunadb"),
  q = faunadb.query;

exports.handler = async ({ body }) => {
  var { name, password } = JSON.parse(body);

  var client = new faunadb.Client({ secret: process.env.FAUNA_KEY });
  try {
    var { ref = null } = await client.query(
      q.Create(q.Collection("Users"), {
        data: {
          name,
        },
        credentials: {
          password,
        },
      })
    );
  } catch (error) {
    return {
      statusCode: 400,
      body: "Account already exists.",
    };
  }

  if (ref) {
    var { secret = null } = await client.query(
      q.Login(q.Match(q.Index("Users_by_name"), name), {
        password,
        ttl: q.TimeAdd(q.Now(), 30, "days"),
      })
    );

    return (
      secret && {
        statusCode: 200,
        body: JSON.stringify({ secret }),
      }
    );
  }
};
