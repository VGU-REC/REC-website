import { DataSource } from "typeorm";
import "reflect-metadata";
import {
  RecEventEntity,
  AchievementEntity,
  BlogEntity,
  WorkshopEntity,
  UserEntity,
} from "../api/entities";
// import * as dotenv from "dotenv";
import "dotenv/config";
// import { createUser } from "../api/models/users";
// export const AppDataSource = new DataSource({
//   type: "postgres",
//   host: "localhost",
//   port: 5432,
//   username: "postgres",
//   password: "1234",
//   database: "recweb",
//   logging: true,
//   synchronize: true, //in development and debug ok but not for production!!
//   entities: [
//     AchievementEntity,
//     RecEventEntity,
//     WorkshopEntity,
//     UserEntity,
//     BlogEntity,
//   ],
// });
export const AppDataSource = new DataSource({
  type: "postgres",
  ssl: { rejectUnauthorized: false },
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT as string),
  username: process.env.DB_USERNAME,
  url: process.env.DB_URL,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: false,
  dropSchema: false, // cái này dùng để chỉnh sữa lại database schema
  synchronize: true, //in development and debug ok but not for production!!
  entities: [
    AchievementEntity,
    RecEventEntity,
    WorkshopEntity,
    UserEntity,
    BlogEntity,
  ],
});
export const dataSource = AppDataSource.initialize();
