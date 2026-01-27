import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/551137219385?text=Olá%20Deborah,%20gostaria%20de%20agendar%20um%20diagnóstico%20para%20minha%20clínica.";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-hero-champagne grain-texture blueprint-lines" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-gold/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-10 right-20 w-64 h-64 bg-navy/5 rounded-full blur-[80px]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-5 py-2.5 mb-6 text-sm font-semibold glass-card-premium text-primary rounded-full border border-gold/20">
              <Sparkles className="inline mr-2" size={16} />
              Pronto para transformar sua clínica?
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-navy-dark leading-tight mb-6"
          >
            Vamos conversar sobre o{" "}
            <span className="text-odontoagent">futuro da sua clínica?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-navy/70 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Agende uma demonstração gratuita e descubra como o OdontoAgent pode aumentar seus agendamentos, reduzir faltas e liberar sua equipe para o que realmente importa: cuidar dos pacientes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
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
                Falar com a Deborah
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold text-base px-8 py-6 transition-all duration-300"
            >
              <Link to="/planos">
                Ver Planos e Preços
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
