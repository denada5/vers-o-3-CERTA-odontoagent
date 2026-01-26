import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Stethoscope, UserRound, Headset, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const profiles = [
  {
    id: "paciente",
    icon: UserRound,
    label: "Para o Paciente",
    title: "Experiência que Fideliza",
    intro: "O paciente sente a diferença desde o primeiro contato. Resposta rápida, conversa natural, agendamento sem fricção. Ele se sente acolhido, compreendido e valorizado — fortalecendo a imagem da clínica.",
    benefits: [
      "Resposta imediata, sem espera — mesmo às 3h da manhã",
      "Conversa humanizada que entende o contexto e a necessidade",
      "Informações claras sobre tratamentos, valores e procedimentos",
      "Agendamento simples e direto pelo WhatsApp",
      "Lembretes automáticos que reduzem faltas",
      "Follow-up pós-consulta que mostra cuidado",
      "Privacidade garantida com conformidade LGPD",
    ],
    impact: "Pacientes que se sentem bem atendidos voltam — e indicam.",
  },
  {
    id: "doutor",
    icon: Stethoscope,
    label: "Para o Doutor",
    title: "Clareza, Controle e Autonomia",
    intro: "O doutor ganha um assistente digital pessoal que oferece visão completa da operação. Relatórios automáticos, métricas de performance, e controle total da agenda — tudo direto no WhatsApp, sem precisar de sistemas complexos.",
    benefits: [
      "Relatórios automáticos de atendimentos, consultas e conversão",
      "Cancelar, remarcar ou consultar agenda pelo WhatsApp",
      "Insights de performance: horários de pico, taxa de conversão, origem de leads",
      "Alertas em tempo real sobre urgências e oportunidades",
      "Suporte a múltiplos doutores com agendas independentes",
      "Decisões baseadas em dados, não em achismo",
      "Paz de espírito — a clínica funciona mesmo quando você não está olhando",
    ],
    impact: "Menos ansiedade, mais previsibilidade. Você no controle.",
  },
  {
    id: "secretaria",
    icon: Headset,
    label: "Para a Secretária",
    title: "Alívio Operacional Imediato",
    intro: "A secretária deixa de ser refém do WhatsApp. A IA cuida das perguntas repetitivas, dos agendamentos, das confirmações e dos lembretes. Sobra tempo para o atendimento humano de qualidade e para tarefas estratégicas.",
    benefits: [
      "Redução de até 60% nas tarefas repetitivas",
      "Respostas automáticas para dúvidas frequentes",
      "Agendamentos e confirmações sem ação manual",
      "Reagendamentos automáticos quando necessário",
      "Notificações organizadas sobre o que precisa de atenção",
      "Menos estresse, mais produtividade",
      "A IA como braço auxiliar, não como substituta",
    ],
    impact: "Menos sobrecarga, mais tempo para o que realmente importa.",
  },
];

export function DetalhesBeneficios() {
  const [activeProfile, setActiveProfile] = useState("paciente");
  const currentProfile = profiles.find((p) => p.id === activeProfile)!;

  return (
    <section className="relative py-20 lg:py-28 bg-mesh-gradient-dark overflow-hidden">
      <div className="absolute inset-0 blueprint-lines opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Resultados reais para quem faz a clínica funcionar
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            O OdontoAgent foi desenhado para impactar positivamente cada pessoa envolvida na operação da clínica.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {profiles.map((profile) => (
            <button
              key={profile.id}
              onClick={() => setActiveProfile(profile.id)}
              className={cn(
                "flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300",
                activeProfile === profile.id
                  ? "bg-gradient-gold text-primary-foreground shadow-gold-glow"
                  : "bg-white/10 text-white/80 hover:bg-white/20"
              )}
            >
              <profile.icon className="w-5 h-5" />
              {profile.label}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProfile}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="glass-card-dark p-8 lg:p-12 rounded-3xl max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[hsl(var(--gold)/0.2)] flex items-center justify-center">
                <currentProfile.icon className="w-8 h-8 text-[hsl(var(--gold))]" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white">
                {currentProfile.title}
              </h3>
            </div>

            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              {currentProfile.intro}
            </p>

            <ul className="grid sm:grid-cols-2 gap-4 mb-8">
              {currentProfile.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[hsl(var(--gold))] mt-0.5 flex-shrink-0" />
                  <span className="text-white/90">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-white/10">
              <p className="text-xl font-semibold text-[hsl(var(--gold))] italic">
                "{currentProfile.impact}"
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
