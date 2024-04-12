import { Routes } from "@/utilities/enums";
import type { NextAuthConfig } from "next-auth";
import { NextResponse } from "next/server";

export const authConfig = {
  pages: {
    signIn: Routes.LOGIN,
    signOut: Routes.LOGIN
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      console.log("log [authorized]: Checking authorized");
      const isLoggedIn = !!auth?.user;
      const protectedRoutes = [
        Routes.OVERVIEW,
        Routes.LIBRARY,
        Routes.TEAMS,
        Routes.SETTINGS
      ];
      const isOnDashboard = protectedRoutes.some(route =>
        nextUrl.pathname.startsWith(route)
      );
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        console.log("log [authorized]: Is authorized, should redirect now");
        return NextResponse.redirect(new URL(Routes.OVERVIEW, nextUrl));
      }
      return true;
    }
  },
  providers: [] // Add providers with an empty array for now
} satisfies NextAuthConfig;
