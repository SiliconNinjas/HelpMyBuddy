import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT ?? 8000;

export const JWT_SECRET = "ThisIsTheSecret";

export const DOCKER_USERNAME = process.env.DOCKER_USERNAME ?? "";
export const DOCKER_PASSWORD = process.env.DOCKER_PASSWORD ?? "";

export const DATABASE_HOST =
  "database-1.c7koq4k4amjq.ap-south-1.rds.amazonaws.com";
export const DATABASE_USER = "helpmybuddyuser";
export const DATABASE_PASSWORD = "weWillwin100";
export const DATABASE_NAME = "helpmybuddydatabase";
