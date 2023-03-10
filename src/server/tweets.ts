import axios from "axios";
import { PrismaClient, Tweet } from "@prisma/client";
import moment from "moment";

import { env } from "../env/server.mjs";
import { Twitter } from "./types";
import find from "lodash/find";

const prisma = new PrismaClient();
const PRAKASH_RAMAN_TWIITER_ID = "15865919";

/**
 * Downloads and saves tweets to the database.
 */
export const downloadTweets = async () => {
  const options = {
    method: "GET",
    url: "https://twitter135.p.rapidapi.com/UserTweets/",
    params: { id: PRAKASH_RAMAN_TWIITER_ID, count: "50" },
    headers: {
      "X-RapidAPI-Key": env.RAPID_API_KEY,
      "X-RapidAPI-Host": "twitter135.p.rapidapi.com",
    },
  };

  const response = await axios.request<Twitter.GetTweetsResponse>(options);
  const data = response.data;

  const tweetInstruction = find(
    data.data.user.result.timeline.timeline.instructions,
    (i) => i.type == "TimelineAddEntries"
  );

  if (!tweetInstruction) return;

  const tweets = (tweetInstruction.entries ?? [])
    .map<Pick<Tweet, "publishedAt" | "text">>((e) => {
      const tweet = e.content.itemContent?.tweet_results.result.legacy;
      return {
        publishedAt: new Date(tweet?.created_at ?? 0),
        text: tweet?.full_text ?? "",
      };
    })
    .filter((t) => !!t.text);

  await prisma.tweet.createMany({
    data: tweets,
  });
};

/**
 * Delete all tweets
 */
export const deleteAllTweets = async () => {
  await prisma.tweet.deleteMany({});
};

/**
 * Detemrines if tweets should be downloaded.
 */
export const shouldDownloadTweets = async () => {
  const time = await prisma.tweetFetch.findFirst();

  if (!time) return true;

  if (moment().diff(moment(time.at), "hours") > 4) return true;
};

/**
 * Should reset the timestamp
 */
export const resetClock = async () => {
  const data = { at: new Date() };

  await prisma.tweetFetch.deleteMany();
  await prisma.tweetFetch.create({
    data,
  });
};
