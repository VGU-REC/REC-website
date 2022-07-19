import { BaseEditor, Descendant } from "slate";
import { HistoryEditor } from "slate-history";
import { ReactEditor } from "slate-react";

export type ParagraphElement = {
  type: "paragraph";
  children: Descendant[];
};

type CustomElement = ParagraphElement;

export type VoidChildren = [{ text: "" }];

export type CustomText = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  mode?: "superscript" | "subscript";
  font?: string;
  fontSize?: number;
  textColor?: string;
  highlightColor?: string;
};

export type CustomEditor = BaseEditor & ReactEditor & HistoryEditor;

declare module "slate" {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
