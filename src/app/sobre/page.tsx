import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sobre Nós | Hunamy - Nossa História e Propósito",
    description:
        "Conheça a Hunamy: uma empresa que acredita em potencializar a criatividade humana através da inteligência artificial para gerar transformação positiva no mundo.",
};

export default function SobrePage() {
    return (
        <main className="min-h-screen bg-grafite-50 dark:bg-black text-grafite-900 dark:text-gray-100 font-sans antialiased transition-colors duration-300">
            {/* HERO SECTION */}
            <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-600/30 via-black to-black animate-[pulse_6s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
                    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-indigo-500/20 blur-[150px] rounded-full pointer-events-none"></div>
                    <div className="absolute top-20 left-10 w-1/3 h-1/3 bg-blue-500/20 blur-[150px] rounded-full pointer-events-none"></div>
                </div>
                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-bricolage text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
                        <span className="block text-gray-900 dark:text-white">Não Somos Só uma Agência.</span>
                        <span className="block bg-gradient-to-r from-indigo-400 via-indigo-300 to-indigo-600 bg-clip-text text-transparent">Somos um Movimento.</span>
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                        Acreditamos que a verdadeira inovação nasce da mente humana. <br className="hidden md:block"/>
                        A IA não está aqui para substituir - mas para potencializar.
                    </p>
                    <div className="mt-12 animate-[float_3s_ease-in-out_infinite]">
                        <svg className="w-6 h-6 mx-auto text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        </svg>
                    </div>
                </div>
            </header>

            {/* NOSSA HISTÓRIA */}
            <section className="py-24 bg-white dark:bg-[#0f0f13] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="font-bricolage text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">Nossa História</h2>
                            <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300">
                                <p className="mb-6">
                                    Em um mundo cada vez mais automatizado, onde máquinas prometem resolver tudo, surgiu uma inquietação: <strong className="text-anil-500 font-bold">E a essência humana?</strong> É nossa capacidade única de criar, sentir, conectar?
                                </p>
                                <p className="mb-6">
                                    A Hunamy nasceu da crença radical de que a inteligência artificial não deve substituir o ser humano - mas <strong className="text-white font-bold">libertá-lo</strong> para fazer o que faz de melhor: <strong className="text-anil-500 font-bold">CRIAR</strong>.
                                </p>
                                <p className="mb-6">
                                    Cada automação que desenvolvemos libera horas para que um empresário sonhe seu próximo projeto. Cada vídeo emocional que produzimos toca corações e gera identificação real. Cada site que construímos carrega a essência única de quem está por trás.
                                </p>
                                <p className="font-medium text-xl text-gray-900 dark:text-white border-l-4 border-anil-500 pl-4 py-2 mt-8 italic">
                                    Porque aqui, a IA não é a estrela. Você é.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                            <img alt="Abstract representation of humanity meeting technology" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh58EMJ3rhzDbbPspn-EANeWKaksSdyfaBYR4eZ250UbPRtYYm71fSNgVin8IG_tDSZ0fK8KGQYZFTzeKK59JF0cLnp4U1NwnhHMiMVai9BtprFaPi0jW1vvDEim16RV9P_e-NY2C9PjESOzny1ypy2WKABjxqF-f-GJY9tt2n7VdLasL-v-7VjYRhyNjq0W_RlaXSzv6J_QtMcDgAMoKi06UxbMX7APrnLHiEv5pgXVV92FLeoA5b1AYwQeKroTtKQq0OZGc-2Ek"/>
                            <div className="absolute bottom-8 left-8 z-20">
                                <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold text-white mb-2 border border-white/20">DESDE 2023</span>
                                <h3 className="text-white font-bricolage text-2xl font-bold">Tecnologia com Alma</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* IDENTIDADE CENTRAL */}
            <section className="py-24 bg-grafite-50 dark:bg-[#050508]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <h2 className="font-bricolage text-3xl md:text-5xl font-bold text-center text-gray-900 dark:text-white">Identidade Central</h2>
                        <p className="text-center text-gray-600 dark:text-gray-400 mt-4">Os pilares que sustentam nossa existência.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
                        {/* Propósito */}
                        <div className="md:col-span-2 relative group overflow-hidden rounded-2xl p-8 md:p-12 hover:shadow-indigo-500/20 transition-all duration-300 bg-white dark:bg-gradient-to-br dark:from-[#08080c] dark:to-indigo-950/30 border border-gray-200 dark:border-indigo-500/10 dark:hover:border-indigo-500/30">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity group-hover:opacity-100 opacity-50 dark:bg-indigo-500/20"></div>
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center mb-6 border border-transparent dark:border-indigo-500/20">
                                        <svg className="w-6 h-6 text-indigo-500 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bricolage font-bold text-gray-900 dark:text-white mb-4">Propósito</h3>
                                    <p className="text-gray-600 dark:text-indigo-100/70 text-lg leading-relaxed max-w-xl group-hover:text-white transition-colors">
                                        Amplificar a criatividade humana através da inteligência artificial para gerar transformação positiva no mundo. Não usamos tecnologia por usar, usamos para elevar o potencial humano.
                                    </p>
                                </div>
                                <div className="mt-8 flex items-center text-indigo-500 dark:text-indigo-400 font-medium cursor-pointer">
                                    <span>Ler manifesto</span>
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Visão */}
                        <div className="relative group overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-indigo-500 to-indigo-700 dark:from-indigo-600 dark:to-indigo-900 border border-transparent dark:border-indigo-400/20 shadow-lg text-white hover:shadow-indigo-500/30 transition-shadow">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                            <div className="absolute -bottom-10 right-0 w-32 h-32 bg-white/10 blur-2xl rounded-full"></div>
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-6 backdrop-blur-sm shadow-inner">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bricolage font-bold mb-4">Visão</h3>
                                    <p className="text-indigo-100 text-sm md:text-base leading-relaxed">
                                        Ser a referência nacional em soluções de IA humanizada até 2030, colocando pessoas em primeiro lugar.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Missão */}
                        <div className="md:col-span-3 relative group overflow-hidden rounded-2xl p-8 md:p-12 hover:shadow-indigo-500/20 transition-all duration-300 bg-gray-50 dark:bg-gradient-to-r dark:from-[#050508] dark:to-indigo-950/20 border border-gray-200 dark:border-indigo-500/10 dark:hover:border-indigo-500/30 shadow-lg">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center mb-6 border border-transparent dark:border-indigo-500/20">
                                        <svg className="w-6 h-6 text-indigo-500 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bricolage font-bold text-gray-900 dark:text-white mb-4">Missão</h3>
                                    <p className="text-gray-600 dark:text-indigo-100/70 text-lg leading-relaxed group-hover:text-white transition-colors">
                                        Desenvolver soluções inteligentes e emocionais que potencializam criatividade e geram conexões genuínas.
                                    </p>
                                </div>
                                <div className="h-full min-h-[200px] rounded-xl bg-gradient-to-br from-indigo-900 to-black dark:from-indigo-900/80 dark:to-[#020205] relative overflow-hidden flex items-center justify-center p-6 border border-transparent dark:border-indigo-500/20 shadow-[inset_0_0_20px_rgba(79,70,229,0.2)]">
                                    <div className="absolute w-40 h-40 bg-indigo-500/40 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                                    <div className="text-center relative z-10">
                                        <span className="block text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent mb-2">+250%</span>
                                        <span className="text-indigo-200 text-sm uppercase tracking-widest font-semibold font-quicksand">Eficiência Criativa</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NOSSOS VALORES FUNDAMENTAIS */}
            <section className="py-24 bg-white dark:bg-[#0f0f13] border-t border-gray-200 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-bricolage text-3xl md:text-5xl font-bold mb-16 text-gray-900 dark:text-white">Nossos Valores Fundamentais</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                        {[
                            { title: "Humanidade Acima de Tudo", desc: "Tecnologia serve pessoas, não o contrário. Empatia é competência obrigatória em tudo que fazemos." },
                            { title: "Criatividade como Força Motriz", desc: "Não há limites para o que uma mente criativa pode alcançar. Encorajamos soluções não-convencionais." },
                            { title: "Ética e Transparência", desc: "Fazemos o certo, mesmo quando ninguém está olhando. Nunca prometemos o impossível." },
                            { title: "Excelência Acessível", desc: "Qualidade premium deve estar ao alcance de quem cria valor. Democratizamos o alto nível." },
                            { title: "Transformação Contínua", desc: "Evoluímos junto com quem confia em nós. Aprendemos sempre, iteramos rápido." },
                            { title: "Impacto Positivo", desc: "Deixamos o mundo melhor do que encontramos através de cada projeto entregue." }
                        ].map((v, i) => (
                            <div className="group" key={i}>
                                <span className="block text-6xl font-bricolage font-bold text-gray-200 dark:text-white/10 mb-6 group-hover:text-anil-500/20 transition-colors">0{i+1}</span>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{v.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MANIFESTO */}
            <section className="py-32 bg-black text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-indigo-900/40 via-black to-black"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-indigo-600/20 blur-[150px] rounded-full pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-sm font-medium tracking-[0.3em] uppercase text-anil-500 mb-12">Nosso Manifesto</h2>
                    <div className="space-y-12 font-bricolage">
                        <p className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight">
                            Em uma era que celebra máquinas,
                        </p>
                        <p className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-indigo-400 via-indigo-300 to-indigo-600 bg-clip-text text-transparent">
                            Celebramos quem programa as máquinas.
                        </p>
                        <p className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-400">
                            Numa indústria que vende tecnologia,
                        </p>
                        <p className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                            Vendemos potencial humano amplificado.
                        </p>
                    </div>
                    <div className="mt-20">
                        <a className="inline-flex items-center px-8 py-4 border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 rounded-full text-white font-medium transition-all duration-300 backdrop-blur-sm" href="/contato">
                            Junte-se ao Movimento
                            <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
