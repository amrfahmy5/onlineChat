const database = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "chat",
  },
  debug: true,
});

exports.database = database;