import Link from "next/link";
import { Button } from "@acme/ui/button";
import { Input } from "@acme/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@acme/ui/dropdown-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@acme/ui/card";
import Image from "next/image";
import { auth } from "@acme/auth";
import { redirect } from "next/navigation";

export default async function Component() {
  const session = await auth();

  if (!session) {
    redirect("/auth/signin");
  }

  return (
    <div className="flex flex-col">
      <header className="flex gap-4 items-center px-6 h-14 border-b bg-gray-100/40 lg:h-[60px] dark:bg-gray-800/40">
        <Link className="lg:hidden" href="/">
          <Package2Icon className="w-6 h-6" />
          <span className="sr-only">Accueil</span>
        </Link>
        <div className="flex-1 w-full">
          <form>
            <div className="relative">
              <SearchIcon className="absolute top-2.5 left-2.5 w-4 h-4 text-gray-500 dark:text-gray-400" />
              <Input
                className="pl-8 w-full bg-white shadow-none appearance-none md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                placeholder="Search"
                type="search"
              />
            </div>
          </form>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-800"
              size="icon"
              variant="ghost"
            >
              <Image
                alt="Avatar"
                className="rounded-full"
                height="32"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "32/32",
                  objectFit: "cover",
                }}
                width="32"
              />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="flex flex-col flex-1 gap-4 p-4 md:gap-8 md:p-6">
        <div className="flex gap-4 items-center">
          <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
          <Button size="sm">Editer</Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>Users</CardTitle>
              <CardDescription>Active users</CardDescription>
            </CardHeader>
            <CardContent className="flex items-end">
              <h2 className="text-3xl font-semibold md:text-4xl">345</h2>
              <Button className="ml-auto" size="icon" variant="outline">
                <ArrowRightIcon className="w-4 h-4" />
                <span className="sr-only">View details</span>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sales</CardTitle>
              <CardDescription>Monthly sales</CardDescription>
            </CardHeader>
            <CardContent className="flex items-end">
              <h2 className="text-3xl font-semibold md:text-4xl">$12,345</h2>
              <Button className="ml-auto" size="icon" variant="outline">
                <ArrowRightIcon className="w-4 h-4" />
                <span className="sr-only">View details</span>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Purchases</CardTitle>
              <CardDescription>Monthly purchases</CardDescription>
            </CardHeader>
            <CardContent className="flex items-end">
              <h2 className="text-3xl font-semibold md:text-4xl">$9,876</h2>
              <Button className="ml-auto" size="icon" variant="outline">
                <ArrowRightIcon className="w-4 h-4" />
                <span className="sr-only">View details</span>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Tasks</CardTitle>
              <CardDescription>Open tasks</CardDescription>
            </CardHeader>
            <CardContent className="flex items-end">
              <h2 className="text-3xl font-semibold md:text-4xl">23</h2>
              <Button className="ml-auto" size="icon" variant="outline">
                <ArrowRightIcon className="w-4 h-4" />
                <span className="sr-only">View details</span>
              </Button>
            </CardContent>
          </Card>
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Tasks</CardTitle>
              <CardDescription>Open tasks</CardDescription>
            </CardHeader>
            <CardContent className="flex items-end">
              <h2 className="text-3xl font-semibold md:text-4xl">23</h2>
              <Button className="ml-auto" size="icon" variant="outline">
                <ArrowRightIcon className="w-4 h-4" />
                <span className="sr-only">View details</span>
              </Button>
            </CardContent>
          </Card>
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Tasks</CardTitle>
              <CardDescription>Open tasks</CardDescription>
            </CardHeader>
            <CardContent className="flex items-end">
              <h2 className="text-3xl font-semibold md:text-4xl">23</h2>
              <Button className="ml-auto" size="icon" variant="outline">
                <ArrowRightIcon className="w-4 h-4" />
                <span className="sr-only">View details</span>
              </Button>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Tasks</CardTitle>
            <CardDescription>Open tasks</CardDescription>
          </CardHeader>
          <CardContent className="flex items-end">
            <h2 className="text-3xl font-semibold md:text-4xl">23</h2>
            <Button className="ml-auto" size="icon" variant="outline">
              <ArrowRightIcon className="w-4 h-4" />
              <span className="sr-only">View details</span>
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ArrowRightIcon(props) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function Package2Icon(props) {
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}
