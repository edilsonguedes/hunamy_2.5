import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

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
        <footer className="bg-black text-white border-t border-white/5">
            <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-12 md:py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {/* Column 1: About */}
                    <div className="space-y-4">
                        <Link href="/">
                            <Image
                                src="/logo-new.png"
                                alt="Hunamy Logo"
                                width={160}
                                height={45}
                                className="h-9 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-quicksand">
                            Potencializamos Criatividade Humana em Transformação Positiva com Inteligência Artificial.
                        </p>
                        <div className="space-y-2 text-sm text-gray-400 font-quicksand">
                            <div className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                                <span>Aracaju, Sergipe - Brasil</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 flex-shrink-0" />
                                <a
                                    href="mailto:contato@hunamy.com.br"
                                    className="hover:text-indigo-400 transition-colors"
                                >
                                    contato@hunamy.com.br
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h3 className="font-heading font-semibold text-lg mb-4 text-white">
                            Serviços
                        </h3>
                        <ul className="space-y-2">
                            {footerSections.servicos.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white text-sm transition-colors font-quicksand"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div>
                        <h3 className="font-heading font-semibold text-lg mb-4 text-white">
                            Empresa
                        </h3>
                        <ul className="space-y-2">
                            {footerSections.empresa.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white text-sm transition-colors font-quicksand"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Resources */}
                    <div>
                        <h3 className="font-heading font-semibold text-lg mb-4 text-white">
                            Recursos
                        </h3>
                        <ul className="space-y-2">
                            {footerSections.recursos.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white text-sm transition-colors font-quicksand"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="mt-12 pt-8 border-t border-white/5">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-quicksand">
                        <p>© {currentYear} Hunamy - Todos os direitos reservados</p>
                        <p>Desenvolvido com 💙 para transformar vidas</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
