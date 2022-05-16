module.exports = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "123456",
  database: "dbTest",
  synchronize: false,
  logger: "advanced-console",
  logging: "all",
  cache: true,
  dropSchema: false,
  entities: ["dist/src/entity/*.js"],
  migrations: [
    "dist/src/migrations/*.js"
 ],
 cli: { migrationsDir: 'src/migrations' }
};
