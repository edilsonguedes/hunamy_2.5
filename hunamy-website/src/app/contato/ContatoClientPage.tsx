"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionContainer from "@/components/ui/SectionContainer";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Mail, MapPin, Send } from "lucide-react";

export default function ContatoClientPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        whatsapp: "",
        company: "",
        service: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Placeholder: Store in localStorage
        localStorage.setItem("hunamy_contact", JSON.stringify({
            ...formData,
            timestamp: new Date().toISOString(),
        }));

        setSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setFormData({
                name: "",
                email: "",
                whatsapp: "",
                company: "",
                service: "",
                message: "",
            });
            setSubmitted(false);
        }, 3000);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <main className="min-h-screen">
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-anil-50 to-white">
                <SectionContainer maxWidth="lg">
                    <div className="text-center space-y-6">
                        <h1 className="font-bricolage font-bold text-4xl md:text-5xl text-grafite-900">
                            Vamos Conversar Sobre{" "}
                            <span className="text-anil-500">Seu Futuro Digital?</span>
                        </h1>
                        <p className="text-xl text-grafite-600 max-w-2xl mx-auto">
                            Preencha o formulário ou escolha o canal de sua preferência
                        </p>
                    </div>
                </SectionContainer>
            </section>

            {/* Contact Form & Info */}
            <SectionContainer maxWidth="xl" padding="lg">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Form */}
                    <div className="lg:col-span-2">
                        <Card padding="lg">
                            {submitted ? (
                                <div className="text-center py-12 space-y-4">
                                    <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center">
                                        <Send className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="font-bricolage font-bold text-2xl text-grafite-900">
                                        Mensagem Enviada!
                                    </h3>
                                    <p className="text-grafite-600">
                                        Responderemos em até 24 horas úteis.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-grafite-700 mb-2">
                                                Nome Completo *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-grafite-300 rounded-lg focus:ring-2 focus:ring-anil-500 focus:border-transparent transition"
                                                placeholder="João Silva"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-grafite-700 mb-2">
                                                E-mail *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-grafite-300 rounded-lg focus:ring-2 focus:ring-anil-500 focus:border-transparent transition"
                                                placeholder="joao@empresa.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-grafite-700 mb-2">
                                                WhatsApp (com DDD) *
                                            </label>
                                            <input
                                                type="tel"
                                                name="whatsapp"
                                                required
                                                value={formData.whatsapp}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-grafite-300 rounded-lg focus:ring-2 focus:ring-anil-500 focus:border-transparent transition"
                                                placeholder="(79) 99999-9999"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-grafite-700 mb-2">
                                                Nome da Empresa *
                                            </label>
                                            <input
                                                type="text"
                                                name="company"
                                                required
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-grafite-300 rounded-lg focus:ring-2 focus:ring-anil-500 focus:border-transparent transition"
                                                placeholder="Minha Empresa Ltda"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-grafite-700 mb-2">
                                            Serviço de Interesse *
                                        </label>
                                        <select
                                            name="service"
                                            required
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-grafite-300 rounded-lg focus:ring-2 focus:ring-anil-500 focus:border-transparent transition"
                                        >
                                            <option value="">Selecione...</option>
                                            <option value="estrategia">Estratégia & Inteligência</option>
                                            <option value="marketing">Marketing & Performance</option>
                                            <option value="branding">Branding & Design</option>
                                            <option value="tecnologia">Tecnologia & Inovação</option>
                                            <option value="audiovisual">Audiovisual & Mídia</option>
                                            <option value="multiplos">Múltiplos Serviços</option>
                                            <option value="nao-sei">Não sei ainda</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-grafite-700 mb-2">
                                            Mensagem / Desafio *
                                        </label>
                                        <textarea
                                            name="message"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            className="w-full px-4 py-3 border border-grafite-300 rounded-lg focus:ring-2 focus:ring-anil-500 focus:border-transparent transition resize-none"
                                            placeholder="Conte-nos sobre seu desafio ou projeto..."
                                        ></textarea>
                                    </div>

                                    <Button type="submit" variant="primary" size="lg" fullWidth>
                                        Enviar Mensagem
                                        <Send className="w-5 h-5" />
                                    </Button>

                                    <p className="text-sm text-grafite-600 text-center">
                                        ✓ Respondemos em até 24h ✓ Sem compromisso
                                    </p>
                                </form>
                            )}
                        </Card>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <Card padding="lg">
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <Mail className="w-6 h-6 text-anil-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-dmsans font-semibold text-grafite-900 mb-1">
                                            E-mail
                                        </h3>
                                        <a
                                            href="mailto:contato@hunamy.com.br"
                                            className="text-anil-500 hover:text-anil-600"
                                        >
                                            contato@hunamy.com.br
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <MapPin className="w-6 h-6 text-anil-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-dmsans font-semibold text-grafite-900 mb-1">
                                            Localização
                                        </h3>
                                        <p className="text-grafite-600">Aracaju, Sergipe - Brasil</p>
                                        <p className="text-sm text-grafite-500 mt-1">
                                            Atendemos todo Brasil remotamente
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card padding="lg" className="bg-anil-50 border-2 border-anil-200">
                            <h3 className="font-bricolage font-bold text-lg text-grafite-900 mb-4">
                                O que acontece depois?
                            </h3>
                            <ol className="space-y-3 text-sm text-grafite-700">
                                <li className="flex gap-3">
                                    <span className="font-bold text-anil-600">1.</span>
                                    <span>Você envia a mensagem</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-bold text-anil-600">2.</span>
                                    <span>Retornamos em até 24h</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-bold text-anil-600">3.</span>
                                    <span>Agendamos conversa de 30 min</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-bold text-anil-600">4.</span>
                                    <span>Apresentamos proposta personalizada</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-bold text-anil-600">5.</span>
                                    <span>Juntos, transformamos</span>
                                </li>
                            </ol>
                        </Card>
                    </div>
                </div>
            </SectionContainer>

            <Footer />
        </main>
    );
}
