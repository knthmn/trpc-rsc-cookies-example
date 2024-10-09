import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "./init";

export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query((opts) => {
      console.log("user ID is", opts.ctx.userId);

      return {
        greeting: `hello ${opts.input.text}, your userId is ${opts.ctx.userId}`,
      };
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
