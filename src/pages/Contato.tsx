import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const WHATSAPP_URL = "https://wa.me/551137219385?text=Olá%20Deborah,%20gostaria%20de%20agendar%20um%20diagnóstico%20para%20minha%20clínica.";

const Contato = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome_completo: "",
    nome_clinica: "",
    email: "",
    whatsapp: "",
    duvida_desafio: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome_completo || !formData.nome_clinica || !formData.email || !formData.whatsapp || !formData.duvida_desafio) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("leads").insert({
        nome_clinica: formData.nome_clinica,
        nome_completo: formData.nome_completo,
        email: formData.email,
        whatsapp: formData.whatsapp,
        duvida_desafio: formData.duvida_desafio,
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast.success("Formulário enviado com sucesso!");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Erro ao enviar formulário. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero with Mesh Gradient */}
      <section className="py-16 lg:py-24 bg-mesh-gradient relative overflow-hidden">
        <div className="absolute top-10 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium glass-card text-accent rounded-full select-none">
              Contato
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 select-none">
              Vamos transformar sua{" "}
              <span className="text-accent">clínica</span> juntos?
            </h1>
            <p className="text-lg text-muted-foreground select-none">
              Preencha o formulário abaixo para agendar uma reunião de diagnóstico 
              ou fale diretamente comigo pelo WhatsApp.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 lg:py-24 bg-mesh-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {isSubmitted ? (
                <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-accent" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4 select-none">
                    Formulário Enviado!
                  </h3>
                  <p className="text-muted-foreground mb-6 select-none">
                    Recebemos suas informações e entraremos em contato em breve 
                    para agendar sua reunião de diagnóstico.
                  </p>
                  <Button
                    asChild
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold cursor-pointer"
                  >
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2" size={18} />
                      Falar Agora no WhatsApp
                    </a>
                  </Button>
                </div>
              ) : (
                <div className="glass-card-premium rounded-2xl p-6 lg:p-8">
                  <h2 className="text-2xl font-bold text-primary mb-2 select-none">
                    Agende sua Reunião de Diagnóstico
                  </h2>
                  <p className="text-sm text-muted-foreground mb-6 select-none">
                    Conte um pouco sobre sua clínica e seus desafios. Vou analisar e entrar em contato para agendarmos uma conversa.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <Label htmlFor="nome_completo" className="text-foreground select-none">
                        Nome Completo *
                      </Label>
                      <Input
                        id="nome_completo"
                        type="text"
                        placeholder="Seu nome completo"
                        value={formData.nome_completo}
                        onChange={(e) =>
                          setFormData({ ...formData, nome_completo: e.target.value })
                        }
                        className="mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="nome_clinica" className="text-foreground select-none">
                        Nome da Clínica *
                      </Label>
                      <Input
                        id="nome_clinica"
                        type="text"
                        placeholder="Ex: Clínica Saúde Total"
                        value={formData.nome_clinica}
                        onChange={(e) =>
                          setFormData({ ...formData, nome_clinica: e.target.value })
                        }
                        className="mt-2"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="text-foreground select-none">
                          E-mail *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="mt-2"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="whatsapp" className="text-foreground select-none">
                          WhatsApp/Telefone *
                        </Label>
                        <Input
                          id="whatsapp"
                          type="tel"
                          placeholder="(11) 99999-9999"
                          value={formData.whatsapp}
                          onChange={(e) =>
                            setFormData({ ...formData, whatsapp: e.target.value })
                          }
                          className="mt-2"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="duvida_desafio" className="text-foreground select-none">
                        Escreva sua principal dúvida ou desafio atual *
                      </Label>
                      <Textarea
                        id="duvida_desafio"
                        placeholder="Ex: Estamos perdendo muitos leads por demora no WhatsApp, quero entender como a automação pode ajudar..."
                        value={formData.duvida_desafio}
                        onChange={(e) =>
                          setFormData({ ...formData, duvida_desafio: e.target.value })
                        }
                        className="mt-2 min-h-[120px] resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 cursor-pointer"
                    >
                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          <Send className="mr-2" size={18} />
                          Solicitar Reunião de Diagnóstico
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-6 select-none">
                Prefere um atendimento mais rápido?
              </h2>

              <p className="text-muted-foreground mb-8 leading-relaxed select-none">
                Fale diretamente comigo pelo WhatsApp e agende sua reunião de diagnóstico 
                em minutos. Estou pronta para entender suas necessidades 
                e apresentar a melhor solução para sua clínica.
              </p>

              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-fit cursor-pointer"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2" size={20} />
                  Falar pelo WhatsApp
                </a>
              </Button>

              {/* O que acontece depois */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="font-semibold text-primary mb-4 select-none">
                  O que acontece depois?
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3 select-none">
                    <span className="flex-shrink-0 w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center text-accent text-sm font-bold">
                      1
                    </span>
                    <span>Recebo suas informações e analiso seu perfil</span>
                  </li>
                  <li className="flex items-start gap-3 select-none">
                    <span className="flex-shrink-0 w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center text-accent text-sm font-bold">
                      2
                    </span>
                    <span>Entro em contato para agendar a reunião de diagnóstico</span>
                  </li>
                  <li className="flex items-start gap-3 select-none">
                    <span className="flex-shrink-0 w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center text-accent text-sm font-bold">
                      3
                    </span>
                    <span>Apresento uma proposta personalizada para sua clínica</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
