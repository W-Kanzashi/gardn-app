import { cache } from "react";
import { headers } from "next/headers";
import { auth as clerkAuth } from "@clerk/nextjs/server";

import { createCaller, createContext } from "@acme/api";

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a tRPC call from a React Server Component.
 */
const createContextAPI = cache(async () => {
  const heads = new Headers(await headers());
  heads.set("x-trpc-source", "rsc");
  const auth = await clerkAuth();

  return createContext({
    auth: auth,
    headers: heads,
  });
});

export const api = createCaller(createContextAPI);
