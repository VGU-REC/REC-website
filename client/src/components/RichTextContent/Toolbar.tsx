import { FC } from "react";
import {
  FontSelect,
  FontSizeInput,
  MarkButton,
  ColorPicker,
} from "./text-format";
import { Tooltip } from "./Tooltip";

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

      <ColorPicker format="color" icon="format_color_text" />
      <ColorPicker format="bgColor" icon="format_color_fill" />
    </div>
  );
};

export { Toolbar };
