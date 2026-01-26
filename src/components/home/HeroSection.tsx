import { motion } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/551137219385?text=Olá%20Deborah,%20gostaria%20de%20agendar%20um%20diagnóstico%20para%20minha%20clínica.";

export function HeroSection() {
  const scrollToOdontoAgent = () => {
    const element = document.getElementById("odontoagent");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden grain-texture blueprint-lines">
      {/* Champagne/Gold Off-White Background */}
      <div className="absolute inset-0 bg-hero-champagne" />
      
      {/* Subtle decorative orbs */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-gold/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-navy-light/8 rounded-full blur-[80px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-light/5 rounded-full blur-[120px]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-5 py-2.5 mb-6 text-sm font-semibold glass-card-premium text-primary rounded-full border border-gold/20">
              Deborah Alves • Ponto de Dados e Automação
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-navy-dark leading-tight mb-6"
          >
            Sua clínica não pode esperar.{" "}
            <span className="text-odontoagent">Seus pacientes também não.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-navy/70 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Sou <strong className="text-navy">Deborah Alves</strong> — especialista em automação, dados e inteligência artificial para clínicas odontológicas. Criei o <span className="text-odontoagent font-semibold">OdontoAgent</span> para resolver um problema que eu mesma vivi como paciente: clínicas excelentes que perdem oportunidades por não responderem a tempo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-gold hover:shadow-gold-glow text-navy-dark font-bold text-base px-8 py-6 shadow-lg transition-all duration-300"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" size={20} />
                Agendar uma Demonstração
              </a>
            </Button>
            <Button
              onClick={scrollToOdontoAgent}
              variant="outline"
              size="lg"
              className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold text-base px-8 py-6 transition-all duration-300"
            >
              Conhecer o OdontoAgent
              <ArrowDown className="ml-2" size={20} />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
