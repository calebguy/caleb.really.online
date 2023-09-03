import "@ui/styles/globals.css";
import { cn } from "../../../packages/ui/lib/utils";
import db, { getIsOnline } from "db"
import { Metadata } from "next";
import { redirect } from 'next/navigation'

export const revalidate = 1;

export const metadata: Metadata = {
  title: 'checking...',
  description: '🔄',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (await getIsOnline()) {
    return redirect(process.env.ONLINE_URL)
  }
  return redirect(process.env.OFFLINE_URL)
}
