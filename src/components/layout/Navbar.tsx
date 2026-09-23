import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/detalhes", label: "Como funciona" },
  { href: "/planos", label: "Planos" },
  { href: "/sobre", label: "Quem somos" },
  { href: "/contato", label: "Contato" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-background/70 backdrop-blur-sm"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-14 lg:h-[72px]">
          <Link
            to="/"
            className="flex items-center gap-2.5 flex-shrink-0"
            aria-label="OdontoAgent, por Arenium"
          >
            <img
              src="/logo-arenium.png"
              alt=""
              aria-hidden="true"
              className="h-9 w-9 lg:h-10 lg:w-10 flex-shrink-0 rounded-lg object-cover"
            />
            <span className="leading-none hidden sm:block">
              <span className="block text-base lg:text-xl font-bold text-primary tracking-tight">
                Odonto<span className="text-accent">Agent</span>
              </span>
              <span className="block text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-0.5">
                por Arenium
              </span>
            </span>
          </Link>

          <div className="flex-1 min-w-0 lg:flex lg:justify-center">
            <ul className="nav-scroll flex items-center gap-5 lg:gap-8 overflow-x-auto py-1">
              {navLinks.map((link) => {
                const active = location.pathname === link.href;
                return (
                  <li key={link.href} className="flex-shrink-0">
                    <Link
                      to={link.href}
                      data-active={active}
                      className={cn(
                        "nav-underline relative block text-[13px] lg:text-sm font-medium whitespace-nowrap transition-colors duration-200",
                        active
                          ? "text-accent"
                          : "text-foreground/75 hover:text-accent"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <Button
            asChild
            size="sm"
            className="hidden md:inline-flex flex-shrink-0 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-5 transition-shadow duration-300 hover:shadow-[0_0_24px_-6px_hsl(var(--gold)/0.85)]"
          >
            <Link to="/contato#formulario">Agendar demonstração</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
