import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Puzzle, ShieldCheck, Users } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/551137219385?text=Olá,%20vim%20do%20site%20do%20OdontoAgent%20e%20gostaria%20de%20falar%20com%20o%20time.";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const principios = [
  {
    icon: Puzzle,
    titulo: "Personalizado, sempre",
    texto:
      "Cada implantação é montada em cima do que a clínica já usa. Nada de formulário de configuração entregue na mão do doutor.",
  },
  {
    icon: Users,
    titulo: "A tecnologia entra junto com a equipe",
    texto:
      "A recepção é treinada na implantação e continua no controle de qualquer conversa, a qualquer momento.",
  },
  {
    icon: ShieldCheck,
    titulo: "Só prometemos o que entregamos",
    texto:
      "O que ainda não está pronto, a gente diz que não está. Clínica não é lugar para promessa de marketing.",
  },
];

const Sobre = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-champagne grain-texture blueprint-lines py-20 lg:py-28">
        <div className="absolute -top-16 right-16 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="show"
            variants={reveal}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 mb-6 text-xs sm:text-sm font-medium rounded-full border border-accent/40 bg-white/70 backdrop-blur text-primary select-none">
              Quem somos
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight select-none">
              Um time que resolve o atendimento de{" "}
              <span className="text-gradient-gold">clínicas odontológicas.</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed select-none">
              O OdontoAgent é feito pela Arenium.
            </p>
          </motion.div>
        </div>
      </section>

      {/* COMO CHEGAMOS AQUI */}
      <section className="py-20 lg:py-28 bg-surface-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={reveal}
            transition={{ duration: 0.6 }}
            className="card-glow max-w-3xl mx-auto rounded-3xl border border-border bg-white px-6 py-12 sm:px-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-7 select-none">
              Como a gente chegou aqui
            </h2>
            <div className="space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed select-none">
              <p>
                A Arenium constrói tecnologia para organizar o que costuma ficar no improviso.
                Trabalhando com automação de processos, a gente esbarrou sempre no mesmo padrão nas
                clínicas odontológicas: profissionais excelentes, investimento em marketing
                funcionando, e paciente indo embora porque a conversa no WhatsApp não chegou a lugar
                nenhum.
              </p>
              <p>
                Uma das integrantes do time viveu isso como paciente. Procurando tratamento, mandou
                mensagem para várias clínicas, algumas muito boas, e fechou com a única que
                respondeu a dúvida dela de verdade. As outras nunca chegaram a atender.
              </p>
              <p>
                Foi daí que veio a decisão de focar em odontologia em vez de fazer mais uma
                ferramenta genérica.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FRASE DE DESTAQUE */}
      <section className="py-16 lg:py-20 bg-mesh-gradient-dark relative overflow-hidden">
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[36rem] bg-accent/5 blur-3xl pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.blockquote
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={reveal}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white leading-snug select-none">
              O paciente não escolhe só o melhor dentista.{" "}
              <span className="text-gradient-gold">
                Escolhe quem resolve o problema dele primeiro.
              </span>
            </p>
          </motion.blockquote>
        </div>
      </section>

      {/* MISSÃO E PRINCÍPIOS */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={reveal}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-14"
          >
            <span className="inline-block px-4 py-2 mb-6 text-xs sm:text-sm font-medium rounded-full border border-accent/40 text-primary select-none">
              O que a gente quer
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary select-none">
              Fazer com que nenhuma clínica perca paciente{" "}
              <span className="text-gradient-gold">por causa do primeiro contato.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {principios.map((item, i) => (
              <motion.div
                key={item.titulo}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={reveal}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="card-glow rounded-2xl border border-border bg-secondary/40 p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 border border-accent/30 mb-5">
                  <item.icon size={20} className="text-accent" />
                </span>
                <h3 className="text-lg font-semibold text-primary mb-3 select-none">
                  {item.titulo}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed select-none">
                  {item.texto}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-surface-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={reveal}
            transition={{ duration: 0.6 }}
            className="card-glow max-w-4xl mx-auto rounded-3xl border border-border bg-white px-6 py-14 sm:px-12 text-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-5 select-none">
              Vamos conversar sobre{" "}
              <span className="text-gradient-gold">a sua clínica?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 h-12 transition-shadow duration-300 hover:shadow-[0_0_30px_-6px_hsl(var(--gold)/0.85)]"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} className="mr-2" />
                  Falar com o time
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/25 text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 h-12"
              >
                <Link to="/planos">
                  Ver planos
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
