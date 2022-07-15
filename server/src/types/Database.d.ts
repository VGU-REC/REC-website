import { Achievement, RecEvent } from "../../types";
import { Workshop } from "./Activity";
import { Blog } from "./Blog";
import { PastProject, ProjectIdea, RecruitingProject } from "./Project";

type Database = {
  ["achievement"]: Achievement,
  ["rec-event"]: RecEvent,
  ["work-shop"]: Workshop,
  ["blog"]: Blog,
  ["project-idea"]: ProjectIdea,
  ["recruiting-project"]: RecruitingProject,
  ["past-project"]: PastProject
}

type DataType = keyof Database;