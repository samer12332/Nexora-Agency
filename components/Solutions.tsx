"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { content, Lang } from "@/data/content";

type SolutionsProps = { lang: Lang };

export function Solutions({ lang }: SolutionsProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section id="solutions" className="section-shell scroll-mt-32 py-24">
      <motion.h2
        initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        className="section-title"
      >
        {lang === "en" ? content.solutions.title.en : content.solutions.title.ar}
      </motion.h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {content.solutions.items.map((solution, idx) => (
          <motion.article
            key={solution.title.en}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18, scale: reduceMotion ? 1 : 0.95, rotate: reduceMotion ? 0 : -0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.45 }}
            viewport={{ once: true, amount: 0.24 }}
            whileHover={
              reduceMotion
                ? undefined
                : {
                    y: -8,
                    rotate: 0.4,
                    borderColor: "rgba(34,211,238,0.42)",
                    boxShadow: "0 14px 36px rgba(34,211,238,0.14)",
                  }
            }
            className="glass-card group relative overflow-hidden p-6"
          >
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-cyan-200/10"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
            />
            <span className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
              {lang === "en" ? solution.category.en : solution.category.ar}
            </span>
            <h3 className="mt-4 text-xl font-semibold">{lang === "en" ? solution.title.en : solution.title.ar}</h3>
            <p className="mt-3 text-sm text-slate-300">{lang === "en" ? solution.description.en : solution.description.ar}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-400">{solution.stack.join(" • ")}</p>
            <motion.a
              whileHover={reduceMotion ? undefined : { x: lang === "ar" ? -2 : 2 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 text-sm text-cyan-300"
            >
              {lang === "en" ? content.solutions.cta.en : content.solutions.cta.ar}
              <ArrowRight size={16} className={lang === "ar" ? "rotate-180" : ""} />
            </motion.a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
