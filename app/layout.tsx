import { Inter, Poppins, Lora } from "next/font/google";

import type { Metadata } from "next";
import Head from "next/head";

import { cn } from "@/lib/utils";

import { Footer } from "@/components/Footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const metadata: Metadata = {
  title: "Nom de chat",
  description:
    "Découvrez l'application ultime pour trouver le nom parfait pour votre chat ! Explorez des centaines de noms classés par lettre de l'alphabet, chacun accompagné de sa signification, ses caractéristiques et son origine. Que vous cherchiez un nom audacieux, élégant ou unique, notre application vous aide à choisir le meilleur nom pour votre félin.",
  applicationName: "NomPourChat",
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "google-site-verification": "erEPvpr7Cim_98A-fy0LJ23sJVBxBR7g5Jl8C4i1_1w",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={cn(
          "font-poppins font-lora bg-background",
          poppins.variable,
          lora.variable
        )}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
