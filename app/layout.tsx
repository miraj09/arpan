import { Geist } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${geist.className} font-sans antialiased bg-background text-foreground`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
