import { FC, ReactNode } from "react";

interface Props {
  display: ReactNode;
  children: ReactNode;
}

const Tooltip: FC<Props> = ({ display, children }) => {
  return (
    <span className="relative group">
      {children}
      <div className="absolute top-7 left-1/2 -translate-x-1/2 z-50 hidden group-hover:block">
        <div className="relative left-1/2 -translate-x-1/2 w-0 h-0 m-0 border-8 border-x-transparent border-t-transparent border-b-gray-900" />
        <div className="p-2 min-w-max text-xs font-bold text-white bg-gray-900 rounded shadow-md">
          {display}
        </div>
      </div>
    </span>
  );
};

export { Tooltip };
