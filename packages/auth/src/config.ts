import { DrizzleAdapter } from "@auth/drizzle-adapter";
import ResendProvider from "next-auth/providers/resend";
import { Resend } from "resend";
import type {
  DefaultSession,
  NextAuthConfig,
  Session as NextAuthSession,
} from "next-auth";
import { db } from "@acme/db";

export type { Session } from "next-auth";
import { env } from "../env";
import { account, session, user, verificationToken, authenticator } from "@acme/db/schema";
import { skipCSRFCheck } from "@auth/core";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const isSecureContext = env.NODE_ENV !== 'development';

export const adapter = DrizzleAdapter(db, {
  usersTable: user,
  accountsTable: account,
  sessionsTable: session,
  verificationTokensTable: verificationToken,
  authenticatorsTable: authenticator,
});

export const authConfig = {
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
    newUser: "/auth/new-user",
  },
  ...(!isSecureContext
    ? {
        skipCSRFCheck: skipCSRFCheck,
        trustHost: true,
      }
    : {}),
  debug: process.env.NODE_ENV === "development",
  adapter: adapter,
  providers: [
    ResendProvider({
      server: {
        host: env.EMAIL_SERVER_HOST,
        port: env.EMAIL_SERVER_PORT,
        auth: {
          user: env.EMAIL_SERVER_USER,
          pass: env.EMAIL_SERVER_PASSWORD,
        },
      },
      apiKey: env.EMAIL_SERVER_PASSWORD,
      from: env.EMAIL_FROM,
      sendVerificationRequest: async ({ identifier: email, url }) => {
        try {
          const resend = new Resend(env.EMAIL_SERVER_PASSWORD);

          await resend.emails.send({
            from: env.EMAIL_FROM,
            to: email,
            subject: "Your StreakUp Login Link",
            html:
              '<html><body>\
              <h2>Your Login Link</h2>\
              <p>Welcome to StreakUp!</p>\
              <p>Please click the magic link below to sign in to your account.</p>\
              <p><a href="' +
              url +
              '"><b>Sign in</b></a></p>\
              <p>or copy and paste this URL into your browser:</p>\
              <p><a href="' +
              url +
              '">' +
              url +
              "</a></p>\
              <br /><br /><hr />\
              <p><i>This email was intended for " +
              email +
              ". If you were not expecting this email, you can ignore this email.</i></p>\
              </body></html>",
          });
        } catch (error) {
          console.log("sendVerificationRequest", { error });
        }
      },
    }),
  ],
  callbacks: {
    authorized: ({ auth }) => {
      const isLoggedIn = !!auth?.user;

      if (!isLoggedIn) {
        return false;
      }

      return true;
    },
    session: (opts) => {
      if (!("user" in opts))
        throw new Error("unreachable with session strategy");

      return {
        ...opts.session,
        user: {
          ...opts.session.user,
          id: opts.user.id,
        },
      };
    },
  },
} satisfies NextAuthConfig;

export const validateToken = async (
  token: string,
): Promise<NextAuthSession | null> => {
  const sessionToken = token.slice("Bearer ".length);
  const session = await adapter.getSessionAndUser?.(sessionToken);
  return session
    ? {
        user: {
          ...session.user,
        },
        expires: session.session.expires.toISOString(),
      }
    : null;
};

export const invalidateSessionToken = async (token: string) => {
  await adapter.deleteSession?.(token);
};
