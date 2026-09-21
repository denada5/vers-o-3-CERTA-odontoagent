import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/detalhes", label: "Como funciona" },
  { href: "/planos", label: "Planos" },
  { href: "/sobre", label: "Quem somos" },
  { href: "/contato", label: "Contato" },
];

function BrandMark() {
  return (
    <span className="flex items-center gap-2.5">
      <img
        src="/logo-arenium.png"
        alt=""
        aria-hidden="true"
        className="h-9 w-9 lg:h-10 lg:w-10 flex-shrink-0 rounded-lg object-cover"
      />
      <span className="leading-none">
        <span className="block text-lg lg:text-xl font-bold text-primary tracking-tight">
          Odonto<span className="text-accent">Agent</span>
        </span>
        <span className="block text-[10px] lg:text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-0.5">
          por Arenium
        </span>
      </span>
    </span>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2" aria-label="OdontoAgent, por Arenium">
            <BrandMark />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-accent after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-accent after:transition-all after:duration-300 hover:after:w-full",
                  location.pathname === link.href
                    ? "text-accent after:w-full"
                    : "text-foreground/80 after:w-0"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 shadow-[0_0_0_0_hsl(var(--gold)/0.5)] hover:shadow-[0_0_24px_-6px_hsl(var(--gold)/0.8)] transition-shadow duration-300"
            >
              <Link to="/contato#formulario">Agendar demonstração</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "text-base font-medium py-2 transition-colors",
                    location.pathname === link.href
                      ? "text-accent"
                      : "text-foreground/80"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full mt-2"
              >
                <Link to="/contato#formulario">Agendar demonstração</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
