import Link from "next/link";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { DeleteIcon, FileEditIcon, MoreVerticalIcon } from "lucide-react";

import { db } from "@acme/db";
import { cn } from "@acme/ui";
import { Button } from "@acme/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@acme/ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@acme/ui/table";

export const dynamic = "force-dynamic";

export default async function Page() {
  const usersData = await db.query.user.findMany();

  return (
    <div className="flex">
      <main className="flex-grow p-6">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-lg font-medium">Liste des utilisateurs</h1>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Vérifié</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            {usersData.map((user) => {
              return (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <CheckCircledIcon
                      width={30}
                      height={30}
                      className={cn(
                        user.id ? "text-green-500" : "text-gray-500",
                      )}
                    />
                  </TableCell>
                  <TableCell>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          className="rounded bg-transparent px-2 py-1 text-black hover:bg-gray-200 active:bg-gray-300"
                          type="button"
                        >
                          <MoreVerticalIcon className="h-4 w-4" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-40 space-y-2">
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                          asChild
                        >
                          <Link href={`/dashboard/users/${user.id}`}>
                            <FileEditIcon className="mr-2 h-4 w-4" />
                            <span className="text-sm font-medium">
                              Modifier
                            </span>
                          </Link>
                        </Button>
                        <Button
                          variant="destructive"
                          className="w-full justify-start"
                        >
                          <DeleteIcon className="mr-2 h-4 w-4" />
                          <span className="text-sm font-medium">Supprimer</span>
                        </Button>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </main>
    </div>
  );
}
