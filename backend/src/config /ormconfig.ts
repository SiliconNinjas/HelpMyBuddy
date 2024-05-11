import { join } from "path";

import {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_USER,
} from "./config.keys";
import { ConnectionOptions } from "typeorm";

const connectionOptions: ConnectionOptions = {
  ssl: false,
  type: "postgres",
  host: DATABASE_HOST,
  port: 5432,
  username: DATABASE_USER,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  synchronize: true,
  logging: false,
  entities: ["src/entities/**/*.ts"],
  dropSchema: false,
  migrationsRun: true,
  logger: "debug",
  migrations: [join(__dirname, "src/migration/**/*.ts")],
};

export { connectionOptions };
