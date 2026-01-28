import { motion } from "framer-motion";
import { Brain, ArrowRightLeft, Palette, Shield, Sparkles, Headphones, RefreshCw } from "lucide-react";

const differentials = [
  {
    icon: Brain,
    title: "IA com Memória de Contexto",
    description: "A IA lembra das conversas anteriores. Se o paciente volta depois de dias, ela retoma de onde parou, sem perguntar tudo de novo.",
  },
  {
    icon: ArrowRightLeft,
    title: "Handoff Inteligente",
    description: "Transição suave entre IA e humano. O doutor ou secretária assume quando quiser, e a IA volta automaticamente depois, com todo o contexto preservado.",
  },
  {
    icon: Palette,
    title: "Personalização por Clínica",
    description: "Tom de voz, linguagem, fluxos e regras adaptados à identidade e rotina de cada clínica. Cada solução é única para o seu negócio.",
  },
  {
    icon: Shield,
    title: "Conformidade LGPD",
    description: "Dados sensíveis tratados com segurança. Armazenamento adequado, consentimento registrado, privacidade garantida.",
  },
  {
    icon: Sparkles,
    title: "Evolução Contínua",
    description: "O sistema é atualizado constantemente. Novas funcionalidades, melhorias de IA e otimizações para sua clínica sempre com tecnologia de ponta.",
  },
  {
    icon: Headphones,
    title: "Suporte Dedicado",
    description: "Sua clínica terá suporte completo para lidar com o sistema, tirar dúvidas e aprender a usar todas as funcionalidades com confiança.",
  },
  {
    icon: RefreshCw,
    title: "Acompanhamento Contínuo",
    description: "Serviço de manutenção de qualidade que mantém, melhora e certifica que tudo funcione do jeito certo, sem desespero.",
  },
];

export function DetalhesDiferenciais() {
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
            Por que o <span className="text-odontoagent">OdontoAgent</span> é diferente
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Não é mais um chatbot genérico. É tecnologia de verdade, construída para clínicas odontológicas.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 12px 50px hsl(var(--gold) / 0.2)",
              }}
              className="glass-card-premium p-6 rounded-2xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
