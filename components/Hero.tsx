"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { content, Lang } from "@/data/content";

type HeroProps = { lang: Lang };

export function Hero({ lang }: HeroProps) {
  const t = content.hero;
  const reduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const enableParallax = isDesktop && !reduceMotion;
  const parallaxY = useTransform(scrollY, [0, 600], [0, enableParallax ? 65 : 0]);
  const glowY = useTransform(scrollY, [0, 600], [0, enableParallax ? -30 : 0]);

  const particles = useMemo(() => [1, 2, 3, 4, 5, 6], []);

  return (
    <section id="hero" className="relative overflow-hidden pt-40 scroll-mt-32">
      <motion.div style={{ y: parallaxY }} className="absolute inset-0 bg-aura" />
      <motion.div style={{ y: glowY }} className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute left-[12%] top-[20%] h-28 w-28 rounded-full bg-cyan-400/20 blur-2xl" />
        <div className="absolute right-[14%] top-[28%] h-20 w-20 rounded-full bg-teal-300/20 blur-2xl" />
      </motion.div>

      <div className="section-shell relative">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0.2 : 0.8 }}
          className="glass-card relative overflow-hidden p-8 sm:p-12"
        >
          {isDesktop && (
            <div className="pointer-events-none absolute inset-0">
              {particles.map((item, idx) => (
                <motion.span
                  key={item}
                  className="absolute h-1.5 w-1.5 rounded-full bg-cyan-200/70"
                  style={{ left: `${12 + idx * 14}%`, top: `${20 + (idx % 3) * 18}%` }}
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          y: [-3, 5, -3],
                          opacity: [0.45, 0.95, 0.45],
                        }
                  }
                  transition={{ duration: 4 + idx * 0.5, repeat: Infinity, ease: "easeInOut" }}
                />
              ))}
            </div>
          )}

          <motion.p
            initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.1, duration: 0.5 }}
            className="mb-4 inline-block rounded-full border border-cyan-300/40 bg-cyan-400/10 px-4 py-1 text-xs tracking-[0.2em] text-cyan-300"
          >
            NEXORA.AGENCY
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.2, duration: 0.6 }}
            className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
          >
            {lang === "en" ? t.title.en : t.title.ar}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.3, duration: 0.6 }}
            className="mt-6 max-w-3xl text-lg text-slate-300"
          >
            {lang === "en" ? t.description.en : t.description.ar}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.45, duration: 0.55 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <motion.a
              whileHover={reduceMotion ? undefined : { scale: 1.03, boxShadow: "0 0 26px rgba(34,211,238,0.42)" }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              href="#services"
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
            >
              {lang === "en" ? t.primaryCta.en : t.primaryCta.ar}
            </motion.a>
            <motion.a
              whileHover={reduceMotion ? undefined : { scale: 1.03, boxShadow: "0 0 20px rgba(34,211,238,0.22)" }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold transition hover:border-cyan-300"
            >
              {lang === "en" ? t.secondaryCta.en : t.secondaryCta.ar} <ArrowUpRight size={16} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
