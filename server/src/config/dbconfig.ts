import { DataSource } from "typeorm";
import { AchievementEntity } from "../api/entities/achievement";
import "reflect-metadata";
import { RecEventEntity, WorkshopEntity } from "../api/entities/activity";
import { UserEntity } from "../api/entities/user";
import { BlogEntity } from "../api/entities/blog";
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1234",
  database: "recweb",
  logging: false,
  synchronize: true, //in development and debug ok but not for production!!
  entities: [AchievementEntity, RecEventEntity, WorkshopEntity, UserEntity, BlogEntity],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
console.log("hello");
