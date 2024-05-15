"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@acme/ui/card";
import { Input } from "@acme/ui/input";
import { Button } from "@acme/ui/button";
import { Textarea } from "@acme/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@acme/ui/form";
import { UploadButton } from "@/utils/uploadthing";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { api } from "@/trpc/react";

const formSchema = z.object({
  title: z.string({
    required_error: "Veuillez entrer un nom",
    invalid_type_error: "Veuillez entrer un nom valide",
  }).min(3, { message: "Le nom doit contenir au moins 3 caractères" }),
  description: z.string({
    required_error: "Veuillez entrer une description",
    invalid_type_error: "Veuillez entrer une description valide",
  }).min(3, { message: "La description doit contenir au moins 3 caractères" }),
  image_url: z.string(),
});

export function FormPlant() {
  const { mutateAsync: editPlant } = api.plant.create.useMutation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await editPlant({
      ...values,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex-grow mt-10 mb-10">
          <Card className="mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle>Admin User Management</CardTitle>
              <CardDescription>
                Enter user details to create a new user
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom</FormLabel>
                        <FormControl>
                          <Input placeholder="plant" {...field} />
                        </FormControl>
                        <FormDescription>
                          Nom de la plante
                        </FormDescription>
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
                  name="image_url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <UploadButton
                          className="mt-4 w-60 ut-button:bg-red-500 ut-button:ut-readying:bg-red-500/50 ut-button:px-4"
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
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" type="submit">
                Valider
              </Button>
            </CardFooter>
          </Card>
        </div>
      </form>
    </Form>
  );
}
