import "@ui/styles/globals.css";
import { cn } from "../../../packages/ui/lib/utils";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("p-10")}>{children}</body>
    </html>
  );
}
