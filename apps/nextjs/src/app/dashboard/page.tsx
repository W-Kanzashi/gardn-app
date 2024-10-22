import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { ArrowRightIcon, Package2Icon, SearchIcon } from "lucide-react";

import { Button } from "@acme/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@acme/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@acme/ui/dropdown-menu";
import { Input } from "@acme/ui/input";

export default function Page() {
  const { userId } = auth();

  if (!userId) {
    redirect("/auth/signin");
  }

  return (
    <div className="flex flex-col">
      <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 lg:h-[60px]">
        <Link className="lg:hidden" href="/">
          <Package2Icon className="h-6 w-6" />
          <span className="sr-only">Accueil</span>
        </Link>
        <div className="w-full flex-1">
          <form>
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                className="w-full appearance-none bg-white pl-8 shadow-none dark:bg-gray-950 md:w-2/3 lg:w-1/3"
                placeholder="Search"
                type="search"
              />
            </div>
          </form>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="h-8 w-8 rounded-full border border-gray-200 dark:border-gray-800"
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
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="flex items-center gap-4">
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
                <ArrowRightIcon className="h-4 w-4" />
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
                <ArrowRightIcon className="h-4 w-4" />
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
                <ArrowRightIcon className="h-4 w-4" />
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
                <ArrowRightIcon className="h-4 w-4" />
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
                <ArrowRightIcon className="h-4 w-4" />
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
                <ArrowRightIcon className="h-4 w-4" />
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
              <ArrowRightIcon className="h-4 w-4" />
              <span className="sr-only">View details</span>
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
