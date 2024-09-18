import type { ReactNode } from "react";

export default function CategoryLayout({
  children,
  edit,
}: {
  children: ReactNode;
  edit: ReactNode;
}) {
  return (
    <main className="grid grid-cols-3 gap-4 p-8">
      {children}
      {edit}
    </main>
  );
}
