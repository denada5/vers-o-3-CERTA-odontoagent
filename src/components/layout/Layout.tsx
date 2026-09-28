import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "../WhatsAppButton";
import { ScrollProgress } from "../Motion";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const reduce = useReducedMotion();

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Navbar />
      <motion.main
        key={location.pathname}
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 pt-14 lg:pt-[72px]"
      >
        {children}
      </motion.main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
