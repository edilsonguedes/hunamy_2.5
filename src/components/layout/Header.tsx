"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Sobre", href: "/sobre" },
        { label: "Serviços", href: "/servicos" },
        { label: "Método", href: "/#metodo" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/5",
                isScrolled
                    ? "bg-black/60 backdrop-blur-xl py-2 shadow-2xl"
                    : "bg-transparent py-4"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/">
                            <Image
                                src="/logo-new.png"
                                alt="Hunamy"
                                width={140}
                                height={40}
                                className="h-5 w-auto object-contain brightness-0 invert"
                            />
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex justify-center flex-1">
                        <div className="flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors font-quicksand tracking-wide"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            type="button"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? <X className="text-3xl" /> : <Menu className="text-3xl" />}
                        </button>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            href="/contato"
                            className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-bold rounded-full text-black bg-white hover:bg-gray-200 transition-colors shadow-lg font-quicksand"
                        >
                            Falar com Especialista
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "md:hidden fixed top-0 left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/10 h-screen transition-transform duration-300 ease-in-out z-40",
                    isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                )}
                style={{ top: "0", paddingTop: "80px" }}
            >
                <div className="px-4 pt-8 pb-3 space-y-6 flex flex-col items-center justify-center h-[80vh]">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-3xl font-heading font-medium text-white block px-3 py-2 rounded-md hover:text-indigo-400 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contato"
                        className="w-full mt-8 bg-white text-black font-bold py-4 rounded-full text-center text-lg shadow-xl font-quicksand"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Falar com Especialista
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;
