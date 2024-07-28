import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Box, Container, Flex } from "@chakra-ui/react";
import { colors } from "@/styles/theme/foundations/colors";
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
      </head>
      <body className={inter.className}>
          <Box
            display='flex'
            minH='100vh'
            color="white"
            backgroundColor={colors.darkpurple}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Providers>
                {children}
            </Providers>
          </Box>
      </body>
    </html>
  );
}
