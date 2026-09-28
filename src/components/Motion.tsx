import {
  ReactNode,
  useEffect,
  useRef,
  useState,
  MouseEvent as ReactMouseEvent,
} from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useScroll,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

/* Revela o bloco quando ele entra na tela */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li";
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  return (
    <Tag
      initial={reduce ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Tag>
  );
}

/* Numero que conta quando aparece. Aceita 78, 42, 10 e sufixos como % ou x */
export function Counter({
  to,
  suffix = "",
  prefix = "",
  duration = 1400,
  className,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(to * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

/* Card com borda que acende e um brilho que segue o cursor. Nao e clicavel */
export function SpotlightCard({
  children,
  className,
  dark = false,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    node.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={cn("card-glow spotlight", dark && "card-glow-dark", className)}
    >
      {children}
    </div>
  );
}

/* Barra fina no topo mostrando o quanto da pagina ja foi lida */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX: width }}
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left bg-gradient-gold"
    />
  );
}

/* Linha de destaque que segue o item apontado numa lista */
export function useSpotlightIndex() {
  const [index, setIndex] = useState<number | null>(null);
  return { index, setIndex };
}

/* Valor suavizado, usado em contadores de secao */
export function useSmoothValue(value: number) {
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 90, damping: 20 });
  useEffect(() => {
    motionValue.set(value);
  }, [value, motionValue]);
  return spring;
}
