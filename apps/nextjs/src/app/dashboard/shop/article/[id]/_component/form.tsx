"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { api } from "@/trpc/react";
import { UploadButton } from "@/utils/uploadthing";
import { zodResolver } from "@hookform/resolvers/zod";
import Dinero from "dinero.js";
import { PlusCircle, Upload } from "lucide-react";
import CurrencyInput from "react-currency-input-field";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { nanoid } from "@acme/db/nanoid";
import { cn } from "@acme/ui";
import { Button } from "@acme/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
  useFieldArray,
} from "@acme/ui/form";
import { Input } from "@acme/ui/input";
import { Label } from "@acme/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@acme/ui/select";
import { Switch } from "@acme/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@acme/ui/table";
import { Textarea } from "@acme/ui/textarea";

import type { Article, ArticleCategory } from "../../_utils/types";

const formSchema = z.object({
  id: z.string().nanoid(),
  name: z
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
  price: z.string(),
  option: z.array(
    z.object({
      option_id: z.string().nanoid(),
      name: z.string().min(1),
      price: z.string(),
      stock: z.string(),
      available: z.boolean(),
    }),
  ),
  category_id: z.string().nanoid(),
  image_url: z.string().nullish(),
  active: z.boolean(),
  stock: z.string(),
});

export function FormEditArticle({
  categories,
  article,
}: {
  categories: ArticleCategory[];
  article: Article;
}) {
  const router = useRouter();

  const { mutateAsync: updateArticleMutation } = api.article.edit.useMutation({
    onSuccess: () => {
      toast("Article modifié avec succès");
      router.push("/dashboard/shop");
    },
    onError: () => {
      toast("Erreur lors de la modification de la article");
    },
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: article,
  });

  const optionFieldArray = useFieldArray({
    control: form.control,
    name: "option",
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await updateArticleMutation({
      ...values,
    });
  }

  console.log("article", article);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex min-h-screen w-full flex-col">
          <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
              <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
                <div className="flex items-center gap-4">
                  <div className="hidden items-center gap-2 md:ml-auto md:flex">
                    <Button type="submit" variant="outline" size="sm">
                      Discard
                    </Button>
                    <Button size="sm">Save Product</Button>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                  <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                    <Card>
                      <CardHeader>
                        <CardTitle>Article</CardTitle>
                        <CardDescription>
                          Détails de l&apos;article
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-6">
                          <div className="grid grid-cols-2 gap-3">
                            <FormField
                              control={form.control}
                              name="name"
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
                            <FormField
                              control={form.control}
                              name="price"
                              render={({ field }) => {
                                return (
                                  <FormItem>
                                    <FormLabel>Prix</FormLabel>
                                    <FormControl>
                                      <CurrencyInput
                                        placeholder="0.00"
                                        decimalsLimit={2}
                                        lang="fr"
                                        name={field.name}
                                        min={0}
                                        prefix="€"
                                        defaultValue={article.price}
                                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                        onValueChange={(value) =>
                                          field.onChange(value)
                                        }
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                );
                              }}
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
                    <Card>
                      <CardHeader>
                        <CardTitle>Variantes</CardTitle>
                        <CardDescription>
                          Vous pouvez ajouter plusieurs variantes pour votre
                          article
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Table
                          className={cn(
                            optionFieldArray.fields.length > 0
                              ? "block"
                              : "hidden",
                          )}
                        >
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-[100px]">Titre</TableHead>
                              <TableHead>Stock</TableHead>
                              <TableHead>Prix</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {optionFieldArray.fields.map((option, index) => {
                              return (
                                <TableRow key={index}>
                                  <TableCell className="font-semibold">
                                    <FormField
                                      control={form.control}
                                      name={`option.${index}.name`}
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormLabel className="sr-only">
                                            {option.name}
                                          </FormLabel>
                                          <FormControl>
                                            <Input
                                              placeholder="Pomme"
                                              {...field}
                                            />
                                          </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
                                  </TableCell>
                                  <TableCell>
                                    <FormField
                                      control={form.control}
                                      name={`option.${index}.stock`}
                                      render={({ field }) => (
                                        <FormItem>
                                          <Label
                                            htmlFor="stock-1"
                                            className="sr-only"
                                          >
                                            {option.stock}
                                          </Label>
                                          <FormControl>
                                            <Input
                                              placeholder="Pomme"
                                              {...field}
                                            />
                                          </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
                                  </TableCell>
                                  <TableCell>
                                    <FormField
                                      control={form.control}
                                      name={`option.${index}.price`}
                                      render={({ field }) => (
                                        <FormItem>
                                          <Label className="sr-only">
                                            {Dinero({
                                              amount:
                                                parseInt(option.price) * 100,
                                              currency: "EUR",
                                              precision: 2,
                                            })
                                              .setLocale("fr")
                                              .toFormat("$0,0.00")}
                                          </Label>
                                          <FormControl>
                                            <CurrencyInput
                                              placeholder="0.00"
                                              decimalsLimit={2}
                                              lang="fr"
                                              name={field.name}
                                              min={0}
                                              defaultValue={option.price}
                                              prefix="€"
                                              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                              onValueChange={(value) =>
                                                field.onChange(value)
                                              }
                                            />
                                          </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
                                  </TableCell>
                                  <TableCell>
                                    <Button
                                      type="button"
                                      size="sm"
                                      variant="outline"
                                      onClick={() =>
                                        optionFieldArray.remove(index)
                                      }
                                    >
                                      Supprimer
                                    </Button>
                                  </TableCell>
                                </TableRow>
                              );
                            })}
                          </TableBody>
                        </Table>
                      </CardContent>
                      <CardFooter className="justify-center border-t p-4">
                        <Button
                          type="button"
                          size="sm"
                          variant="ghost"
                          className="gap-1"
                          onClick={() =>
                            optionFieldArray.append({
                              option_id: nanoid(),
                              name: "",
                              stock: "0",
                              price: "0",
                              available: false,
                            })
                          }
                        >
                          <PlusCircle className="h-3.5 w-3.5" />
                          Ajouter une variante
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Produit</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-6 sm:grid-cols-3">
                          <FormField
                            control={form.control}
                            name="category_id"
                            render={({ field }) => (
                              <FormItem>
                                <Label htmlFor="category">Category</Label>
                                <FormControl>
                                  <Select
                                    onValueChange={field.onChange}
                                    defaultValue={article.category_id}
                                  >
                                    <SelectTrigger aria-label="Choisir une catégorie">
                                      <SelectValue placeholder="Choisir une catégorie" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {categories.map((category) => (
                                        <SelectItem
                                          key={category.id}
                                          value={category.id}
                                        >
                                          {category.title}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="stock"
                            render={({ field }) => (
                              <FormItem>
                                <Label>Stock</Label>
                                <FormControl>
                                  <Input placeholder="10" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="active"
                            render={({ field }) => (
                              <FormItem>
                                <div>
                                  <FormLabel>Disponible</FormLabel>
                                </div>
                                <FormControl>
                                  <Switch
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                    <Card className="opacity-50">
                      <CardHeader>
                        <CardTitle>Status de l&apos;article</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-6">
                          <div className="grid gap-3">
                            <Label htmlFor="status">Status</Label>
                            <Select>
                              <SelectTrigger
                                id="status"
                                aria-label="Select status"
                                disabled
                              >
                                <SelectValue placeholder="Select status" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="draft">Draft</SelectItem>
                                <SelectItem value="published">
                                  Active
                                </SelectItem>
                                <SelectItem value="archived">
                                  Archived
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="overflow-hidden">
                      <CardHeader>
                        <CardTitle>Image</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-2">
                          <FormField
                            control={form.control}
                            name="image_url"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Modifier l&apos;image</FormLabel>
                                <FormControl>
                                  <UploadButton
                                    className="ut-button:bg-red-500 ut-button:ut-readying:bg-red-500/50 ut-button:px-4 mt-4 w-60"
                                    endpoint="imageUploader"
                                    onClientUploadComplete={(res) => {
                                      const files = res as unknown as {
                                        url: string;
                                      }[];
                                      if (
                                        Array.isArray(files) &&
                                        files.length > 0
                                      ) {
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
                          <div className="grid grid-cols-3 gap-2">
                            <button>
                              <Image
                                alt={article.name}
                                className="aspect-square w-full rounded-md object-cover"
                                height="84"
                                src={
                                  typeof article.image_url === "string"
                                    ? article.image_url
                                    : "https://utfs.io/f/6a973de1-dab6-4ebe-ba9c-a07f4e27573b-ifo2lm.jpg"
                                }
                                width="84"
                              />
                            </button>
                            <button disabled>
                              <Image
                                alt="Product image"
                                className="aspect-square w-full rounded-md object-cover"
                                height="84"
                                src="/placeholder.svg"
                                width="84"
                              />
                            </button>
                            <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                              <Upload className="h-4 w-4 text-muted-foreground" />
                              <span className="sr-only">Upload</span>
                            </button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 md:hidden">
                  <Button variant="outline" size="sm">
                    Discard
                  </Button>
                  <Button size="sm">Save Product</Button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </form>
    </Form>
  );
}
