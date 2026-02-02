import "./globals.css";
import { Inter, Noto_Sans_SC } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const noto = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-sans-sc",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap"
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${noto.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
