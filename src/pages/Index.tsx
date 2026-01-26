import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { OdontoAgentSection } from "@/components/home/OdontoAgentSection";
import { ProofSection } from "@/components/home/ProofSection";
import { DeborahSection } from "@/components/home/DeborahSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      {/* Seção 1: Hero Principal - A Marca (Fundo claro) */}
      <HeroSection />
      
      {/* Seção 2: Apresentação do OdontoAgent (Fundo navy) */}
      <OdontoAgentSection />
      
      {/* Seção 3: Prova de Valor Rápida (Fundo claro) */}
      <ProofSection />
      
      {/* Seção 4: Diferencial da Deborah (Fundo navy) */}
      <DeborahSection />
      
      {/* Seção 5: CTA Final (Fundo claro) */}
      <CTASection />
    </Layout>
  );
};

export default Index;
