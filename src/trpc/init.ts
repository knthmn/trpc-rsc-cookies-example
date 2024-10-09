import { initTRPC } from "@trpc/server";
import { cookies } from "next/headers";
import { cache } from "react";

export const createTRPCContext = cache(async () => {
  /**
   * @see: https://trpc.io/docs/server/context
   */
  return { userId: cookies().get("userId")?.value };
});

const t = initTRPC.context<{ userId: string | undefined }>().create({
  /**
   * @see https://trpc.io/docs/server/data-transformers
   */
  // transformer: superjson,
});
export const createCallerFactory = t.createCallerFactory;
// Base router and procedure helpers
export const createTRPCRouter = t.router;
export const baseProcedure = t.procedure;
