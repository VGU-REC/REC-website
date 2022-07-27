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

export function hexToRgb(hex: string) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function rgbLuminance(hex: string) {
  const { r, g, b } = hexToRgb(hex) ?? { r: 0, g: 0, b: 0 };
  return (r * 0.2126 + g * 0.7152 + b * 0.0722) / 255;
}
