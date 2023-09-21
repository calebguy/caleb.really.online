import "@ui/styles/globals.css";
import { getIsOnline } from "db";
import { Metadata } from "next";
import { redirect } from "next/navigation"
import localFont from 'next/font/local'
import { cn } from "../../../packages/ui/lib/utils";

export const revalidate = 1;

export const metadata: Metadata = {
  title: 'online',
  description: '📳',
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
    if (!isOnline) {
      redirect(process.env.OFFLINE_URL)
    }
  }
  return (
    <html lang="en" className={cn("bg-green-dark", "min-h-screen", "flex", "flex", "flex-col", "font-mono", simon.variable)}>
      <body className="p-10 bg-green-dark flex-grow h-[1px]">{children}</body>
    </html>
  );
}
