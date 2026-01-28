import { motion } from "framer-motion";
import { Calendar, MessageSquare, Database, FileSpreadsheet, Globe, Building2, Briefcase, Bot } from "lucide-react";

const integrations = [
  { name: "Google Calendar", icon: Calendar },
  { name: "Clinicorp", icon: Building2 },
  { name: "Simples Dental", icon: Briefcase },
  { name: "Dental Office", icon: Database },
  { name: "RD Station", icon: Globe },
  { name: "Doctoralia", icon: Bot },
  { name: "Google Sheets", icon: FileSpreadsheet },
  { name: "E muitas outras...", icon: MessageSquare },
];

const benefits = [
  "Centraliza atendimento, agenda e CRM em um só fluxo.",
  "Conecta dados entre equipe, pacientes e doutores.",
  "Aumenta a eficiência sem alterar a rotina da clínica.",
];

export function DetalhesIntegracoes() {
  return (
    <section className="relative py-20 lg:py-28 bg-mesh-gradient-dark overflow-hidden">
      <div className="absolute inset-0 blueprint-lines opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Integração Total com seu <span className="text-[hsl(var(--gold))]">Ecossistema</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            O OdontoAgent se conecta com as ferramentas que sua clínica já usa, sem exigir mudanças na rotina.
          </p>
        </motion.div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="glass-card-dark p-6 rounded-xl flex flex-col items-center gap-3 text-center transition-all duration-300 hover:border-[hsl(var(--gold)/0.3)]"
            >
              <div className="w-12 h-12 rounded-lg bg-[hsl(var(--gold)/0.15)] flex items-center justify-center">
                <integration.icon className="w-6 h-6 text-[hsl(var(--gold))]" />
              </div>
              <span className="text-white/90 text-sm font-medium">{integration.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto"
        >
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 text-white/80">
              <span className="w-2 h-2 rounded-full bg-[hsl(var(--gold))]" />
              <span>{benefit}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
