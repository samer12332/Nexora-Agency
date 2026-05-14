"use client";

import { motion, useReducedMotion } from "framer-motion";
import { content, Lang } from "@/data/content";

type ProcessProps = { lang: Lang };

export function Process({ lang }: ProcessProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section id="process" className="section-shell scroll-mt-32 py-24">
      <motion.h2
        initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        className="section-title"
      >
        {lang === "en" ? content.process.title.en : content.process.title.ar}
      </motion.h2>
      <div className="mt-12 grid gap-5">
        {content.process.steps.map((step, idx) => (
          <motion.div
            key={step.en}
            initial={{ opacity: 0, x: reduceMotion ? 0 : lang === "en" ? -24 : 24, scale: reduceMotion ? 1 : 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: idx * 0.06, duration: 0.42 }}
            className="glass-card flex items-center gap-4 p-5"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-300">{idx + 1}</span>
            <p className="text-base text-slate-100">{lang === "en" ? step.en : step.ar}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
