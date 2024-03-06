import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { cn } from "@acme/ui";

import { env } from "@/env";

import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    env.VERCEL_ENV === "production"
      ? "https://gardn.fr"
      : "http://localhost:3000",
  ),
  title: "Gardn",
  description: "Site de présentation de Gardn",
  openGraph: {
    title: "Create T3 Turbo",
    description: "Site de présentation de Gardn",
    url: "https://gardn-website.vercel.app",
    siteName: "Gardn",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        {props.children}
      </body>
    </html>
  );
}
