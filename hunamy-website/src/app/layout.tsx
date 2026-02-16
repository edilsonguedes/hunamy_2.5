import type { Metadata } from "next";
import { Archivo, Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";

// Font configurations
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dmsans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hunamy - Marketing e Inteligência Artificial",
  description:
    "Potencializamos criatividade humana através da inteligência artificial para gerar transformação positiva. Soluções completas de marketing digital, branding e tecnologia.",
  keywords: [
    "marketing digital",
    "inteligência artificial",
    "branding",
    "desenvolvimento web",
    "automação",
    "chatbots",
    "agência digital",
    "Aracaju",
  ],
  authors: [{ name: "Hunamy" }],
  creator: "Hunamy",
  publisher: "Hunamy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Hunamy",
    title: "Hunamy - Marketing e Inteligência Artificial",
    description:
      "Potencializamos criatividade humana através da inteligência artificial",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${archivo.variable} ${bricolage.variable} ${dmSans.variable} font-archivo antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
