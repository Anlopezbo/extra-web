import type { Metadata } from "next";

import "./globals.css";

import { SiteShell } from "@/components/layout/site-shell";

export const metadata: Metadata = {
  title: {
    default: "Extra de Colombia",
    template: "%s | Extra de Colombia",
  },
  description:
    "Sitio web oficial del Sorteo Extraordinario de Colombia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}