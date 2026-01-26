import { Link } from "react-router-dom";
import { MessageCircle, Mail, Instagram, MapPin } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/551137219385?text=Olá%20Deborah,%20gostaria%20de%20agendar%20um%20diagnóstico%20para%20minha%20clínica.";
const INSTAGRAM_URL = "https://instagram.com/a_deborah_alves";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Deborah <span className="text-accent">Alves</span>
            </h3>
            <p className="text-primary-foreground/80 text-sm">
              Ponto de Dados & Automação para clínicas que querem crescer com inteligência.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-primary-foreground/80 hover:text-accent text-sm transition-colors cursor-pointer">
                Home
              </Link>
              <Link to="/detalhes" className="text-primary-foreground/80 hover:text-accent text-sm transition-colors cursor-pointer">
                Detalhes
              </Link>
              <Link to="/sobre" className="text-primary-foreground/80 hover:text-accent text-sm transition-colors cursor-pointer">
                Sobre
              </Link>
              <Link to="/planos" className="text-primary-foreground/80 hover:text-accent text-sm transition-colors cursor-pointer">
                Planos e Como Funciona
              </Link>
              <Link to="/contato" className="text-primary-foreground/80 hover:text-accent text-sm transition-colors cursor-pointer">
                Contato
              </Link>
            </nav>
          </div>

          {/* Contato Direto */}
          <div>
            <h4 className="font-semibold mb-4">Contato Direto</h4>
            <div className="flex flex-col gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-accent text-sm transition-colors cursor-pointer"
              >
                <MessageCircle size={18} className="text-accent flex-shrink-0" />
                <span>(11) 3721-9385</span>
              </a>
              <a
                href="mailto:contato@deborahalves.lat"
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-accent text-sm transition-colors cursor-pointer"
              >
                <Mail size={18} className="text-accent flex-shrink-0" />
                <span>contato@deborahalves.lat</span>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-accent text-sm transition-colors cursor-pointer"
              >
                <Instagram size={18} className="text-accent flex-shrink-0" />
                <span>@a_deborah_alves</span>
              </a>
            </div>
          </div>

          {/* Localização */}
          <div>
            <h4 className="font-semibold mb-4">Localização</h4>
            <div className="flex items-start gap-2 text-primary-foreground/80 text-sm">
              <MapPin size={18} className="text-accent flex-shrink-0 mt-0.5" />
              <span>Base em São Paulo, atendimento global para todas as localidades.</span>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Deborah Alves. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
