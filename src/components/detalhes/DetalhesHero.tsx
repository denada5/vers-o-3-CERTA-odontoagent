import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/551137219385?text=Olá%20Deborah,%20gostaria%20de%20agendar%20um%20diagnóstico%20para%20minha%20clínica.";

export function DetalhesHero() {
  return (
    <section className="relative py-20 lg:py-32 bg-mesh-gradient-dark overflow-hidden">
      {/* Blueprint lines overlay */}
      <div className="absolute inset-0 blueprint-lines opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--gold)/0.2)] border border-[hsl(var(--gold)/0.3)] mb-8"
          >
            <Sparkles className="w-4 h-4 text-[hsl(var(--gold))]" />
            <span className="text-sm font-medium text-[hsl(var(--gold))]">
              Detalhes OdontoAgent
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Muito mais que um chatbot.{" "}
            <span className="text-odontoagent">
              Um ecossistema inteligente
            </span>{" "}
            para sua clínica.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg sm:text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Conheça em profundidade como o OdontoAgent transforma o atendimento, 
            a operação e o crescimento da sua clínica odontológica.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-gold text-primary-foreground font-bold px-8 py-6 text-lg shadow-gold-glow hover:shadow-[0_0_30px_hsl(var(--gold)/0.6)] transition-all duration-300"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Agendar Demonstração
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
