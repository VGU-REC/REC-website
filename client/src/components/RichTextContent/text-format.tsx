import { Icon } from "components";
import { Editor } from "slate";
import { useSlate } from "slate-react";
import { IconType } from "types";

/**
 * Marks
 */

type MarkFormatType =
  | "bold"
  | "italic"
  | "underline"
  | "strike"
  | "sub"
  | "super";

export const MarkButton = ({
  format,
  icon,
}: {
  format: MarkFormatType;
  icon: IconType;
}) => {
  const editor = useSlate();
  const active = isMarkActive(editor, format);

  return (
    <button
      className={`w-7 h-7 my-2 mx-[1px] rounded flex justify-center items-center ${
        active
          ? "text-orange-700 bg-orange-100"
          : "text-gray-600 bg-transparent"
      }`}
      onMouseDown={(e) => {
        e.preventDefault();
        toggleMark(editor, format);
      }}
    >
      <Icon className="text-xl">{icon}</Icon>
    </button>
  );
};

const isMarkActive = (editor: Editor, format: MarkFormatType) => {
  const marks = Editor.marks(editor);
  return format !== "sub" && format !== "super"
    ? marks?.[format]
    : marks?.align === format;
};

export const toggleMark = (editor: Editor, format: MarkFormatType) => {
  const isActive = isMarkActive(editor, format);

  if (format === "sub" || format === "super") {
    if (isActive) {
      Editor.removeMark(editor, "align");
    } else {
      Editor.addMark(editor, "align", format);
    }
    return;
  }

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

/**
 * Font
 */

export const FontSelect = () => {
  return null;
};

export const FontSizeInput = () => {
  return null;
};

/**
 * Colors
 */

type ColorFormatType = "color" | "bgColor";

export const ColorPicker = ({
  format,
  icon,
}: {
  format: ColorFormatType;
  icon: IconType;
}) => {
  return null;
};
