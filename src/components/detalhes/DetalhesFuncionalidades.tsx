import { motion } from "framer-motion";
import { Calendar, Moon, Users, Heart, Check } from "lucide-react";

const features = [
  {
    icon: Calendar,
    badge: "AGENDAMENTO AUTÔNOMO",
    title: "Autonomia Total de Agendamento",
    description: "A IA não apenas responde — ela agenda. Consulta horários disponíveis, oferece opções ao paciente, confirma a consulta e atualiza sua agenda automaticamente. Tudo isso integrado com Google Calendar, Clinicorp, Simples Dental e outros sistemas.",
    bullets: [
      "Agendamento direto pelo WhatsApp",
      "Integração com agenda e CRM",
      "Confirmação automática instantânea",
      "Zero trabalho manual para a equipe",
    ],
  },
  {
    icon: Moon,
    badge: "NUNCA PARA",
    title: "Paz de Espírito 24/7",
    description: "Sua clínica nunca dorme. A IA atende pacientes em feriados, madrugadas e finais de semana com a mesma qualidade. Filtra emergências reais, qualifica leads e garante que nenhuma oportunidade seja perdida enquanto você descansa.",
    bullets: [
      "Atendimento em feriados e madrugadas",
      "Filtro inteligente de emergências",
      "Proteção do faturamento 24h",
      "Você descansa, a clínica continua",
    ],
  },
  {
    icon: Users,
    badge: "CONTROLE TOTAL",
    title: "Assistente Pessoal do Time",
    description: "Menos carga para a secretária, mais controle para o doutor. A IA envia lembretes automáticos, faz follow-up com leads que não agendaram, gera relatórios de desempenho e mantém toda a operação organizada e previsível.",
    bullets: [
      "Lembretes automáticos para pacientes",
      "Follow-up inteligente de leads",
      "Relatórios diários para o doutor",
      "Equipe focada no que importa",
    ],
  },
  {
    icon: Heart,
    badge: "TOQUE HUMANO",
    title: "Integração Humana Fluida",
    description: "A tecnologia nunca atrapalha o toque humano. Se o doutor ou a secretária quiser assumir uma conversa, a IA cede o espaço de forma invisível. E quando o humano termina, a IA retoma com todo o contexto preservado.",
    bullets: [
      "Handoff invisível e coordenado",
      "Contexto preservado em toda transição",
      "Controle total do doutor a qualquer momento",
      "IA que sabe quando sair de cena",
    ],
  },
];

export function DetalhesFuncionalidades() {
  return (
    <section className="relative py-20 lg:py-28 bg-hero-champagne grain-texture overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-sm font-medium text-primary">Funcionalidades</span>
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            O que a <span className="text-odontoagent">OdontoAgent</span> faz pela sua clínica
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Uma solução completa que transforma a forma como sua clínica atende, agenda, se relaciona e cresce.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 12px 50px hsl(var(--gold) / 0.2)",
              }}
              className="glass-card-premium p-8 rounded-2xl transition-all duration-300"
            >
              {/* Badge */}
              <span className="inline-block px-3 py-1 text-xs font-bold bg-gradient-gold text-primary-foreground rounded-full mb-4">
                {feature.badge}
              </span>

              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">{feature.title}</h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-3">
                {feature.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-center gap-3">
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
