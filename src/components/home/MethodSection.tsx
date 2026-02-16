import { ArrowRight } from "lucide-react";

export default function MethodSection() {
    const steps = [
        {
            phase: "01",
            title: "Humano no Centro",
            description: "Entendemos a PESSOA por trás da empresa. Respeitamos e amplificamos a identidade única.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
        },
        {
            phase: "02",
            title: "Criatividade Potencializada",
            description: "IA como expansão, não substituição. Intuição humana + capacidade computacional.",
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
        },
        {
            phase: "03",
            title: "Transformação Positiva",
            description: "Medimos sucesso em impacto real. Bem-estar, crescimento e uso ético de IA.",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
        },
        {
            phase: "04",
            title: "Excelência Técnica",
            description: "Dominamos as ferramentas, mas o propósito fala mais alto. Inovação constante.",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        },
        {
            phase: "05",
            title: "Conexão Emocional",
            description: "Comunicação que toca o coração. Narrativas que geram identificação profunda.",
            image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1932&auto=format&fit=crop",
        },
    ];

    return (
        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden" id="metodo">
            <div className="absolute right-0 top-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl pointer-events-none" />

            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white">Método Hunamy</h2>
                    <p className="text-indigo-400 mt-4 font-medium tracking-widest uppercase text-sm font-quicksand">Nossa Jornada de Criação</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:max-w-7xl mx-auto">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 hover:border-indigo-500/50 transition-all duration-500"
                        >
                            {/* Image using standard img tag for external URLs without needing Next.js config update immediately */}
                            <img
                                alt={step.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                src={step.image}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                            <div className="absolute inset-0 p-6 flex flex-col justify-end backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all">
                                <div className="text-indigo-400 font-bold text-xs tracking-[0.2em] mb-2 font-quicksand">
                                    FASE {step.phase}
                                </div>
                                <h3 className="text-xl font-bold text-white font-heading mb-2 leading-tight">
                                    {step.title}
                                </h3>
                                <p className="text-gray-300 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 font-quicksand">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    <a
                        href="/contato"
                        className="group inline-flex items-center justify-center px-8 py-3 rounded-full bg-indigo-600 text-white font-medium text-base transition-all hover:bg-indigo-700 hover:scale-105 shadow-[0_0_20px_rgba(79,70,229,0.4)] font-quicksand"
                    >
                        Falar com um Especialista
                        <span className="ml-3 flex items-center justify-center w-8 h-8 bg-white/20 rounded-full transition-transform group-hover:translate-x-1">
                            <ArrowRight className="w-4 h-4 text-white" />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}
