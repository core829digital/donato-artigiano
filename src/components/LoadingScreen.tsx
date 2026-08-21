"use client";

import { useEffect, useState } from "react";

const SESSION_KEY = "donato_intro_seen";
const HOLD_MS = 3500;
const FADE_MS = 500;

/**
 * One-time entry splash, brand-gold circuit trace around the "D" monogram.
 * Gated on sessionStorage so it only plays once per tab — repeat page
 * views/navigations within the same visit skip it instantly. Skipped
 * entirely under prefers-reduced-motion rather than shown statically,
 * since the whole point of the reduced-motion request is to avoid exactly
 * this kind of animated intro.
 */
export default function LoadingScreen() {
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const alreadySeen = sessionStorage.getItem(SESSION_KEY);

    if (alreadySeen || prefersReduced) {
      sessionStorage.setItem(SESSION_KEY, "1");
      return;
    }

    // sessionStorage/matchMedia are only knowable post-mount; the component
    // must render hidden on the server/first paint to avoid a hydration
    // mismatch, then reveal itself here once the client-only check resolves.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(true);
    document.body.style.overflow = "hidden";

    const fadeTimer = setTimeout(() => setFading(true), HOLD_MS);
    const removeTimer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
      sessionStorage.setItem(SESSION_KEY, "1");
    }, HOLD_MS + FADE_MS);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-(--color-paper) transition-opacity duration-500 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-5">
        <svg width="88" height="88" viewBox="0 0 88 88" fill="none">
          <rect x="4" y="4" width="80" height="80" rx="18" className="loader-trace-bg" />
          <rect x="4" y="4" width="80" height="80" rx="18" className="loader-trace-flow" />
          <text
            x="44"
            y="60"
            textAnchor="middle"
            fontSize="48"
            fill="var(--color-brass-light)"
            className="loader-d"
          >
            D
          </text>
        </svg>
        <p className="text-xs uppercase tracking-[0.3em] text-(--color-slate)">
          L&apos;Artigiano Fidato
        </p>
      </div>
    </div>
  );
}
