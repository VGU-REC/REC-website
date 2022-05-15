// User
export interface User {
  id: string;
  role: UserRole;
}

export type UserRole = "GUEST" | "MEMBER" | "ADMIN";

// Activity
export interface RecEvent {
  id: string;
  title: string;
  description: RichText;
  imagePaths: string[];
  date: Date;
}

export interface Workshop {
  id: string;
  title: string;
  host: string;
  description: RichText;
  imagePaths: string[];
  date: Date;
}

// Blog
export interface Blog {
  id: string;
  title: string;
  content: RichText;
  author: string;
  dateWritten: Date;
}

// Project
export interface ProjectIdea {
  id: string;
  topic: string;
  description: RichText;
}

export interface RecruitingProject {
  id: string;
  host: User;
  hostFacebook: string;
  hostPhoneNumber: string;
  aboutSelf: RichText;
  description: RichText;
  totalMember: number;
  isPending: boolean;
}

export interface PastProject {
  id: string;
  title: string;
  author: string;
  content: RichText;
  dateWritten: Date;
}

// Achievement
export interface Achievement {
  id: string;
  title: string;
  imagePath: string;
  date: Date;
}

// RichText
export type RichText = object;

// Database
type Database = {
  ["user"]: User;
  ["event"]: RecEvent;
  ["workshop"]: Workshop;
  ["blog"]: Blog;
  ["project-idea"]: ProjectIdea;
  ["recruiting-project"]: RecruitingProject;
  ["past-project"]: PastProject;
  ["achievement"]: Achievement;
};

export type DataType = keyof Database;
export type Data<T extends DataType> = Database[T];
export type OmitId<T extends Data<DataType>> = T extends any
  ? Omit<T, "id">
  : never;

export interface DataBatchReader<T extends DataType> {
  readonly type: T;
  getCount(): Promise<number>;
  next(count: number): Promise<Data<T>[]>;
  previous(count: number): Promise<Data<T>[]>;
}