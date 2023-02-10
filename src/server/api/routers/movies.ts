import { z } from "zod";
import axios from "axios";

import { createTRPCRouter, publicProcedure } from "../trpc";
import { env } from "../../../env/server.mjs";

type OmdbResponse = {
  Search: { Title: string }[];
};

export const moviesRouter = createTRPCRouter({
  search: publicProcedure
    .input(z.object({ text: z.string().min(3) }))
    .query(async ({ input }) => {
      try {
        const res = await axios.get<OmdbResponse>(
          `https://www.omdbapi.com/?s=${input.text}&apikey=${env.OMDB_API_KEY}`
        );
        return res.data.Search.slice(0, 5).map((movie) => movie.Title);
      } catch (e) {
        console.log("error", e);
      }
      return [];
    }),
});
