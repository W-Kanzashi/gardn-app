import type { Config } from "drizzle-kit";

export default {
  schema: "./src/utils/db/schema.ts",
  out: "./src/utils/db/drizzle",
  dialect: "sqlite",
  driver: "expo",
} satisfies Config;
