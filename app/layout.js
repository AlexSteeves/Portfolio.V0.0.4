import { Inter } from "next/font/google";
import "./globals.css";

import Head from './components/NewHeader'

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Portfolio",
  description: "Alexander Steeves Portfolio",
  icons:{
    icon: ['../public/favicon.ico'],
  }
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
 
      <body className = {inter.className}>
        <p className = "uppercase text-lg text-text fixed z-50 top-[35px] left-[35px]">Alex Steeves</p>
        <Head />
        {children}
      </body>
    </html>
  );
}
