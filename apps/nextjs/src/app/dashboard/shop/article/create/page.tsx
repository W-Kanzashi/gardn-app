import { z } from "zod";

import { db } from "@acme/db";

import { FormArticle } from "./form";
import { articleCategorySchema } from "./types";

async function getArticlesVariants() {
  const articlesVariantsData = await db.query.article.findMany({
    columns: {
      option: true,
    },
  });

  const validatedArticlesVariants = z
    .array(
      z.object({
        option: z.array(
          z.object({
            option_id: z.string(),
            name: z.string(),
            price: z.number(),
            stock: z.number(),
            available: z.boolean(),
          }),
        ),
      }),
    )
    .safeParse(articlesVariantsData);

  if (!validatedArticlesVariants.success) {
    return null;
  }

  return validatedArticlesVariants.data;
}

async function getCategories() {
  const categoriesData = await db.query.article_category.findMany({
    columns: {
      id: true,
      title: true,
    },
  });

  const validatedCategories = z
    .array(articleCategorySchema)
    .safeParse(categoriesData);

  if (!validatedCategories.success) {
    return null;
  }

  return validatedCategories.data;
}

export default async function CreatePlantPage() {
  const _articlesVariants = await getArticlesVariants();
  const categories = await getCategories();

  if (!categories) {
    return null;
  }

  return <FormArticle categories={categories} />;
}
