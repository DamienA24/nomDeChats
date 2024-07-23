import { Inter, Poppins, Lora } from "next/font/google";

import type { Metadata } from "next";
import Script from "next/script";

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
const title = "Nom de chat";
const description =
  "Découvrez l'application ultime pour trouver le nom parfait pour votre chat ! Explorez des centaines de noms classés par lettre de l'alphabet, chacun accompagné de sa signification, ses caractéristiques et son origine. Que vous cherchiez un nom audacieux, élégant ou unique, notre application vous aide à choisir le meilleur nom pour votre félin.";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "NomPourChat",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title,
    description,
    url: `https://www.nompourchat.com/`,
    siteName: "NomPourChat",
    images: `https://www.nompourchat.com/catHome.svg`,
    locale: "fr_FR",
    type: "website",
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
        {process.env.NODE_ENV === "production" && (
          <Script
            src="https://cloud.umami.is/script.js"
            data-website-id="cde66984-f532-4760-923f-cb08970c58d9"
          />
        )}
      </body>
    </html>
  );
}
