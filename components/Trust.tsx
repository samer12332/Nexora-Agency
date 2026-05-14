"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { content, Lang } from "@/data/content";

type TrustProps = { lang: Lang };

export function Trust({ lang }: TrustProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-shell py-24">
      <motion.div
        initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5 }}
        className="glass-card p-8 sm:p-10"
      >
        <h2 className="section-title">{lang === "en" ? content.trust.title.en : content.trust.title.ar}</h2>
        <p className="section-copy">{lang === "en" ? content.trust.description.en : content.trust.description.ar}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.trust.metrics.map((metric, idx) => (
            <motion.div
              key={metric.en}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 10, scale: reduceMotion ? 1 : 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={reduceMotion ? undefined : { y: -4, borderColor: "rgba(34,211,238,0.35)" }}
              className="rounded-xl border border-white/10 bg-white/5 p-4"
            >
              <ShieldCheck className="mb-2 text-cyan-300" size={18} />
              <p className="text-sm text-slate-100">{lang === "en" ? metric.en : metric.ar}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
