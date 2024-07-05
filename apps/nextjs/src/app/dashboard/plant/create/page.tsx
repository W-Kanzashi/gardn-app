import { Card, CardContent, CardHeader, CardTitle } from "@acme/ui/card";

import { FormPlant } from "./form";

export default function CreatePlantPage() {
  return (
    <Card className="mx-auto my-10 h-max max-w-2xl">
      <CardHeader>
        <CardTitle>Création d&apos;une nouvelle plante</CardTitle>
      </CardHeader>
      <CardContent>
        <FormPlant />
      </CardContent>
    </Card>
  );
}
