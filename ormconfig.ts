module.exports = {
  type: "mysql",
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT, 10) || 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  synchronize: true,
  logging: false,
  migrations: ["src/data/migrations/*.ts"],
  entities: ["src/entities/*.ts"],
  cli: {
    migrationsDir: "src/data/migrations",
    entitiesDir: "src/entities",
  },
};
