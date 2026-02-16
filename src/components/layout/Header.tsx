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
                "fixed w-full z-50 transition-all duration-300 border-b border-transparent",
                isScrolled
                    ? "bg-black/80 backdrop-blur-md border-b border-white/5 top-0 left-0 shadow-lg"
                    : "bg-black/20 backdrop-blur-sm py-4 border-white/5"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="font-heading text-2xl font-bold tracking-tighter text-white">
                            hunamy
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex justify-center flex-1">
                        <div className="bg-[#1a1a1a]/80 backdrop-blur-sm border border-white/5 rounded-full px-8 py-3 flex items-center space-x-8 shadow-lg">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors font-quicksand"
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
                            className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-[0_0_15px_rgba(79,70,229,0.3)] font-quicksand"
                        >
                            Falar com Especialista
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "md:hidden fixed top-0 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 h-screen transition-transform duration-300 ease-in-out z-40",
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
                        className="w-full mt-8 bg-indigo-600 text-white font-bold py-4 rounded-full text-center text-lg shadow-[0_0_20px_rgba(79,70,229,0.5)] font-quicksand"
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
