import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Reveal, SpotlightCard } from "@/components/Motion";
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

const perdas = [
  "A recepção repete as mesmas cinco respostas com paciente esperando na frente dela.",
  "O doutor abre o WhatsApp às 22h para ver quem ficou sem resposta.",
  "O anúncio roda, traz mensagem, e a mensagem não vira consulta.",
  "O orçamento de implante morreu no \"vou ver e te falo\".",
  "O paciente de dois anos atrás nunca mais voltou.",
  "Ninguém avisa que escolheu outra clínica. A pessoa só some.",
];

const ladoPaciente = [
  {
    icon: MessageCircle,
    titulo: "Pergunta e é respondido",
    texto: "Preço, convênio, duração, parcelamento. As respostas são as suas.",
  },
  {
    icon: Clock,
    titulo: "A qualquer hora",
    texto: "Ele pesquisa à noite e no fim de semana. A conversa acontece ali.",
  },
  {
    icon: Route,
    titulo: "Vai para o lugar certo",
    texto: "Urgência aciona a equipe. Caso complexo vai para avaliação.",
  },
  {
    icon: BellRing,
    titulo: "Sai com horário marcado",
    texto: "Escolhe um horário livre de verdade e recebe o lembrete.",
  },
];

const ladoClinica = [
  {
    icon: Headphones,
    titulo: "A recepção respira",
    texto: "Ela recebe só o que precisa de gente, já com o histórico junto.",
  },
  {
    icon: CalendarCheck,
    titulo: "Agenda cheia",
    texto: "Marcação, remarcação e lembrete acontecem sozinhos na sua agenda.",
  },
  {
    icon: UserCheck,
    titulo: "O doutor desliga",
    texto: "De manhã ele vê quantos chegaram, quantos agendaram e o que ficou.",
  },
  {
    icon: TrendingUp,
    titulo: "Marketing que volta",
    texto: "Todo paciente é atendido e registrado, com a origem identificada.",
  },
  {
    icon: Repeat,
    titulo: "Ninguém é esquecido",
    texto: "Quem sumiu recebe follow-up. É dinheiro que já estava na sua base.",
  },
];

const comparativo = [
  {
    tema: "Mensagem à noite",
    sem: "Respondida amanhã, quando ele já escolheu outra",
    com: "Atendida na hora, com as suas informações",
  },
  {
    tema: "Preço e convênio",
    sem: "\"Em breve retornaremos\" ou um menu de opções",
    com: "Resposta específica, do jeito que você definiu",
  },
  {
    tema: "Urgência",
    sem: "Na mesma fila de quem pergunta o endereço",
    com: "Sinalizada para a equipe assim que aparece",
  },
  {
    tema: "Agendamento",
    sem: "Dez mensagens até achar um horário",
    com: "Horário livre de verdade, confirmado na conversa",
  },
  {
    tema: "Faltas",
    sem: "Lembrete quando alguém lembra de mandar",
    com: "Lembrete e confirmação automáticos",
  },
  {
    tema: "Orçamento parado",
    sem: "Esquecido na conversa antiga",
    com: "Follow-up de quem não respondeu",
  },
  {
    tema: "Origem do paciente",
    sem: "Ninguém sabe qual anúncio trouxe quem",
    com: "Cada contato registrado com a origem",
  },
];

const diferenciais = [
  {
    icon: Brain,
    titulo: "Conhece a sua clínica",
    texto:
      "Seus tratamentos, valores, convênios e agenda. É o que separa resolver de só responder.",
  },
  {
    icon: Settings2,
    titulo: "Entra no que você já usa",
    texto: "Sua agenda e seu sistema continuam os mesmos. A rotina não muda.",
  },
  {
    icon: HeartPulse,
    titulo: "Feito para odontologia",
    texto:
      "Entende dor e urgência, e trata implante e ortodontia com o cuidado de alto valor.",
  },
  {
    icon: Headphones,
    titulo: "Sua equipe no controle",
    texto: "Qualquer pessoa assume a conversa, e ele retoma sem perder o fio.",
  },
  {
    icon: Repeat,
    titulo: "Lembra do paciente",
    texto: "Se ele volta dias depois, a conversa continua de onde parou.",
  },
  {
    icon: Lock,
    titulo: "Cuidado com os dados",
    texto: "Informações de pacientes tratadas conforme a LGPD.",
  },
];

const Detalhes = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-champagne grain-texture blueprint-lines py-20 lg:py-28">
        <div className="absolute -top-20 right-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 mb-6 text-xs sm:text-sm font-medium rounded-full border border-accent/40 bg-white/70 backdrop-blur text-primary select-none">
              Como funciona
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-primary mb-6 leading-[1.12] select-none">
              O paciente não avisa{" "}
              <span className="text-gradient-gold">que desistiu.</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed select-none">
              Do primeiro "oi" à cadeira ocupada, o que muda dos dois lados do
              balcão.
            </p>
          </Reveal>
        </div>
      </section>

      {/* O QUE SE PERDE */}
      <section className="py-20 lg:py-28 bg-mesh-gradient-dark relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-6 select-none">
              Todo dia, alguém desiste{" "}
              <span className="text-gradient-gold">em silêncio.</span>
            </h2>
            <p className="text-base sm:text-lg text-white/75 leading-relaxed select-none">
              Não é falta de competência clínica. É o WhatsApp da clínica sozinho,
              sem estrutura.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {perdas.map((item, i) => (
              <Reveal key={item} delay={i * 0.06}>
                <SpotlightCard dark className="h-full glass-card rounded-xl p-5 flex gap-3">
                  <X size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-white/75 leading-relaxed select-none">
                    {item}
                  </p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LADO DO PACIENTE */}
      <section className="py-20 lg:py-28 bg-surface-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mx-auto text-center mb-14">
            <span className="inline-block px-4 py-2 mb-6 text-xs sm:text-sm font-medium rounded-full border border-accent/40 text-primary select-none">
              Do lado do paciente
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-primary select-none">
              Atendido por quem{" "}
              <span className="text-gradient-gold">conhece a clínica.</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {ladoPaciente.map((item, i) => (
              <Reveal key={item.titulo} delay={i * 0.09}>
                <SpotlightCard className="h-full rounded-2xl border border-border bg-white p-7">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/8 border border-primary/15">
                      <item.icon size={20} className="text-primary" />
                    </span>
                    <span className="text-xs font-semibold tracking-[0.2em] text-accent select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2 select-none">
                    {item.titulo}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed select-none">
                    {item.texto}
                  </p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LADO DA CLÍNICA */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mx-auto text-center mb-14">
            <span className="inline-block px-4 py-2 mb-6 text-xs sm:text-sm font-medium rounded-full border border-accent/40 text-primary select-none">
              Do lado da clínica
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-primary select-none">
              Sua equipe para de{" "}
              <span className="text-gradient-gold">apagar incêndio.</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {ladoClinica.map((item, i) => (
              <Reveal key={item.titulo} delay={i * 0.08}>
                <SpotlightCard className="h-full rounded-2xl border border-border bg-secondary/40 p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 border border-accent/30 mb-5">
                    <item.icon size={20} className="text-accent" />
                  </span>
                  <h3 className="text-lg font-semibold text-primary mb-2 select-none">
                    {item.titulo}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed select-none">
                    {item.texto}
                  </p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TABELA COMPARATIVA */}
      <section className="py-20 lg:py-28 bg-surface-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-primary mb-4 select-none">
              O mesmo dia,{" "}
              <span className="text-gradient-gold">nos dois cenários.</span>
            </h2>
            <p className="text-sm text-muted-foreground select-none">
              Arraste para o lado no celular.
            </p>
          </Reveal>

          <Reveal className="max-w-5xl mx-auto">
            <SpotlightCard className="rounded-2xl border border-border bg-white overflow-hidden">
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
                        tabIndex={0}
                        className={`row-mark hover:bg-accent/5 focus:bg-accent/5 focus:outline-none ${
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
            </SpotlightCard>
          </Reveal>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-primary select-none">
              Não é um chatbot{" "}
              <span className="text-gradient-gold">ligado no seu número.</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {diferenciais.map((item, i) => (
              <Reveal key={item.titulo} delay={i * 0.07}>
                <SpotlightCard className="h-full rounded-2xl border border-border bg-white p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/8 border border-primary/15 mb-5">
                    <item.icon size={20} className="text-primary" />
                  </span>
                  <h3 className="text-lg font-semibold text-primary mb-2 select-none">
                    {item.titulo}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed select-none">
                    {item.texto}
                  </p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-surface-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-4xl mx-auto">
            <SpotlightCard className="rounded-3xl border border-border bg-white px-6 py-14 sm:px-12 text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-5 select-none">
                Quer ver{" "}
                <span className="text-gradient-gold">na prática?</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-10 select-none">
                Uma conversa real, com as perguntas que seus pacientes fazem todo
                dia.
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
            </SpotlightCard>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Detalhes;
