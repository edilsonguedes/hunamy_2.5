"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionContainer from "../ui/SectionContainer";
import { cn } from "@/lib/utils";

interface FAQItem {
    question: string;
    answer: string;
}

const FaqAccordion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs: FAQItem[] = [
        {
            question: "Quanto custa trabalhar com a Hunamy?",
            answer:
                "Nossos investimentos variam conforme o escopo e necessidades específicas do seu projeto. Após o diagnóstico inicial gratuito, apresentamos uma proposta personalizada com valores transparentes. Trabalhamos com projetos pontuais e parcerias de longo prazo.",
        },
        {
            question: "Quanto tempo leva para ver resultados?",
            answer:
                "Depende do serviço. Automações e sites podem estar prontos em 2-4 semanas. Estratégias de marketing digital começam a mostrar resultados em 60-90 dias. Branding completo leva 1-3 meses. Sempre compartilhamos um cronograma realista no início.",
        },
        {
            question: "Atendem todo Brasil?",
            answer:
                "Sim! Embora nossa sede seja em Aracaju/SE, atendemos clientes em todo território nacional de forma 100% remota. Utilizamos ferramentas colaborativas que garantem comunicação eficiente e entregas no prazo.",
        },
        {
            question: "Como funciona o processo de trabalho?",
            answer:
                "Seguimos nosso Método Hunamy de 5 fases: Descoberta (entendemos seu negócio), Estratégia (desenhamos o plano), Execução (colocamos em prática), Otimização (refinamos com base em dados) e Escala (expandimos o que funciona).",
        },
        {
            question: "Vocês fazem manutenção após a entrega?",
            answer:
                "Com certeza! Oferecemos planos de manutenção e suporte contínuo para sites, sistemas e campanhas. Acreditamos em parcerias de longo prazo e evoluímos junto com nossos clientes.",
        },
    ];

    return (
        <SectionContainer maxWidth="lg" padding="lg" className="bg-grafite-50">
            <div className="space-y-8">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <h2 className="font-bricolage font-bold text-3xl md:text-4xl text-grafite-900">
                        Perguntas Frequentes
                    </h2>
                    <p className="text-grafite-600">
                        Tire suas dúvidas sobre como trabalhamos
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4 max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-soft-sm overflow-hidden transition-shadow hover:shadow-soft-md"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left group"
                            >
                                <span className="font-dmsans font-semibold text-grafite-900 pr-4">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={cn(
                                        "w-5 h-5 text-anil-500 flex-shrink-0 transition-transform duration-200",
                                        openIndex === index && "rotate-180"
                                    )}
                                />
                            </button>

                            <div
                                className={cn(
                                    "overflow-hidden transition-all duration-300",
                                    openIndex === index ? "max-h-96" : "max-h-0"
                                )}
                            >
                                <div className="px-6 pb-5 text-grafite-600 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Below FAQ */}
                <div className="text-center pt-4">
                    <p className="text-grafite-600">
                        Tem outra dúvida?{" "}
                        <a
                            href="/contato"
                            className="text-anil-500 hover:text-anil-600 font-medium underline underline-offset-4"
                        >
                            Fale conosco
                        </a>
                    </p>
                </div>
            </div>
        </SectionContainer>
    );
};

export default FaqAccordion;
