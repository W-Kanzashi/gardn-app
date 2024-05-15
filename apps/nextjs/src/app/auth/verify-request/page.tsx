import { auth } from "@acme/auth";
import { redirect } from "next/navigation";

export default async function VerifyAuthRequest() {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <main>
      <h1>
        Please check your email to verify your account.
      </h1>
    </main>
  );
}
