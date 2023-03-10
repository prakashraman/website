import React from "react";

/**
 * ======================== Component ========================
 */

const Message: React.FC = () => {
  return (
    <div className="mb-8">
      <div className="flex text-sm font-light text-gray-500">
        <p>@prakashraman</p>
        <p className="ml-5 text-xs">5h</p>
      </div>
      <p className="text-sm font-light">
        As the head of Application Development at Sentiance, my role encompasses
        both architectural
      </p>
    </div>
  );
};

export default Message;
