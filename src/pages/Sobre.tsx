import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Database, Brain, Zap, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import deborahPhoto from "@/assets/deborah-photo-new.jpeg";

const WHATSAPP_URL = "https://wa.me/551137219385?text=Olá%20Deborah,%20gostaria%20de%20conversar%20sobre%20o%20OdontoAgent.";

const pillars = [
  {
    icon: Database,
    title: "Dados",
    description: "Banco de dados estruturado, métricas em tempo real, decisões baseadas em evidência.",
  },
  {
    icon: Brain,
    title: "IA",
    description: "Atendimento humanizado 24h, qualificação inteligente, memória de contexto.",
  },
  {
    icon: Zap,
    title: "Automação",
    description: "Agendamento automático, integração com suas ferramentas, fluxos personalizados.",
  },
];

const Sobre = () => {
  const storyRef = useRef(null);
  const highlightRef = useRef(null);
  const solutionRef = useRef(null);
  const pillarsRef = useRef(null);

  const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" });
  const isHighlightInView = useInView(highlightRef, { once: true, margin: "-100px" });
  const isSolutionInView = useInView(solutionRef, { once: true, margin: "-100px" });
  const isPillarsInView = useInView(pillarsRef, { once: true, margin: "-100px" });

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-mesh-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium glass-card text-accent rounded-full">
              Sobre
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Conheça <span className="text-odontoagent">Deborah Alves</span> & <span className="text-odontoagent">OdontoAgent</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Unindo Tecnologia, Dados e Estratégia para o Crescimento de Clínicas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* História Pessoal */}
      <section className="py-16 lg:py-24 bg-hero-champagne grain-texture" ref={storyRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
              {/* Foto */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 flex justify-center lg:sticky lg:top-32"
              >
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[28rem]">
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold to-gold-dark blur-2xl opacity-20 scale-105" />
                  
                  {/* Photo container */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl glass-card-premium w-full h-full border border-gold/20">
                    <img
                      src={deborahPhoto}
                      alt="Deborah Alves - Especialista em IA e Automação para Clínicas"
                      className="w-full h-full object-cover object-[center_15%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/30 via-transparent to-transparent" />
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gold/20 rounded-2xl blur-xl" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-navy/10 rounded-2xl blur-xl" />
                </div>
              </motion.div>

              {/* Texto da história */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-3 space-y-6"
              >
                <p className="text-2xl lg:text-3xl font-bold text-navy-dark leading-tight">
                  Eu sei como é estar do outro lado.
                </p>

                <p className="text-base lg:text-lg text-navy/80 leading-relaxed">
                  Já perdi a conta de quantas vezes procurei dentistas, pra mim, pra pessoas próximas, e esbarrei sempre no mesmo problema: clínicas excelentes, profissionais incríveis, mas um WhatsApp que demorava dias pra responder. Ou pior: bots genéricos que ignoravam completamente o que eu perguntava.
                </p>

                <p className="text-base lg:text-lg text-navy/80 leading-relaxed">
                  Quando comecei meu tratamento com Invisalign, precisava de uma clínica que atendesse casos específicos. Mandei mensagem pra várias. Sabe qual fechou comigo? A única que me respondeu de forma rápida, clara e humanizada, <strong className="text-navy">de madrugada</strong>, quando finalmente consegui pesquisar. Era uma IA, e eu nem percebi de tão natural que foi.
                </p>

                <p className="text-base lg:text-lg text-navy/80 leading-relaxed">
                  Enquanto isso, as outras clínicas, algumas com ótimos profissionais, <strong className="text-navy">nunca nem chegaram a me atender</strong>.
                </p>

                {/* CTA após história */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="pt-4"
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-gold hover:shadow-gold-glow text-navy-dark font-bold text-base px-8 py-6 shadow-lg transition-all duration-300"
                  >
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2" size={20} />
                      Vamos conversar?
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Frase de Destaque */}
      <section className="py-16 lg:py-20 bg-mesh-gradient-dark" ref={highlightRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHighlightInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Quote card */}
            <div className="relative glass-card-dark-accent rounded-3xl p-8 lg:p-12 text-center">
              {/* Decorative quotes */}
              <span className="absolute top-4 left-6 text-6xl lg:text-8xl text-gold/20 font-serif leading-none">"</span>
              <span className="absolute bottom-4 right-6 text-6xl lg:text-8xl text-gold/20 font-serif leading-none rotate-180">"</span>
              
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-relaxed relative z-10">
                O problema não é a qualidade do dentista.{" "}
                <span className="text-odontoagent">É a velocidade e a qualidade do primeiro contato.</span>
              </p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isHighlightInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center text-base lg:text-lg text-white/70 mt-8 max-w-3xl mx-auto leading-relaxed"
            >
              Pacientes desistem. Leads esfriam. Profissionais perdem oportunidades. Não por falta de competência, mas porque o WhatsApp da clínica não acompanha o ritmo da vida real.
            </motion.p>

            {/* CTA após destaque */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHighlightInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-10"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-gold hover:shadow-gold-glow text-navy-dark font-bold text-base px-8 py-6 shadow-lg transition-all duration-300"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2" size={20} />
                  Quero resolver isso na minha clínica
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* A Solução e Expertise */}
      <section className="py-16 lg:py-24 bg-hero-champagne grain-texture" ref={solutionRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isSolutionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="text-2xl lg:text-3xl font-bold text-odontoagent mb-6">
                Por isso criei o OdontoAgent.
              </p>

              <p className="text-base lg:text-lg text-navy/80 leading-relaxed mb-6">
                Tenho experiência prática em automação de processos, arquitetura de dados e ferramentas de inteligência artificial, incluindo agentes com GPT e Claude, além de orquestradores como n8n. Conheço o fluxo de trabalho de clínicas odontológicas e sei exatamente como adaptar a tecnologia à rotina real do consultório. Mas mais do que dominar a técnica, <strong className="text-navy">eu entendo a dor</strong>. Já vivi ela.
              </p>

              <p className="text-base lg:text-lg text-navy/80 leading-relaxed mb-6">
                O OdontoAgent não é um chatbot qualquer. É um <strong className="text-navy">sistema completo de atendimento inteligente</strong> no WhatsApp: responde 24 horas, qualifica pacientes, agenda consultas, e se adapta à rotina única de cada clínica. Se a sua clínica faz tráfego pago, ele rastreia a origem. Se usa uma agenda específica, ele integra. Se precisa de handoff pro doutor ou secretária, ele transfere e depois retoma, com todo o contexto preservado.
              </p>

              <p className="text-base lg:text-lg text-navy/80 leading-relaxed">
                E por trás de cada conversa, existe um <strong className="text-navy">banco de dados estruturado</strong> que transforma interações em inteligência: métricas de atendimento, análise de leads, comportamento de pacientes, tudo em tempo real.
              </p>
            </motion.div>

            {/* Compromisso */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isSolutionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card-premium rounded-2xl p-6 lg:p-8 border-l-4 border-gold"
            >
              <p className="text-lg lg:text-xl font-semibold text-navy-dark leading-relaxed">
                Eu desenho, implemento, integro e otimizo cada OdontoAgent de acordo com a realidade da clínica. Das que estão começando às que já são referência no mercado.
              </p>
            </motion.div>

            {/* Frase final */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isSolutionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center text-lg lg:text-xl italic text-odontoagent font-medium"
            >
              Porque tecnologia boa é a que desaparece e deixa só o resultado: mais pacientes atendidos, menos oportunidades perdidas, e doutores e secretárias com paz de espírito.
            </motion.p>

            {/* CTA após solução */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isSolutionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center pt-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-gold hover:shadow-gold-glow text-navy-dark font-bold text-base px-8 py-6 shadow-lg transition-all duration-300"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2" size={20} />
                  Agendar diagnóstico gratuito
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="py-16 lg:py-24 bg-background" ref={pillarsRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isPillarsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center glass-card-premium rounded-2xl p-6 lg:p-8 hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <pillar.icon className="text-accent" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isPillarsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-gold hover:shadow-gold-glow text-navy-dark font-bold text-base px-8 py-6 shadow-lg transition-all duration-300"
              >
                <Link to="/planos">
                  Veja como funciona na prática
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
