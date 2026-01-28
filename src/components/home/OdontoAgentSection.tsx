import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { MessageSquare, BarChart3, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const cards = [
  {
    icon: MessageSquare,
    title: "Para o Paciente",
    description: "Resposta imediata, conversa natural, agendamento sem fricção. O paciente se sente acolhido desde o primeiro contato.",
  },
  {
    icon: BarChart3,
    title: "Para o Doutor",
    description: "Relatórios automáticos, controle da agenda pelo WhatsApp, paz de espírito. Decisões baseadas em dados, não em achismo.",
  },
  {
    icon: Zap,
    title: "Para a Secretária",
    description: "Menos perguntas repetitivas, menos sobrecarga. A IA cuida do operacional, ela foca no atendimento humano de qualidade.",
  },
];

export function OdontoAgentSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="odontoagent" className="relative py-20 lg:py-28 overflow-hidden bg-mesh-gradient-dark" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gold/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-navy-light/20 rounded-full blur-[120px]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-5 py-2.5 mb-6 text-sm font-semibold glass-card text-gold rounded-full border border-gold/30">
              OdontoAgent
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-6"
          >
            O assistente de IA que sua clínica precisa{" "}
            <span className="text-odontoagent">→</span>{" "}
            <span className="text-odontoagent">mas que seus pacientes nem vão perceber que é tecnologia.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            Atendimento humanizado 24h no WhatsApp. Agendamento automático. Qualificação inteligente de leads. Dados em tempo real. Tudo isso adaptado à rotina única da sua clínica.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="glass-card-dark-accent rounded-2xl p-6 lg:p-8 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gold/20 flex items-center justify-center">
                <card.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-sm lg:text-base text-white/70 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-gold hover:shadow-gold-glow text-navy-dark font-bold text-base px-8 py-6 shadow-lg transition-all duration-300"
          >
            <Link to="/detalhes">
              Ver como funciona em detalhes
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
