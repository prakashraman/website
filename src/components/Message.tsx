import React from "react";
import moment from "moment";

import { Tweet } from "@prisma/client";

/**
 * ======================== Component ========================
 */

interface MessageProps {
  tweet: Tweet;
}

const Message: React.FC<MessageProps> = ({ tweet }) => {
  return (
    <div className="mb-8">
      <div className="flex text-sm font-light text-gray-500">
        <p>@prakash_raman</p>
        <p className="ml-5 text-xs">{moment(tweet.publishedAt).fromNow()}</p>
      </div>
      <p className="text-sm font-light">{tweet.text}</p>
    </div>
  );
};

export default Message;
