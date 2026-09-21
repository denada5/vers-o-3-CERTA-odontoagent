import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BellRing,
  Brain,
  CalendarCheck,
  Check,
  Clock,
  Headphones,
  HeartPulse,
  Lock,
  MessageCircle,
  Repeat,
  Route,
  Settings2,
  TrendingUp,
  UserCheck,
  X,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/551137219385?text=Olá,%20vim%20do%20site%20do%20OdontoAgent%20e%20gostaria%20de%20agendar%20uma%20demonstração.";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const perdas = [
  "A recepção passa o dia repetindo as mesmas cinco respostas, com paciente esperando na frente dela e o celular tocando.",
  "Cada conversa interrompida é um atendimento pela metade, dos dois lados do balcão.",
  "O doutor sai da consulta e abre o WhatsApp para ver quem ficou sem resposta. Faz de novo às 22h, e ainda pensa nisso no domingo.",
  "O anúncio continua rodando e trazendo mensagem. O dinheiro entra, a conversa não vira consulta.",
  "O orçamento de implante que levou meia hora para ser montado morreu no \"vou ver e te falo\".",
  "O paciente de dois anos atrás nunca mais voltou, e ninguém teve tempo de chamar.",
];

const ladoPaciente = [
  {
    icon: MessageCircle,
    titulo: "Pergunta e é respondido de verdade",
    texto:
      "Quanto custa, se aceita o convênio dele, quanto tempo dura o tratamento, se dá para parcelar, onde fica. As respostas são as da sua clínica, definidas por você, não uma resposta genérica.",
  },
  {
    icon: Clock,
    titulo: "É atendido a qualquer hora",
    texto:
      "Ele pesquisa quando consegue: à noite, no fim de semana, no intervalo do trabalho. A conversa acontece ali, não no dia seguinte.",
  },
  {
    icon: Route,
    titulo: "É levado para o lugar certo",
    texto:
      "Se é dor ou urgência, sua equipe é avisada na hora. Se o caso precisa de avaliação, ele é encaminhado para avaliação em vez de receber um preço solto. Se quiser falar com uma pessoa, ele fala.",
  },
  {
    icon: BellRing,
    titulo: "Sai com horário marcado e é lembrado",
    texto:
      "Escolhe um horário livre de verdade na sua agenda, recebe a confirmação e é lembrado antes da consulta. Menos falta, menos buraco.",
  },
];

const ladoClinica = [
  {
    icon: Headphones,
    titulo: "A recepção só entra quando precisa",
    texto:
      "Preço, endereço e horário não consomem mais o tempo dela. Ela recebe as conversas que pedem uma pessoa, com o histórico junto, e assume em um toque.",
  },
  {
    icon: CalendarCheck,
    titulo: "Agenda cheia sem ninguém empurrando",
    texto:
      "Marcação, remarcação, cancelamento e lembrete acontecem sozinhos e já aparecem na agenda que a clínica usa. Horário vago é ocupado, falta é reduzida.",
  },
  {
    icon: UserCheck,
    titulo: "O doutor fecha o WhatsApp à noite",
    texto:
      "A clínica segue atendendo sem ele. De manhã, ele vê o que aconteceu: quantos pacientes chamaram, quantos agendaram, o que ficou pendente.",
  },
  {
    icon: TrendingUp,
    titulo: "O que entra por marketing não se perde",
    texto:
      "Todo paciente que chega é atendido e registrado, com a origem identificada. Você para de pagar anúncio para a mensagem morrer na fila.",
  },
  {
    icon: Repeat,
    titulo: "Ninguém é esquecido",
    texto:
      "Quem pediu orçamento e sumiu recebe follow-up. Quem não volta há meses pode ser chamado de novo. É o dinheiro que já estava na sua base.",
  },
];

const comparativo = [
  {
    tema: "Mensagem fora do horário",
    sem: "Respondida no dia seguinte, quando o paciente já escolheu outra clínica",
    com: "Atendida na hora, com as informações da sua clínica",
  },
  {
    tema: "Dúvida sobre valor e convênio",
    sem: "\"Em breve retornaremos\" ou um menu de opções",
    com: "Resposta específica, do jeito que você definiu",
  },
  {
    tema: "Urgência",
    sem: "Misturada com pergunta simples na mesma fila",
    com: "Sinalizada para a equipe assim que aparece",
  },
  {
    tema: "Agendamento",
    sem: "Várias mensagens até achar um horário que serve",
    com: "Horário livre de verdade, confirmado na conversa",
  },
  {
    tema: "Faltas",
    sem: "Lembrete manual quando alguém lembra de mandar",
    com: "Lembrete e confirmação automáticos antes da consulta",
  },
  {
    tema: "Orçamento sem resposta",
    sem: "Esquecido na conversa antiga",
    com: "Follow-up automático de quem não respondeu",
  },
  {
    tema: "Origem do paciente",
    sem: "Ninguém sabe qual anúncio trouxe quem",
    com: "Cada contato registrado com a origem",
  },
  {
    tema: "Rotina da equipe",
    sem: "Recepção dividida entre o balcão e o celular",
    com: "Recepção focada em quem está na clínica",
  },
];

const diferenciais = [
  {
    icon: Brain,
    titulo: "Ele conhece a sua clínica",
    texto:
      "Seus tratamentos, seus valores, seus convênios, seus profissionais e a sua agenda. É isso que separa uma resposta que resolve de uma resposta automática.",
  },
  {
    icon: Settings2,
    titulo: "Montado em cima do que você já usa",
    texto:
      "Sua agenda e seu sistema de gestão continuam os mesmos. Você não troca de ferramenta nem muda a rotina da clínica.",
  },
  {
    icon: HeartPulse,
    titulo: "Feito para odontologia",
    texto:
      "Entende dor e urgência, sabe quando marcar e quando encaminhar para avaliação, e trata implante e ortodontia com o cuidado que tratamento de alto valor exige.",
  },
  {
    icon: Headphones,
    titulo: "Sua equipe no controle",
    texto:
      "Qualquer pessoa da clínica assume uma conversa quando quiser, e o assistente retoma depois sem perder o contexto.",
  },
  {
    icon: Repeat,
    titulo: "Ele lembra do paciente",
    texto:
      "Se a pessoa volta dias depois, a conversa continua de onde parou, sem pedir tudo de novo.",
  },
  {
    icon: Lock,
    titulo: "Cuidado com os dados",
    texto:
      "Informações de pacientes tratadas conforme a LGPD, com implantação, treinamento e acompanhamento inclusos.",
  },
];

const Detalhes = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-champagne grain-texture blueprint-lines py-20 lg:py-28">
        <div className="absolute -top-20 right-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="show"
            variants={reveal}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 mb-6 text-xs sm:text-sm font-medium rounded-full border border-accent/40 bg-white/70 backdrop-blur text-primary select-none">
              Como funciona
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight select-none">
              Do primeiro "oi" à{" "}
              <span className="text-gradient-gold">cadeira ocupada.</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed select-none">
              O que o paciente recebe, o que a sua equipe deixa de carregar e o que a clínica ganha.
            </p>
          </motion.div>
        </div>
      </section>

      {/* O QUE SE PERDE */}
      <section className="py-20 lg:py-28 bg-mesh-gradient-dark relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={reveal}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 select-none">
              Todo dia, alguém desiste da sua clínica{" "}
              <span className="text-gradient-gold">em silêncio.</span>
            </h2>
            <p className="text-base sm:text-lg text-white/75 leading-relaxed select-none">
              Ninguém avisa que escolheu outro lugar. A pessoa pesquisa dentista à noite, depois do
              trabalho, manda mensagem para três clínicas e pergunta o valor do tratamento. A sua
              responde no dia seguinte, quando ela já está conversando com a outra. Ou responde na
              hora, com "assim que possível um atendente vai falar com você", o que para ela dá no
              mesmo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {perdas.map((item, i) => (
              <motion.div
                key={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                variants={reveal}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="card-glow card-glow-dark glass-card rounded-xl p-5 flex gap-3"
              >
                <X size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-white/75 leading-relaxed select-none">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={reveal}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center text-base sm:text-lg text-white/85 mt-12 select-none"
          >
            Não é falta de competência clínica. É o atendimento do WhatsApp sozinho, sem estrutura.
          </motion.p>
        </div>
      </section>

      {/* LADO DO PACIENTE */}
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
            <span className="inline-block px-4 py-2 mb-6 text-xs sm:text-sm font-medium rounded-full border border-accent/40 text-primary select-none">
              Do lado do paciente
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary select-none">
              Ele é atendido por{" "}
              <span className="text-gradient-gold">quem conhece a clínica.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {ladoPaciente.map((item, i) => (
              <motion.div
                key={item.titulo}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={reveal}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="card-glow rounded-2xl border border-border bg-white p-7"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/8 border border-primary/15">
                    <item.icon size={20} className="text-primary" />
                  </span>
                  <span className="text-xs font-semibold tracking-[0.2em] text-accent select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
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

      {/* LADO DA CLÍNICA */}
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
              Do lado da clínica
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary select-none">
              Sua equipe para de{" "}
              <span className="text-gradient-gold">apagar incêndio no celular.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {ladoClinica.map((item, i) => (
              <motion.div
                key={item.titulo}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={reveal}
                transition={{ duration: 0.55, delay: i * 0.09 }}
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

      {/* TABELA COMPARATIVA */}
      <section className="py-20 lg:py-28 bg-surface-soft">
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
              O mesmo dia da sua clínica,{" "}
              <span className="text-gradient-gold">nos dois cenários.</span>
            </h2>
            <p className="text-base text-muted-foreground select-none">
              Arraste para o lado no celular para ver a tabela completa.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={reveal}
            transition={{ duration: 0.6 }}
            className="card-glow max-w-5xl mx-auto rounded-2xl border border-border bg-white overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-5 py-4 text-sm font-semibold w-1/4 select-none">
                      Situação
                    </th>
                    <th className="px-5 py-4 text-sm font-semibold select-none">
                      Sem o OdontoAgent
                    </th>
                    <th className="px-5 py-4 text-sm font-semibold text-accent select-none">
                      Com o OdontoAgent
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparativo.map((linha, i) => (
                    <tr
                      key={linha.tema}
                      className={`transition-colors duration-300 hover:bg-accent/5 ${
                        i % 2 === 1 ? "bg-secondary/40" : "bg-white"
                      }`}
                    >
                      <td className="px-5 py-4 text-sm font-semibold text-primary align-top border-t border-border select-none">
                        {linha.tema}
                      </td>
                      <td className="px-5 py-4 text-sm text-muted-foreground align-top border-t border-border select-none">
                        <span className="inline-flex gap-2">
                          <X size={15} className="text-destructive/70 flex-shrink-0 mt-0.5" />
                          {linha.sem}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-sm text-foreground/85 align-top border-t border-border select-none">
                        <span className="inline-flex gap-2">
                          <Check size={15} className="text-accent flex-shrink-0 mt-0.5" />
                          {linha.com}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-5 select-none">
              Um sistema feito para a sua clínica,{" "}
              <span className="text-gradient-gold">
                não um chatbot ligado no seu número.
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {diferenciais.map((item, i) => (
              <motion.div
                key={item.titulo}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={reveal}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="card-glow rounded-2xl border border-border bg-white p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/8 border border-primary/15 mb-5">
                  <item.icon size={20} className="text-primary" />
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
              Quer ver funcionando{" "}
              <span className="text-gradient-gold">na prática?</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 select-none">
              A gente mostra uma conversa real, com as perguntas que seus pacientes fazem todo dia.
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

export default Detalhes;
