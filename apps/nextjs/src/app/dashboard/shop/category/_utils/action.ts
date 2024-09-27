"use server";

import { revalidatePath } from "next/cache";

import { db, eq } from "@acme/db";
import { article_category } from "@acme/db/schema";

// eslint-disable-next-line @typescript-eslint/require-await
export async function refreshPage({ route }: { route: string }) {
  revalidatePath(route);
}

export async function deleteCategory({ id }: { id: string }) {
  await db.delete(article_category).where(eq(article_category.id, id));
}
