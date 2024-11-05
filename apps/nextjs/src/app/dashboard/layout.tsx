import { TRPCReactProvider } from "@/trpc/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Toaster } from "@acme/ui/sonner";
import { ThemeProvider, ThemeToggle } from "@acme/ui/theme";

import { AppSidebar } from "./_components/sidebar";

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TRPCReactProvider>
        <AppSidebar>
          {props.children}
          <ReactQueryDevtools
            initialIsOpen={false}
            buttonPosition="bottom-left"
          />
        </AppSidebar>
      </TRPCReactProvider>
      <div className="fixed bottom-4 right-4">
        <ThemeToggle />
      </div>
      <Toaster />
    </ThemeProvider>
  );
}
