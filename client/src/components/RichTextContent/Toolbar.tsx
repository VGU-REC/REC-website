import { FC } from "react";
import {
  FontSelect,
  FontSizeInput,
  MarkButton,
  ColorPicker,
} from "./text-format";

const Toolbar: FC = () => {
  return (
    <div className="border-b-2 flex items-center">
      <FontSelect />
      <FontSizeInput />

      <MarkButton format="bold" icon="format_bold" />
      <MarkButton format="italic" icon="format_italic" />
      <MarkButton format="underline" icon="format_underlined" />
      <MarkButton format="strike" icon="strikethrough_s" />
      <MarkButton format="sub" icon="subscript" />
      <MarkButton format="super" icon="superscript" />

      <ColorPicker format="color" icon="format_color_text" />
      <ColorPicker format="bgColor" icon="format_color_fill" />
    </div>
  );
};

export { Toolbar };
