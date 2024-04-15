import type { Metadata } from "next";
import { NotoSansDisplay } from "@/assets/fonts";
import Providers from "./providers";
import "../styles/global.css";
import { LayoutFC } from "@/utilities/types";

export const metadata: Metadata = {
  title: {
    default: "Librareasy",
    template: "%s | Librareasy"
  },
  description: "Save books, get books."
};

const RootLayout: LayoutFC = ({ children }) => {
  return (
    <html lang="en" className={NotoSansDisplay.variable}>
      <Providers>{children}</Providers>
    </html>
  );
};

export default RootLayout;
