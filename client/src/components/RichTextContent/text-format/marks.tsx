import { Icon, IconType } from "components";
import { Editor } from "slate";
import { useSlate } from "slate-react";

export type MarkFormatType =
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
      className={`toolbar-btn ${
        active
          ? "text-orange-700 bg-orange-100"
          : "text-gray-600 bg-transparent"
      }`}
      onMouseDown={() => toggleMark(editor, format)}
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
