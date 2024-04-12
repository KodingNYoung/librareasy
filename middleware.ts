import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;
console.log("log [middleware]: Heloo");
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!_next/static|_next/image|.*\\.png$).*)"]
};
