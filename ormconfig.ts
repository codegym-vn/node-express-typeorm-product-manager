module.exports = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "123456",
  database: "dbTest",
  synchronize: true,
  logger: "advanced-console",
  logging: "all",
  cache: true,
  dropSchema: false,
  entities: ["dist/src/models/*.js"],
};
