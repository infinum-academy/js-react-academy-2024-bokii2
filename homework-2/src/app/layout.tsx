import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

import './/global.css'
import { SidebarNavigation } from "@/components/shared/SidebarNavigation/SidebarNavigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TV Shows App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="favicon-32x32.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <SidebarNavigation />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
