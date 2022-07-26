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

      <Tooltip display="Bold (Ctrl+B)">
        <MarkButton format="bold" icon="format_bold" />
      </Tooltip>
      <Tooltip display="Italic (Ctrl+I)">
        <MarkButton format="italic" icon="format_italic" />
      </Tooltip>
      <Tooltip display="Underline (Ctrl+U)">
        <MarkButton format="underline" icon="format_underlined" />
      </Tooltip>
      <Tooltip display="Strikethrough (Alt+Shift+5)">
        <MarkButton format="strike" icon="strikethrough_s" />
      </Tooltip>
      <Tooltip display="Subscript (Ctrl+,)">
        <MarkButton format="sub" icon="subscript" />
      </Tooltip>
      <Tooltip display="Superscript (Ctrl+.)">
        <MarkButton format="super" icon="superscript" />
      </Tooltip>

      <Tooltip display="Text color">
        <ColorPickerButton format="color" icon="format_color_text" />
      </Tooltip>
      <Tooltip display="Highlight color">
        <ColorPickerButton format="bgColor" icon="border_color" />
      </Tooltip>
    </div>
  );
};

const Tooltip: FC<{
  display: ReactNode;
  children: ReactNode;
}> = ({ display, children }) => {
  return (
    <span className="relative group">
      {children}
      <div className="absolute top-7 left-1/2 -translate-x-1/2 z-10 hidden group-hover:block">
        <div className="relative left-1/2 -translate-x-1/2 w-0 h-0 m-0 border-8 border-x-transparent border-t-transparent border-b-gray-900" />
        <div className="p-2 min-w-max text-xs font-bold text-white bg-gray-900 rounded shadow-md">
          {display}
        </div>
      </div>
    </span>
  );
};

export { Toolbar };
