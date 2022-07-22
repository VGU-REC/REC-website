import {
  Achievement,
  Workshop,
  RecEvent,
  Blog,
  ProjectIdea,
  RecruitingProject,
  PastProject,
  User,
} from "./types";

export type Database = {
  achievement: Achievement,
  users: User,
  blog: Blog,
  "rec-event": RecEvent,
  "work-shop": Workshop,
};
export type DataType = keyof Database;
export type Data<T extends DataType> = Database[T];
const hello : Data<"achievement"> 