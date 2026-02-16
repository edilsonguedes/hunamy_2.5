import type { Metadata } from "next";
import { Quicksand, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Font configurations
const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hunamy - Criatividade Humana e IA",
  description: "Potencializamos a criatividade humana com Inteligência Artificial para gerar transformação positiva no mundo.",
  keywords: ["IA", "Criatividade", "Marketing", "Branding", "Tecnologia", "Inovação"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${quicksand.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" />
      </head>
      <body className="antialiased bg-background text-foreground overflow-x-hidden selection:bg-indigo-500 selection:text-white font-quicksand">
        {children}
      </body>
    </html>
  );
}
