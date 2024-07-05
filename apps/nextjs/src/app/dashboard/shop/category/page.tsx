import { z } from "zod";

import { db } from "@acme/db";

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
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={validatedData.data} />
    </div>
  );
}
