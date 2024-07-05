"use client";

import type { ColumnDef } from "@tanstack/react-table";

import type { Category } from "../_utils/types";

export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: "id",
    header: "Identifiant",
  },
  {
    id: "Nom",
    accessorKey: "title",
    header: "Nom",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <span>{row.original.title}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <span>{row.original.description}</span>
        </div>
      );
    },
  },
];
