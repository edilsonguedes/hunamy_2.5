import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionContainer from "@/components/ui/SectionContainer";
import Card from "@/components/ui/Card";
import {
    Target,
    TrendingUp,
    Palette,
    Code2,
    Video,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Serviços | Hunamy - Soluções Completas de Marketing e IA",
    description:
        "Descubra nossos 5 pilares de transformação: Estratégia, Marketing, Branding, Tecnologia e Audiovisual. Soluções sob medida para o seu negócio.",
};

export default function ServicosPage() {
    const pillars = [
        {
            id: "estrategia",
            icon: Target,
            title: "Estratégia & Inteligência",
            description:
                "Decisões inteligentes baseadas em dados que geram crescimento sustentável.",
            services: [
                "Planejamento Estratégico de Marketing",
                "Growth Marketing Data-Driven",
                "Análise de Mercado e Concorrência",
                "Definição de Personas e Jornada do Cliente",
            ],
        },
        {
            id: "marketing",
            icon: TrendingUp,
            title: "Marketing & Performance",
            description:
                "Campanhas que geram resultados mensuráveis e conversões reais.",
            services: [
                "Tráfego Pago (Google Ads, Meta Ads)",
                "Gestão de Redes Sociais",
                "Inbound Marketing e SEO",
                "Marketing de Conteúdo Estratégico",
                "Email Marketing e Automação",
            ],
        },
        {
            id: "branding",
            icon: Palette,
            title: "Branding & Design",
            description:
                "Identidade visual que conecta emocionalmente com seu público.",
            services: [
                "Criação de Identidade Visual Completa",
                "Design de Materiais Gráficos",
                "Campanhas Criativas Integradas",
                "Rebranding e Atualização de Marca",
            ],
        },
        {
            id: "tecnologia",
            icon: Code2,
            title: "Tecnologia & Inovação",
            description: "Soluções tecnológicas que libertam seu tempo para criar.",
            services: [
                "Desenvolvimento de Sites e Landing Pages",
                "Sistemas Internos Personalizados",
                "Automação de Atendimento (Chatbots IA)",
                "Integração de APIs e Automações",
            ],
        },
        {
            id: "audiovisual",
            icon: Video,
            title: "Audiovisual & Mídia",
            description:
                "Produções que emocionam e transformam visualizadores em clientes.",
            services: [
                "Vídeos Institucionais e Publicitários",
                "Motion Graphics e Animações",
                "Fotografia Profissional",
                "Edição e Pós-Produção",
            ],
        },
    ];

    return (
        <main className="min-h-screen">
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-anil-50 to-white">
                <SectionContainer maxWidth="lg">
                    <div className="text-center space-y-6">
                        <h1 className="font-bricolage font-bold text-4xl md:text-5xl text-grafite-900">
                            Soluções Sob Medida Para Empresas que{" "}
                            <span className="text-anil-500">Valorizam Essência</span>
                        </h1>
                        <p className="text-xl text-grafite-600 max-w-3xl mx-auto">
                            Nossos 5 pilares cobrem todas as necessidades do seu negócio digital
                        </p>
                    </div>
                </SectionContainer>
            </section>

            {/* Pillars */}
            <SectionContainer maxWidth="xl" padding="lg">
                <div className="space-y-16">
                    {pillars.map((pillar, index) => {
                        const Icon = pillar.icon;
                        return (
                            <div key={pillar.id} id={pillar.id} className="scroll-mt-24">
                                <Card padding="lg" hover className="group">
                                    <div className="grid md:grid-cols-3 gap-8">
                                        {/* Icon & Title */}
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-anil-100 rounded-xl flex items-center justify-center group-hover:bg-anil-500 transition-colors">
                                                <Icon className="w-8 h-8 text-anil-500 group-hover:text-white transition-colors" />
                                            </div>
                                            <h2 className="font-bricolage font-bold text-2xl text-grafite-900">
                                                {pillar.title}
                                            </h2>
                                            <p className="text-grafite-600 leading-relaxed">
                                                {pillar.description}
                                            </p>
                                        </div>

                                        {/* Services List */}
                                        <div className="md:col-span-2">
                                            <h3 className="font-dmsans font-semibold text-lg text-grafite-800 mb-4">
                                                O que está incluído:
                                            </h3>
                                            <ul className="space-y-3">
                                                {pillar.services.map((service, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-start gap-3 text-grafite-700"
                                                    >
                                                        <span className="w-6 h-6 bg-anil-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                            <span className="w-2 h-2 bg-anil-500 rounded-full"></span>
                                                        </span>
                                                        <span>{service}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        );
                    })}
                </div>
            </SectionContainer>

            {/* CTA */}
            <SectionContainer maxWidth="lg" padding="lg" className="bg-grafite-900 text-white">
                <div className="text-center space-y-6 py-12">
                    <h2 className="font-bricolage font-bold text-3xl md:text-4xl">
                        Não Sabe Por Onde Começar?
                    </h2>
                    <p className="text-lg text-grafite-300 max-w-2xl mx-auto">
                        Agende um diagnóstico gratuito de 30 minutos. Vamos entender seu
                        negócio e recomendar os melhores caminhos.
                    </p>
                    <a
                        href="/contato"
                        className="inline-block bg-white text-anil-600 px-8 py-4 rounded-lg font-dmsans font-semibold hover:bg-anil-50 transition-colors"
                    >
                        Agendar Diagnóstico Gratuito
                    </a>
                </div>
            </SectionContainer>

            <Footer />
        </main>
    );
}
