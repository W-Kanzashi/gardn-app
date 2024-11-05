"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { api } from "@/trpc/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@acme/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@acme/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@acme/ui/form";
import { Input } from "@acme/ui/input";
import { Textarea } from "@acme/ui/textarea";

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
});

export function FormCategory() {
  const router = useRouter();

  const { mutateAsync: createCategories } =
    api.article.create_categories.useMutation({
      onSuccess: () => {
        toast("Catégorie ajoutée avec succès");

        router.push("/dashboard/shop/category");
      },
      onError: () => {
        toast("Erreur lors de l'ajout de la catégorie");
      },
    });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await createCategories({
      ...values,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex items-center gap-4">
          <Button type="button" variant="outline" size="sm" asChild>
            <Link href="/dashboard/shop/category"> Annuler</Link>
          </Button>
          <Button type="submit" size="sm">
            Ajouter
          </Button>
        </div>

        <Card x-chunk="dashboard-07-chunk-0">
          <CardHeader>
            <CardTitle>Catégorie</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom</FormLabel>
                      <FormControl>
                        <Input placeholder="Pomme" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-3">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Pomme" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}
