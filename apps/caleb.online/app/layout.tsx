import "@ui/styles/globals.css";
import { getIsOnline } from "db";
import { Metadata } from "next";
import { redirect } from "next/navigation"

export const revalidate = 1;

export const metadata: Metadata = {
  title: 'online',
  description: '📳',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isOnline = await getIsOnline()
  if (!isOnline) {
    redirect(process.env.OFFLINE_URL)
  }

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
