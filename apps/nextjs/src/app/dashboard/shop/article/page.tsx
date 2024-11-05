import Link from "next/link";
import { GearIcon } from "@radix-ui/react-icons";
import { z } from "zod";

import { db } from "@acme/db";
import { Button } from "@acme/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@acme/ui/dropdown-menu";

import { articleSchema } from "../_utils/types";
import { columns } from "./_components/data-table/columns";
import { DataTable } from "./_components/data-table/data-table";

export default async function Component() {
  const articles = await db.query.article.findMany();

  const validatedArticles = z.array(articleSchema).safeParse(articles);

  if (!validatedArticles.success) {
    return null;
  }

  return (
    <div className="flex">
      <main className="flex-grow p-6">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-lg font-medium">Articles</h1>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button type="button">
                <GearIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Articles</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/dashboard/shop/article/create">Créer</Link>
              </DropdownMenuItem>
              <DropdownMenuLabel>Catégories</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/dashboard/shop/category">Créer</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <DataTable columns={columns} data={validatedArticles.data} />
      </main>
    </div>
  );
}
