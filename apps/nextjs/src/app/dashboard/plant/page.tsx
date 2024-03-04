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
import { db } from "@acme/db";
import Image from "next/image";
import Link from "next/link";

export default async function Component() {
  const plants = await db.query.plant.findMany();

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
              <DownloadIcon className="w-4 h-4" />
              <span>Ajouter</span>
            </Link>
          </Button>
        </div>
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
                      <TagIcon className="inline-block mr-1 w-4 h-4" />
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
                          <MoreVerticalIcon className="w-4 h-4" />
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
                          <FileEditIcon className="w-4 h-4" />
                          <span className="text-sm font-medium">Edit</span>
                        </Link>
                        <button className="flex items-center py-2 px-2 space-x-2 w-full text-gray-500 rounded-lg hover:bg-gray-200 active:bg-gray-300">
                          <DeleteIcon className="w-4 h-4" />
                          <span className="text-sm font-medium">Delete</span>
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

function DeleteIcon(props) {
  return (
    <svg
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
}

function DownloadIcon(props) {
  return (
    <svg
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

function FileEditIcon(props) {
  return (
    <svg
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
}

function MoreVerticalIcon(props) {
  return (
    <svg
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
}

function TagIcon(props) {
  return (
    <svg
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
      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
      <path d="M7 7h.01" />
    </svg>
  );
}
