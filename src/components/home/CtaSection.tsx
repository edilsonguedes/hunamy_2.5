import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import SectionContainer from "../ui/SectionContainer";

const CtaSection = () => {
    return (
        <SectionContainer maxWidth="xl" padding="lg">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-anil-600 to-anil-700 p-8 md:p-12">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
                    <h2 className="font-bricolage font-bold text-3xl md:text-4xl text-white">
                        Pronto para Potencializar Sua Criatividade?
                    </h2>
                    <p className="text-lg text-anil-50">
                        Vamos transformar sua visão em realidade. Agende uma conversa estratégica de 30 minutos sem compromisso.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <Link href="/contato">
                            <Button
                                variant="secondary"
                                size="lg"
                                className="bg-white text-anil-600 hover:bg-anil-50"
                            >
                                Agendar Diagnóstico Gratuito
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                        </Link>
                    </div>

                    <p className="text-sm text-anil-100 pt-2">
                        ✓ Sem compromis so ✓ Respondemos em até 24h ✓ 100% personalizado
                    </p>
                </div>
            </div>
        </SectionContainer>
    );
};

export default CtaSection;
