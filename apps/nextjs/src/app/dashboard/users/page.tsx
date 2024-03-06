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
import { db } from "@acme/db";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { cn } from "@acme/ui";
import { forwardRef } from "react";

export default async function Component() {
  const usersData = await db.query.users.findMany();

  return (
    <div className="flex">
      <main className="flex-grow p-6">
        <div className="flex justify-between items-center mb-4">
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
                        user.emailVerified ? "text-green-500" : "text-gray-500",
                      )}
                    />
                  </TableCell>
                  <TableCell>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          className="py-1 px-2 text-black bg-transparent rounded hover:bg-gray-200 active:bg-gray-300"
                          type="button"
                        >
                          <MoreVerticalIcon className="w-4 h-4" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-40">
                        <button className="flex items-center py-2 px-2 space-x-2 w-full text-gray-500 rounded-lg hover:bg-gray-200 active:bg-gray-300">
                          <FileEditIcon className="w-4 h-4" />
                          <span className="text-sm font-medium">Modifier</span>
                        </button>
                        <button className="flex items-center py-2 px-2 space-x-2 w-full text-gray-500 rounded-lg hover:bg-gray-200 active:bg-gray-300">
                          <DeleteIcon className="w-4 h-4" />
                          <span className="text-sm font-medium">Supprimer</span>
                        </button>
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

const DeleteIcon = forwardRef<SVGSVGElement, { className: string }>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        className={className}
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
        <line x1="18" x2="12" y1="9" y2="15" />
        <line x1="12" x2="18" y1="9" y2="15" />
      </svg>
    );
  },
);

DeleteIcon.displayName = "DeleteIcon";

const FileEditIcon = forwardRef<SVGSVGElement, { className: string }>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        className={className}
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
      </svg>
    );
  },
);

FileEditIcon.displayName = "FileEditIcon";

const MoreVerticalIcon = forwardRef<SVGSVGElement, { className: string }>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        className={className}
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="1" />
        <circle cx="12" cy="5" r="1" />
        <circle cx="12" cy="19" r="1" />
      </svg>
    );
  },
);

MoreVerticalIcon.displayName = "MoreVerticalIcon";
