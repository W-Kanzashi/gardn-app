"use client";

import { useRouter } from "next/navigation";
import { api } from "@/trpc/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@acme/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@acme/ui/card";
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
        toast("Article ajoutée avec succès");
        router.refresh();
      },
      onError: () => {
        toast("Erreur lors de l'ajout de la article");
      },
    });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // await editArticle({
    //   ...values,
    // });
  }

  console.log(form.watch());

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Button type="submit" variant="outline" size="sm">
          Discard
        </Button>
        <Button size="sm">Save Product</Button>
        <Card x-chunk="dashboard-07-chunk-0">
          <CardHeader>
            <CardTitle>Article</CardTitle>
            <CardDescription>Détails de l&apos;article</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Titre</FormLabel>
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
        <div className="flex items-center justify-center gap-2 md:hidden">
          <Button variant="outline" size="sm">
            Discard
          </Button>
          <Button size="sm">Save Product</Button>
        </div>
      </form>
    </Form>
  );
}
