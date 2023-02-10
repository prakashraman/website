import React from "react";
import Message from "./Message";

export interface RightPanelProps {
  classNames: string;
}

const RightPanel: React.FC<RightPanelProps> = ({ classNames }) => {
  return (
    <div
      className={[
        "absolute right-0 top-0 h-full w-[300px] overflow-hidden border-l border-line pt-[40px] pl-7 pr-7",
        classNames,
      ].join(" ")}
    >
      <div className="absolute bottom-0 left-0 h-[500px] w-full bg-gradient-to-b from-transparent to-main"></div>
      {Array.from({ length: 50 }, (_, i) => (
        <Message key={`message-${i}`} />
      ))}
    </div>
  );
};

export default RightPanel;
