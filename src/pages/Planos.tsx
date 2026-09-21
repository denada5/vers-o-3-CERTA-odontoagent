import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, MessageCircle, Minus, Sparkles } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/551137219385?text=Olá,%20vim%20do%20site%20do%20OdontoAgent%20e%20gostaria%20de%20conversar%20sobre%20os%20planos.";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const planos = [
  {
    nivel: "I",
    nome: "Essencial",
    gancho: "Nunca mais perca um paciente por falta de resposta.",
    descricao:
      "Atendimento 24 horas que soa humano, responde as dúvidas da sua clínica, marca consulta e passa a conversa para a equipe quando precisa.",
    para: "Para o consultório que ainda perde paciente no WhatsApp.",
    destaque: null as string | null,
  },
  {
    nivel: "II",
    nome: "Profissional",
    gancho: "Sua agenda no automático. Sua recepção no que importa.",
    descricao:
      "Tudo do Essencial, com a agenda integrada ao sistema que a clínica já usa, protocolo de urgência, encaminhamento para o profissional certo, lembretes e follow-up de quem não respondeu.",
    para: "Para a clínica que quer parar de operar no susto.",
    destaque: null,
  },
  {
    nivel: "III",
    nome: "Performance",
    gancho: "Cada paciente vira dado. Cada dado vira decisão.",
    descricao:
      "Tudo do Profissional, com assistente da recepção dentro do WhatsApp, relatórios de desempenho para o doutor, origem de cada paciente, medição de conversão e pedido de indicação.",
    para: "Para a clínica que quer crescer com número, não com achismo.",
    destaque: "Melhor custo-benefício",
  },
  {
    nivel: "IV",
    nome: "Premium",
    gancho: "A inteligência da sua clínica trabalhando 24 horas.",
    descricao:
      "Tudo do Performance, com integração ao CRM e às ferramentas de marketing, painel em tempo real e métricas completas. A equipe delega tarefas ao assistente em vez de só consultar.",
    para: "Para quem trata a clínica como negócio.",
    destaque: "Recomendado",
  },
  {
    nivel: "V",
    nome: "Enterprise",
    gancho: "Todas as unidades. Uma só inteligência.",
    descricao:
      "Tudo do Premium replicado em várias unidades, com dados consolidados, comparativo entre filiais e atendimento prioritário.",
    para: "Para redes e franquias que precisam padronizar o atendimento.",
    destaque: null,
  },
];

const colunas = ["Essencial", "Profissional", "Performance", "Premium", "Enterprise"];

const recursos = [
  { nome: "Atendimento 24 horas no WhatsApp", niveis: [1, 1, 1, 1, 1] },
  { nome: "Dúvidas da clínica respondidas com as suas regras", niveis: [1, 1, 1, 1, 1] },
  { nome: "Agendamento, remarcação e cancelamento", niveis: [1, 1, 1, 1, 1] },
  { nome: "Passagem da conversa para a equipe", niveis: [1, 1, 1, 1, 1] },
  { nome: "Lembrete de consulta", niveis: [1, 1, 1, 1, 1] },
  { nome: "Integração com a agenda e o sistema da clínica", niveis: [0, 1, 1, 1, 1] },
  { nome: "Protocolo de urgência", niveis: [0, 1, 1, 1, 1] },
  { nome: "Encaminhamento por profissional e especialidade", niveis: [0, 1, 1, 1, 1] },
  { nome: "Follow-up de quem não respondeu", niveis: [0, 1, 1, 1, 1] },
  { nome: "Assistente da recepção dentro do WhatsApp", niveis: [0, 0, 1, 1, 1] },
  { nome: "Relatórios de desempenho para o doutor", niveis: [0, 0, 1, 1, 1] },
  { nome: "Origem do paciente e medição de conversão", niveis: [0, 0, 1, 1, 1] },
  { nome: "Pedido de indicação", niveis: [0, 0, 1, 1, 1] },
  { nome: "Integração com CRM e ferramentas de marketing", niveis: [0, 0, 0, 1, 1] },
  { nome: "Painel em tempo real e métricas completas", niveis: [0, 0, 0, 1, 1] },
  { nome: "Equipe delega tarefas ao assistente", niveis: [0, 0, 0, 1, 1] },
  { nome: "Várias unidades com dados consolidados", niveis: [0, 0, 0, 0, 1] },
  { nome: "Atendimento prioritário", niveis: [0, 0, 0, 0, 1] },
];

const Planos = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-champagne grain-texture blueprint-lines py-20 lg:py-28">
        <div className="absolute -top-20 left-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="show"
            variants={reveal}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 mb-6 text-xs sm:text-sm font-medium rounded-full border border-accent/40 bg-white/70 backdrop-blur text-primary select-none">
              Planos
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight select-none">
              Escolha pelo{" "}
              <span className="text-gradient-gold">momento da sua clínica.</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed select-none">
              Cinco níveis, do consultório que ainda perde paciente no WhatsApp à rede com várias
              unidades. Cada implantação é desenhada em cima do que a clínica já usa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CARDS */}
      <section className="py-20 lg:py-24 bg-surface-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {planos.map((plano, i) => {
              const isRecomendado = plano.destaque === "Recomendado";
              return (
                <motion.div
                  key={plano.nome}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={reveal}
                  transition={{ duration: 0.55, delay: i * 0.09 }}
                  className={`card-glow relative flex flex-col rounded-2xl p-7 ${
                    isRecomendado
                      ? "bg-mesh-gradient-dark border border-accent/40 card-glow-dark"
                      : "bg-white border border-border"
                  }`}
                >
                  {plano.destaque && (
                    <span
                      className={`absolute -top-3 left-7 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide select-none ${
                        isRecomendado
                          ? "bg-accent text-accent-foreground shadow-[0_0_20px_-4px_hsl(var(--gold)/0.9)]"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      {plano.destaque}
                    </span>
                  )}

                  <div className="flex items-baseline gap-3 mb-4">
                    <span
                      className={`text-xs font-semibold tracking-[0.2em] ${
                        isRecomendado ? "text-accent" : "text-muted-foreground"
                      } select-none`}
                    >
                      NÍVEL {plano.nivel}
                    </span>
                  </div>

                  <h3
                    className={`text-2xl font-bold mb-4 select-none ${
                      isRecomendado ? "text-white" : "text-primary"
                    }`}
                  >
                    {plano.nome}
                  </h3>

                  <p
                    className={`text-base font-medium mb-5 leading-snug select-none ${
                      isRecomendado ? "text-accent" : "text-accent"
                    }`}
                  >
                    {plano.gancho}
                  </p>

                  <p
                    className={`text-sm leading-relaxed mb-5 flex-1 select-none ${
                      isRecomendado ? "text-white/75" : "text-muted-foreground"
                    }`}
                  >
                    {plano.descricao}
                  </p>

                  <p
                    className={`text-sm font-medium mb-6 select-none ${
                      isRecomendado ? "text-white/90" : "text-foreground/80"
                    }`}
                  >
                    {plano.para}
                  </p>

                  <Button
                    asChild
                    className={
                      isRecomendado
                        ? "bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full transition-shadow duration-300 hover:shadow-[0_0_28px_-6px_hsl(var(--gold)/0.9)]"
                        : "bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full"
                    }
                  >
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      Conversar sobre este plano
                    </a>
                  </Button>
                </motion.div>
              );
            })}

            {/* Card de escala, fecha a grade de 6 */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={reveal}
              transition={{ duration: 0.55, delay: 0.45 }}
              className="card-glow rounded-2xl border border-accent/30 bg-secondary/50 p-7 flex flex-col justify-center"
            >
              <Sparkles size={22} className="text-accent mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3 select-none">
                De 10 a 10 mil atendimentos por mês
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed select-none">
                O mesmo sistema atende o consultório com um dentista e a rede com várias unidades.
                O que muda é o que ele faz por você, não a qualidade da conversa com o paciente.
                Quando a clínica cresce, o plano acompanha sem recomeçar do zero.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TABELA COMPARATIVA */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={reveal}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-5 select-none">
              Compare os{" "}
              <span className="text-gradient-gold">cinco níveis.</span>
            </h2>
            <p className="text-base text-muted-foreground select-none">
              Cada nível inclui tudo do anterior. Arraste para o lado no celular para ver a tabela
              completa.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={reveal}
            transition={{ duration: 0.6 }}
            className="card-glow max-w-6xl mx-auto rounded-2xl border border-border bg-white overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-5 py-4 text-sm font-semibold w-[38%] select-none">
                      Recurso
                    </th>
                    {colunas.map((coluna) => (
                      <th
                        key={coluna}
                        className={`px-4 py-4 text-sm font-semibold text-center select-none ${
                          coluna === "Premium" ? "text-accent" : ""
                        }`}
                      >
                        {coluna}
                        {coluna === "Premium" && (
                          <span className="block text-[10px] font-medium tracking-wide text-accent/80 mt-1">
                            Recomendado
                          </span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {recursos.map((recurso, i) => (
                    <tr
                      key={recurso.nome}
                      className={`transition-colors duration-300 hover:bg-accent/5 ${
                        i % 2 === 1 ? "bg-secondary/40" : "bg-white"
                      }`}
                    >
                      <td className="px-5 py-3.5 text-sm text-foreground/85 border-t border-border select-none">
                        {recurso.nome}
                      </td>
                      {recurso.niveis.map((tem, idx) => (
                        <td
                          key={`${recurso.nome}-${idx}`}
                          className={`px-4 py-3.5 text-center border-t border-border ${
                            idx === 3 ? "bg-accent/5" : ""
                          }`}
                        >
                          {tem ? (
                            <Check size={18} className="inline text-accent" />
                          ) : (
                            <Minus size={16} className="inline text-muted-foreground/40" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
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
              Cada clínica tem{" "}
              <span className="text-gradient-gold">um gargalo diferente.</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 select-none">
              Na conversa, a gente entende o seu e indica o nível que resolve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 h-12 transition-shadow duration-300 hover:shadow-[0_0_30px_-6px_hsl(var(--gold)/0.85)]"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} className="mr-2" />
                  Conversar sobre os planos
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/25 text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 h-12"
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
    </Layout>
  );
};

export default Planos;
