import Link from "next/link";
import { ArrowRight, Target, TrendingUp, Palette, Code2, Video } from "lucide-react";

export default function ServicesCarousel() {
    const services = [
        {
            title: "Estratégia & Inteligência",
            description: "Planejamento estratégico e growth marketing data-driven para decisões inteligentes e crescimento sustentável.",
            icon: Target,
            href: "/servicos#estrategia",
        },
        {
            title: "Marketing & Performance",
            description: "Tráfego pago, redes sociais, inbound e marketing de conteúdo que geram resultados mensuráveis.",
            icon: TrendingUp,
            href: "/servicos#marketing",
        },
        {
            title: "Branding & Design",
            description: "Identidade visual completa, design criativo e campanhas integradas que conectam emocionalmente.",
            icon: Palette,
            href: "/servicos#branding",
        },
        {
            title: "Tecnologia & Inovação",
            description: "Desenvolvimento web, sistemas personalizados e automação com IA que libertam seu tempo.",
            icon: Code2,
            href: "/servicos#tecnologia",
        },
        {
            title: "Audiovisual & Mídia",
            description: "Vídeos, animações e produções que emocionam, engajam e transformam visualizadores em clientes.",
            icon: Video,
            href: "/servicos#audiovisual",
        },
    ];

    return (
        <section className="py-20 bg-black relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">
                    Nossos Pilares de <span className="text-indigo-500">Transformação</span>
                </h2>
                <p className="text-gray-400 max-w-2xl font-quicksand">
                    Soluções completas que cobrem todas as necessidades do seu negócio, da estratégia à execução.
                </p>
            </div>

            <div className="flex overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-8 gap-6 snap-x snap-mandatory">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="snap-center shrink-0 w-[85vw] sm:w-[350px] bg-[#121212] border border-indigo-500/30 rounded-2xl p-8 hover:border-indigo-500 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between h-[420px]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-full bg-indigo-900/30 flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
                                <service.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white font-heading mb-3 group-hover:text-indigo-300 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed font-quicksand group-hover:text-gray-300 transition-colors">
                                {service.description}
                            </p>
                        </div>

                        <Link
                            href={service.href}
                            className="relative z-10 inline-flex items-center text-sm font-medium text-indigo-400 group-hover:text-indigo-300 mt-6 font-quicksand group-hover:translate-x-1 transition-transform"
                        >
                            Saiba mais <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
