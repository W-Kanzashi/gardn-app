"use server";

import { signIn } from "@acme/auth";

export async function sendVerificationRequest({ email }: { email: string }) {
  await signIn("nodemailer", {
    email: email,
  });
}

export async function googleAuth() {
  await signIn("google");
}
