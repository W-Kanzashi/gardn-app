/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GkNjwEC
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@acme/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@acme/ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "@acme/ui/popover";
import { db, eq, schema } from "@acme/db";
import Image from "next/image";
import Link from "next/link";
import { DeletePlant } from "./_components/delete";
import { auth } from "@acme/auth";
import { redirect } from "next/navigation";
import { DotsVerticalIcon, GearIcon, PlusIcon } from "@radix-ui/react-icons";
import { Tag } from "lucide-react";

export default async function Component() {
  const session = await auth();

  if (!session) {
    redirect("/auth/signin");
  }

  const plants = await db.query.plant.findMany({
    where: eq(schema.plant.deleted, false),
  });

  return (
    <div className="flex">
      <main className="flex-grow p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-medium">Plantes</h1>
          <Button
            className="flex items-center py-1 px-2 space-x-2 text-sm text-white bg-gray-800 rounded-lg"
            type="button"
            asChild
          >
            <Link href="/dashboard/plant/create">
              <PlusIcon className="w-4 h-4" />
              <span>Ajouter</span>
            </Link>
          </Button>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nom</TableHead>
                <TableHead className="max-w-[100px]">Description</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Image</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              {plants.map((plant) => {
                return (
                  <TableRow key={plant.id}>
                    <TableCell>{plant.title}</TableCell>
                    <TableCell className="max-w-[100px] text-balance">
                      {plant.description}
                    </TableCell>
                    <TableCell>
                      <span className="py-1 px-2 text-red-800 bg-red-200 rounded-md">
                        <Tag className="inline-block mr-1 w-4 h-4" />
                        Fleurs blanches
                      </span>
                    </TableCell>
                    <TableCell>
                      <Image
                        src={plant.image_url}
                        alt={plant.title}
                        width={50}
                        height={50}
                      />
                    </TableCell>
                    <TableCell>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            className="py-1 px-2 text-black bg-transparent rounded hover:bg-gray-200 active:bg-gray-300"
                            type="button"
                          >
                            <DotsVerticalIcon className="w-4 h-4" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-40">
                          <Link
                            href={{
                              pathname: "/dashboard/plant/edit",
                              query: { id: plant.id },
                            }}
                            className="flex items-center py-2 px-2 space-x-2 w-full text-gray-500 rounded-lg hover:bg-gray-200 active:bg-gray-300"
                          >
                            <GearIcon className="w-4 h-4" />
                            <span className="text-sm font-medium">Edit</span>
                          </Link>
                          <DeletePlant plantId={plant.id} />
                        </PopoverContent>
                      </Popover>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
}
