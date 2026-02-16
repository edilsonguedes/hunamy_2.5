import { ChevronDown, CheckCircle, ArrowRight } from "lucide-react";

export default function FaqSection() {
    return (
        <>
            {/* Values / Manifesto Section */}
            <section className="py-20 bg-gradient-to-b from-black to-[#0f0f0f]" id="manifesto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-indigo-400 font-medium tracking-wide uppercase text-sm font-quicksand">Manifesto</span>
                        <h2 className="mt-2 text-3xl sm:text-4xl font-bold font-heading text-white">Valores que nos guiam</h2>
                        <p className="mt-4 text-gray-400 font-quicksand italic">"Tecnologia serve pessoas, não o contrário."</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Humanidade Acima de Tudo", desc: "Decisões consideram impacto humano primeiro. Empatia é obrigatória." },
                            { title: "Criatividade Motriz", desc: "Não há limites para uma mente criativa. Celebramos o não-convencional." },
                            { title: "Ética e Transparência", desc: "IA explicada sem mistificação. Fazemos o certo sempre." },
                            { title: "Excelência Acessível", desc: "Qualidade premium para quem cria valor. Entregamos além do esperado." },
                            { title: "Transformação Contínua", desc: "Evoluímos junto. Aprendemos e compartilhamos generosamente." },
                            { title: "Impacto Positivo", desc: "Deixamos o mundo melhor. Medimos sucesso por vidas tocadas." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
                                <h4 className="text-lg font-bold text-white font-heading mb-2 group-hover:text-indigo-300 transition-colors">{item.title}</h4>
                                <p className="text-gray-400 text-sm font-quicksand">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">Perguntas Frequentes</h2>
                        <p className="text-gray-400 mt-4 font-quicksand">Tire suas dúvidas sobre como trabalhamos</p>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                q: "O que a Hunamy faz?",
                                a: "Potencializamos a criatividade humana com Inteligência Artificial para gerar transformação positiva no mundo. Criamos estratégias, identidades visuais e soluções tecnológicas que unem o melhor da intuição humana com a capacidade computacional da IA."
                            },
                            {
                                q: "Como funciona o Método Hunamy?",
                                a: "Nosso método é dividido em 5 fases essenciais: Humano no Centro, Criatividade Potencializada, Transformação Positiva, Excelência Técnica e Conexão Emocional."
                            },
                            {
                                q: "A IA substitui o trabalho humano?",
                                a: "Definitivamente não. Na Hunamy, acreditamos que a Inteligência Artificial é uma ferramenta de amplificação, não de substituição. Ela serve para estender as capacidades humanas."
                            },
                            {
                                q: "Como agendar um diagnóstico?",
                                a: "É muito simples! Você pode agendar uma conversa estratégica de 30 minutos, totalmente gratuita e sem compromisso, clicando no botão abaixo."
                            }
                        ].map((faq, i) => (
                            <details key={i} className="group bg-[#121212] rounded-lg overflow-hidden transition-all duration-300 border border-white/5 open:border-indigo-500/30">
                                <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-white/5 transition-colors">
                                    <h3 className="text-lg font-bold text-white font-heading group-hover:text-indigo-400 transition-colors">{faq.q}</h3>
                                    <ChevronDown className="text-gray-400 group-open:rotate-180 transition-transform duration-300" />
                                </summary>
                                <div className="px-6 pb-6 text-gray-400 leading-relaxed font-quicksand border-t border-white/5 pt-4">
                                    <p>{faq.a}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 relative overflow-hidden bg-black">
                <div className="absolute inset-0 bg-indigo-900/10"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-6">Pronto para potencializar sua criatividade?</h2>
                    <p className="text-xl text-indigo-200 mb-10 max-w-2xl mx-auto font-quicksand">Vamos transformar sua visão em realidade. Agende uma conversa estratégica de 30 minutos sem compromisso.</p>

                    <a href="/contato" className="inline-flex items-center justify-center px-10 py-5 border border-transparent text-lg font-bold rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-all hover:scale-105 shadow-[0_0_30px_rgba(79,70,229,0.5)] w-full sm:w-auto font-heading">
                        Agendar Diagnóstico Gratuito
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </a>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500 font-quicksand">
                        <span className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Sem compromisso</span>
                        <span className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> 100% personalizado</span>
                    </div>
                </div>
            </section>
        </>
    );
}
