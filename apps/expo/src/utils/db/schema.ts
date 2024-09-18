import { sqliteTable, text } from "drizzle-orm/sqlite-core";

import type { RouterOutputs } from "@acme/api";

export const ui = sqliteTable("ui", {
  id: text("id", { length: 21 }).primaryKey(),
  page: text("page"),
  ui: text("ui", { mode: "json" }).$type<RouterOutputs["expo"]["getByPage"]>(),
  stack: text("stack", { mode: "json" }),
  etag: text("etag"),
});
