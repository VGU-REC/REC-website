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

// console.log(process.env);
export const AppDataSource = new DataSource({
  type: "postgres",
  ssl: { rejectUnauthorized: false },
  host: "ec2-44-208-88-195.compute-1.amazonaws.com",
  port: 5432,
  username: "msrnyrcrtepjcg",
  url: "postgres://msrnyrcrtepjcg:d220e6c90861a65b991a0071fb15492ef4f4b3a36b41bbb8912d04500b127bb8@ec2-44-208-88-195.compute-1.amazonaws.com:5432/d1dc6biupeiske",
  password: "d220e6c90861a65b991a0071fb15492ef4f4b3a36b41bbb8912d04500b127bb8",
  database: "d1dc6biupeiske",
  logging: false,
  synchronize: false, //in development and debug ok but not for production!!
  entities: [
    AchievementEntity,
    RecEventEntity,
    WorkshopEntity,
    UserEntity,
    BlogEntity,
  ],
});
export const dataSource = AppDataSource.initialize();
