import { Inter } from "next/font/google";
import "./globals.css";
import Header from './components/Header'
const inter = Inter({ subsets: ["latin"] });
import Head from 'next/head';


export const metadata = {
  title: "Portfolio",
  description: "Alexander Steeves Portfolio",
  icons:{
    icon: './favicon.ico',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link href="https://fonts.cdnfonts.com/css/helvetica-neue-55" rel="stylesheet" />
        <link rel="shortcut icon" href="app/favicon.ico" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
