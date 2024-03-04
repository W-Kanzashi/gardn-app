import { ThemeProvider, ThemeToggle } from "@acme/ui/theme";
import { Toaster } from "@acme/ui/toast";

import { TRPCReactProvider } from "@/trpc/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Sidebar } from "./_components/sidebar";

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TRPCReactProvider>
        <div className="grid w-full min-h-screen lg:grid-cols-[280px_1fr]">
          <Sidebar />
          {props.children}
          <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
        </div>
      </TRPCReactProvider>
      <div className="fixed right-4 bottom-4">
        <ThemeToggle />
      </div>
      <Toaster />
    </ThemeProvider>
  );
}
