"use client";

import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";
import { content, navItems, Lang } from "@/data/content";

type FooterProps = { lang: Lang };

export function Footer({ lang }: FooterProps) {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="section-shell grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Nexora Logo" width={42} height={42} className="rounded-xl" />
            <div>
              <p className="font-semibold">Nexora Agency</p>
              <p className="text-sm text-slate-300">{content.brand.ar}</p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-slate-400">
            {lang === "en"
              ? "Premium software engineering and digital innovation for ambitious businesses."
              : "هندسة برمجيات وابتكار رقمي بمستوى احترافي للشركات الطموحة."}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">{lang === "en" ? "Quick Links" : "روابط سريعة"}</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{lang === "en" ? item.en : item.ar}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">{lang === "en" ? "Contact" : "التواصل"}</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li>nexora.buisiness@gmail.com</li>
            <li>
              <span dir="ltr" className="inline-block [unicode-bidi:isolate]">
                +213798558420
              </span>
            </li>
            <li>Nexora.Agency</li>
            <li className="pt-1">
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/share/1GrNXnTQ9W/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="rounded-full border border-white/20 p-2 transition hover:border-cyan-300 hover:text-cyan-300"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="https://www.instagram.com/nexora.agency5?igsh=MWJzMm50aHpuZWV1bA=="
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="rounded-full border border-white/20 p-2 transition hover:border-cyan-300 hover:text-cyan-300"
                >
                  <Instagram size={16} />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-slate-500">
        <span dir="ltr" className="inline-block [unicode-bidi:isolate]">
          © 2026 Nexora Agency. All rights reserved.
        </span>
      </p>
      <p className="mt-2 text-center text-xs text-slate-400">
        <a
          href="https://www.linkedin.com/in/samer-yousry-88921a228/"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-cyan-300"
        >
          Developed by Eng. Samer Yousry
        </a>
      </p>
    </footer>
  );
}

