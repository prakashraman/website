import React from "react";
import Message from "./message";

export interface RightPanelProps {}

const RightPanel: React.FC<RightPanelProps> = () => {
  return (
    <div className="absolute right-0 top-0 h-full w-[300px] overflow-hidden border-l border-line pt-[40px] pl-7 pr-7">
      <div className="absolute bottom-0 left-0 h-[500px] w-full bg-gradient-to-b from-transparent to-main"></div>
      {Array.from({ length: 50 }, (_, i) => (
        <Message key={`message-${i}`} />
      ))}
    </div>
  );
};

export default RightPanel;
