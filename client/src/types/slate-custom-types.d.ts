import { BaseEditor, Descendant } from "slate";
import { HistoryEditor } from "slate-history";
import { ReactEditor } from "slate-react";
import { Property } from "csstype";

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
  strike?: boolean;
  align?: "super" | "sub";
  font?: Property.FontFamily;
  size?: number;
  color?: Property.Color;
  bgColor?: Property.BackgroundColor;
};

export type CustomEditor = BaseEditor & ReactEditor & HistoryEditor;

declare module "slate" {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
