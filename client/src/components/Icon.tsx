import { FC, HTMLAttributes } from "react";

export type IconType =
  | `format_${"bold" | "italic" | "underlined" | `color_${"text" | "fill"}`}`
  | "strikethrough_s"
  | "subscript"
  | "superscript";

type Props = {
  children: IconType;
} & Omit<HTMLAttributes<HTMLSpanElement>, "children">;

const Icon: FC<Props> = ({ children, className, ...attributes }) => {
  return (
    <span
      className={`material-symbols-outlined ${className ?? ""}`}
      {...attributes}
    >
      {children}
    </span>
  );
};

export { Icon };
