import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Flex } from "@chakra-ui/react";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";

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
          <Flex
            padding="6rem 0"
            color="white"
            backgroundColor="#280454"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Providers>{children}</Providers>
          </Flex>
      </body>
    </html>
  );
}
