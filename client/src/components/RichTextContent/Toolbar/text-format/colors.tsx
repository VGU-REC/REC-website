import { Icon, IconType } from "components";
import {
  createContext,
  ReactNode,
  RefObject,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Editor } from "slate";
import { DEFAULT_TEXT_COLOR } from "../../default-formatting";
import { Tooltip } from "..";
import { rgbLuminance } from "helpers";
import { useSlate } from "slate-react";

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
  const context = useActiveColor(format);

  return (
    <ActiveColorContext.Provider value={context}>
      <Tooltip display={children}>
        <button
          className={`toolbar-btn relative ${showing ? "active" : ""}`}
          onClick={() => setShowing(true)}
        >
          <Icon className={`format-${format}-icon`}>{icon}</Icon>

          <div
            className="absolute w-5 h-1 bottom-[3px]"
            style={{ backgroundColor: context.activeColor ?? "transparent" }}
          />
        </button>
      </Tooltip>

      {showing && (
        <ColorPicker
          onClose={() => setShowing(false)}
          includeTransparency={format === "bgColor"}
        />
      )}
    </ActiveColorContext.Provider>
  );
};

const ColorPicker = ({
  onClose,
  includeTransparency,
}: {
  onClose: () => void;
  includeTransparency: boolean;
}) => {
  const pickerRef = useRef<HTMLDivElement>(null);
  const { customColors } = useContext(CustomColorsContext)!;
  const { setActiveColor } = useContext(ActiveColorContext)!;

  useEffect(() => {
    pickerRef.current!.focus();
  }, []);

  return (
    <div
      className="relative z-20"
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          e.preventDefault();
          onClose();
        }
      }}
    >
      <div className="fixed top-0 bottom-0 left-0 right-0" onClick={onClose} />

      <div className="color-picker top-3 -left-7" ref={pickerRef} tabIndex={-1}>
        <CustomColorInput pickerRef={pickerRef} />
        <ColorPalette
          colors={customColors}
          renderLabel={(color) => (
            <>
              Custom color <code>[{color}]</code>
            </>
          )}
        />

        <hr className="my-3 border-gray-300" />

        <ColorPalette
          colors={DEFAULT_COLOR_PALETTE}
          renderLabel={(color, idx) => (
            <>
              {DEFAULT_COLOR_NAMES[idx]} <code>[{color}]</code>
            </>
          )}
        />

        {includeTransparency && (
          <button
            className="border border-gray-300 text-gray-700 rounded-full flex items-center justify-center w-full mt-3
              bg-white hover:bg-gray-100 active:bg-gray-200"
            onClick={() => setActiveColor(null)}
          >
            <Icon className="text-base" children="format_color_reset" />
            <span className="text-sm ml-0.5">None</span>
          </button>
        )}
      </div>
    </div>
  );
};

const CustomColorInput = ({
  pickerRef,
}: {
  pickerRef: RefObject<HTMLDivElement>;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [colorToAdd, setColorToAdd] = useState<string | null>(null);
  const { activeColor } = useContext(ActiveColorContext)!;
  const { addCustomColor } = useContext(CustomColorsContext)!;

  return (
    <div className="flex">
      <span className="text-sm uppercase font-mono font-bold text-gray-700 mr-2 relative top-0.5">
        Custom colors
      </span>

      <span className="ml-auto">
        {colorToAdd && (
          <ColorTooltip
            display={
              <>
                Add to color palette <code>[{colorToAdd}]</code>
              </>
            }
          >
            <button
              className="w-5 h-5 rounded-full inline-flex items-center justify-center border border-gray-200 mr-1 relative -top-1"
              style={{ backgroundColor: colorToAdd }}
              onClick={() => {
                const existing = pickerRef.current!.querySelector(
                  `.slot[data-color="${colorToAdd}"]`
                );
                if (existing) {
                  existing.classList.add("highlighted");
                  setTimeout(
                    () => existing.classList.remove("highlighted"),
                    1500
                  );
                } else {
                  addCustomColor(colorToAdd);
                }
                setColorToAdd(null);
              }}
            >
              <Icon
                children="add"
                className={`text-sm ${
                  rgbLuminance(colorToAdd) >= 0.5 ? "text-black" : "text-white"
                }`}
              />
            </button>
          </ColorTooltip>
        )}

        <ColorTooltip display="Choose a color">
          <button className="w-5 h-5 rounded-full">
            <Icon
              children="palette"
              className="text-yellow-700 hover:text-yellow-800"
              onClick={() => inputRef.current!.click()}
            />
          </button>
        </ColorTooltip>
      </span>

      <input
        type="color"
        className="w-0 invisible"
        ref={inputRef}
        value={colorToAdd ?? activeColor!}
        onChange={(e) => setColorToAdd(e.target.value)}
      />
    </div>
  );
};

const ColorPalette = ({
  colors,
  renderLabel,
}: {
  colors: string[];
  renderLabel: (color: string, index: number) => ReactNode;
}) => {
  const { activeColor, setActiveColor } = useContext(ActiveColorContext)!;

  return (
    <div className="color-palette">
      {colors.map((color, index) => (
        <ColorTooltip key={color} display={renderLabel(color, index)}>
          <button
            className="slot"
            style={{ backgroundColor: color }}
            onClick={() => setActiveColor(color)}
            data-color={color}
          >
            {color === activeColor && (
              <Icon
                children="check"
                className={`text-base ${
                  rgbLuminance(color) >= 0.5 ? "text-black" : "text-white"
                }`}
              />
            )}
          </button>
        </ColorTooltip>
      ))}
    </div>
  );
};

const ColorTooltip = ({
  display,
  children,
}: {
  display: ReactNode;
  children: ReactNode;
}) => {
  return (
    <span className="relative group">
      {children}
      <div
        className="absolute top-5 left-5 z-10 hidden group-hover:block
        px-2 py-1 min-w-max text-xs text-gray-100 bg-gray-900 rounded border-gray-300 border shadow"
      >
        {display}
      </div>
    </span>
  );
};

/**
 * Hook
 */

const useActiveColor = (type: ColorFormatType): ActiveColorContextType => {
  const editor = useSlate();
  const marks = Editor.marks(editor);

  const activeColor =
    marks?.[type] ?? (type === "color" ? DEFAULT_TEXT_COLOR : null);

  const setActiveColor = useCallback(
    (value: string | null) => {
      if (value === activeColor) return;

      if (value) {
        Editor.addMark(editor, type, value);
      } else {
        Editor.removeMark(editor, type);
      }
    },
    [activeColor, editor, type]
  );

  return useMemo(
    () => ({ activeColor, setActiveColor }),
    [activeColor, setActiveColor]
  );
};

/**
 * Contexts
 */

type ActiveColorContextType = {
  activeColor: string | null;
  setActiveColor: (value: string | null) => void;
};

const ActiveColorContext = createContext<ActiveColorContextType | null>(null);

type CustomColorsContextType = {
  customColors: string[];
  addCustomColor: (value: string) => void;
};

const CustomColorsContext = createContext<CustomColorsContextType | null>(null);

export const CustomColorsContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [customColors, setCustomColors] = useState<string[]>([]);
  const addCustomColor = useCallback(
    (value: string) => setCustomColors((prev) => [...prev, value]),
    []
  );
  const value = useMemo(
    () => ({ customColors, addCustomColor }),
    [customColors, addCustomColor]
  );

  return (
    <CustomColorsContext.Provider value={value}>
      {children}
    </CustomColorsContext.Provider>
  );
};

/**
 * Default color palette
 */

// prettier-ignore
const DEFAULT_COLOR_NAMES = [
  "black", "dark gray 4", "dark gray 3", "dark gray 2", "dark gray 1", "gray", "light gray 1", "light gray 2", "light gray 3", "white",
  ...(
    [
      ["", [""]],
      ["light ", [" 3", " 2", " 1"]],
      ["dark ", [" 1", " 2", " 3"]],
    ] as [string, string[]][]
  ).flatMap(([prefix, suffixes]) =>
    suffixes.flatMap((suffix) => [
        "red berry", "red", "orange", "yellow", "green", "cyan", "cornflower blue", "blue", "purple", "magenta"
      ].map((color) => prefix + color + suffix)
    )
  ),
];

// prettier-ignore
const DEFAULT_COLOR_PALETTE = [
  "#000000", "#434343", "#666666", "#999999", "#b7b7b7", "#cccccc", "#d9d9d9", "#efefef", "#f3f3f3", "#ffffff",
  "#980000", "#ff0000", "#ff9900", "#ffff00", "#00ff00", "#00ffff", "#4a86e8", "#0000ff", "#9900ff", "#ff00ff",
  "#e6b8af", "#f4cccc", "#fce5cd", "#fff2cc", "#d9ead3", "#d0e0e3", "#c9daf8", "#cfe2f3", "#d9d2e9", "#ead1dc",
  "#dd7e6b", "#ea9999", "#f9cb9c", "#ffe599", "#b6d7a8", "#a2c4c9", "#a4c2f4", "#9fc5e8", "#b4a7d6", "#d5a6bd",
  "#cc4125", "#e06666", "#f6b26b", "#ffd966", "#93c47d", "#76a5af", "#6d9eeb", "#6fa8dc", "#8e7cc3", "#c27ba0",
  "#a61c00", "#cc0000", "#e69138", "#f1c232", "#6aa84f", "#45818e", "#3c78d8", "#3d85c6", "#674ea7", "#a64d79",
  "#85200c", "#990000", "#b45f06", "#bf9000", "#38761d", "#134f5c", "#1155cc", "#0b5394", "#351c75", "#741b47",
  "#5b0f00", "#660000", "#783f04", "#7f6000", "#274e13", "#0c343d", "#1c4587", "#073763", "#20124d", "#4c1130",
];
