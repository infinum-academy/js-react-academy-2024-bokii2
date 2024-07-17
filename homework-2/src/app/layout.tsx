import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

import { SidebarNavigation } from "@/components/shared/SidebarNavigation/SidebarNavigation";
import { Flex } from "@chakra-ui/react";

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
        <Flex
                ml="10vw" 
                width="calc(100vw - 10vw)"
                height='100%'
                padding="6rem 0"
                color="white"
                backgroundColor="#280454"
                flexDirection="column"
                alignItems="center"
                justifyContent="center">
          <Providers>{children}</Providers>
        </Flex>
      </body>
    </html>
  );
}
