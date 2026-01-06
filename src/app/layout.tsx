import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agent Payment Protocol | AI Agents That Pay Themselves",
  description:
    "Autonomous payment infrastructure for AI agents. Enable your agents to make payments without human signatures using the X402 protocol.",
  keywords: [
    "AI agents",
    "autonomous payments",
    "blockchain",
    "Web3",
    "Solana",
    "Ethereum",
    "X402",
  ],
  openGraph: {
    title: "Agent Payment Protocol | AI Agents That Pay Themselves",
    description:
      "Autonomous payment infrastructure for AI agents. Enable your agents to make payments without human signatures.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
