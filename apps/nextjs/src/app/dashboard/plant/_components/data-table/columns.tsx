"use client";

import type { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import Link from "next/link";
import { DotsVerticalIcon, GearIcon } from "@radix-ui/react-icons";

import { Button } from "@acme/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@acme/ui/popover";

import type { Plant } from "../../_utils/types";
import { DeletePlant } from "../delete";

export const columns: ColumnDef<Plant>[] = [
  {
    id: "Identifiant",
    accessorKey: "id",
    header: ({ column }) => <div>{column.id}</div>,
    cell: ({ row }) => {
      return (
        <div className="w-[150px] truncate">
          <span>{row.original.id}</span>
        </div>
      );
    },
  },
  {
    id: "Nom",
    accessorKey: "title",
    header: ({ column }) => <div>{column.id}</div>,
    cell: ({ row }) => {
      return (
        <div>
          <span className="capitalize">{row.original.title}</span>
        </div>
      );
    },
  },
  {
    id: "Catégorie",
    accessorKey: "category_id",
    header: ({ column }) => <div>{column.id}</div>,
    cell: ({ row }) => {
      const categories = {
        DUc2SUOne7PIYlmVnKTTW: { label: "Fruit" },
        hx5Q6GiHKTPjWsQHny0TY: { label: "Légume" },
        xbJZBsROKPSCB1qcyrbdy: { label: "Fleur" },
      } as const;

      return (
        <div>
          {
            categories[row.original.category_id as keyof typeof categories]
              ?.label
          }
        </div>
      );
    },
  },
  {
    id: "Image",
    accessorKey: "image_url",
    header: ({ column }) => <div>{column.id}</div>,
    cell: ({ row }) => {
      return (
        <div className="relative h-10 w-10 overflow-hidden">
          <Image
            src={row.original.image_url}
            alt={`Image de ${row.original.title}`}
            width={100}
            height={100}
            className="aspect-auto h-full object-contain"
          />
        </div>
      );
    },
  },
  {
    id: "Action",
    header: ({ column }) => <div>{column.id}</div>,
    cell: ({ row }) => {
      return (
        <Popover>
          <PopoverTrigger asChild>
            <Button
              className="rounded bg-transparent px-2 py-1 text-black hover:bg-gray-200 active:bg-gray-300"
              type="button"
            >
              <DotsVerticalIcon className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-40">
            <Link
              href={`/dashboard/plant/edit/${row.original.id}`}
              className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300"
            >
              <GearIcon className="h-4 w-4" />
              <span className="text-sm font-medium">Edit</span>
            </Link>
            <DeletePlant plantId={row.original.id} />
          </PopoverContent>
        </Popover>
      );
    },
  },
];
