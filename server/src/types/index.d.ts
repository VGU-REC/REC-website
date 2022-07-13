export type SerializedRichText = string;

export interface User {
  id: string;
  role: UserRole;
}

export type UserRole = "GUEST" | "MEMBER" | "ADMIN";

export interface RecEvent {
  id: string;
  title: string;
  description: SerializedRichText;
  imagePaths: string[];
  date: Date;
}

export interface Workshop {
  id: string;
  title: string;
  host: string;
  description: SerializedRichText;
  imagePaths: string[];
  date: Date;
}

export interface Blog {
  id: string;
  title: string;
  content: SerializedRichText;
  author: string;
  dateWritten: Date;
}

export interface ProjectIdea {
  id: string;
  topic: string;
  description: SerializedRichText;
}

export interface RecruitingProject {
  id: string;
  host: User;
  hostFacebook: string;
  hostPhoneNumber: string;
  aboutSelf: SerializedRichText;
  description: SerializedRichText;
  totalMember: number;
  isPending: boolean;
}

export interface PastProject {
  id: string;
  title: string;
  author: string;
  content: SerializedRichText;
  dateWritten: Date;
}

export interface Achievement {
  id: string;
  title: string;
  imagePath: string;
  date: Date;
}
