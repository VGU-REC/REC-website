import { EntitySchema } from "typeorm";
import { AchievementEntity } from "./achievement";
import { RecEventEntity, WorkshopEntity } from "./activity";
import { BlogEntity } from "./blog";
import { UserEntity } from "./user";
export type EntityCollectionType = {
  achievement: EntitySchema;
  users: EntitySchema;
  blog: EntitySchema;
  "rec-event": EntitySchema;
  "work-shop": EntitySchema;
};
export const EntityCollection = {
  achievement: AchievementEntity,
  users: UserEntity,
  blog: BlogEntity,
  "rec-event": RecEventEntity,
  "work-shop": WorkshopEntity,
};
