import type { ReactNode } from "react";

export default function CategoryLayout({
  children,
  edit,
}: {
  children: ReactNode;
  edit: ReactNode;
}) {
  return (
    <main className="container mx-auto grid grid-cols-3 gap-4">
      {children}
      {edit}
    </main>
  );
}
