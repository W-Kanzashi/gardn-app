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

export default function Component() {
  return (
    <div className="flex">
      <main className="flex-grow p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-medium">Transactions</h1>
          <Button
            className="flex items-center py-1 px-2 space-x-2 text-sm text-white bg-gray-800 rounded-lg"
            type="button"
          >
            <DownloadIcon className="w-4 h-4" />
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
                <span className="py-1 px-2 text-red-800 bg-red-200 rounded-md">
                  <TagIcon className="inline-block mr-1 w-4 h-4" />
                  Office
                </span>
              </TableCell>
              <TableCell className="text-right">$175.00</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
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
                      <span className="text-sm font-medium">Edit</span>
                    </button>
                    <button className="flex items-center py-2 px-2 space-x-2 w-full text-gray-500 rounded-lg hover:bg-gray-200 active:bg-gray-300">
                      <ShareIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                    <button className="flex items-center py-2 px-2 space-x-2 w-full text-gray-500 rounded-lg hover:bg-gray-200 active:bg-gray-300">
                      <DeleteIcon className="w-4 h-4" />
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
                <span className="py-1 px-2 text-blue-800 bg-blue-200 rounded-md">
                  <TagIcon className="inline-block mr-1 w-4 h-4" />
                  Home
                </span>
              </TableCell>
              <TableCell className="text-right">$450.00</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
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
                      <span className="text-sm font-medium">Edit</span>
                    </button>
                    <button className="flex items-center py-2 px-2 space-x-2 w-full text-gray-500 rounded-lg hover:bg-gray-200 active:bg-gray-300">
                      <ShareIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                    <button className="flex items-center py-2 px-2 space-x-2 w-full text-gray-500 rounded-lg hover:bg-gray-200 active:bg-gray-300">
                      <DeleteIcon className="w-4 h-4" />
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
                <span className="py-1 px-2 text-blue-800 bg-blue-200 rounded-md">
                  <TagIcon className="inline-block mr-1 w-4 h-4" />
                  Home
                </span>
              </TableCell>
              <TableCell className="text-right">$200.00</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
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
                      <span className="text-sm font-medium">Edit</span>
                    </button>
                    <button className="flex items-center py-2 px-2 space-x-2 w-full text-gray-500 rounded-lg hover:bg-gray-200 active:bg-gray-300">
                      <ShareIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                    <button className="flex items-center py-2 px-2 space-x-2 w-full text-gray-500 rounded-lg hover:bg-gray-200 active:bg-gray-300">
                      <DeleteIcon className="w-4 h-4" />
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
                <span className="py-1 px-2 text-green-800 bg-green-200 rounded-md">
                  <TagIcon className="inline-block mr-1 w-4 h-4" />
                  Food
                </span>
              </TableCell>
              <TableCell className="text-right">$15.00</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
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
                      <span className="text-sm font-medium">Edit</span>
                    </button>
                    <button className="flex items-center py-2 px-2 space-x-2 w-full text-gray-500 rounded-lg hover:bg-gray-200 active:bg-gray-300">
                      <ShareIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                    <button className="flex items-center py-2 px-2 space-x-2 w-full text-gray-500 rounded-lg hover:bg-gray-200 active:bg-gray-300">
                      <DeleteIcon className="w-4 h-4" />
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
                <span className="py-1 px-2 text-red-800 bg-red-200 rounded-md">
                  <TagIcon className="inline-block mr-1 w-4 h-4" />
                  Office
                </span>
              </TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
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
                      <span className="text-sm font-medium">Edit</span>
                    </button>
                    <button className="flex items-center py-2 px-2 space-x-2 w-full text-gray-500 rounded-lg hover:bg-gray-200 active:bg-gray-300">
                      <ShareIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                    <button className="flex items-center py-2 px-2 space-x-2 w-full text-gray-500 rounded-lg hover:bg-gray-200 active:bg-gray-300">
                      <DeleteIcon className="w-4 h-4" />
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
                <span className="py-1 px-2 text-blue-800 bg-blue-200 rounded-md">
                  <TagIcon className="inline-block mr-1 w-4 h-4" />
                  Home
                </span>
              </TableCell>
              <TableCell className="text-right">$350.00</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
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
                      <span className="text-sm font-medium">Edit</span>
                    </button>
                    <button className="flex items-center py-2 px-2 space-x-2 w-full text-gray-500 rounded-lg hover:bg-gray-200 active:bg-gray-300">
                      <ShareIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                    <button className="flex items-center py-2 px-2 space-x-2 w-full text-gray-500 rounded-lg hover:bg-gray-200 active:bg-gray-300">
                      <DeleteIcon className="w-4 h-4" />
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
                <span className="py-1 px-2 text-blue-800 bg-blue-200 rounded-md">
                  <TagIcon className="inline-block mr-1 w-4 h-4" />
                  Home
                </span>
              </TableCell>
              <TableCell className="text-right">$100.00</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
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
                      <span className="text-sm font-medium">Edit</span>
                    </button>
                    <button className="flex items-center py-2 px-2 space-x-2 w-full text-gray-500 rounded-lg hover:bg-gray-200 active:bg-gray-300">
                      <ShareIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                    <button className="flex items-center py-2 px-2 space-x-2 w-full text-gray-500 rounded-lg hover:bg-gray-200 active:bg-gray-300">
                      <DeleteIcon className="w-4 h-4" />
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
                <span className="py-1 px-2 text-green-800 bg-green-200 rounded-md">
                  <TagIcon className="inline-block mr-1 w-4 h-4" />
                  Food
                </span>
              </TableCell>
              <TableCell className="text-right">$20.00</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
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
                      <span className="text-sm font-medium">Edit</span>
                    </button>
                    <button className="flex items-center py-2 px-2 space-x-2 w-full text-gray-500 rounded-lg hover:bg-gray-200 active:bg-gray-300">
                      <ShareIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                    <button className="flex items-center py-2 px-2 space-x-2 w-full text-gray-500 rounded-lg hover:bg-gray-200 active:bg-gray-300">
                      <DeleteIcon className="w-4 h-4" />
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

function ShareIcon(props) {
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
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
