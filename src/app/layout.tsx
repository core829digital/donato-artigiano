import type { Metadata } from "next";
import { Instrument_Serif, Manrope, Grand_Hotel } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import LoadingScreen from "@/components/LoadingScreen";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const grandHotel = Grand_Hotel({
  variable: "--font-script-raw",
  subsets: ["latin"],
  weight: "400",
});

const siteUrl = "https://artigianofidato.it";
const title = "L'Artigiano Fidato — Donato | Sgomberi, Pulizie, Infissi, Sicurezza Casa";
const description =
  "Un solo numero per ogni intervento in casa: sgomberi e traslochi, pulizie, infissi e serramenti, sicurezza casa. Preventivo rapido, lavoro serio, prezzo chiaro.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "artigiano",
    "sgomberi",
    "traslochi",
    "pulizie appartamenti",
    "infissi",
    "serramenti",
    "sicurezza casa",
    "serrature",
  ],
  authors: [{ name: "Donato" }],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "L'Artigiano Fidato",
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="it"
      className={`${instrumentSerif.variable} ${manrope.variable} ${grandHotel.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-(--color-paper) text-(--color-charcoal)">
        <LoadingScreen />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
