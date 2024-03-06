import { authRouter } from "./router/auth";
import { plantRouter } from "./router/plant";
import { articleRouter } from "./router/article";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  article: articleRouter,
  plant: plantRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
