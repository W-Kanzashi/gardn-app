import Link from "next/link";
import { redirect } from "next/navigation";
import { PlusIcon } from "@radix-ui/react-icons";
import { z } from "zod";

import { auth } from "@acme/auth";
import { db, eq } from "@acme/db";
import { plant } from "@acme/db/schema";
import { Button } from "@acme/ui/button";

import { columns } from "./_components/data-table/columns";
import { DataTable } from "./_components/data-table/data-table";
import { plantSchema } from "./_utils/types";

export default async function Component() {
  const session = await auth();

  if (!session) {
    redirect("/auth/signin");
  }

  const plants = await db.query.plant.findMany({
    where: eq(plant.deleted, false),
  });

  const validatedPlant = z.array(plantSchema).safeParse(plants);

  if (!validatedPlant.success) {
    return null;
  }

  return (
    <div className="flex">
      <main className="flex-grow p-6">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-lg font-medium">Plantes</h1>
          <Button
            className="flex items-center space-x-2 rounded-lg bg-gray-800 px-2 py-1 text-sm text-white"
            type="button"
            asChild
          >
            <Link href="/dashboard/plant/create">
              <PlusIcon className="h-4 w-4" />
              <span>Ajouter</span>
            </Link>
          </Button>
        </div>
        <DataTable columns={columns} data={validatedPlant.data} />
      </main>
    </div>
  );
}
