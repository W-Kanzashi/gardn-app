"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChartIcon,
  BellIcon,
  CalendarIcon,
  DollarSignIcon,
  HomeIcon,
  Package2Icon,
  PackageIcon,
  SettingsIcon,
  TruckIcon,
  UsersIcon,
} from "lucide-react";

import { cn } from "@acme/ui";
import { Button } from "@acme/ui/button";

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="border-r bg-gray-100/40 dark:bg-gray-800/40 lg:block">
      <div className="flex h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-6">
          <Link
            className="flex items-center gap-2 font-semibold"
            href="/dashboard"
          >
            <Package2Icon className="h-6 w-6" />
            <span className="">Gard&apos;n</span>
          </Link>
          <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
            <BellIcon className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <div className="grid items-start px-4 text-sm font-medium">
            <Link
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
                pathname.endsWith("dashboard")
                  ? "bg-gray-100 text-gray-900 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                  : "",
              )}
              href="/dashboard"
            >
              <HomeIcon className="h-4 w-4" />
              Acceuil
            </Link>
            <div className="text-gray-500 dark:text-gray-400">Modules</div>
            <Link
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
                pathname.includes("users")
                  ? "bg-gray-100 text-gray-900 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                  : "",
              )}
              href="/dashboard/users"
            >
              <UsersIcon className="h-4 w-4" />
              Utilisateurs
            </Link>
            <Link
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
                pathname.includes("sales")
                  ? "bg-gray-100 text-gray-900 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                  : "",
              )}
              href="/dashboard/sales"
            >
              <PackageIcon className="h-4 w-4" />
              Ventes
            </Link>
            <Link
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
                pathname.includes("plant")
                  ? "bg-gray-100 text-gray-900 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                  : "",
              )}
              href="/dashboard/plant"
            >
              <DollarSignIcon className="h-4 w-4" />
              Plantes
            </Link>
            <Link
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
                pathname.includes("shop")
                  ? "bg-gray-100 text-gray-900 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                  : "",
              )}
              href="/dashboard/shop"
            >
              <CalendarIcon className="h-4 w-4" />
              Magasin
            </Link>
            <div className="text-gray-500 dark:text-gray-400">Magasin</div>
            <Link
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
                pathname.includes("sales")
                  ? "bg-gray-100 text-gray-900 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                  : "",
              )}
              href="/dashboard/sales"
            >
              <TruckIcon className="h-4 w-4" />
              Achats
            </Link>
            <Link
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
                pathname.includes("articles")
                  ? "bg-gray-100 text-gray-900 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                  : "",
              )}
              href="/dashboard/sales/articles"
            >
              <TruckIcon className="h-4 w-4" />
              Articles
            </Link>
            <div className="text-gray-500 dark:text-gray-400">Tools</div>
            <Link
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
                pathname.includes("analytics")
                  ? "bg-gray-100 text-gray-900 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                  : "",
              )}
              href="#"
            >
              <BarChartIcon className="h-4 w-4" />
              Analytics
            </Link>
            <Link
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
                pathname.includes("settings")
                  ? "bg-gray-100 text-gray-900 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                  : "",
              )}
              href="/dashboard/settings"
            >
              <SettingsIcon className="h-4 w-4" />
              Paramètres
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
