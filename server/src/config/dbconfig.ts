import { DataSource } from "typeorm";
import { AchievementEntity } from "../api/entities/achievement";
import "reflect-metadata";
import { RecEventEntity, WorkshopEntity } from "../api/entities/activity";
import { BlogEntity } from "../api/entities/blog";
import { createSecureServer } from "http2";
import { Achievement, User } from "../types";
import { createConnection } from "net";
import { UserEntity } from "../api/entities/user";
// import { createUser } from "../api/models/users";
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1234",
  database: "recweb",
  logging: true,
  synchronize: true, //in development and debug ok but not for production!!
  entities: [
    AchievementEntity,
    RecEventEntity,
    WorkshopEntity,
    UserEntity,
    BlogEntity,
  ],
});
const stupidData = {
  date: new Date(2022, 4, 25),
  imagePath: "hoho",
  string: "hehe",
  title: "aloha",
};
export const dataSource = AppDataSource.initialize();
