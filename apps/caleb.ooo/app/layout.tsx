import "@ui/styles/globals.css";
import { cn } from "../../../packages/ui/lib/utils";
import { getIsOnline } from "db";
import { redirect } from "next/navigation"
import { Metadata } from "next";
import localFont from 'next/font/local'
import { QueryClientProvider, useQueryClient } from "@tanstack/react-query"
import Providers from "@/components/Providers";

export const revalidate = 1;

export const metadata: Metadata = {
  title: 'offline',
  description: '📴',
}

const simon = localFont({
  src: [
    {
      path: '../../../packages/ui/fonts/simon-regular.woff2',
      weight: '400'
    },
    {
      path: '../../../packages/ui/fonts/simon-bold.woff2',
      weight: '700'
    }
  ],
  variable: '--font-simon'
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  if (process.env.NODE_ENV === "production") {
    const isOnline = await getIsOnline()
    if (isOnline) {
      redirect(process.env.ONLINE_URL)
    }
  }


  return (
    <html lang="en" className={cn("bg-red-dark", "min-h-screen", "flex", "flex", "flex-col", "font-mono", simon.variable)}>
      <body className="p-10 text-red-light bg-red-dark flex-grow ooo-scroll">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
