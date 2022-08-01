import { FC, ReactNode } from "react";
import {
  FontSelect,
  FontSizeInput,
  MarkButton,
  ColorPickerButton,
} from "./text-format";

const Toolbar: FC = () => {
  return (
    <div className="border-b-2 flex items-center">
      <FontSelect />
      <FontSizeInput />

      <MarkButton format="bold" icon="format_bold">
        Bold (Ctrl+B)
      </MarkButton>
      <MarkButton format="italic" icon="format_italic">
        Italic (Ctrl+I)
      </MarkButton>
      <MarkButton format="underline" icon="format_underlined">
        Underline (Ctrl+U)
      </MarkButton>
      <MarkButton format="strike" icon="strikethrough_s">
        Strikethrough (Alt+Shift+5)
      </MarkButton>
      <MarkButton format="sub" icon="subscript">
        Subscript (Ctrl+,)
      </MarkButton>
      <MarkButton format="super" icon="superscript">
        Superscript (Ctrl+.)
      </MarkButton>

      <ColorPickerButton format="color" icon="format_color_text">
        Text color
      </ColorPickerButton>
      <ColorPickerButton format="bgColor" icon="border_color">
        Highlight color
      </ColorPickerButton>
    </div>
  );
};

export const Tooltip: FC<{
  display: ReactNode;
  children: ReactNode;
}> = ({ display, children }) => {
  return (
    <span className="relative group">
      {children}
      <div className="absolute top-7 left-1/2 -translate-x-1/2 z-10 hidden group-hover:block drop-shadow-md">
        <div className="relative left-1/2 -translate-x-1/2 w-0 h-0 m-0 border-8 border-x-transparent border-t-transparent border-b-gray-900" />
        <div className="p-2 min-w-max text-xs font-bold text-white bg-gray-900 rounded">
          {display}
        </div>
      </div>
    </span>
  );
};

export { Toolbar };
