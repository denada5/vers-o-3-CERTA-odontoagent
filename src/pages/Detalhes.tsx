import { Layout } from "@/components/layout/Layout";
import { DetalhesHero } from "@/components/detalhes/DetalhesHero";
import { DetalhesCustoOmissao } from "@/components/detalhes/DetalhesCustoOmissao";
import { DetalhesFuncionalidades } from "@/components/detalhes/DetalhesFuncionalidades";
import { DetalhesBeneficios } from "@/components/detalhes/DetalhesBeneficios";
import { DetalhesPilares } from "@/components/detalhes/DetalhesPilares";
import { DetalhesIntegracoes } from "@/components/detalhes/DetalhesIntegracoes";
import { DetalhesDiferenciais } from "@/components/detalhes/DetalhesDiferenciais";
import { DetalhesCTA } from "@/components/detalhes/DetalhesCTA";

export default function Detalhes() {
  return (
    <Layout>
      <DetalhesHero />
      <DetalhesCustoOmissao />
      <DetalhesFuncionalidades />
      <DetalhesBeneficios />
      <DetalhesPilares />
      <DetalhesIntegracoes />
      <DetalhesDiferenciais />
      <DetalhesCTA />
    </Layout>
  );
}
