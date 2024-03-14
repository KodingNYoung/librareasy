import localFont from "next/font/local";

export const NotoSansDisplay = localFont({
  src: [
    {
      path: "./NotoSansDisplay-Bold.ttf",
      weight: "700",
    },
    {
      path: "./NotoSansDisplay-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "./NotoSansDisplay-Medium.ttf",
      weight: "500",
    },
    {
      path: "./NotoSansDisplay-Regular.ttf",
      weight: "400",
    },
  ],
  display: "swap",
  variable: "--app-font",
});
