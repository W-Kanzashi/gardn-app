"use server";

import { revalidatePath as nextRevalidatePath } from "next/cache";

// eslint-disable-next-line @typescript-eslint/require-await
export async function revalidatePath(path: string) {
  nextRevalidatePath(path);
}
