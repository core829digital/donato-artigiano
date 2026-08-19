"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { site } from "@/lib/content";
import { PhoneIcon, ShieldIcon, ClipboardIcon, ClockIcon } from "./icons";

const HERO_BG_URL =
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0e2dbea0-c0a9-413f-a57b-af279633c0df_3840w.jpg";

const trustPoints = [
  { icon: ShieldIcon, label: "Un solo numero per tutto" },
  { icon: ClipboardIcon, label: "Preventivo chiaro, senza sorprese" },
  { icon: ClockIcon, label: "Interventi rapidi in zona" },
];

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReduced) {
        gsap.set("[data-hero-anim]", { opacity: 1, y: 0 });
        return;
      }
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.set("[data-hero-anim]", { opacity: 0, y: 24 })
        .to("[data-hero-eyebrow]", { opacity: 1, y: 0, duration: 0.6 }, 0.15)
        .to(
          "[data-hero-title]",
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.09 },
          0.3
        )
        .to("[data-hero-sub]", { opacity: 1, y: 0, duration: 0.7 }, 0.75)
        .to(
          "[data-hero-cta]",
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
          0.95
        )
        .to(
          "[data-hero-trust]",
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.07 },
          1.15
        )
        .fromTo(
          "[data-hero-rule]",
          { scaleX: 0 },
          { scaleX: 1, duration: 1, ease: "power2.inOut" },
          0.9
        );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative bg-(--color-ink) text-(--color-cream-white) overflow-hidden"
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- decorative full-bleed backdrop, not an optimized content image */}
      <img
        src={HERO_BG_URL}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Inset vignette ring, matches the glass-hero reference treatment */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] ring-1 ring-black/30"
      />

      {/* Legibility scrim over the photo + seamless fade into the page background below */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-(--color-paper)/75 via-(--color-paper)/55 to-(--color-paper)"
      />

      <div className="relative z-10 mx-auto w-full px-5 sm:px-8 lg:px-12 xl:px-20 2xl:px-28 pt-28 pb-24 md:pt-44 md:pb-28">
        <div
          data-hero-anim
          data-hero-eyebrow
          className="mb-8 inline-flex items-center gap-3 rounded-full bg-white/8 pl-1.5 pr-4 py-1.5 ring-1 ring-white/15 backdrop-blur"
        >
          <span className="inline-flex items-center rounded-full bg-(--color-brass) text-(--color-ink) text-xs font-semibold px-2.5 py-1">
            Donato
          </span>
          <span className="text-sm text-(--color-cream-white)/90 whitespace-nowrap">
            <span className="hidden sm:inline">
              L&apos;Artigiano Fidato &mdash; un solo numero per tutto
            </span>
            <span className="sm:hidden">Un solo numero per tutto</span>
          </span>
        </div>

        <h1 className="font-display leading-[0.95] text-[13vw] sm:text-6xl md:text-7xl lg:text-[5.4rem] max-w-4xl">
          <span data-hero-anim data-hero-title className="block">
            Casa e locale,
          </span>
          <span
            data-hero-anim
            data-hero-title
            className="block italic text-(--color-brass-light)"
          >
            in mani fidate.
          </span>
        </h1>

        <div data-hero-anim data-hero-rule className="brass-rule w-40 my-8 origin-left" />

        <p
          data-hero-anim
          data-hero-sub
          className="max-w-xl text-lg md:text-xl text-(--color-cream-white)/80 font-light leading-relaxed"
        >
          Sgomberi, pulizie, infissi e sicurezza: interventi eseguiti con cura
          artigiana, prezzo chiaro e la puntualità di chi il mestiere lo
          rispetta.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
          <a
            data-hero-anim
            data-hero-cta
            href={site.phoneHref}
            className="cta-burst inline-flex items-center justify-center gap-2.5 rounded-full bg-(--color-brass) text-(--color-ink) px-6 py-3.5 text-base font-semibold hover:bg-(--color-brass-light) active:scale-[0.97] transition-[background-color,scale] duration-200 cursor-pointer shadow-(--shadow-lift)"
          >
            <PhoneIcon width={18} height={18} />
            Chiama ora &middot; {site.phoneDisplay}
          </a>
          <a
            data-hero-anim
            data-hero-cta
            href="#servizi"
            className="cta-fill inline-flex items-center justify-center gap-2 rounded-full border border-(--color-cream-white)/30 px-6 py-3.5 text-base font-medium text-(--color-cream-white) cursor-pointer"
          >
            Guarda i servizi
          </a>
        </div>

        <ul className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
          {trustPoints.map(({ icon: Icon, label }) => (
            <li
              key={label}
              data-hero-anim
              data-hero-trust
              className="flex items-center gap-3 text-sm text-(--color-cream-white)/85"
            >
              <span className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full border border-(--color-brass-light)/40 text-(--color-brass-light)">
                <Icon width={17} height={17} />
              </span>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
