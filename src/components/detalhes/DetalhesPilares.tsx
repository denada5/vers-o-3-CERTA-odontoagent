import { motion } from "framer-motion";
import { Brain, BarChart3, Layers, Check } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "Eficiência Cognitiva",
    tag: "Inteligência Real",
    description: "IA que compreende contexto clínico e responde com precisão. Não é um bot burro que segue scripts — é inteligência que aprende, adapta e evolui com a rotina da sua clínica.",
    bullets: [
      "Compreensão de contexto e intenção",
      "Respostas precisas e humanizadas",
      "Redução de até 80% no esforço da equipe",
      "IA que melhora com o tempo",
    ],
  },
  {
    icon: BarChart3,
    title: "Conversão Data-Driven",
    tag: "Dados que Convertem",
    description: "Seu WhatsApp transformado em um funil de vendas baseado em dados. Métricas em tempo real para otimizar cada etapa do atendimento e maximizar a conversão de leads em pacientes.",
    bullets: [
      "Métricas de conversão em tempo real",
      "Análise de origem de leads (tráfego pago, orgânico)",
      "Identificação de gargalos no atendimento",
      "ROI de marketing mensurável",
    ],
  },
  {
    icon: Layers,
    title: "Arquitetura Escalável",
    tag: "Escala Ilimitada",
    description: "Integrações com CRMs e sistemas existentes. Suporte de 10 a 10.000 atendimentos sem perder qualidade. Cresce junto com sua clínica, sem precisar recomeçar.",
    bullets: [
      "Integração com Clinicorp, Simples Dental, RD Station",
      "Google Calendar, Doctoralia e outros",
      "Escala ilimitada de atendimentos",
      "Estrutura que acompanha seu crescimento",
    ],
  },
];

export function DetalhesPilares() {
  return (
    <section className="relative py-20 lg:py-28 bg-hero-champagne grain-texture overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Os 3 Pilares de Impacto
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Uma solução completa que une tecnologia de ponta com estratégia de crescimento.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 12px 50px hsl(var(--gold) / 0.25)",
              }}
              className="glass-card-premium p-8 rounded-2xl transition-all duration-300"
            >
              {/* Tag */}
              <span className="inline-block px-3 py-1 text-xs font-bold bg-gradient-gold text-primary-foreground rounded-full mb-4">
                {pillar.tag}
              </span>

              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <pillar.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">{pillar.title}</h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {pillar.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-3">
                {pillar.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[hsl(var(--gold))] flex-shrink-0" />
                    <span className="text-foreground/80">{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
