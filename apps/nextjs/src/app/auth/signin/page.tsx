import { redirect } from "next/navigation";

import { auth } from "@acme/auth";

import SignInForm from "./form";

export default async function Component() {
  const session = await auth();

  if (!session) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="max-w-sm space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
          </div>
          <SignInForm />
        </div>
      </div>
    );
  }

  redirect("/dashboard");
}
