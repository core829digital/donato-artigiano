"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { navLinks, site } from "@/lib/content";
import { PhoneIcon, MenuIcon, CloseIcon } from "./icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    const el = menuRef.current;
    if (!el) return;
    if (open) {
      document.body.style.overflow = "hidden";
      gsap.set(el, { display: "flex" });
      gsap.fromTo(
        el,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.35, ease: "power2.out" }
      );
      gsap.fromTo(
        el.querySelectorAll("[data-menu-item]"),
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.06,
          delay: 0.1,
          ease: "power3.out",
        }
      );
    } else {
      document.body.style.overflow = "";
      gsap.to(el, {
        autoAlpha: 0,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => gsap.set(el, { display: "none" }),
      });
    }
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-(--color-paper)/90 backdrop-blur-sm border-b border-(--color-line)"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto w-full px-5 sm:px-8 lg:px-12 xl:px-20 2xl:px-28 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="font-display italic text-lg md:text-xl text-(--color-cream-white) tracking-tight">
            L&apos;Artigiano
          </span>
          <span className="font-display font-semibold text-lg md:text-xl text-(--color-brass-light) tracking-tight">
            Fidato
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1 rounded-full bg-white/5 px-1.5 py-1.5 ring-1 ring-white/10 backdrop-blur">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm tracking-wide text-(--color-charcoal)/85 hover:bg-white/10 hover:text-(--color-brass-light) transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.phoneHref}
            className="cta-burst ml-1 inline-flex items-center gap-2 rounded-full bg-(--color-brass) text-(--color-ink) px-4 py-2 text-sm font-semibold hover:bg-(--color-brass-light) active:scale-[0.96] transition-[background-color,scale] duration-200 cursor-pointer"
          >
            <PhoneIcon width={15} height={15} />
            {site.phoneDisplay}
          </a>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <a
            href={site.phoneHref}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-(--color-brass) text-(--color-ink) px-4 py-2.5 text-sm font-semibold hover:bg-(--color-brass-light) transition-colors cursor-pointer"
          >
            <PhoneIcon width={16} height={16} />
            {site.phoneDisplay}
          </a>
          <button
            type="button"
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-(--color-line) text-(--color-cream-white) cursor-pointer"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div
        ref={menuRef}
        className="hidden fixed inset-0 top-16 z-40 flex-col bg-(--color-paper) px-6 py-8 gap-1 md:!hidden"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            data-menu-item
            href={link.href}
            onClick={() => setOpen(false)}
            className="text-2xl font-display py-4 border-b border-(--color-line) text-(--color-cream-white) cursor-pointer"
          >
            {link.label}
          </a>
        ))}
        <a
          data-menu-item
          href={site.phoneHref}
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-(--color-brass) text-(--color-ink) px-5 py-3.5 text-base font-semibold cursor-pointer"
        >
          <PhoneIcon width={18} height={18} />
          Chiama {site.phoneDisplay}
        </a>
      </div>
    </header>
  );
}
