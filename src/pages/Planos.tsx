import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { 
  MessageCircle, 
  Check, 
  X,
  Sparkles, 
  Clock, 
  Brain, 
  CalendarCheck,
  Filter,
  Puzzle,
  BarChart3,
  Heart,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/551137219385?text=Olá%20Deborah,%20gostaria%20de%20saber%20mais%20sobre%20os%20planos%20do%20OdontoAgent.";

// Cards "O que seu paciente vive"
const patientCards = [
  {
    icon: Clock,
    title: "Resposta imediata",
    description: "O paciente manda mensagem a qualquer hora — madrugada, domingo, feriado. A Laura responde na hora, com naturalidade.",
  },
  {
    icon: Brain,
    title: "Conversa que entende",
    description: "Nada de bots que ignoram a pergunta. A IA compreende o contexto, tira dúvidas e conduz a conversa sem atrito.",
  },
  {
    icon: CalendarCheck,
    title: "Agendamento sem esforço",
    description: "O paciente escolhe o horário, confirma a consulta e recebe lembrete. Tudo dentro do WhatsApp.",
  },
];

// Cards "O que sua clínica ganha"
const clinicCards = [
  {
    icon: Filter,
    title: "Qualificação inteligente",
    description: "A IA identifica urgência, interesse e perfil — priorizando quem está pronto para fechar.",
  },
  {
    icon: Puzzle,
    title: "Integração total",
    description: "Conecta com sua agenda, CRM e ferramentas existentes. A rotina da secretária não muda, só melhora.",
  },
  {
    icon: BarChart3,
    title: "Dados em tempo real",
    description: "Métricas de atendimento, origem de leads, taxa de conversão. Você decide com clareza, não com achismo.",
  },
];

// Planos
const plans = [
  {
    name: "Essencial",
    description: "Para clínicas iniciando na automação",
    price: "Sob Consulta",
    highlight: "Nunca mais perca um lead por falta de resposta.",
    features: [
      "Atendimento automatizado 24/7 no WhatsApp",
      "Respostas humanizadas para dúvidas frequentes (FAQ)",
      "Coleta inteligente de dados (nome, contato, interesse)",
      "Triagem inicial e encaminhamento para a equipe",
      "Integração básica com Google Sheets",
      "Suporte por e-mail",
      "Relatórios mensais de atendimento",
    ],
    idealFor: "Clínicas que querem começar a automação com segurança, sem perder leads por demora no WhatsApp.",
    highlighted: false,
  },
  {
    name: "Avançado",
    description: "Para clínicas em crescimento",
    price: "Sob Consulta",
    highlight: "Transforme seu WhatsApp em uma máquina de agendamentos.",
    features: [
      "Tudo do plano Essencial, mais:",
      "Agendamento automático integrado à sua agenda",
      "Confirmação e lembretes automáticos de consultas",
      "Follow-up inteligente de leads não convertidos",
      "Reativação de pacientes inativos",
      "Qualificação inteligente de leads por perfil",
      "Integração com Google Calendar, Clinicorp, Simples Dental",
      "Integração parcial com CRM (envio de dados)",
      "Suporte prioritário",
      "Relatórios semanais detalhados",
    ],
    idealFor: "Clínicas que querem automatizar agendamentos, reduzir faltas e aumentar a conversão de pacientes.",
    highlighted: true,
  },
  {
    name: "Performance",
    description: "Para clínicas que querem escalar",
    price: "Sob Consulta",
    highlight: "O ecossistema completo de crescimento da sua clínica.",
    features: [
      "Tudo do plano Avançado, mais:",
      "IA 100% personalizada para o tom e linguagem da clínica",
      "Fluxos customizados por tipo de tratamento",
      "Assistente pessoal do doutor via WhatsApp",
      "Assistente da secretária com alertas e notificações",
      "Dashboard de métricas em tempo real",
      "Relatórios diários automáticos de performance",
      "Integração completa bidirecional com CRM",
      "Integração com tráfego pago (origem, ROI, campanhas)",
      "Campanhas sazonais automatizadas",
      "Suporte dedicado com SLA",
      "Treinamento completo da equipe",
      "Acompanhamento estratégico mensal",
    ],
    idealFor: "Clínicas que querem dominar o digital com inteligência, dados e automação completa.",
    highlighted: false,
  },
];

// Tabela comparativa
const comparisonData = {
  categories: [
    {
      name: "ATENDIMENTO",
      features: [
        { name: "Atendimento automatizado 24/7", essencial: true, avancado: true, performance: true },
        { name: "Respostas humanizadas (FAQ)", essencial: true, avancado: true, performance: true },
        { name: "Coleta de dados do paciente", essencial: true, avancado: true, performance: true },
        { name: "Triagem e encaminhamento", essencial: true, avancado: true, performance: true },
        { name: "IA com linguagem personalizada", essencial: false, avancado: false, performance: true },
        { name: "Fluxos por tipo de tratamento", essencial: false, avancado: false, performance: true },
      ],
    },
    {
      name: "AGENDAMENTO",
      features: [
        { name: "Envio de horários disponíveis", essencial: true, avancado: true, performance: true },
        { name: "Agendamento automático", essencial: false, avancado: true, performance: true },
        { name: "Confirmação automática", essencial: false, avancado: true, performance: true },
        { name: "Lembretes de consulta", essencial: false, avancado: true, performance: true },
        { name: "Reagendamento automático", essencial: false, avancado: true, performance: true },
      ],
    },
    {
      name: "RELACIONAMENTO",
      features: [
        { name: "Follow-up de leads", essencial: false, avancado: true, performance: true },
        { name: "Reativação de pacientes inativos", essencial: false, avancado: true, performance: true },
        { name: "Pós-consulta automatizado", essencial: false, avancado: false, performance: true },
        { name: "Campanhas sazonais", essencial: false, avancado: false, performance: true },
      ],
    },
    {
      name: "INTEGRAÇÕES",
      features: [
        { name: "Google Sheets", essencial: true, avancado: true, performance: true },
        { name: "Google Calendar", essencial: false, avancado: true, performance: true },
        { name: "Clinicorp / Simples Dental", essencial: false, avancado: true, performance: true },
        { name: "CRM (integração parcial)", essencial: false, avancado: true, performance: true },
        { name: "CRM (integração completa)", essencial: false, avancado: false, performance: true },
        { name: "Tráfego pago (origem/ROI)", essencial: false, avancado: false, performance: true },
      ],
    },
    {
      name: "GESTÃO E DADOS",
      features: [
        { name: "Relatórios básicos (mensais)", essencial: true, avancado: true, performance: true },
        { name: "Relatórios detalhados (semanais)", essencial: false, avancado: true, performance: true },
        { name: "Relatórios diários automáticos", essencial: false, avancado: false, performance: true },
        { name: "Dashboard em tempo real", essencial: false, avancado: false, performance: true },
        { name: "Métricas de conversão e CAC", essencial: false, avancado: false, performance: true },
      ],
    },
    {
      name: "PARA O DOUTOR",
      features: [
        { name: "Assistente pessoal via WhatsApp", essencial: false, avancado: false, performance: true },
        { name: "Cancelar/remarcar pelo WhatsApp", essencial: false, avancado: false, performance: true },
        { name: "Alertas e notificações", essencial: false, avancado: false, performance: true },
        { name: "Suporte a múltiplos doutores", essencial: false, avancado: false, performance: true },
      ],
    },
    {
      name: "SUPORTE",
      features: [
        { name: "Suporte por e-mail", essencial: true, avancado: true, performance: true },
        { name: "Suporte prioritário", essencial: false, avancado: true, performance: true },
        { name: "Suporte dedicado com SLA", essencial: false, avancado: false, performance: true },
        { name: "Treinamento da equipe", essencial: false, avancado: false, performance: true },
        { name: "Acompanhamento estratégico mensal", essencial: false, avancado: false, performance: true },
      ],
    },
  ],
};

const Planos = () => {
  const howItWorksRef = useRef(null);
  const plansRef = useRef(null);
  const tableRef = useRef(null);
  const isHowItWorksInView = useInView(howItWorksRef, { once: true, margin: "-100px" });
  const isPlansInView = useInView(plansRef, { once: true, margin: "-100px" });
  const isTableInView = useInView(tableRef, { once: true, margin: "-100px" });

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-accent/10 text-accent rounded-full">
              Planos e Como Funciona
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Entenda o OdontoAgent e escolha o{" "}
              <span className="text-odontoagent">plano ideal</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Veja como funciona o atendimento automatizado e encontre a solução perfeita para o momento da sua clínica.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO: COMO FUNCIONA */}
      <section className="py-16 lg:py-24 bg-hero-champagne grain-texture" ref={howItWorksRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHowItWorksInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 mb-6 text-sm font-medium glass-card-premium text-primary rounded-full border border-gold/20">
                Como Funciona
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isHowItWorksInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-dark mb-4"
            >
              Atendimento que converte —{" "}
              <span className="text-odontoagent">nos bastidores e na ponta.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isHowItWorksInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base lg:text-lg text-navy/70"
            >
              Enquanto seu paciente tem a melhor experiência, sua clínica ganha inteligência para crescer.
            </motion.p>
          </div>

          {/* Bloco 1: O que seu paciente vive */}
          <div className="max-w-5xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHowItWorksInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center justify-center gap-2 mb-8"
            >
              <Heart className="w-5 h-5 text-accent" />
              <span className="text-lg font-semibold text-navy-dark">O que seu paciente vive</span>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {patientCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isHowItWorksInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="glass-card-premium rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center">
                    <card.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-dark mb-2">{card.title}</h3>
                  <p className="text-sm text-navy/70 leading-relaxed">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Separador */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="h-px bg-gradient-to-r from-transparent via-navy/20 to-transparent" />
          </div>

          {/* Bloco 2: O que sua clínica ganha */}
          <div className="max-w-5xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHowItWorksInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center justify-center gap-2 mb-8"
            >
              <Settings className="w-5 h-5 text-accent" />
              <span className="text-lg font-semibold text-navy-dark">O que sua clínica ganha</span>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {clinicCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isHowItWorksInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="glass-card-premium rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 border border-navy/10"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-navy/10 flex items-center justify-center">
                    <card.icon className="w-6 h-6 text-navy" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-dark mb-2">{card.title}</h3>
                  <p className="text-sm text-navy/70 leading-relaxed">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Frase de transição */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isHowItWorksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-center text-lg lg:text-xl text-navy/80 italic max-w-2xl mx-auto"
          >
            Agora escolha o nível de automação ideal para o momento da{" "}
            <span className="text-odontoagent font-semibold not-italic">sua clínica</span>.
          </motion.p>
        </div>
      </section>

      {/* SEÇÃO: CARDS DOS PLANOS */}
      <section className="py-16 lg:py-24 bg-background" ref={plansRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isPlansInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-accent/10 text-accent rounded-full">
                Planos
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isPlansInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4"
            >
              Escolha o plano ideal para sua{" "}
              <span className="text-odontoagent">clínica</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isPlansInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base lg:text-lg text-muted-foreground"
            >
              Cada implementação é 100% personalizada. O OdontoAgent se adapta ao seu fluxo de trabalho, à sua rotina e ao momento do seu negócio.
            </motion.p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isPlansInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`relative rounded-2xl p-6 lg:p-8 flex flex-col ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground border-2 border-accent shadow-2xl md:scale-105"
                    : "bg-card border border-border"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1 bg-accent text-accent-foreground text-sm font-bold rounded-full">
                      <Sparkles size={14} />
                      Melhor Custo-Benefício
                    </span>
                  </div>
                )}

                <div className="mb-4">
                  <h3 className={`text-xl lg:text-2xl font-bold mb-1 ${
                    plan.highlighted ? "text-primary-foreground" : "text-primary"
                  }`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${
                    plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-4">
                  <p className={`text-2xl lg:text-3xl font-bold ${
                    plan.highlighted ? "text-accent" : "text-accent"
                  }`}>
                    {plan.price}
                  </p>
                </div>

                <p className={`text-sm font-semibold mb-4 ${
                  plan.highlighted ? "text-accent" : "text-odontoagent"
                }`}>
                  "{plan.highlight}"
                </p>

                <ul className="space-y-2 mb-6 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check 
                        className={`mt-0.5 flex-shrink-0 ${
                          plan.highlighted ? "text-accent" : "text-accent"
                        }`} 
                        size={16} 
                      />
                      <span className={`text-sm ${
                        plan.highlighted ? "text-primary-foreground/90" : "text-foreground/80"
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className={`text-xs italic mb-4 ${
                  plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}>
                  Ideal para: {plan.idealFor}
                </p>

                <Button
                  asChild
                  className={`w-full font-semibold ${
                    plan.highlighted
                      ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                      : "bg-primary hover:bg-primary/90 text-primary-foreground"
                  }`}
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2" size={18} />
                    Solicitar Proposta
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO: TABELA COMPARATIVA */}
      <section className="py-16 lg:py-24 bg-secondary" ref={tableRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isTableInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4"
            >
              Compare os planos
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isTableInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base lg:text-lg text-muted-foreground"
            >
              Veja em detalhes o que cada plano oferece para sua clínica.
            </motion.p>
          </div>

          {/* Tabela */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTableInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-5xl mx-auto overflow-x-auto"
          >
            <table className="w-full bg-card rounded-2xl overflow-hidden shadow-lg">
              {/* Header da tabela */}
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 lg:p-6 font-semibold text-primary bg-muted/50">
                    Funcionalidade
                  </th>
                  <th className="text-center p-4 lg:p-6 font-semibold text-primary bg-muted/50 min-w-[100px]">
                    Essencial
                  </th>
                  <th className="text-center p-4 lg:p-6 font-bold text-accent bg-primary/10 min-w-[100px]">
                    Avançado ★
                  </th>
                  <th className="text-center p-4 lg:p-6 font-semibold text-primary bg-muted/50 min-w-[100px]">
                    Performance
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.categories.map((category) => (
                  <>
                    {/* Linha de categoria */}
                    <tr key={category.name} className="bg-muted/30">
                      <td colSpan={4} className="p-3 lg:p-4 font-bold text-sm text-primary uppercase tracking-wide">
                        {category.name}
                      </td>
                    </tr>
                    {/* Linhas de features */}
                    {category.features.map((feature, idx) => (
                      <tr 
                        key={feature.name} 
                        className={`border-b border-border/50 hover:bg-muted/20 transition-colors ${
                          idx % 2 === 0 ? '' : 'bg-muted/10'
                        }`}
                      >
                        <td className="p-3 lg:p-4 text-sm text-foreground/80">
                          {feature.name}
                        </td>
                        <td className="p-3 lg:p-4 text-center">
                          {feature.essencial ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground/40 mx-auto" />
                          )}
                        </td>
                        <td className="p-3 lg:p-4 text-center bg-primary/5">
                          {feature.avancado ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground/40 mx-auto" />
                          )}
                        </td>
                        <td className="p-3 lg:p-4 text-center">
                          {feature.performance ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground/40 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* CTA Final */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTableInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-muted-foreground mb-6">
              Ainda tem dúvidas sobre qual plano escolher?
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" size={20} />
                Fale comigo pelo WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Planos;
