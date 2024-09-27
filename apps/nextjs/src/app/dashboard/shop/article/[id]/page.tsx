import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { z } from "zod";

import { and, db, eq } from "@acme/db";
import { article } from "@acme/db/schema";
import { Button } from "@acme/ui/button";

import { articleCategorySchema, articleSchema } from "../_utils/types";
import { FormEditArticle } from "./_component/form";

async function getArticles({ articleId }: { articleId: string | undefined }) {
  if (typeof articleId !== "string") {
    return null;
  }

  const [article_data] = await db
    .select({
      id: article.id,
      name: article.name,
      description: article.description,
      image_url: article.image_url,
      category_id: article.category_id,
      price: article.price,
      active: article.active,
      stock: article.stock,
      option: article.option,
    })
    .from(article)
    .where(and(eq(article.id, articleId)));

  const validatedArticle = articleSchema.safeParse(article_data);

  if (!validatedArticle.success) {
    return null;
  }

  return validatedArticle.data;
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

export default async function Dashboard({
  params,
}: {
  params: { id: string };
}) {
  const articleData = await getArticles({ articleId: params.id });

  if (!articleData) {
    return null;
  }

  const categories = await getCategories();

  if (!categories) {
    return null;
  }

  return (
    <div className="bg-muted/40 px-4 pt-10">
      <div className="flex items-center gap-4">
        <Button size="icon" variant="outline" asChild>
          <Link href="/dashboard/shop/article">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Retour</span>
          </Link>
        </Button>

        <h1 className="text-lg font-bold md:text-2xl">Editer un article</h1>
      </div>

      <FormEditArticle categories={categories} article={articleData} />
    </div>
  );
}
