import "@ui/styles/globals.css";
import { cn } from "../../../packages/ui/lib/utils";
import { getIsOnline } from "db";
import { redirect } from "next/navigation"
import { Metadata } from "next";

export const revalidate = 1;

export const metadata: Metadata = {
  title: 'offline',
  description: '📴',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isOnline = await getIsOnline()
  if (isOnline) {
    redirect(process.env.ONLINE_URL)
  }
  return (
    <html lang="en" className="bg-red-dark min-h-screen flex flex-col">
      <body className="p-10 text-red-light bg-red-dark flex-grow h-[1px]">{children}</body>
    </html>
  );
}
