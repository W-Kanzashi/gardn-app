"use client";

import { Label } from "@acme/ui/label";
import { Input } from "@acme/ui/input";
import { Button } from "@acme/ui/button";
import { googleAuth, sendVerificationRequest } from "./action";
import { useFormState } from "react-dom";

export default function SignInForm() {
  const [state, formAction] = useFormState(sendVerificationRequest, {
    message: "",
  });

  return (
    <form action={formAction} className="space-y-4">
      <div className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="m@example.com"
            type="email"
          />

          {state?.message}
        </div>

        <Button
          type="submit"
          className="w-full"
        >
          Send verification email
        </Button>
      </div>
      <div className="flex items-center space-x-2">
        <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
        <span className="text-sm text-zinc-400 dark:text-zinc-300">
          OR
        </span>
        <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
      </div>
      <Button
        className="w-full bg-[#4285F4] text-white"
        variant="outline"
        formAction={async () => await googleAuth()}
      >
        <div className="flex justify-center items-center">
          <ChromeIcon className="mr-2 w-5 h-5" />
          Login with Google
        </div>
      </Button>
      <Button className="w-full text-white bg-black" variant="outline">
        <div className="flex justify-center items-center">
          <AppleIcon className="mr-2 w-5 h-5" />
          Login with Apple
        </div>
      </Button>
    </form>
  );
}

function AppleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
    </svg>
  );
}

function ChromeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}
