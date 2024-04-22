import { Routes } from "@/utilities/enums";
import { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login"
  },
  callbacks: {
    authorized: ({ auth, request: { nextUrl } }) => {
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
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL(Routes.OVERVIEW, nextUrl));
      }
      return true;
    }
  },
  providers: []
} satisfies NextAuthConfig;
