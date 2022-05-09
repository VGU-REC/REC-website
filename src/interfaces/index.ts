// User
interface User {
  email: string;
  role: UserRole;
}

type UserRole = "GUEST" | "MEMBER" | "ADMIN";

// Activity
interface RecEvent {
  id: string;
  title: string;
  description: string;
  imagePaths: string[];
  date: Date;
}

interface Workshop {
  id: string;
  title: string;
  host: string;
  description: string;
  imagePaths: string[];
  date: Date;
}

// Blog
interface Blog {
  id: string;
  title: string;
  content: string;
  author: string;
  date: Date;
}

// Project
interface ProjectIdea {
  id: string;
  topic: string;
  description: string;
}

interface RecruitingProject {
  id: string;
  host: User;
  hostFacebook: string;
  hostPhoneNumber: string;
  aboutSelf: string;
  description: string;
  totalMember: number;
  isPending: boolean;
}

interface PastProject {
  id: string;
  title: string;
  author: string;
  content: string;
  date: Date;
}

// Achievement
interface Achievement {
  id: string;
  title: string;
  imagePath: string;
  date: Date;
}

// Helper types
type _Db = {
  ["user"]: User;
  ["event"]: RecEvent;
  ["workshop"]: Workshop;
  ["blog"]: Blog;
  ["project-idea"]: ProjectIdea;
  ["recruiting-project"]: RecruitingProject;
  ["past-project"]: PastProject;
  ["achievement"]: Achievement;
};

type DbCollection = keyof _Db;
type DbDoc<T extends DbCollection> = _Db[T];

type OmitId<T extends DbDoc<DbCollection>> = Omit<
  T,
  T extends User ? "email" : "id"
>;

export type {
  User,
  UserRole,
  RecEvent,
  Workshop,
  Blog,
  ProjectIdea,
  RecruitingProject,
  PastProject,
  Achievement,
  DbCollection,
  DbDoc,
  OmitId,
};
