import { Icon, IconType } from "components";
import { ReactNode } from "react";
import { Editor } from "slate";
import { useSlate } from "slate-react";
import { Tooltip } from "..";

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
  children,
}: {
  format: MarkFormatType;
  icon: IconType;
  children: ReactNode;
}) => {
  const editor = useSlate();
  const active = isMarkActive(editor, format);

  return (
    <Tooltip display={children}>
      <button
        className={`toolbar-btn ${active ? "active" : ""}`}
        onClick={() => toggleMark(editor, format)}
      >
        <Icon className="text-xl">{icon}</Icon>
      </button>
    </Tooltip>
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
