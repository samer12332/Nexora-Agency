"use client";

import { useEffect, useMemo, useState } from "react";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Solutions } from "@/components/Solutions";
import { Trust } from "@/components/Trust";
import { WhyUs } from "@/components/WhyUs";
import { Lang } from "@/data/content";

const trackedSections = ["about", "services", "process", "solutions", "contact"] as const;
type TrackedSection = (typeof trackedSections)[number];

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("en");
  const [activeSection, setActiveSection] = useState<TrackedSection>("about");

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  useEffect(() => {
    const ratios: Partial<Record<TrackedSection, number>> = {};

    const getClosestFallback = () => {
      const offset = 140;
      let current: TrackedSection = trackedSections[0];
      for (const id of trackedSections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (window.scrollY + offset >= top) current = id;
      }
      return current;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id as TrackedSection;
          ratios[id] = entry.isIntersecting ? entry.intersectionRatio : 0;
        }

        let best: TrackedSection | null = null;
        let bestRatio = 0;
        for (const id of trackedSections) {
          const ratio = ratios[id] ?? 0;
          if (ratio > bestRatio) {
            best = id;
            bestRatio = ratio;
          }
        }

        setActiveSection(bestRatio > 0 ? (best as TrackedSection) : getClosestFallback());
      },
      {
        root: null,
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.75],
      },
    );

    trackedSections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const wrapperDirection = useMemo(() => (lang === "ar" ? "text-right" : "text-left"), [lang]);

  const handleNavClick = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    const offset = 108;
    const y = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <main className={wrapperDirection}>
      <Navbar
        lang={lang}
        activeSection={activeSection}
        onNavClick={handleNavClick}
        onToggleLang={() => setLang((prev) => (prev === "en" ? "ar" : "en"))}
      />
      <Hero lang={lang} />
      <About lang={lang} />
      <Services lang={lang} />
      <WhyUs lang={lang} />
      <Process lang={lang} />
      <Solutions lang={lang} />
      <Trust lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}
