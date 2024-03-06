"use client";

import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@acme/ui/alert-dialog";
import { TrashIcon } from "@radix-ui/react-icons";

export function DeletePlant({
  plantId,
}: {
  plantId: string;
}) {
  const router = useRouter();

  const { mutateAsync: deletePlantMutation, isPending } = api.plant.delete
    .useMutation({
      onSuccess: () => {
        toast("La plante a été supprimée avec succès");
        router.refresh();
      },
    });

  return (
    <>
      <button
        onClick={async () =>
          await deletePlantMutation({
            id: plantId,
          })}
        className="flex items-center py-2 px-2 space-x-2 w-full text-gray-500 rounded-lg hover:bg-gray-200 active:bg-gray-300"
        disabled={isPending}
      >
        <TrashIcon className="w-4 h-4" />
        <span className="text-sm font-medium">Delete</span>
      </button>
      <AlertDialog open={isPending}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Suppression de la plante en cours
            </AlertDialogTitle>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
