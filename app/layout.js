import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "A/S PORTFOLIO",
  description: "Alexander Steeves Portfolio",
  icons: {
    icon: ["/public/favicon.ico"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
