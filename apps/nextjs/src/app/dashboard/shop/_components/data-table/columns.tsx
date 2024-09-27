"use client";

import type { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import Link from "next/link";
import { DotsVerticalIcon, GearIcon } from "@radix-ui/react-icons";
import Dinero from "dinero.js";

import { Button } from "@acme/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@acme/ui/popover";

import type { Article } from "../../_utils/types";
import { DeletePlant } from "../delete";

export const columns: ColumnDef<Article>[] = [
  {
    id: "Identifiant",
    accessorKey: "id",
    header: ({ column }) => <div>{column.id}</div>,
    cell: ({ row }) => {
      return <div className="w-[100px]">{row.original.id}</div>;
    },
  },
  {
    id: "Nom",
    accessorKey: "name",
    header: ({ column }) => <div>{column.id}</div>,
    cell: ({ row }) => {
      return <div className="capitalize">{row.original.name}</div>;
    },
  },
  {
    id: "Stock",
    accessorKey: "stock",
    header: ({ column }) => <div>{column.id}</div>,
    cell: ({ row }) => {
      return <div>{row.original.stock}</div>;
    },
  },
  {
    id: "Prix",
    accessorKey: "price",
    header: ({ column }) => <div>{column.id}</div>,
    cell: ({ row }) => {
      return (
        <div>
          {Dinero({ amount: row.original.price, currency: "EUR", precision: 2 })
            .setLocale("fr-FR")
            .toFormat("$0,0.00")}
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
            src={
              row.original.image_url ??
              "https://utfs.io/f/6a973de1-dab6-4ebe-ba9c-a07f4e27573b-ifo2lm.jpg"
            }
            alt={`Image de ${row.original.name}`}
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
              href={`/dashboard/shop/article/${row.original.id}`}
              className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300"
            >
              <GearIcon className="h-4 w-4" />
              <span className="text-sm font-medium">Afficher</span>
            </Link>
            <Link
              href={`/dashboard/shop/article/edit/${row.original.id}`}
              className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300"
            >
              <GearIcon className="h-4 w-4" />
              <span className="text-sm font-medium">Editer</span>
            </Link>
            <DeletePlant plantId={row.original.id} />
          </PopoverContent>
        </Popover>
      );
    },
  },
];
