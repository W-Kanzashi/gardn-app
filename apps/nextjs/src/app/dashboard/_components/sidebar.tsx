import Link from "next/link";
import { Button } from "@acme/ui/button";

export function Sidebar() {
  return (
    <aside className="border-r lg:block bg-gray-100/40 dark:bg-gray-800/40">
      <div className="flex flex-col gap-2 h-screen">
        <div className="flex items-center px-6 border-b h-[60px]">
          <Link
            className="flex gap-2 items-center font-semibold"
            href="/dashboard"
          >
            <Package2Icon className="w-6 h-6" />
            <span className="">Gard&apos;n</span>
          </Link>
          <Button className="ml-auto w-8 h-8" size="icon" variant="outline">
            <BellIcon className="w-4 h-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="overflow-auto flex-1 py-2">
          <div className="grid items-start px-4 text-sm font-medium">
            <Link
              className="flex gap-3 items-center py-2 px-3 text-gray-900 bg-gray-100 rounded-lg transition-all dark:text-gray-50 dark:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-50"
              href="/dashboard"
            >
              <HomeIcon className="w-4 h-4" />
              Acceuil
            </Link>
            <div className="text-gray-500 dark:text-gray-400">Modules</div>
            <Link
              className="flex gap-3 items-center py-2 px-3 text-gray-500 rounded-lg transition-all dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
              href="/dashboard/users"
            >
              <UsersIcon className="w-4 h-4" />
              Utilisateurs
            </Link>
            <Link
              className="flex gap-3 items-center py-2 px-3 text-gray-500 rounded-lg transition-all dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
              href="/dashboard/sales"
            >
              <PackageIcon className="w-4 h-4" />
              Ventes
            </Link>
            <Link
              className="flex gap-3 items-center py-2 px-3 text-gray-500 rounded-lg transition-all dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
              href="/dashboard/plant"
            >
              <DollarSignIcon className="w-4 h-4" />
              Plantes
            </Link>
            <Link
              className="flex gap-3 items-center py-2 px-3 text-gray-500 rounded-lg transition-all dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
              href="/dashboard/hr"
            >
              <CalendarIcon className="w-4 h-4" />
              HR
            </Link>
            <div className="text-gray-500 dark:text-gray-400">Magasin</div>
            <Link
              className="flex gap-3 items-center py-2 px-3 text-gray-500 rounded-lg transition-all dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
              href="/dashboard/sales"
            >
              <TruckIcon className="w-4 h-4" />
              Achats
            </Link>
            <Link
              className="flex gap-3 items-center py-2 px-3 text-gray-500 rounded-lg transition-all dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
              href="/dashboard/sales/articles"
            >
              <TruckIcon className="w-4 h-4" />
              Articles
            </Link>
            <div className="text-gray-500 dark:text-gray-400">Tools</div>
            <Link
              className="flex gap-3 items-center py-2 px-3 text-gray-500 rounded-lg transition-all dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
              href="#"
            >
              <BarChartIcon className="w-4 h-4" />
              Analytics
            </Link>
            <Link
              className="flex gap-3 items-center py-2 px-3 text-gray-500 rounded-lg transition-all dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
              href="/dashboard/settings"
            >
              <SettingsIcon className="w-4 h-4" />
              Paramètres
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}

function BarChartIcon(props) {
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
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}

function BellIcon(props) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function CalendarIcon(props) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function DollarSignIcon(props) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
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

function PackageIcon(props) {
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
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function SettingsIcon(props) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function TruckIcon(props) {
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
      <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
      <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" />
      <circle cx="7" cy="18" r="2" />
      <path d="M15 18H9" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  );
}

function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
