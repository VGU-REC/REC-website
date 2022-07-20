import { SerializedRichText } from "./SerializedRichText";

export interface RecEvent {
  id: string;
  title: string;
  description: SerializedRichText;
  imagePaths: string[];
  date: Date;
}

export interface Workshop {
  host: string;
  info: RecEvent;
}
