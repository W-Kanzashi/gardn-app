/**
 * v0 by Vercel.
 * @see https://v0.dev/t/XNlTLb7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { auth } from "@acme/auth";
import { redirect } from "next/navigation";
import SignInForm from "./form";

export default async function Component() {
  const session = await auth();

  if (!session) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="p-6 space-y-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-lg dark:border-gray-700">
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
