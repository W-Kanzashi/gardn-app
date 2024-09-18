import Link from "next/link";
import { z } from "zod";

import { db } from "@acme/db";
import { Button } from "@acme/ui/button";

import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import { categorySchema } from "./_utils/types";

export default async function Page() {
  const data = await db.query.article_category.findMany();

  const validatedData = z.array(categorySchema).safeParse(data);

  if (!validatedData.success) {
    return null;
  }

  return (
    <div className="col-span-2">
      <Button size="sm" variant="outline" asChild>
        <Link href="/dashboard/shop">Retour</Link>
      </Button>
      <DataTable columns={columns} data={validatedData.data} />
    </div>
  );
}
