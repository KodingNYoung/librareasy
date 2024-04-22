import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import credentials from "next-auth/providers/credentials";
import { fetchUserByEmail } from "@/app/lib/data";
// @ts-ignore
import bcrypt from "bcrypt";
import { IUser } from "./app/lib/types";
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    credentials({
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const user = await fetchUserByEmail(email);
        if (!user) return null;
        const passwordMatches = await bcrypt.compare(password, user.password);
        if (!passwordMatches) return null;
        return user as IUser;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log({ action: "jwt", token, user });
      if (user) {
        token.picture = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        console.log({ action: "session", session, token });
        session.user.image = "";
      }
      return session;
    }
  }
});
