import { z } from "zod";
import axios from "axios";
import { PrismaClient } from "@prisma/client";

import { createTRPCRouter, publicProcedure } from "../trpc";
import { env } from "../../../env/server.mjs";
import {
  deleteAllTweets,
  downloadTweets,
  resetClock,
  shouldDownloadTweets,
} from "../../tweets";

const prisma = new PrismaClient();

export const tweetsRouter = createTRPCRouter({
  fetch: publicProcedure.query(async () => {
    if (await shouldDownloadTweets()) {
      await deleteAllTweets();
      await downloadTweets();
      await resetClock();
    }

    return prisma.tweet.findMany({
      orderBy: { publishedAt: "desc" },
    });
  }),
});
