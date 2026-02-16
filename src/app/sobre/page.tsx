import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionContainer from "@/components/ui/SectionContainer";
import Card from "@/components/ui/Card";
import {
    Heart,
    Users,
    Lightbulb,
    Target,
    TrendingUp,
    Zap,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Sobre Nós | Hunamy - Nossa História e Propósito",
    description:
        "Conheça a Hunamy: uma empresa que acredita em potencializar a criatividade humana através da inteligência artificial para gerar transformação positiva no mundo.",
};

export default function SobrePage() {
    const values = [
        {
            icon: Heart,
            title: "Humanidade Acima de Tudo",
            description:
                "Tecnologia serve pessoas, não o contrário. Empatia é competência obrigatória.",
        },
        {
            icon: Lightbulb,
            title: "Criatividade como Força Motriz",
            description:
                "Não há limites para o que uma mente criativa pode alcançar. Encorajamos soluções não-convencionais.",
        },
        {
            icon: Users,
            title: "Ética e Transparência",
            description:
                "Fazemos o certo, mesmo quando ninguém está olhando. Nunca prometemos o impossível.",
        },
        {
            icon: Target,
            title: "Excelência Acessível",
            description:
                "Qualidade premium deve estar ao alcance de quem cria valor.",
        },
        {
            icon: TrendingUp,
            title: "Transformação Contínua",
            description: "Evoluímos junto com quem confia em nós. Aprendemos sempre.",
        },
        {
            icon: Zap,
            title: "Impacto Positivo",
            description:
                "Deixamos o mundo melhor do que encontramos através de cada projeto.",
        },
    ];

    return (
        <main className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-grafite-50 to-white">
                <SectionContainer maxWidth="lg">
                    <div className="text-center space-y-6">
                        <h1 className="font-bricolage font-bold text-4xl md:text-5xl text-grafite-900">
                            Não Somos Só uma Agência.{" "}
                            <span className="text-anil-500">Somos um Movimento.</span>
                        </h1>
                        <p className="text-xl text-grafite-600 max-w-3xl mx-auto leading-relaxed">
                            Acreditamos que a verdadeira inovação nasce da mente humana. A IA
                            não está aqui para substituir - mas para potencializar.
                        </p>
                    </div>
                </SectionContainer>
            </section>

            {/* Nossa História */}
            <SectionContainer maxWidth="lg" padding="lg">
                <div className="prose prose-lg max-w-none">
                    <h2 className="font-bricolage font-bold text-3xl text-grafite-900 mb-6">
                        Nossa História
                    </h2>
                    <div className="text-grafite-700 leading-relaxed space-y-4">
                        <p>
                            Em um mundo cada vez mais automatizado, onde máquinas prometem
                            resolver tudo, surgiu uma inquietação: <strong>E a essência humana?</strong> E
                            nossa capacidade única de criar, sentir, conectar?
                        </p>
                        <p>
                            A Hunamy nasceu da crença radical de que a inteligência artificial
                            não deve substituir o ser humano - mas <strong>libertá-lo</strong> para fazer o
                            que faz de melhor: <strong>CRIAR</strong>.
                        </p>
                        <p>
                            Cada automação que desenvolvemos libera horas para que um empresário
                            sonhe seu próximo projeto. Cada vídeo emocional que produzimos toca
                            corações e gera identificação real. Cada site que construímos carrega
                            a essência única de quem está por trás.
                        </p>
                        <p className="text-anil-600 font-semibold text-xl">
                            Porque aqui, a IA não é a estrela. Você é.
                        </p>
                    </div>
                </div>
            </SectionContainer>

            {/* Propósito, Visão, Missão */}
            <SectionContainer maxWidth="xl" padding="lg" className="bg-grafite-50">
                <div className="grid md:grid-cols-3 gap-8">
                    <Card padding="lg" className="text-center">
                        <div className="space-y-4">
                            <div className="w-16 h-16 bg-anil-100 rounded-full mx-auto flex items-center justify-center">
                                <Target className="w-8 h-8 text-anil-600" />
                            </div>
                            <h3 className="font-bricolage font-bold text-2xl text-grafite-900">
                                Propósito
                            </h3>
                            <p className="text-grafite-700 leading-relaxed">
                                Amplificar a criatividade humana através da inteligência
                                artificial para gerar transformação positiva no mundo.
                            </p>
                        </div>
                    </Card>

                    <Card padding="lg" className="text-center">
                        <div className="space-y-4">
                            <div className="w-16 h-16 bg-anil-100 rounded-full mx-auto flex items-center justify-center">
                                <TrendingUp className="w-8 h-8 text-anil-600" />
                            </div>
                            <h3 className="font-bricolage font-bold text-2xl text-grafite-900">
                                Visão
                            </h3>
                            <p className="text-grafite-700 leading-relaxed">
                                Ser a referência nacional em soluções de IA humanizada até 2030,
                                colocando pessoas em primeiro lugar.
                            </p>
                        </div>
                    </Card>

                    <Card padding="lg" className="text-center">
                        <div className="space-y-4">
                            <div className="w-16 h-16 bg-anil-100 rounded-full mx-auto flex items-center justify-center">
                                <Zap className="w-8 h-8 text-anil-600" />
                            </div>
                            <h3 className="font-bricolage font-bold text-2xl text-grafite-900">
                                Missão
                            </h3>
                            <p className="text-grafite-700 leading-relaxed">
                                Desenvolver soluções inteligentes e emocionais que potencializam
                                criatividade e geram conexões genuínas.
                            </p>
                        </div>
                    </Card>
                </div>
            </SectionContainer>

            {/* Valores */}
            <SectionContainer maxWidth="xl" padding="lg" id="valores">
                <div className="space-y-12">
                    <div className="text-center">
                        <h2 className="font-bricolage font-bold text-3xl md:text-4xl text-grafite-900 mb-4">
                            Nossos Valores Fundamentais
                        </h2>
                        <p className="text-lg text-grafite-600">
                            Os princípios que guiam cada decisão e projeto
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <Card key={index} hover padding="lg">
                                    <div className="space-y-4">
                                        <Icon className="w-10 h-10 text-anil-500" />
                                        <h3 className="font-bricolage font-semibold text-xl text-grafite-900">
                                            {value.title}
                                        </h3>
                                        <p className="text-grafite-600 leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </SectionContainer>

            {/* Manifesto */}
            <SectionContainer maxWidth="lg" padding="lg" className="bg-gradient-tech text-white">
                <div className="text-center space-y-6 py-8">
                    <h2 className="font-bricolage font-bold text-3xl md:text-4xl">
                        Nosso Manifesto
                    </h2>
                    <div className="text-lg md:text-xl leading-relaxed space-y-4 max-w-3xl mx-auto">
                        <p>Em um mundo que corre para automatizar tudo,</p>
                        <p className="font-semibold">Escolhemos automatizar para humanizar.</p>

                        <p className="pt-4">Em uma era que celebra máquinas,</p>
                        <p className="font-semibold">Celebramos quem programa as máquinas.</p>

                        <p className="pt-4">Numa indústria que vende tecnologia,</p>
                        <p className="font-semibold text-xl">Vendemos potencial humano amplificado.</p>
                    </div>
                </div>
            </SectionContainer>

            <Footer />
        </main>
    );
}
