"use client";

import { useRouter } from "next/navigation";
import { api } from "@/trpc/react";
import { UploadButton } from "@/utils/uploadthing";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { cn } from "@acme/ui";
import { Button } from "@acme/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@acme/ui/command";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@acme/ui/form";
import { Input } from "@acme/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@acme/ui/popover";
import { Textarea } from "@acme/ui/textarea";

import { categories } from "../_utils/categories";

const formSchema = z.object({
  title: z
    .string({
      required_error: "Veuillez entrer un nom",
      invalid_type_error: "Veuillez entrer un nom valide",
    })
    .min(3, { message: "Le nom doit contenir au moins 3 caractères" }),
  description: z
    .string({
      required_error: "Veuillez entrer une description",
      invalid_type_error: "Veuillez entrer une description valide",
    })
    .min(3, { message: "La description doit contenir au moins 3 caractères" }),
  category: z.string().nanoid(),
  image_url: z.string().nullish(),
});

export function FormPlant() {
  const router = useRouter();

  const { mutateAsync: editPlant } = api.plant.create.useMutation({
    onSuccess: () => {
      toast("Plante ajoutée avec succès");

      router.push("/dashboard/plant");
    },
    onError: () => {
      toast("Erreur lors de l'ajout de la plante");
    },
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      image_url: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await editPlant({
      ...values,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input placeholder="plant" {...field} />
                  </FormControl>
                  <FormDescription>Nom de la plante</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="plant" {...field} />
                  </FormControl>
                  <FormDescription>
                    Une description de la plante
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel>Categorie</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-full justify-between",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        {field.value
                          ? categories.find(
                              (category) => category.id === field.value,
                            )?.label
                          : "Choisir une categorie"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandList>
                        <CommandInput placeholder="Search category..." />
                        <CommandEmpty>Aucune categorie trouvée</CommandEmpty>
                        <CommandGroup>
                          {categories.map((category) => (
                            <CommandItem
                              value={category.label}
                              key={category.value}
                              onSelect={() => {
                                form.setValue("category", category.id);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  category.value === field.value
                                    ? "opacity-100"
                                    : "opacity-0",
                                )}
                              />
                              {category.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="image_url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <UploadButton
                    className="ut-button:bg-red-500 ut-button:ut-readying:bg-red-500/50 w-full"
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                      const files = res as unknown as { url: string }[];

                      if (Array.isArray(files) && files.length > 0) {
                        for (const file of files) {
                          field.onChange(file.url);
                        }
                      }
                    }}
                    onUploadError={(error: Error) => {
                      console.log("Files: ", error);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="self-end">
          <Button type="submit">Valider</Button>
        </div>
      </form>
    </Form>
  );
}
