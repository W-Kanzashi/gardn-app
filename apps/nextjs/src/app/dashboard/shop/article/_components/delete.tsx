"use client";

import { useRouter } from "next/navigation";
import { api } from "@/trpc/react";
import { TrashIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@acme/ui/alert-dialog";

export function DeletePlant({ plantId }: { plantId: string }) {
  const router = useRouter();

  const { mutateAsync: deletePlantMutation, isPending } =
    api.plant.delete.useMutation({
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
          })
        }
        className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300"
        disabled={isPending}
      >
        <TrashIcon className="h-4 w-4" />
        <span className="text-sm font-medium">Supprimer</span>
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
