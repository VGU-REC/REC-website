import { Descendant, Element } from "slate";
import { SerializedRichText } from "types";

export function serializeRichText(value: Descendant[]): SerializedRichText {
  return JSON.stringify(value);
}

export function deserializeRichText(
  value: SerializedRichText
): Descendant[] | null {
  try {
    const content = JSON.parse(value);
    if (!Element.isElementList(content) || !content.length) return null;
    return content;
  } catch {
    return null;
  }
}
