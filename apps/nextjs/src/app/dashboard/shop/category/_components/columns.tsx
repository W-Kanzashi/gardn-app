"use client";

import type { ColumnDef } from "@tanstack/react-table";

import { Button } from "@acme/ui/button";

import type { Category } from "../_utils/types";
import { deleteCategory, refreshPage } from "../_utils/action";

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
  {
    header: "Action",
    cell: ({ row }) => {
      return (
        <Button
          size="sm"
          variant="outline"
          onClick={async () => {
            await deleteCategory({ id: row.original.id });

            await refreshPage({ route: "/dashboard/shop/category" });
          }}
        >
          Supprimer
        </Button>
      );
    },
  },
];
