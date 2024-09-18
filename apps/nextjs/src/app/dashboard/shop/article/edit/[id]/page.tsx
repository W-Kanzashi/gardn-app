import { z } from "zod";

import { db, eq, sql } from "@acme/db";
import { article, article_category } from "@acme/db/schema";

import { articleSchema, categorySchema } from "../_utils/types";
import { FormArticle } from "./form";

async function getArticleInfo({
  articleId,
}: {
  articleId: string | undefined;
}) {
  if (!articleId) {
    return null;
  }

  const [articleData] = await db
    .select({
      id: article.id,
      title: article.title,
      description: article.description,
      image_url: article.image_url,
      category_id: article.category_id,
      category_title: sql`${article_category.title}`,
      price: article.price,
      active: article.active,
      stock: article.stock,
      option: article.option,
    })
    .from(article)
    .innerJoin(article_category, eq(article_category.id, article.category_id))
    .where(eq(article.id, articleId))
    .limit(1);
  const categoryData = await db
    .select({
      id: article_category.id,
      title: article_category.title,
    })
    .from(article_category);

  const validatedArticle = z
    .tuple([articleSchema, z.array(categorySchema)])
    .safeParse([articleData, categoryData]);

  if (!validatedArticle.success) {
    return null;
  }

  return validatedArticle.data;
}

export default async function EditArticle({
  params,
}: {
  params: { id?: string };
}) {
  const data = await getArticleInfo({
    articleId: params.id,
  });

  if (!data) {
    return null;
  }

  return (
    <div>
      <FormArticle article={data[0]} categories={data[1]} />
    </div>
  );
}
