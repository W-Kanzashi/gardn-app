import { Button } from "@acme/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@acme/ui/card";

export default function Component() {
  return (
    <div className="flex flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-semibold md:text-2xl">Paramètre</h1>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>Mon compte</CardTitle>
              <CardDescription>Modifier mes informations</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sales</CardTitle>
              <CardDescription>Monthly sales</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Purchases</CardTitle>
              <CardDescription>Monthly purchases</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Tasks</CardTitle>
              <CardDescription>Open tasks</CardDescription>
            </CardHeader>
          </Card>
          <form>
            <Button>Déconnexion</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
