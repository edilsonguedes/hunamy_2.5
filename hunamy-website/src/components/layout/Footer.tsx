import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerSections = {
        servicos: [
            { label: "Estratégia & Inteligência", href: "/servicos#estrategia" },
            { label: "Marketing & Performance", href: "/servicos#marketing" },
            { label: "Branding & Design", href: "/servicos#branding" },
            { label: "Tecnologia & Inovação", href: "/servicos#tecnologia" },
            { label: "Audiovisual & Mídia", href: "/servicos#audiovisual" },
        ],
        empresa: [
            { label: "Sobre Nós", href: "/sobre" },
            { label: "Nosso Propósito", href: "/sobre#proposito" },
            { label: "Blog", href: "#" },
        ],
        recursos: [
            { label: "FAQ", href: "#" },
            { label: "Política de Privacidade", href: "#" },
            { label: "Termos de Uso", href: "#" },
            { label: "Contato", href: "/contato" },
        ],
    };

    return (
        <footer className="bg-grafite-900 text-white">
            <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-12 md:py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {/* Column 1: About */}
                    <div className="space-y-4">
                        <Image
                            src="/logo.png"
                            alt="Hunamy Logo"
                            width={140}
                            height={40}
                            className="h-10 w-auto brightness-0 invert"
                        />
                        <p className="text-grafite-300 text-sm leading-relaxed">
                            Potencializamos Criatividade Humana em Transformação Positiva com
                            IA
                        </p>
                        <div className="space-y-2 text-sm text-grafite-400">
                            <div className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                                <span>Aracaju, Sergipe - Brasil</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 flex-shrink-0" />
                                <a
                                    href="mailto:contato@hunamy.com.br"
                                    className="hover:text-anil-400 transition-colors"
                                >
                                    contato@hunamy.com.br
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h3 className="font-bricolage font-semibold text-lg mb-4">
                            Serviços
                        </h3>
                        <ul className="space-y-2">
                            {footerSections.servicos.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-grafite-400 hover:text-white text-sm transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div>
                        <h3 className="font-bricolage font-semibold text-lg mb-4">
                            Empresa
                        </h3>
                        <ul className="space-y-2">
                            {footerSections.empresa.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-grafite-400 hover:text-white text-sm transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Resources */}
                    <div>
                        <h3 className="font-bricolage font-semibold text-lg mb-4">
                            Recursos
                        </h3>
                        <ul className="space-y-2">
                            {footerSections.recursos.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-grafite-400 hover:text-white text-sm transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="mt-12 pt-8 border-t border-grafite-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-grafite-500">
                        <p>© {currentYear} Hunamy - Todos os direitos reservados</p>
                        <p>Desenvolvido com 💙 para transformar vidas</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
