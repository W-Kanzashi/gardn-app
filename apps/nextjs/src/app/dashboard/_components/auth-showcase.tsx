import { auth } from "@clerk/nextjs/server";

import { Button } from "@acme/ui/button";

export async function AuthShowcase() {
  const { userId } = await auth();

  if (!userId) {
    return (
      <form>
        <Button size="lg">Sign in with Discord</Button>
      </form>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl">
        <span>Logged in as {userId}</span>
      </p>

      <form>
        <Button size="lg">Sign out</Button>
      </form>
    </div>
  );
}
