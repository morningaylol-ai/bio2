import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BEL_MONARH OS v1.0",
  description: "Dark royal cyberpunk developer headquarters for BEL_MONARH.",
  metadataBase: new URL("https://bel-monarh.vercel.app"),
  openGraph: {
    title: "BEL_MONARH OS v1.0",
    description: "Digital headquarters of a technology empire.",
    type: "website",
  },
  themeColor: "#040406",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
