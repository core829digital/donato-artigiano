"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { process } from "@/lib/content";

export default function Process() {
  const rootRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const line = lineRef.current;
    if (!root || !line) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReduced) {
        gsap.set("[data-step]", { opacity: 1, y: 0 });
        gsap.set(line, { scaleX: 1 });
        return;
      }

      gsap.set("[data-step]", { opacity: 0, y: 24 });
      gsap.set(line, { scaleX: 0, transformOrigin: "left center" });

      gsap.to("[data-step]", {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: root, start: "top 78%", once: true },
      });

      gsap.to(line, {
        scaleX: 1,
        duration: 1.1,
        ease: "power2.inOut",
        scrollTrigger: { trigger: root, start: "top 70%", once: true },
      });
    }, root);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="come-lavoriamo" className="bg-(--color-paper) py-24 md:py-32">
      <div className="mx-auto w-full px-5 sm:px-8 lg:px-12 xl:px-20 2xl:px-28" ref={rootRef}>
        <p className="uppercase tracking-[0.22em] text-xs md:text-sm text-(--color-brass-light) font-semibold mb-4">
          Come lavoriamo
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-(--color-cream-white) max-w-xl leading-tight">
          Semplice come{" "}
          <span className="italic text-(--color-brass-light)">
            dovrebbe essere.
          </span>
        </h2>

        <div className="relative mt-16">
          <div
            aria-hidden
            className="hidden md:block absolute top-6 left-0 right-0 h-px bg-(--color-line)"
          />
          <div
            ref={lineRef}
            aria-hidden
            className="hidden md:block absolute top-6 left-0 right-0 h-px bg-(--color-brass)"
          />

          <ol className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
            {process.map((p) => (
              <li data-step key={p.step} className="relative">
                <div className="relative z-10 w-12 h-12 rounded-full bg-(--color-brass) text-(--color-ink) flex items-center justify-center font-display text-sm font-semibold">
                  {p.step}
                </div>
                <h3 className="mt-5 font-display text-xl text-(--color-cream-white)">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-(--color-slate) leading-relaxed max-w-[22ch]">
                  {p.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
