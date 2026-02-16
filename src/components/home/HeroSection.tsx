import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative pt-40 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen text-center overflow-hidden">
            {/* Aura Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] sm:w-[800px] sm:h-[800px] aura-bg rounded-full z-0"></div>

            <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-sm mb-4">
                    <span className="flex h-2 w-2 rounded-full bg-indigo-400 mr-2 animate-pulse"></span>
                    <span className="text-xs font-medium text-indigo-200 tracking-wide uppercase font-quicksand">Identidade Organizacional</span>
                </div>

                {/* Heading */}
                <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight text-white">
                    Potencializamos<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 animate-pulse-glow">
                        Criatividade Humana
                    </span><br />
                    com Inteligência Artificial
                </h1>

                {/* Subheading */}
                <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 leading-relaxed font-quicksand">
                    Amplificamos a criatividade através da tecnologia para gerar transformação positiva no mundo. Não criamos robôs. Criamos extensões da sua genialidade.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0 justify-center">
                    <Link
                        href="/contato"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg transition-all hover:scale-105 shadow-[0_0_20px_rgba(79,70,229,0.4)] font-quicksand"
                    >
                        Comece a Transformação
                        <span className="material-symbols-outlined ml-2 text-xl"><ArrowRight className="w-5 h-5" /></span>
                    </Link>
                    <Link
                        href="#mission"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-white/20 text-base font-medium rounded-full text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm md:text-lg transition-all font-quicksand"
                    >
                        Conheça Nossa Missão
                    </Link>
                </div>

                {/* Stats */}
                <div className="pt-12 grid grid-cols-3 gap-4 border-t border-white/5 mt-12 w-full">
                    <div>
                        <div className="text-2xl sm:text-3xl font-bold text-white font-heading">5+</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider font-quicksand">Anos Exp.</div>
                    </div>
                    <div>
                        <div className="text-2xl sm:text-3xl font-bold text-white font-heading">100%</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider font-quicksand">Humanizado</div>
                    </div>
                    <div>
                        <div className="text-2xl sm:text-3xl font-bold text-white font-heading">IA+</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider font-quicksand">Potencializada</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
