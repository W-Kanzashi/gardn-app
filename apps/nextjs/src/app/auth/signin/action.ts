"use server";

import { z } from "zod";

import { signIn } from "@acme/auth";

const Email = z.string().email();

export async function sendVerificationRequest(
  _prevState: unknown,
  formData: FormData,
) {
  const result = Email.safeParse(formData.get("email"));

  if (!result.success) {
    return {
      message: "invalid-email",
    };
  }

  try {
    await signIn("resend", {
      email: result.data,
      redirectTo: "/",
    });
  } catch (error) {
    console.error("Error sending verification request", error);
    return {
      message: "no-user",
    };
  }
}
