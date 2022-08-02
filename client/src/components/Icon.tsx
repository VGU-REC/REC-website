import { FC, HTMLAttributes } from "react";

export type IconType =
  | `format_${"bold" | "italic" | "underlined" | `color_${"text" | "reset"}`}`
  | "strikethrough_s"
  | "subscript"
  | "superscript"
  | "palette"
  | "border_color"
  | "check"
  | "add";

type Props = {
  children: IconType;
} & Omit<HTMLAttributes<HTMLSpanElement>, "children">;

const Icon: FC<Props> = ({ children, className, ...attributes }) => {
  return (
    <span
      className={`material-symbols-outlined select-none ${className ?? ""}`}
      {...attributes}
    >
      {children}
    </span>
  );
};

export { Icon };
