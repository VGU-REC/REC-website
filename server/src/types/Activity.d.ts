import { SerializedRichText } from "./SerializedRichText";

export interface RecEvent {
  id?: string;
  title: string;
  description: SerializedRichText;
  imagePaths: string[];
  date: Date;
}

export interface Workshop extends RecEvent {
  host: string;
}
