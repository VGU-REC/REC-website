import { FC, TextareaHTMLAttributes, useMemo } from "react";
import { SerializedRichText } from "types";
import { createEditor, Descendant } from "slate";
import { Editable, Slate, withReact } from "slate-react";
import { withHistory } from "slate-history";
import { deserializeRichText } from "helpers";

interface Props {
  serializedContent?: SerializedRichText;
  canEdit?: boolean;
}

const RichTextContent: FC<
  Props & Omit<TextareaHTMLAttributes<HTMLDivElement>, "readOnly">
> = ({ serializedContent, canEdit, ...attributes }) => {
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
              textColor: "red",
            },
          ],
        },
      ]
    );
  }, [serializedContent]);

  return (
    <Slate
      editor={editor}
      value={content}
      onChange={(v) => console.log(JSON.stringify(v))}
    >
      <Editable readOnly={!canEdit} {...attributes} />
    </Slate>
  );
};

export { RichTextContent };
