"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { content, Lang } from "@/data/content";

type ServicesProps = { lang: Lang };

export function Services({ lang }: ServicesProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="section-shell scroll-mt-32 py-24">
      <motion.h2
        initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        className="section-title"
      >
        {lang === "en" ? "Services" : "الخدمات"}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.05 }}
        className="section-copy"
      >
        {lang === "en"
          ? "From product engineering to AI automation, we architect digital systems built for business growth."
          : "من هندسة المنتجات إلى أتمتة الذكاء الاصطناعي، نصمم أنظمة رقمية مبنية للنمو."}
      </motion.p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {content.services.map((group, idx) => (
          <motion.article
            key={group.title.en}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18, scale: reduceMotion ? 1 : 0.95, rotateX: reduceMotion ? 0 : 2 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            whileHover={reduceMotion ? undefined : { y: -8, boxShadow: "0 16px 42px rgba(56,189,248,0.16)", borderColor: "rgba(34,211,238,0.45)" }}
            transition={{ delay: idx * 0.05, duration: 0.45 }}
            viewport={{ once: true, amount: 0.24 }}
            className="glass-card group p-6"
          >
            <h3 className="text-xl font-semibold">{lang === "en" ? group.title.en : group.title.ar}</h3>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li key={item.en} className="flex items-start gap-2 text-sm text-slate-300">
                  <motion.span whileHover={reduceMotion ? undefined : { rotate: 8, scale: 1.08 }}>
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-cyan-300" />
                  </motion.span>
                  <span>{lang === "en" ? item.en : item.ar}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
