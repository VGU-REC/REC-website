import { SerializedRichText } from "./SerializedRichText";

export interface ProjectIdea {
  id?: string;
  topic: string;
  description: SerializedRichText;
}

export interface RecruitingProject {
  id?: string;
  host: User;
  hostFacebook: string;
  hostPhoneNumber: string;
  aboutSelf: SerializedRichText;
  description: SerializedRichText;
  totalMember: number;
  isPending: boolean;
}

export interface PastProject {
  id?: string;
  title: string;
  author: string;
  content: SerializedRichText;
  dateWritten: Date;
}
