import { Inter } from "next/font/google";
import "./globals.css";

import Head from "./components/NewHeader";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Portfolio",
  description: "Alexander Steeves Portfolio",
  icons: {
    icon: ["../public/favicon.ico"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <p
          className="fixed z-50 top-[35px] left-[35px] 
               uppercase text-lg lg:text-xl px-4 py-2
               text-white mix-blend-difference
               "
        >
          Alex Steeves
        </p>

        <Head />
        {children}
      </body>
    </html>
  );
}
