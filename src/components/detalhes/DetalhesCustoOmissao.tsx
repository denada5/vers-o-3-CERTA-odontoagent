import { motion } from "framer-motion";
import { AlertTriangle, Zap, TrendingDown, Clock, BarChart3, Frown, RefreshCw, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/551137219385?text=Olá%20Deborah,%20gostaria%20de%20saber%20mais%20sobre%20o%20OdontoAgent.";

const problemItems = [
  { icon: TrendingDown, text: "Leads perdidos por demora no primeiro contato" },
  { icon: Clock, text: "Equipe sobrecarregada respondendo perguntas repetitivas" },
  { icon: AlertTriangle, text: "Faturamento em risco por oportunidades que escapam" },
  { icon: BarChart3, text: "Sem dados para saber o que funciona ou otimizar campanhas" },
  { icon: Frown, text: "Doutor ansioso, checando WhatsApp fora do horário" },
  { icon: RefreshCw, text: "Pacientes antigos esquecidos, sem follow-up" },
];

const solutionItems = [
  "Resposta instantânea, 24 horas por dia, 7 dias por semana",
  "Qualificação automática: leads prontos chegam organizados",
  "ROI de marketing protegido e otimizado",
  "Dados em tempo real para decisões estratégicas",
  "Doutor com paz de espírito e controle total",
  "Pacientes inativos reativados automaticamente",
];

export function DetalhesCustoOmissao() {
  return (
    <section className="relative py-20 lg:py-28 bg-mesh-gradient-dark overflow-hidden">
      <div className="absolute inset-0 blueprint-lines opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--gold)/0.2)] border border-[hsl(var(--gold)/0.3)]">
            <AlertTriangle className="w-4 h-4 text-[hsl(var(--gold))]" />
            <span className="text-sm font-medium text-[hsl(var(--gold))]">O Custo da Omissão</span>
          </span>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Um lead não respondido em 5 minutos tem{" "}
            <span className="text-[hsl(var(--gold))]">10x menos chance</span> de fechar.
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Enquanto sua equipe está ocupada, pacientes prontos para agendar vão para a concorrência. 
            Nossa IA garante resposta em segundos, protegendo seu faturamento.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Card Sem IA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="glass-card-dark p-8 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Sem automação inteligente</h3>
            </div>

            <ul className="space-y-4">
              {problemItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white/80">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card Com OdontoAgent */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="glass-card-dark-accent p-8 rounded-2xl border-beam relative pt-12 mt-4"
          >
            {/* Recommended Badge - Fixed with better visibility */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
              <span className="inline-block px-5 py-2 bg-gradient-to-r from-[hsl(30,40%,50%)] via-[hsl(30,45%,65%)] to-[hsl(30,50%,75%)] text-[hsl(220,45%,15%)] text-xs font-bold rounded-full shadow-xl whitespace-nowrap">
                RECOMENDADO
              </span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[hsl(var(--gold)/0.2)] flex items-center justify-center">
                <Zap className="w-6 h-6 text-[hsl(var(--gold))]" />
              </div>
              <h3 className="text-xl font-bold text-white">Com OdontoAgent</h3>
            </div>

            <ul className="space-y-4">
              {solutionItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[hsl(var(--gold))] mt-0.5 flex-shrink-0" />
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-gold hover:shadow-gold-glow text-navy-dark font-bold text-base px-8 py-6 shadow-lg transition-all duration-300"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2" size={20} />
              Quero proteger meu faturamento
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
