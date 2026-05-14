"use client";

import { motion, useReducedMotion } from "framer-motion";
import { content, Lang } from "@/data/content";

type AboutProps = { lang: Lang };

export function About({ lang }: AboutProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="section-shell scroll-mt-32 py-24">
      <motion.div
        initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.28 }}
        transition={{ duration: reduceMotion ? 0.2 : 0.6 }}
        className="glass-card p-8 sm:p-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ delay: 0.05, duration: 0.45 }}
          className="section-title"
        >
          {lang === "en" ? content.about.title.en : content.about.title.ar}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ delay: 0.12, duration: 0.45 }}
          className="section-copy"
        >
          {lang === "en" ? content.about.description.en : content.about.description.ar}
        </motion.p>
      </motion.div>
    </section>
  );
}
