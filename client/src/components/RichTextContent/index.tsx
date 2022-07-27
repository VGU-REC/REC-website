import {
  FC,
  KeyboardEventHandler,
  TextareaHTMLAttributes,
  useMemo,
} from "react";
import { SerializedRichText } from "types";
import { createEditor, Descendant } from "slate";
import { Editable, RenderLeafProps, Slate, withReact } from "slate-react";
import { withHistory } from "slate-history";
import { deserializeRichText } from "helpers";
import { Toolbar } from "./Toolbar";
import { MarkFormatType, toggleMark } from "./Toolbar/text-format";
import {
  DEFAULT_BACKGROUND_COLOR,
  DEFAULT_FONT,
  DEFAULT_FONT_SIZE,
  DEFAULT_TEXT_COLOR,
} from "./default-formatting";

const HOT_KEY_TO_MARK_MAP: { [k: string]: MarkFormatType | undefined } = {
  "Ctrl+b": "bold",
  "Ctrl+i": "italic",
  "Ctrl+u": "underline",
  "Alt+Shift+%": "strike",
  "Ctrl+.": "super",
  "Ctrl+,": "sub",
};

type Props = {
  serializedContent?: SerializedRichText;
  canEdit?: boolean;
} & Omit<TextareaHTMLAttributes<HTMLDivElement>, "readOnly" | "onKeyDown">;

const RichTextContent: FC<Props> = ({
  serializedContent,
  canEdit,
  ...attributes
}) => {
  const editor = useMemo(() => withReact(withHistory(createEditor())), []);
  const content = useMemo<Descendant[]>(() => {
    if (!serializedContent) {
      return [{ type: "paragraph", children: [{ text: "" }] }]; // empty rich text editor
    }

    return (
      deserializeRichText(serializedContent) ?? [
        {
          type: "paragraph",
          children: [
            {
              text: "Uh oh! The serialized rich text data seems to be corrupted...",
              bold: true,
              color: "#ff0000",
              font: "Courier New",
              size: 13,
            },
          ],
        },
      ]
    );
  }, [serializedContent]);

  const hotKeyHandler: KeyboardEventHandler<HTMLDivElement> = (e) => {
    const hotKey =
      (e.ctrlKey ? "Ctrl+" : "") +
      (e.altKey ? "Alt+" : "") +
      (e.shiftKey ? "Shift+" : "") +
      e.key;

    const mark = HOT_KEY_TO_MARK_MAP[hotKey];
    if (mark) {
      e.preventDefault();
      toggleMark(editor, mark);
    }
  };

  return (
    <Slate
      editor={editor}
      value={content}
      onChange={(v) => console.log(JSON.stringify(v))}
    >
      {canEdit && <Toolbar />}
      <Editable
        readOnly={!canEdit}
        renderLeaf={renderLeaf}
        onKeyDown={hotKeyHandler}
        {...attributes}
      />
    </Slate>
  );
};

const renderLeaf = ({
  attributes,
  children,
  leaf: { bold, italic, underline, strike, align, font, size, color, bgColor },
}: RenderLeafProps): JSX.Element => {
  switch (align) {
    case "super":
      children = <sup style={{ verticalAlign: "super" }}>{children}</sup>;
      break;
    case "sub":
      children = <sub style={{ verticalAlign: "sub" }}>{children}</sub>;
      break;
  }

  return (
    <span
      {...attributes}
      style={{
        fontWeight: bold ? "bold" : "normal",
        fontStyle: italic ? "italic" : "normal",
        textDecoration:
          underline || strike
            ? `${underline ? "underline" : ""} ${strike ? "line-through" : ""}`
            : "none",
        fontFamily: font ?? DEFAULT_FONT,
        fontSize: `${size ?? DEFAULT_FONT_SIZE}pt`,
        color: color ?? DEFAULT_TEXT_COLOR,
        backgroundColor: bgColor ?? DEFAULT_BACKGROUND_COLOR,
      }}
    >
      {children}
    </span>
  );
};

export { RichTextContent };
