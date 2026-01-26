import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Clock, TrendingUp, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/551137219385?text=Olá%20Deborah,%20gostaria%20de%20saber%20mais%20sobre%20os%20planos%20do%20OdontoAgent.";

const stats = [
  {
    icon: Users,
    value: "78%",
    label: "dos pacientes escolhem a clínica que responde primeiro",
  },
  {
    icon: Clock,
    value: "60%",
    label: "das mensagens chegam fora do horário comercial",
  },
  {
    icon: TrendingUp,
    value: "3x",
    label: "mais agendamentos com atendimento 24h",
  },
  {
    icon: AlertTriangle,
    value: "10x",
    label: "menos chance de fechar um lead não respondido em 5 min",
  },
];

export function ProofSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-hero-champagne grain-texture" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gold/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-navy/5 rounded-full blur-[60px]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-navy-dark leading-tight mb-6"
          >
            Por que clínicas estão{" "}
            <span className="text-odontoagent">automatizando o atendimento?</span>
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="glass-card-premium rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-navy/10 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-navy" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-odontoagent mb-2">
                {stat.value}
              </div>
              <p className="text-xs sm:text-sm text-navy/70 leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Support text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-base lg:text-lg text-navy/70 max-w-2xl mx-auto mb-10"
        >
          O <span className="text-odontoagent font-semibold">OdontoAgent</span> garante que sua clínica esteja sempre pronta — mesmo quando você não está.
        </motion.p>

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
            <Link to="/planos">
              Quero proteger meu faturamento
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
