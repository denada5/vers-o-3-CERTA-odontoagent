import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Reveal, Counter, SpotlightCard } from "@/components/Motion";
import {
  ArrowRight,
  Headset,
  MessageCircle,
  PhoneCall,
  Wrench,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/551137219385?text=Olá,%20vim%20do%20site%20do%20OdontoAgent%20e%20gostaria%20de%20falar%20com%20o%20time.";

const provas = [
  { valor: 12, sufixo: "+", rotulo: "meses construindo antes de vender" },
  { valor: 10, sufixo: "+", rotulo: "fluxos de trabalho orquestrados" },
  { valor: 20, sufixo: "+", rotulo: "tabelas no banco de dados" },
  { valor: 24, sufixo: "h", rotulo: "de monitoramento do sistema" },
];

const times = [
  {
    icon: Wrench,
    titulo: "Constrói e implanta",
    pessoas: ["Deborah", "Jovane", "Rafael"],
    texto:
      "Transformam a solução em algo robusto para clínica de verdade. Cuidam da implementação, dos testes e do go-live.",
  },
  {
    icon: Headset,
    titulo: "Mantém no ar",
    pessoas: ["Jhulia", "Aldivan", "Breno"],
    texto:
      "Monitoram, otimizam e cuidam da continuidade. Se der erro, é consertado antes de virar problema na sua recepção.",
  },
  {
    icon: PhoneCall,
    titulo: "Fala com você",
    pessoas: ["Deborah", "Rafael"],
    texto:
      "Ligação, demonstração e acompanhamento. Quem vende é quem implanta, então nada é prometido sem ter como entregar.",
  },
];

const jeito = [
  {
    titulo: "Proximidade",
    texto:
      "A gente não some depois do go-live. Está por perto para ajustar o que a rotina da clínica pedir.",
  },
  {
    titulo: "Comunicação",
    texto:
      "Você fala com quem construiu o sistema, não com um chamado numerado numa fila de suporte.",
  },
  {
    titulo: "Melhoria sempre",
    texto:
      "Monitoramento e otimização contínuos. O atendimento de hoje é melhor que o do mês passado.",
  },
];

const Sobre = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-champagne grain-texture blueprint-lines py-20 lg:py-28">
        <div className="absolute -top-16 right-16 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 mb-6 text-xs sm:text-sm font-medium rounded-full border border-accent/40 bg-white/70 backdrop-blur text-primary select-none">
              Quem somos
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-primary mb-6 leading-[1.12] select-none">
              Um ano construindo{" "}
              <span className="text-gradient-gold">
                antes de vender o primeiro.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed select-none">
              Somos a Arenium. Levamos esse tempo porque clínica não é lugar para
              testar sistema meia-boca.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PROVAS */}
      <section className="py-16 lg:py-20 bg-mesh-gradient-dark relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {provas.map((prova, i) => (
              <Reveal key={prova.rotulo} delay={i * 0.1}>
                <SpotlightCard dark className="h-full glass-card rounded-2xl p-6 text-center">
                  <span className="block text-4xl lg:text-5xl font-bold text-gradient-gold mb-2 select-none">
                    <Counter to={prova.valor} suffix={prova.sufixo} />
                  </span>
                  <p className="text-xs sm:text-sm text-white/70 leading-snug select-none">
                    {prova.rotulo}
                  </p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ORIGEM */}
      <section className="py-20 lg:py-28 bg-surface-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 max-w-6xl mx-auto items-center">
            <Reveal className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary leading-tight select-none">
                Começou do{" "}
                <span className="text-gradient-gold">
                  outro lado do balcão.
                </span>
              </h2>
              <div className="divider-gold w-32 mt-6" />
            </Reveal>

            <Reveal delay={0.12} className="lg:col-span-3">
              <div className="space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed select-none">
                <p>
                  A Deborah procurava tratamento e mandou mensagem para várias
                  clínicas. Algumas com profissionais excelentes demoraram dias
                  para responder. Ela fechou com a única que resolveu a dúvida
                  dela na hora.
                </p>
                <p className="text-primary font-medium">
                  As outras nunca chegaram a atender. E nenhuma delas ficou
                  sabendo que perdeu uma paciente.
                </p>
                <p>
                  Foi por isso que a gente escolheu odontologia em vez de fazer
                  mais uma ferramenta genérica. O OdontoAgent foi pensado para
                  clínica que já é boa no que faz e está perdendo paciente antes
                  da primeira consulta.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* O TIME */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-primary mb-5 select-none">
              Tem gente por trás{" "}
              <span className="text-gradient-gold">de cada conversa.</span>
            </h2>
            <p className="text-base text-muted-foreground select-none">
              Não é um sistema que roda sozinho e torce para dar certo.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {times.map((time, i) => (
              <Reveal key={time.titulo} delay={i * 0.1}>
                <SpotlightCard className="h-full rounded-2xl border border-border bg-secondary/40 p-7 flex flex-col">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 border border-accent/30 mb-5">
                    <time.icon size={20} className="text-accent" />
                  </span>

                  <h3 className="text-lg font-semibold text-primary mb-4 select-none">
                    {time.titulo}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {time.pessoas.map((pessoa) => (
                      <span
                        key={pessoa}
                        className="inline-flex items-center gap-2 pl-1 pr-3 py-1 rounded-full bg-white border border-border"
                      >
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground select-none">
                          {pessoa.charAt(0)}
                        </span>
                        <span className="text-sm font-medium text-primary select-none">
                          {pessoa}
                        </span>
                      </span>
                    ))}
                  </div>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed select-none">
                    {time.texto}
                  </p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="max-w-3xl mx-auto mt-10 text-center">
            <p className="text-sm sm:text-base text-muted-foreground select-none">
              Além deles, tem time cuidando de customer success, contratos,
              jurídico e pós-venda. Sua clínica nunca depende de uma pessoa só.
            </p>
          </Reveal>
        </div>
      </section>

      {/* JEITO DE TRABALHAR */}
      <section className="py-20 lg:py-28 bg-surface-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-14 max-w-6xl mx-auto">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary leading-tight select-none">
                Como a gente trabalha{" "}
                <span className="text-gradient-gold">com a sua clínica.</span>
              </h2>
              <div className="divider-gold w-32 mt-6" />
            </Reveal>

            <div className="lg:col-span-2 grid sm:grid-cols-3 gap-5">
              {jeito.map((item, i) => (
                <Reveal key={item.titulo} delay={i * 0.1}>
                  <SpotlightCard className="h-full rounded-2xl border border-border bg-white p-6">
                    <h3 className="text-base font-semibold text-primary mb-3 select-none">
                      {item.titulo}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed select-none">
                      {item.texto}
                    </p>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-4xl mx-auto">
            <SpotlightCard className="rounded-3xl border border-border bg-surface-soft px-6 py-14 sm:px-12 text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-5 select-none">
                Fale com quem{" "}
                <span className="text-gradient-gold">vai implantar.</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-10 select-none">
                Sem intermediário e sem script de call center.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            </SpotlightCard>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
