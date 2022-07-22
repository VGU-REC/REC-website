import { SerializedRichText } from "./SerializedRichText";

export interface Blog {
  id?: string;
  title: string;
  content: SerializedRichText;
  author: string;
  dateWritten: Date;
}
