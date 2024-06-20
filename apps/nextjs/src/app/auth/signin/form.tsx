"use client";

import { useFormState } from "react-dom";

import { Button } from "@acme/ui/button";
import { Input } from "@acme/ui/input";
import { Label } from "@acme/ui/label";

import { sendVerificationRequest } from "./action";

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

        <Button type="submit" className="w-full">
          Send verification email
        </Button>
      </div>
    </form>
  );
}
