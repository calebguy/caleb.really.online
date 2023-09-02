import "@ui/styles/globals.css";
import { cn } from "../../../packages/ui/lib/utils";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-red-dark">
      <body className={cn("p-10", "bg-red-dark", "text-red-light")}>{children}</body>
    </html>
  );
}
