import { articleRouter } from "./router/article";
import { expoRouter } from "./router/expo";
import { plantRouter } from "./router/plant";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter<{
  expo: typeof expoRouter;
  article: typeof articleRouter;
  plant: typeof plantRouter;
}>({
  article: articleRouter,
  plant: plantRouter,
  expo: expoRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
