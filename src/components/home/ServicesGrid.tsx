import Link from "next/link";
import {
    Target,
    TrendingUp,
    Palette,
    Code2,
    Video,
    ArrowRight,
} from "lucide-react";
import Card from "../ui/Card";
import SectionContainer from "../ui/SectionContainer";

const ServicesGrid = () => {
    const services = [
        {
            id: "estrategia",
            icon: Target,
            title: "Estratégia & Inteligência",
            description:
                "Planejamento estratégico e growth marketing data-driven para decisões inteligentes e crescimento sustentável.",
            href: "/servicos#estrategia",
        },
        {
            id: "marketing",
            icon: TrendingUp,
            title: "Marketing & Performance",
            description:
                "Tráfego pago, redes sociais, inbound e marketing de conteúdo que geram resultados mensuráveis e conversões reais.",
            href: "/servicos#marketing",
        },
        {
            id: "branding",
            icon: Palette,
            title: "Branding & Design",
            description:
                "Identidade visual completa, design criativo e campanhas integradas que conectam emocionalmente com seu público.",
            href: "/servicos#branding",
        },
        {
            id: "tecnologia",
            icon: Code2,
            title: "Tecnologia & Inovação",
            description:
                "Desenvolvimento web, sistemas personalizados e automação com IA que libertam seu tempo para criar.",
            href: "/servicos#tecnologia",
        },
        {
            id: "audiovisual",
            icon: Video,
            title: "Audiovisual & Mídia",
            description:
                "Vídeos, animações e produções que emocionam, engajam e transformam visualizadores em clientes.",
            href: "/servicos#audiovisual",
        },
    ];

    return (
        <SectionContainer maxWidth="xl" padding="lg" id="servicos">
            <div className="space-y-12">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <h2 className="font-bricolage font-bold text-3xl md:text-4xl text-white">
                        Nossos 5 Pilares de{" "}
                        <span className="text-anil-400">Transformação</span>
                    </h2>
                    <p className="text-lg text-grafite-400">
                        Soluções completas que cobrem todas as necessidades do seu negócio,
                        da estratégia à execução.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Card
                                key={service.id}
                                hover
                                className="group bg-grafite-900/50 border border-white/5 hover:border-anil-500/30"
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                }}
                            >
                                <Link href={service.href} className="block space-y-4">
                                    {/* Icon */}
                                    <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-anil-600 transition-colors">
                                        <Icon className="w-7 h-7 text-anil-400 group-hover:text-white transition-colors" />
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-2">
                                        <h3 className="font-bricolage font-semibold text-xl text-white group-hover:text-anil-400 transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-grafite-400 leading-relaxed text-sm">
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Link */}
                                    <div className="flex items-center gap-2 text-anil-500 font-medium text-sm group-hover:gap-3 transition-all">
                                        <span>Saiba mais</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </Link>
                            </Card>
                        );
                    })}
                </div>

                {/* CTA Below Cards */}
                <div className="text-center pt-8">
                    <p className="text-grafite-600 mb-4">
                        Não sabe por onde começar? Nós te ajudamos
                    </p>
                    <Link
                        href="/contato"
                        className="inline-flex items-center gap-2 text-anil-500 hover:text-anil-600 font-medium underline underline-offset-4"
                    >
                        Agendar Diagnóstico Gratuito
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </SectionContainer>
    );
};

export default ServicesGrid;
