import { z } from "zod";
import axios from "axios";
import { PrismaClient } from "@prisma/client";

import { createTRPCRouter, publicProcedure } from "../trpc";
import { env } from "../../../env/server.mjs";

const prisma = new PrismaClient();

export const tweetsRouter = createTRPCRouter({
  fetch: publicProcedure.query(async () => {
    return prisma.tweet.findMany({
      orderBy: { publishedAt: "desc" },
    });
  }),
});
