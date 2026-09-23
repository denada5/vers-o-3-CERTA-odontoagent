import { Link } from "react-router-dom";
import { MessageCircle, Mail, MapPin } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/551137219385?text=Olá,%20vim%20do%20site%20do%20OdontoAgent%20e%20gostaria%20de%20agendar%20uma%20demonstração.";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <img
              src="/logo-arenium.png"
              alt="Arenium"
              className="h-12 w-12 rounded-lg object-cover mb-4"
            />
            <h3 className="text-xl font-bold mb-2">
              Odonto<span className="text-accent">Agent</span>
            </h3>
            <p className="text-primary-foreground/60 text-xs uppercase tracking-[0.18em] mb-4">
              por Arenium
            </p>
            <p className="text-primary-foreground/80 text-sm">
              Atendimento de WhatsApp implantado na sua clínica odontológica, integrado à agenda
              e ao sistema que você já usa.
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
                Como funciona
              </Link>
              <Link to="/sobre" className="text-primary-foreground/80 hover:text-accent text-sm transition-colors cursor-pointer">
                Quem somos
              </Link>
              <Link to="/planos" className="text-primary-foreground/80 hover:text-accent text-sm transition-colors cursor-pointer">
                Planos
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
            </div>
          </div>

          {/* Localização */}
          <div>
            <h4 className="font-semibold mb-4">Localização</h4>
            <div className="flex items-start gap-2 text-primary-foreground/80 text-sm">
              <MapPin size={18} className="text-accent flex-shrink-0 mt-0.5" />
              <span>Base em São Paulo. Atendimento online para todo o Brasil.</span>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} OdontoAgent é um produto Arenium. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
