"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import { content, Lang } from "@/data/content";

type WhyUsProps = { lang: Lang };

export function WhyUs({ lang }: WhyUsProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-shell py-24">
      <motion.h2
        initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        className="section-title"
      >
        {lang === "en" ? content.whyUs.title.en : content.whyUs.title.ar}
      </motion.h2>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {content.whyUs.points.map((point, idx) => (
          <motion.div
            key={point.en}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16, scale: reduceMotion ? 1 : 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: idx * 0.04, duration: 0.4 }}
            viewport={{ once: true, amount: 0.22 }}
            whileHover={reduceMotion ? undefined : { y: -6, borderColor: "rgba(34,211,238,0.42)", boxShadow: "0 12px 30px rgba(34,211,238,0.13)" }}
            className="glass-card flex min-h-28 items-center gap-3 p-5"
          >
            <motion.span whileHover={reduceMotion ? undefined : { rotate: 10, scale: 1.08 }}>
              <Star className="text-cyan-300" size={18} />
            </motion.span>
            <p className="text-sm font-medium text-slate-100">{lang === "en" ? point.en : point.ar}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
