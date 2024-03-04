import { authRouter } from "./router/auth";
import { postRouter } from "./router/post";
import { plantRouter } from "./router/plant";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  post: postRouter,
  plant: plantRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
