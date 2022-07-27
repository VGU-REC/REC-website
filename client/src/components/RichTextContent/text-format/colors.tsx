import { Icon, IconType } from "components";
import { ReactNode, useState } from "react";
import { Editor } from "slate";
import {
  DEFAULT_BACKGROUND_COLOR,
  DEFAULT_TEXT_COLOR,
} from "../default-formatting";
import { Tooltip } from "../Toolbar";

type ColorFormatType = "color" | "bgColor";

export const ColorPickerButton = ({
  format,
  icon,
  children,
}: {
  format: ColorFormatType;
  icon: IconType;
  children: ReactNode;
}) => {
  const [showing, setShowing] = useState(false);

  return (
    <>
      <Tooltip display={children}>
        <button
          className={`toolbar-btn ${
            showing
              ? "text-orange-700 bg-orange-100"
              : "text-gray-600 bg-transparent"
          }`}
          onMouseDown={() => setShowing(true)}
        >
          <Icon className="text-xl">{icon}</Icon>
        </button>
      </Tooltip>

      {showing && <ColorPicker onClose={() => setShowing(false)} />}
    </>
  );
};

const ColorPicker = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="relative z-20">
      <div className="fixed top-0 bottom-0 left-0 right-0" onClick={onClose} />
      <div className="absolute grid grid-cols-10 gap-4">
        {DEFAULT_COLOR_PALETTE.map((color) => (
          <span
            key={color}
            className="w-5 h-5 rounded-full"
            style={{ backgroundColor: color }}
          ></span>
        ))}
      </div>
    </div>
  );
};

const getActiveColor = (editor: Editor, type: ColorFormatType) => {
  const marks = Editor.marks(editor);
  return (
    marks?.[type] ??
    (type === "color" ? DEFAULT_TEXT_COLOR : DEFAULT_BACKGROUND_COLOR)
  );
};

/**
 * Default color palette
 */

const DEFAULT_COLOR_NAMES = [
  "black",
  "dark gray 4",
  "dark gray 3",
  "dark gray 2",
  "dark gray 1",
  "gray",
  "light gray 1",
  "light gray 2",
  "light gray 3",
  "white",
  ...(
    [
      ["", [""]],
      ["light ", [" 3", " 2", " 1"]],
      ["dark ", [" 1", " 2", " 3"]],
    ] as [string, string[]][]
  ).flatMap(([prefix, suffixes]) =>
    suffixes.flatMap((suffix) =>
      [
        "red berry",
        "red",
        "orange",
        "yellow",
        "green",
        "cyan",
        "cornflower blue",
        "blue",
        "purple",
        "magenta",
      ].map((color) => prefix + color + suffix)
    )
  ),
];

const DEFAULT_COLOR_PALETTE = [
  "#000000",
  "#434343",
  "#666666",
  "#999999",
  "#b7b7b7",
  "#cccccc",
  "#d9d9d9",
  "#efefef",
  "#f3f3f3",
  "#ffffff",

  "#980000",
  "#ff0000",
  "#ff9900",
  "#ffff00",
  "#00ff00",
  "#00ffff",
  "#4a86e8",
  "#0000ff",
  "#9900ff",
  "#ff00ff",

  "#e6b8af",
  "#f4cccc",
  "#fce5cd",
  "#fff2cc",
  "#d9ead3",
  "#d0e0e3",
  "#c9daf8",
  "#cfe2f3",
  "#d9d2e9",
  "#ead1dc",

  "#dd7e6b",
  "#ea9999",
  "#f9cb9c",
  "#ffe599",
  "#b6d7a8",
  "#a2c4c9",
  "#a4c2f4",
  "#9fc5e8",
  "#b4a7d6",
  "#d5a6bd",

  "#cc4125",
  "#e06666",
  "#f6b26b",
  "#ffd966",
  "#93c47d",
  "#76a5af",
  "#6d9eeb",
  "#6fa8dc",
  "#8e7cc3",
  "#c27ba0",

  "#a61c00",
  "#cc0000",
  "#e69138",
  "#f1c232",
  "#6aa84f",
  "#45818e",
  "#3c78d8",
  "#3d85c6",
  "#674ea7",
  "#a64d79",

  "#85200c",
  "#990000",
  "#b45f06",
  "#bf9000",
  "#38761d",
  "#134f5c",
  "#1155cc",
  "#0b5394",
  "#351c75",
  "#741b47",

  "#5b0f00",
  "#660000",
  "#783f04",
  "#7f6000",
  "#274e13",
  "#0c343d",
  "#1c4587",
  "#073763",
  "#20124d",
  "#4c1130",
];
