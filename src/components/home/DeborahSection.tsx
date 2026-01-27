import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import deborahPhoto from "@/assets/deborah-photo-new.jpeg";

export function DeborahSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-mesh-gradient-dark" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-10 right-20 w-72 h-72 bg-gold/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-navy-light/20 rounded-full blur-[80px]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-5 py-2.5 text-sm font-semibold glass-card text-gold rounded-full border border-gold/30">
              Quem está por trás
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
                Tecnologia com propósito.{" "}
                <span className="text-odontoagent">Implementação com cuidado.</span>
              </h2>

              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Eu não apenas vendo um sistema — eu <strong className="text-white">desenho, implemento, integro e otimizo</strong> cada OdontoAgent de acordo com a realidade da sua clínica.
                </p>
                <p>
                  Tenho experiência prática em automação de processos, arquitetura de dados e ferramentas de IA. Conheço o fluxo de trabalho de clínicas e sei adaptar a tecnologia à rotina real. Mas mais do que dominar a técnica, <strong className="text-gold">eu entendo a dor</strong>. Já fui a paciente procurando dentista de madrugada e fechando com quem respondeu primeiro.
                </p>
                <p>
                  Por isso, cada clínica que eu atendo recebe <strong className="text-white">atenção personalizada</strong>.
                </p>
              </div>

              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-gold hover:shadow-gold-glow text-navy-dark font-bold text-base px-8 py-6 shadow-lg transition-all duration-300"
                >
                  <Link to="/sobre">
                    Conhecer minha história
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="relative w-64 h-80 lg:w-72 lg:h-96">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold to-gold-dark blur-2xl opacity-30 scale-110" />
                
                {/* Photo container */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl glass-card-dark w-full h-full border border-gold/20">
                  <img
                    src={deborahPhoto}
                    alt="Deborah Alves - Especialista em IA e Automação para Clínicas"
                    className="w-full h-full object-cover object-[center_20%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 via-transparent to-transparent" />
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gold/20 rounded-2xl blur-xl" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-navy-light/30 rounded-2xl blur-xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
