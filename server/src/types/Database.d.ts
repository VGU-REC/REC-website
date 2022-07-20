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

export type Database =
  | Achievement
  | Workshop
  | RecEvent
  | Blog
  | ProjectIdea
  | RecruitingProject
  | PastProject
  | User;
