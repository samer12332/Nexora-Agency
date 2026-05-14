"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { Globe, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Lang, navItems } from "@/data/content";

type NavbarProps = {
  lang: Lang;
  activeSection: string;
  onToggleLang: () => void;
  onNavClick: (id: string) => void;
};

export function Navbar({ lang, activeSection, onToggleLang, onNavClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, {
    stiffness: reduceMotion ? 80 : 130,
    damping: reduceMotion ? 30 : 25,
    mass: 0.18,
  });

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div style={{ scaleX: progressScale, transformOrigin: "0% 50%" }} className="h-[2px] w-full bg-cyan-300/90" />

      <motion.nav
        initial={false}
        animate={{
          marginTop: isScrolled ? 12 : 20,
          width: isScrolled ? "92%" : "96%",
          backgroundColor: isScrolled ? "rgba(8, 13, 28, 0.85)" : "rgba(8, 13, 28, 0.45)",
          borderColor: isScrolled ? "rgba(255,255,255,0.16)" : "rgba(255,255,255,0.08)",
        }}
        transition={{ duration: reduceMotion ? 0.18 : 0.35 }}
        className="mx-auto rounded-2xl border px-4 py-3 backdrop-blur-xl md:px-6"
      >
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavClick("hero")}
            className="group flex items-center gap-3"
            aria-label="Go to top"
          >
            <motion.div whileHover={reduceMotion ? undefined : { rotate: -5, scale: 1.03 }} transition={{ type: "spring", stiffness: 260, damping: 18 }}>
              <Image src="/logo.png" alt="Nexora Logo" width={42} height={42} className="rounded-xl" />
            </motion.div>
            <div>
              <p className="text-sm font-semibold">Nexora Agency</p>
              <p className="text-xs text-slate-300">نيكسورا</p>
            </div>
          </button>

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavClick(item.id)}
                  className={`relative text-sm transition duration-300 ${isActive ? "text-cyan-300" : "text-slate-200 hover:text-cyan-300"}`}
                >
                  <motion.span
                    animate={{ scale: isActive ? 1.03 : 1, textShadow: isActive ? "0 0 12px rgba(34,211,238,0.65)" : "0 0 0px rgba(0,0,0,0)" }}
                    transition={{ type: "spring", stiffness: 240, damping: 22 }}
                    className="inline-block"
                  >
                    {lang === "en" ? item.en : item.ar}
                  </motion.span>
                  <motion.span
                    layout
                    className={`absolute -bottom-1 left-0 right-0 h-[2px] rounded-full ${isActive ? "bg-cyan-300" : "bg-transparent"}`}
                    transition={{ type: "spring", stiffness: 300, damping: 26 }}
                  />
                </button>
              );
            })}
            <motion.button
              whileHover={reduceMotion ? undefined : { scale: 1.04, boxShadow: "0 0 20px rgba(34,211,238,0.35)" }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              onClick={onToggleLang}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-sm hover:border-cyan-300"
            >
              <Globe size={16} /> {lang === "en" ? "AR" : "EN"}
            </motion.button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen((v) => !v)} aria-label="menu">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="mt-4 space-y-3 border-t border-white/10 pt-4 md:hidden">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavClick(item.id);
                    setIsOpen(false);
                  }}
                  className={`block w-full rounded-lg px-2 py-1 text-sm ${isActive ? "bg-cyan-400/15 text-cyan-300" : "text-slate-100"}`}
                >
                  {lang === "en" ? item.en : item.ar}
                </button>
              );
            })}
            <button onClick={onToggleLang} className="rounded-full border border-white/20 px-3 py-1 text-sm">
              {lang === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
            </button>
          </div>
        )}
      </motion.nav>
    </header>
  );
}
