const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(
    env(
      "postgres://shovtuknqbjwzp:b00e08a0c01ca910b78ba74fd0acbf714530b52d14128415ae24c19cbb8dd7e7@ec2-54-86-106-48.compute-1.amazonaws.com:5432/df1pbo5ojkqv60"
    )
  );

  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          client: "postgres",
          host,
          port,
          database,
          username: user,
          password,
          ssl: { rejectUnauthorized: false },
        },
        options: {
          ssl: false,
        },
      },
    },
  };
};
