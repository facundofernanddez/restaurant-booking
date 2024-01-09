import type { Metadata } from "next";
import { ChakraProvider } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/calendar.css";
import { trpc } from "@/utils/trpc";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resturant Booking App",
  description: "",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ChakraProvider>
        <body className={inter.className}>{children}</body>
      </ChakraProvider>
    </html>
  );
}
export default trpc.withTRPC(RootLayout);
