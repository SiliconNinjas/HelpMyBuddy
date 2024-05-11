import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT ?? 8000;

export const JWT_SECRET = process.env.JWT_SECRET ?? "";

export const DOCKER_USERNAME = process.env.DOCKER_USERNAME ?? "";
export const DOCKER_PASSWORD = process.env.DOCKER_PASSWORD ?? "";

export const DATABASE_HOST = process.env.DATABASE_HOST ?? "";
export const DATABASE_USER = process.env.DATABASE_USER ?? "";
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD ?? "";
export const DATABASE_NAME = process.env.DATABASE_NAME ?? "";
