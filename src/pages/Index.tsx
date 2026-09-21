import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CalendarCheck,
  ClipboardList,
  MessageCircle,
  Settings2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/551137219385?text=Olá,%20vim%20do%20site%20do%20OdontoAgent%20e%20gostaria%20de%20agendar%20uma%20demonstração.";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const numeros = [
  {
    valor: "78%",
    texto: "dos clientes fecham com a empresa que responde primeiro",
    fonte: "Lead Response Management Study (MIT / InsideSales.com)",
  },
  {
    valor: "42%",
    texto: "das mensagens chegam fora do horário comercial",
    fonte: "Levantamento AgeuBot, 1,3 milhão de mensagens de empresas brasileiras",
  },
  {
    valor: "10x",
    texto: "menos chance de conseguir contato quando a resposta passa de uma hora",
    fonte: "Lead Response Management Study (MIT / InsideSales.com)",
  },
];

const etapas = [
  {
    icon: ClipboardList,
    titulo: "Mapeamento dos processos",
    texto:
      "Entendemos como sua clínica atende hoje: procedimentos, valores que podem ser informados, convênios aceitos, agenda de cada profissional, o que é urgência e o que pode esperar. Você não precisa preparar nada antes.",
  },
  {
    icon: Settings2,
    titulo: "Regras da sua clínica",
    texto:
      "Definimos juntos o que o assistente responde, o que ele agenda sozinho, quando aciona a recepção e em que tom ele fala. Conectamos a agenda e o sistema que você já usa, sem trocar sua ferramenta.",
  },
  {
    icon: ShieldCheck,
    titulo: "Implantação e testes",
    texto:
      "Montamos tudo, testamos conversa por conversa e treinamos sua equipe para assumir qualquer atendimento quando quiser. Sua recepção entra sabendo como funciona.",
  },
  {
    icon: CalendarCheck,
    titulo: "No ar, com acompanhamento",
    texto:
      "Depois do go-live, monitoramos o funcionamento 24 horas por dia e ajustamos junto com você conforme a clínica muda: novo profissional, novo procedimento, nova regra de convênio.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-champagne grain-texture blueprint-lines py-20 lg:py-32">
        <div className="absolute -top-24 right-0 w-80 h-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="show"
            variants={reveal}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs sm:text-sm font-medium rounded-full border border-accent/40 bg-white/70 backdrop-blur text-primary select-none">
              <Sparkles size={15} className="text-accent" />
              Atendimento de WhatsApp para clínicas odontológicas
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-primary leading-[1.12] mb-6 select-none">
              Sua recepção cuida de quem está na cadeira.{" "}
              <span className="text-gradient-gold">
                O OdontoAgent cuida de quem está no WhatsApp.
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed select-none">
              Ele conhece os tratamentos, os valores, os convênios e a agenda da sua clínica.
              Responde o paciente, resolve a dúvida dele, marca a consulta e avisa sua equipe
              quando alguém precisa de atenção. A gente implanta, treina sua equipe e acompanha
              o funcionamento.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 h-12 transition-shadow duration-300 hover:shadow-[0_0_30px_-6px_hsl(var(--gold)/0.85)]"
              >
                <Link to="/contato#formulario">
                  <MessageCircle size={18} className="mr-2" />
                  Agendar uma demonstração
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/25 text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 h-12 transition-all duration-300"
              >
                <Link to="/detalhes">
                  Ver como funciona
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* O PROBLEMA */}
      <section className="py-20 lg:py-28 bg-surface-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={reveal}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-14"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-6 select-none">
              Qualquer robô responde.{" "}
              <span className="text-gradient-gold">Quase nenhum resolve.</span>
            </h2>
            <div className="divider-gold w-40 mx-auto mb-8" />
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-5 select-none">
              Seu anúncio funciona, seu Instagram funciona, e a mensagem chega. O paciente pergunta
              quanto custa o implante, se você atende o convênio dele, se tem horário na quinta à
              tarde. Uma resposta automática devolve "em breve retornaremos". Um bot genérico devolve
              um menu de opções. Nos dois casos, a pergunta dele continua sem resposta.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed select-none">
              Quem fecha a consulta é a clínica que respondeu aquilo que ele perguntou. E isso só
              acontece quando quem responde sabe como a sua clínica trabalha.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {numeros.map((n, i) => (
              <motion.div
                key={n.valor}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={reveal}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="card-glow rounded-2xl border border-border bg-white p-7 flex flex-col"
              >
                <span className="text-4xl lg:text-5xl font-bold text-gradient-gold mb-3 select-none">
                  {n.valor}
                </span>
                <p className="text-sm sm:text-base text-foreground/85 leading-relaxed flex-1 select-none">
                  {n.texto}
                </p>
                <p className="mt-5 pt-4 border-t border-border text-[11px] leading-snug text-muted-foreground select-none">
                  {n.fonte}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO A GENTE TRABALHA */}
      <section className="py-20 lg:py-28 bg-mesh-gradient-dark relative overflow-hidden">
        <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={reveal}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-14"
          >
            <span className="inline-block px-4 py-2 mb-6 text-xs sm:text-sm font-medium rounded-full border border-accent/30 text-accent select-none">
              Implantação
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 select-none">
              Você não vai configurar nada.{" "}
              <span className="text-gradient-gold">
                A gente monta o atendimento junto com a sua clínica.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-white/75 leading-relaxed select-none">
              Não existe OdontoAgent de prateleira. Cada implantação é desenhada em cima do que a
              sua clínica já usa: sua agenda, seu sistema de gestão, seus horários, seus
              profissionais e o seu jeito de falar com o paciente. Vale para o consultório com um
              dentista e para a clínica com dez cadeiras.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {etapas.map((etapa, i) => (
              <motion.div
                key={etapa.titulo}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={reveal}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="card-glow card-glow-dark glass-card rounded-2xl p-7"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 border border-accent/30">
                    <etapa.icon size={20} className="text-accent" />
                  </span>
                  <span className="text-xs font-semibold tracking-[0.2em] text-accent select-none">
                    ETAPA {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-white mb-3 select-none">
                  {etapa.titulo}
                </h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed select-none">
                  {etapa.texto}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={reveal}
            transition={{ duration: 0.6 }}
            className="text-center mt-14"
          >
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-8 select-none">
              Do primeiro "oi" até o lembrete da consulta, ninguém da sua equipe precisa ficar de
              olho no celular.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 h-12 transition-shadow duration-300 hover:shadow-[0_0_30px_-6px_hsl(var(--gold)/0.85)]"
            >
              <Link to="/contato#formulario">
                Quero ver como ficaria na minha clínica
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA FINAL */}
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
              Quer ver o OdontoAgent atendendo{" "}
              <span className="text-gradient-gold">como se fosse a sua clínica?</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed select-none">
              Na demonstração, a gente mostra uma conversa de verdade: paciente perguntando preço,
              convênio e horário, e saindo com a consulta marcada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 h-12 transition-shadow duration-300 hover:shadow-[0_0_30px_-6px_hsl(var(--gold)/0.85)]"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} className="mr-2" />
                  Agendar demonstração
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

export default Index;
