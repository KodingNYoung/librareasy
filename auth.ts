import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { fetchOneUser } from "@/api/services/users";
import { IUser } from "@/api/utils/types";
import { signInSchema } from "@/app/lib/validationSchemas";
import { authConfig } from "./auth.config";

// next auth
export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {}
      },
      authorize: async (credentials): Promise<IUser | null> => {
        try {
          const { email, password } = await signInSchema.parseAsync(
            credentials
          );
          const user = await fetchOneUser({ email });
          if (!user) throw new Error(`User with email ${email} not found.`);
          const passwordIsCorrect = await bcrypt.compare(
            password,
            user.password
          );
          if (!passwordIsCorrect) throw new Error(`Password is incorrect.`);
          return user;
        } catch (err) {
          console.log(err);
          throw err;
        }
      }
    })
  ]
});
