import { EntitySchema } from "typeorm";
import { AchievementEntity } from "./achievement";
import { RecEventEntity, WorkshopEntity } from "./activity";
import { BlogEntity } from "./blog";
import { UserEntity } from "./user";

export const EntityCollection = {
  achievement: AchievementEntity,
  // users: UserEntity,
  blog: BlogEntity,
  "rec-event": RecEventEntity,
  "work-shop": WorkshopEntity,
};
