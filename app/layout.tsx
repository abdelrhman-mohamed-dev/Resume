import ThemeProvider from "@/components/theme/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdelrhman Mohamed",
  description: "Personal resume of Abdelrhman Mohamed",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="m-0 h-full p-0 antialiased"
      suppressHydrationWarning
    >
      <body className="flex h-full flex-col">
        <ThemeProvider attribute="class" defaultTheme="system">

          <div className="relative text-zinc-800 dark:text-zinc-200">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
