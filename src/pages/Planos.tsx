import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Reveal, SpotlightCard } from "@/components/Motion";
import { ArrowRight, Check, MessageCircle, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const WHATSAPP_URL =
  "https://wa.me/551137219385?text=Olá,%20vim%20do%20site%20do%20OdontoAgent%20e%20gostaria%20de%20conversar%20sobre%20os%20planos.";

const planos = [
  {
    nivel: "I",
    nome: "Essencial",
    paraQuem: "A IA trabalha para o lead.",
    gancho: "Nenhuma mensagem fica sem resposta.",
    descricao:
      "Atende 24 horas, responde as dúvidas da sua clínica, captura o interesse do paciente e passa para a recepção com todo o contexto.",
    para: "Para o consultório que ainda perde paciente por demora.",
    destaque: null as string | null,
  },
  {
    nivel: "II",
    nome: "Profissional",
    paraQuem: "A IA trabalha para o paciente.",
    gancho: "Sua agenda no automático.",
    descricao:
      "Entra a agenda: marca, remarca, cancela e lembra. Conectado à ferramenta que a clínica já usa, com protocolo de urgência e encaminhamento por profissional.",
    para: "Para a clínica que quer parar de operar no susto.",
    destaque: null,
  },
  {
    nivel: "III",
    nome: "Performance",
    paraQuem: "A IA passa a trabalhar para a equipe, em modo consulta.",
    gancho: "Você descobre de onde vem cada paciente.",
    descricao:
      "A recepção pergunta pela IA no WhatsApp e recebe na hora. Cada paciente rastreado até a campanha que trouxe, com relatórios para o doutor e pedido de indicação.",
    para: "Para a clínica que quer crescer com número, não com achismo.",
    destaque: "Melhor custo-benefício",
  },
  {
    nivel: "IV",
    nome: "Premium",
    paraQuem: "A IA executa em nome da equipe, em modo delegação.",
    gancho: "A IA deixa de ser ferramenta e vira força de trabalho.",
    descricao:
      "Ela age sozinha: reativa paciente inativo, salva vaga cancelada com lista de espera, cobra tratamento que não fechou e manda o briefing do dia. Com CRM, marketing e painel em tempo real.",
    para: "Para quem quer terceirizar a operação proativa.",
    destaque: "Recomendado",
  },
  {
    nivel: "V",
    nome: "Enterprise",
    paraQuem: "A IA trabalha para a rede.",
    gancho: "Todas as unidades. Uma só inteligência.",
    descricao:
      "Tudo do Premium replicado nas filiais, com painel consolidado comparando qual converte mais, qual perde mais paciente e qual fatura melhor por especialidade.",
    para: "Para redes e franquias que precisam padronizar.",
    destaque: null,
  },
];

const colunas = ["Essencial", "Profissional", "Performance", "Premium", "Enterprise"];

const grupos = [
  {
    grupo: "Atendimento",
    itens: [
      { nome: "Atendimento 24 horas humanizado", niveis: [1, 1, 1, 1, 1] },
      { nome: "Dúvidas respondidas com as regras da clínica", niveis: [1, 1, 1, 1, 1] },
      { nome: "Coleta dos dados do paciente", niveis: [1, 1, 1, 1, 1] },
      { nome: "Passagem para a equipe com o contexto", niveis: [1, 1, 1, 1, 1] },
      { nome: "Tom de voz da sua clínica", niveis: [1, 1, 1, 1, 1] },
    ],
  },
  {
    grupo: "Agenda",
    itens: [
      { nome: "Integração com a agenda que a clínica usa", niveis: [0, 1, 1, 1, 1] },
      { nome: "Agendar, cancelar e remarcar", niveis: [0, 1, 1, 1, 1] },
      { nome: "Lembrete e confirmação de consulta", niveis: [0, 1, 1, 1, 1] },
      { nome: "Aviso ao paciente quando a agenda muda", niveis: [0, 1, 1, 1, 1] },
      { nome: "Protocolo de urgência", niveis: [0, 1, 1, 1, 1] },
      { nome: "Encaminhamento por profissional", niveis: [0, 1, 1, 1, 1] },
      { nome: "Memória de contexto do paciente", niveis: [0, 1, 1, 1, 1] },
      { nome: "Follow-up de quem não respondeu", niveis: [0, 1, 1, 1, 1] },
    ],
  },
  {
    grupo: "Equipe e dados",
    itens: [
      { nome: "Assistente da recepção, modo consulta", niveis: [0, 0, 1, 1, 1] },
      { nome: "Origem de cada paciente", niveis: [0, 0, 1, 1, 1] },
      { nome: "Relatórios de desempenho para o doutor", niveis: [0, 0, 1, 1, 1] },
      { nome: "Pesquisa de satisfação", niveis: [0, 0, 1, 1, 1] },
      { nome: "Pedido de indicação", niveis: [0, 0, 1, 1, 1] },
      { nome: "Perfil do paciente e tom adaptado", niveis: [0, 0, 1, 1, 1] },
    ],
  },
  {
    grupo: "IA que age sozinha",
    itens: [
      { nome: "Assistente em modo delegação", niveis: [0, 0, 0, 1, 1] },
      { nome: "Reativação de pacientes inativos", niveis: [0, 0, 0, 1, 1] },
      { nome: "Confirmação ativa contra falta", niveis: [0, 0, 0, 1, 1] },
      { nome: "Lista de espera para vaga cancelada", niveis: [0, 0, 0, 1, 1] },
      { nome: "Follow-up de tratamento não fechado", niveis: [0, 0, 0, 1, 1] },
      { nome: "Briefing diário para a equipe", niveis: [0, 0, 0, 1, 1] },
      { nome: "Integração com CRM e marketing", niveis: [0, 0, 0, 1, 1] },
      { nome: "Painel de indicadores em tempo real", niveis: [0, 0, 0, 1, 1] },
    ],
  },
  {
    grupo: "Rede",
    itens: [
      { nome: "Várias unidades em painel consolidado", niveis: [0, 0, 0, 0, 1] },
      { nome: "Comparativo entre filiais", niveis: [0, 0, 0, 0, 1] },
      { nome: "Atendimento prioritário", niveis: [0, 0, 0, 0, 1] },
    ],
  },
  {
    grupo: "Sempre incluso",
    itens: [
      { nome: "Implantação, manutenção e otimização", niveis: [1, 1, 1, 1, 1] },
      { nome: "Monitoramento do sistema", niveis: [1, 1, 1, 1, 1] },
    ],
  },
];

const Planos = () => {
  const [colunaAtiva, setColunaAtiva] = useState(3);

  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-champagne grain-texture blueprint-lines py-20 lg:py-28">
        <div className="absolute -top-20 left-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 mb-6 text-xs sm:text-sm font-medium rounded-full border border-accent/40 bg-white/70 backdrop-blur text-primary select-none">
              Planos
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-primary mb-6 leading-[1.12] select-none">
              O que muda não é o tamanho.{" "}
              <span className="text-gradient-gold">
                É para quem a IA trabalha.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed select-none">
              No primeiro nível ela trabalha para o lead. No último, para a rede
              inteira. Cada implantação é desenhada em cima do que a clínica já usa.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ESCADA */}
      <section className="py-16 lg:py-20 bg-mesh-gradient-dark relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {planos.map((plano, i) => (
              <Reveal key={plano.nivel} delay={i * 0.08}>
                <div className="h-full glass-card rounded-xl p-5">
                  <span className="block text-xs font-semibold tracking-[0.2em] text-accent mb-2 select-none">
                    {plano.nivel}
                  </span>
                  <p className="text-sm font-semibold text-white mb-2 select-none">
                    {plano.nome}
                  </p>
                  <p className="text-xs text-white/65 leading-snug select-none">
                    {plano.paraQuem}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="py-20 lg:py-24 bg-surface-soft section-edge">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {planos.map((plano, i) => {
              const isRecomendado = plano.destaque === "Recomendado";
              return (
                <Reveal key={plano.nome} delay={i * 0.08}>
                  <SpotlightCard
                    dark={isRecomendado}
                    className={cn(
                      "h-full flex flex-col rounded-2xl p-7",
                      isRecomendado
                        ? "bg-mesh-gradient-dark border border-accent/40"
                        : "bg-white border border-border"
                    )}
                  >
                    {plano.destaque && (
                      <span
                        className={cn(
                          "absolute -top-3 left-7 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide select-none",
                          isRecomendado
                            ? "bg-accent text-accent-foreground shadow-[0_0_20px_-4px_hsl(var(--gold)/0.9)]"
                            : "bg-primary text-primary-foreground"
                        )}
                      >
                        {plano.destaque}
                      </span>
                    )}

                    <span
                      className={cn(
                        "text-xs font-semibold tracking-[0.2em] mb-3 select-none",
                        isRecomendado ? "text-accent" : "text-muted-foreground"
                      )}
                    >
                      NÍVEL {plano.nivel}
                    </span>

                    <h3
                      className={cn(
                        "text-2xl font-bold mb-2 select-none",
                        isRecomendado ? "text-white" : "text-primary"
                      )}
                    >
                      {plano.nome}
                    </h3>

                    <p
                      className={cn(
                        "text-xs font-medium mb-5 pb-4 border-b select-none",
                        isRecomendado
                          ? "text-white/60 border-white/15"
                          : "text-muted-foreground border-border"
                      )}
                    >
                      {plano.paraQuem}
                    </p>

                    <p className="text-base font-medium text-accent mb-4 leading-snug select-none">
                      {plano.gancho}
                    </p>

                    <p
                      className={cn(
                        "text-sm leading-relaxed mb-5 flex-1 select-none",
                        isRecomendado ? "text-white/75" : "text-muted-foreground"
                      )}
                    >
                      {plano.descricao}
                    </p>

                    <p
                      className={cn(
                        "text-sm font-medium mb-6 select-none",
                        isRecomendado ? "text-white/90" : "text-foreground/80"
                      )}
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
                        Falar sobre este plano
                      </a>
                    </Button>
                  </SpotlightCard>
                </Reveal>
              );
            })}

            <Reveal delay={0.4}>
              <SpotlightCard className="h-full rounded-2xl border border-accent/30 bg-section-tint p-7 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-primary mb-3 select-none">
                  Sobe de nível sem recomeçar
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed select-none">
                  Cada nível inclui tudo do anterior. Quando a clínica cresce, a
                  gente liga o que faltava em cima do que já está rodando. Ninguém
                  reimplanta nada do zero.
                </p>
              </SpotlightCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TABELA COMPARATIVA */}
      <section className="py-20 lg:py-28 bg-white section-edge">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-primary mb-4 select-none">
              O que entra em{" "}
              <span className="text-gradient-gold">cada nível.</span>
            </h2>
            <p className="text-sm text-muted-foreground select-none">
              Toque em um nível para destacar a coluna dele.
            </p>
          </Reveal>

          <Reveal className="max-w-6xl mx-auto mb-6">
            <div className="nav-scroll flex gap-2 overflow-x-auto justify-start lg:justify-center pb-1">
              {colunas.map((coluna, idx) => (
                <button
                  key={coluna}
                  type="button"
                  onClick={() => setColunaAtiva(idx)}
                  aria-pressed={colunaAtiva === idx}
                  className={cn(
                    "flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300",
                    colunaAtiva === idx
                      ? "border-accent bg-accent/10 text-primary shadow-[0_0_20px_-8px_hsl(var(--gold)/0.9)]"
                      : "border-border text-muted-foreground hover:border-accent/50 hover:text-primary"
                  )}
                >
                  {coluna}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal className="max-w-6xl mx-auto">
            <SpotlightCard className="rounded-2xl border border-border bg-white overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] text-left border-collapse">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="px-5 py-4 text-sm font-semibold w-[38%] select-none">
                        Recurso
                      </th>
                      {colunas.map((coluna, idx) => (
                        <th
                          key={coluna}
                          className={cn(
                            "px-4 py-4 text-sm font-semibold text-center select-none transition-colors duration-300",
                            colunaAtiva === idx
                              ? "text-accent"
                              : "text-primary-foreground/80"
                          )}
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
                    {grupos.map((grupo) => (
                      <Fragment key={grupo.grupo}>
                        <tr className="bg-section-tint">
                          <td
                            colSpan={6}
                            className="px-5 py-2.5 text-xs font-semibold tracking-[0.14em] text-primary/70 uppercase border-t border-border select-none"
                          >
                            {grupo.grupo}
                          </td>
                        </tr>
                        {grupo.itens.map((recurso, i) => (
                          <tr
                            key={recurso.nome}
                            tabIndex={0}
                            className={cn(
                              "row-mark hover:bg-accent/5 focus:bg-accent/5 focus:outline-none",
                              i % 2 === 1 ? "bg-secondary/40" : "bg-white"
                            )}
                          >
                            <td className="px-5 py-3.5 text-sm text-foreground/85 border-t border-border select-none">
                              {recurso.nome}
                            </td>
                            {recurso.niveis.map((tem, idx) => (
                              <td
                                key={`${recurso.nome}-${idx}`}
                                className={cn(
                                  "px-4 py-3.5 text-center border-t border-border transition-colors duration-300",
                                  colunaAtiva === idx && "bg-accent/10"
                                )}
                              >
                                {tem ? (
                                  <Check size={18} className="inline text-accent" />
                                ) : (
                                  <Minus
                                    size={16}
                                    className="inline text-muted-foreground/40"
                                  />
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-mesh-gradient-dark relative overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-4xl mx-auto">
            <SpotlightCard
              dark
              className="glass-card rounded-3xl px-6 py-14 sm:px-12 text-center"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5 select-none">
                Cada clínica tem{" "}
                <span className="text-gradient-gold">um gargalo diferente.</span>
              </h2>
              <p className="text-base sm:text-lg text-white/75 max-w-xl mx-auto mb-10 select-none">
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
                    Falar sobre os planos
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white hover:text-primary font-semibold px-8 h-12 bg-transparent"
                >
                  <Link to="/detalhes">
                    Ver como funciona
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

export default Planos;
