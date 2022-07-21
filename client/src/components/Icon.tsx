import { FC, HTMLAttributes } from "react";
import { IconType } from "types";

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
