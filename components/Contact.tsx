"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Facebook, Instagram, Mail, MessageCircleMore } from "lucide-react";
import { FormEvent, useState } from "react";
import { content, Lang } from "@/data/content";

type ContactProps = { lang: Lang };

export function Contact({ lang }: ContactProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    projectType: "",
    budgetRange: "",
    projectDetails: "",
  });
  const reduceMotion = useReducedMotion();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `New Project Request - ${formValues.firstName} ${formValues.lastName}`.trim();
    const body = [
      `First Name: ${formValues.firstName}`,
      `Last Name: ${formValues.lastName}`,
      `Email: ${formValues.email}`,
      `Project Type: ${formValues.projectType || "N/A"}`,
      `Budget Range: ${formValues.budgetRange || "N/A"}`,
      "",
      "Project Details:",
      formValues.projectDetails,
    ].join("\n");

    const mailto = `mailto:nexora.business@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2200);
  };

  return (
    <section id="contact" className="section-shell scroll-mt-32 py-24">
      <motion.h2
        initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        className="section-title"
      >
        {lang === "en" ? content.contact.title.en : content.contact.title.ar}
      </motion.h2>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 12, scale: reduceMotion ? 1 : 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          className="glass-card p-6"
        >
          <p className="text-sm text-slate-300">nexora.business@gmail.com</p>
          <p className="mt-2 text-sm text-slate-300">
            <span dir="ltr" className="inline-block [unicode-bidi:isolate]">
              +213798558420
            </span>
          </p>
          <p className="mt-2 text-sm text-slate-300">Nexora.Agency</p>
          <motion.a
            whileHover={reduceMotion ? undefined : { scale: 1.03, boxShadow: "0 0 16px rgba(74,222,128,0.35)" }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            href="https://wa.me/213798558420"
            target="_blank"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-green-400/40 bg-green-400/10 px-4 py-2 text-sm text-green-300"
            rel="noreferrer"
          >
            <MessageCircleMore size={16} /> WhatsApp
          </motion.a>
          <div className="mt-4 flex items-center gap-3">
            <motion.a
              whileHover={reduceMotion ? undefined : { scale: 1.05, boxShadow: "0 0 14px rgba(34,211,238,0.28)" }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              href="https://www.facebook.com/share/1GrNXnTQ9W/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="rounded-full border border-white/20 p-2 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-300"
            >
              <Facebook size={16} />
            </motion.a>
            <motion.a
              whileHover={reduceMotion ? undefined : { scale: 1.05, boxShadow: "0 0 14px rgba(34,211,238,0.28)" }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              href="https://www.instagram.com/nexora.agency5?igsh=MWJzMm50aHpuZWV1bA=="
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-white/20 p-2 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-300"
            >
              <Instagram size={16} />
            </motion.a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: reduceMotion ? 0 : 14, scale: reduceMotion ? 1 : 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          onSubmit={onSubmit}
          className="glass-card space-y-4 p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              required
              value={formValues.firstName}
              onChange={(e) => setFormValues((prev) => ({ ...prev, firstName: e.target.value }))}
              placeholder={lang === "en" ? "First Name" : "الاسم الأول"}
              className="rounded-xl border border-white/15 bg-white/5 p-3 text-sm"
            />
            <input
              required
              value={formValues.lastName}
              onChange={(e) => setFormValues((prev) => ({ ...prev, lastName: e.target.value }))}
              placeholder={lang === "en" ? "Last Name" : "الاسم الأخير"}
              className="rounded-xl border border-white/15 bg-white/5 p-3 text-sm"
            />
          </div>
          <input
            required
            type="email"
            value={formValues.email}
            onChange={(e) => setFormValues((prev) => ({ ...prev, email: e.target.value }))}
            placeholder="Email"
            className="w-full rounded-xl border border-white/15 bg-white/5 p-3 text-sm"
          />
          <input
            value={formValues.projectType}
            onChange={(e) => setFormValues((prev) => ({ ...prev, projectType: e.target.value }))}
            placeholder={lang === "en" ? content.contact.projectType.en : content.contact.projectType.ar}
            className="w-full rounded-xl border border-white/15 bg-white/5 p-3 text-sm"
          />
          <input
            value={formValues.budgetRange}
            onChange={(e) => setFormValues((prev) => ({ ...prev, budgetRange: e.target.value }))}
            placeholder={lang === "en" ? content.contact.budget.en : content.contact.budget.ar}
            className="w-full rounded-xl border border-white/15 bg-white/5 p-3 text-sm"
          />
          <textarea
            rows={4}
            required
            value={formValues.projectDetails}
            onChange={(e) => setFormValues((prev) => ({ ...prev, projectDetails: e.target.value }))}
            placeholder={lang === "en" ? content.contact.details.en : content.contact.details.ar}
            className="w-full rounded-xl border border-white/15 bg-white/5 p-3 text-sm"
          />
          <motion.button
            whileHover={reduceMotion ? undefined : { scale: 1.03, boxShadow: "0 0 22px rgba(34,211,238,0.36)" }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-900"
          >
            <Mail size={16} /> {lang === "en" ? "Send Request" : "إرسال الطلب"}
          </motion.button>

          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: reduceMotion ? 0 : 6, scale: reduceMotion ? 1 : 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="inline-flex items-center gap-2 text-sm text-emerald-300"
            >
              <CheckCircle2 size={16} /> {lang === "en" ? "Request submitted successfully" : "تم إرسال الطلب بنجاح"}
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

