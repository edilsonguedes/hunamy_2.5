import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Button from "../ui/Button";
import SectionContainer from "../ui/SectionContainer";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center bg-black overflow-hidden pt-20">
            {/* Background subtle pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 right-20 w-96 h-96 bg-anil-600/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-900/20 rounded-full blur-[100px]"></div>
            </div>

            <SectionContainer maxWidth="xl" padding="xl" className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-grafite-100 rounded-full text-sm font-medium backdrop-blur-sm">
                            <Sparkles className="w-4 h-4 text-anil-400" />
                            <span>Potencializamos Criatividade Humana com IA</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="font-bricolage font-bold text-4xl md:text-5xl lg:text-7xl text-white leading-tight tracking-tight">
                            Transformação{" "}
                            <span className="bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent block mt-2 pb-2">
                                Positiva
                            </span>{" "}
                            com Inteligência Artificial
                        </h1>

                        {/* Subheading */}
                        <p className="text-lg md:text-xl text-grafite-300 leading-relaxed max-w-2xl">
                            Soluções completas de <strong className="text-white font-semibold">marketing digital</strong>,{" "}
                            <strong className="text-white font-semibold">branding</strong> e <strong className="text-white font-semibold">tecnologia</strong> que
                            ampliam sua criatividade.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link href="/contato">
                                <Button variant="primary" size="lg">
                                    Comece a Transformação
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                            </Link>
                            <Link href="/sobre">
                                <Button variant="secondary" size="lg">
                                    Conheça Nossa Missão
                                </Button>
                            </Link>
                        </div>

                        {/* Social Proof */}
                        <div className="flex flex-wrap items-center gap-8 justify-center lg:justify-start text-sm text-grafite-600 pt-4">
                            <div className="flex flex-col">
                                <span className="font-bricolage font-bold text-2xl text-anil-600">
                                    5+
                                </span>
                                <span>Anos de Experiência</span>
                            </div>
                            <div className="w-px h-12 bg-grafite-300"></div>
                            <div className="flex flex-col">
                                <span className="font-bricolage font-bold text-2xl text-anil-600">
                                    100%
                                </span>
                                <span>Humanizado</span>
                            </div>
                            <div className="w-px h-12 bg-grafite-300"></div>
                            <div className="flex flex-col">
                                <span className="font-bricolage font-bold text-2xl text-anil-600">
                                    IA+
                                </span>
                                <span>Potencializada</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="relative hidden lg:block">
                        <div className="relative w-full aspect-square max-w-lg mx-auto">
                            {/* Decorative circles */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-anil-200/30 rounded-full blur-2xl animate-pulse"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-grafite-300/20 rounded-full blur-2xl animate-pulse delay-75"></div>

                            {/* Central element placeholder */}
                            <div className="relative z-10 w-full h-full flex items-center justify-center">
                                <div className="w-full h-full bg-gradient-to-br from-anil-100 to-transparent rounded-3xl shadow-soft-lg flex items-center justify-center">
                                    <div className="text-center space-y-4 p-8">
                                        <div className="w-24 h-24 mx-auto bg-anil-500 rounded-full flex items-center justify-center shadow-glassmorphism">
                                            <Sparkles className="w-12 h-12 text-white" />
                                        </div>
                                        <p className="font-bricolage text-xl text-grafite-700">
                                            Criatividade × IA
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionContainer>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-grafite-400 rounded-full flex items-start justify-center p-2">
                    <div className="w-1.5 h-3 bg-grafite-400 rounded-full animate-scroll"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
