import { Metadata } from "next";
import ContatoClientPage from "./ContatoClientPage";

export const metadata: Metadata = {
    title: "Contato | Hunamy - Fale Conosco",
    description:
        "Entre em contato com a Hunamy. Agende um diagnóstico gratuito e descubra como podemos transformar seu negócio com marketing e IA.",
};

export default function ContatoPage() {
    return <ContatoClientPage />;
}
