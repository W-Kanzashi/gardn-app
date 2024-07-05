import {
  DeleteIcon,
  DownloadIcon,
  FileEditIcon,
  MoreVerticalIcon,
  ShareIcon,
  TagIcon,
} from "lucide-react";

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

export default function Component() {
  return (
    <div className="flex">
      <main className="flex-grow p-6">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-lg font-medium">Transactions</h1>
          <Button
            className="flex items-center space-x-2 rounded-lg bg-gray-800 px-2 py-1 text-sm text-white"
            type="button"
          >
            <DownloadIcon className="h-4 w-4" />
            <span>Download</span>
          </Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Mar 12</TableCell>
              <TableCell>WeWork</TableCell>
              <TableCell>
                <span className="rounded-md bg-red-200 px-2 py-1 text-red-800">
                  <TagIcon className="mr-1 inline-block h-4 w-4" />
                  Office
                </span>
              </TableCell>
              <TableCell className="text-right">$175.00</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      className="rounded bg-transparent px-2 py-1 text-black hover:bg-gray-200 active:bg-gray-300"
                      type="button"
                    >
                      <MoreVerticalIcon className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40">
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <FileEditIcon className="h-4 w-4" />
                      <span className="text-sm font-medium">Edit</span>
                    </button>
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <ShareIcon className="h-4 w-4" />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <DeleteIcon className="h-4 w-4" />
                      <span className="text-sm font-medium">Delete</span>
                    </button>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mar 13</TableCell>
              <TableCell>IKEA</TableCell>
              <TableCell>
                <span className="rounded-md bg-blue-200 px-2 py-1 text-blue-800">
                  <TagIcon className="mr-1 inline-block h-4 w-4" />
                  Home
                </span>
              </TableCell>
              <TableCell className="text-right">$450.00</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      className="rounded bg-transparent px-2 py-1 text-black hover:bg-gray-200 active:bg-gray-300"
                      type="button"
                    >
                      <MoreVerticalIcon className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40">
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <FileEditIcon className="h-4 w-4" />
                      <span className="text-sm font-medium">Edit</span>
                    </button>
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <ShareIcon className="h-4 w-4" />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <DeleteIcon className="h-4 w-4" />
                      <span className="text-sm font-medium">Delete</span>
                    </button>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mar 14</TableCell>
              <TableCell>Home Depot</TableCell>
              <TableCell>
                <span className="rounded-md bg-blue-200 px-2 py-1 text-blue-800">
                  <TagIcon className="mr-1 inline-block h-4 w-4" />
                  Home
                </span>
              </TableCell>
              <TableCell className="text-right">$200.00</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      className="rounded bg-transparent px-2 py-1 text-black hover:bg-gray-200 active:bg-gray-300"
                      type="button"
                    >
                      <MoreVerticalIcon className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40">
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <FileEditIcon className="h-4 w-4" />
                      <span className="text-sm font-medium">Edit</span>
                    </button>
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <ShareIcon className="h-4 w-4" />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <DeleteIcon className="h-4 w-4" />
                      <span className="text-sm font-medium">Delete</span>
                    </button>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mar 15</TableCell>
              <TableCell>Burger King</TableCell>
              <TableCell>
                <span className="rounded-md bg-green-200 px-2 py-1 text-green-800">
                  <TagIcon className="mr-1 inline-block h-4 w-4" />
                  Food
                </span>
              </TableCell>
              <TableCell className="text-right">$15.00</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      className="rounded bg-transparent px-2 py-1 text-black hover:bg-gray-200 active:bg-gray-300"
                      type="button"
                    >
                      <MoreVerticalIcon className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40">
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <FileEditIcon className="h-4 w-4" />
                      <span className="text-sm font-medium">Edit</span>
                    </button>
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <ShareIcon className="h-4 w-4" />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <DeleteIcon className="h-4 w-4" />
                      <span className="text-sm font-medium">Delete</span>
                    </button>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mar 16</TableCell>
              <TableCell>WeWork</TableCell>
              <TableCell>
                <span className="rounded-md bg-red-200 px-2 py-1 text-red-800">
                  <TagIcon className="mr-1 inline-block h-4 w-4" />
                  Office
                </span>
              </TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      className="rounded bg-transparent px-2 py-1 text-black hover:bg-gray-200 active:bg-gray-300"
                      type="button"
                    >
                      <MoreVerticalIcon className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40">
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <FileEditIcon className="h-4 w-4" />
                      <span className="text-sm font-medium">Edit</span>
                    </button>
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <ShareIcon className="h-4 w-4" />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <DeleteIcon className="h-4 w-4" />
                      <span className="text-sm font-medium">Delete</span>
                    </button>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mar 17</TableCell>
              <TableCell>IKEA</TableCell>
              <TableCell>
                <span className="rounded-md bg-blue-200 px-2 py-1 text-blue-800">
                  <TagIcon className="mr-1 inline-block h-4 w-4" />
                  Home
                </span>
              </TableCell>
              <TableCell className="text-right">$350.00</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      className="rounded bg-transparent px-2 py-1 text-black hover:bg-gray-200 active:bg-gray-300"
                      type="button"
                    >
                      <MoreVerticalIcon className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40">
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <FileEditIcon className="h-4 w-4" />
                      <span className="text-sm font-medium">Edit</span>
                    </button>
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <ShareIcon className="h-4 w-4" />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <DeleteIcon className="h-4 w-4" />
                      <span className="text-sm font-medium">Delete</span>
                    </button>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mar 18</TableCell>
              <TableCell>Home Depot</TableCell>
              <TableCell>
                <span className="rounded-md bg-blue-200 px-2 py-1 text-blue-800">
                  <TagIcon className="mr-1 inline-block h-4 w-4" />
                  Home
                </span>
              </TableCell>
              <TableCell className="text-right">$100.00</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      className="rounded bg-transparent px-2 py-1 text-black hover:bg-gray-200 active:bg-gray-300"
                      type="button"
                    >
                      <MoreVerticalIcon className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40">
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <FileEditIcon className="h-4 w-4" />
                      <span className="text-sm font-medium">Edit</span>
                    </button>
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <ShareIcon className="h-4 w-4" />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <DeleteIcon className="h-4 w-4" />
                      <span className="text-sm font-medium">Delete</span>
                    </button>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mar 19</TableCell>
              <TableCell>Burger King</TableCell>
              <TableCell>
                <span className="rounded-md bg-green-200 px-2 py-1 text-green-800">
                  <TagIcon className="mr-1 inline-block h-4 w-4" />
                  Food
                </span>
              </TableCell>
              <TableCell className="text-right">$20.00</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      className="rounded bg-transparent px-2 py-1 text-black hover:bg-gray-200 active:bg-gray-300"
                      type="button"
                    >
                      <MoreVerticalIcon className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40">
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <FileEditIcon className="h-4 w-4" />
                      <span className="text-sm font-medium">Edit</span>
                    </button>
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <ShareIcon className="h-4 w-4" />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <DeleteIcon className="h-4 w-4" />
                      <span className="text-sm font-medium">Delete</span>
                    </button>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </main>
    </div>
  );
}
