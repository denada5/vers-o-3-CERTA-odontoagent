import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageSquare, Calendar } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/551137219385?text=Olá%20Deborah,%20gostaria%20de%20agendar%20um%20diagnóstico%20para%20minha%20clínica.";

export function DetalhesCTA() {
  return (
    <section className="relative py-20 lg:py-28 bg-hero-champagne grain-texture overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(var(--gold)/0.05)] to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Pronto para transformar seu WhatsApp em uma{" "}
            <span className="text-odontoagent">máquina de resultados</span>?
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Agende uma demonstração gratuita e veja na prática como o OdontoAgent pode 
            fazer sua clínica crescer com IA e automação inteligente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-gold text-primary-foreground font-bold px-8 py-6 text-lg shadow-gold-glow hover:shadow-[0_0_30px_hsl(var(--gold)/0.6)] transition-all duration-300"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Demonstração
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary font-bold px-8 py-6 text-lg hover:bg-primary/5 transition-all duration-300"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="w-5 h-5 mr-2" />
                Falar pelo WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
