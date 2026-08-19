"use client";

import { useState, type FormEvent } from "react";
import { serviceCategories, site } from "@/lib/content";
import { ArrowRightIcon } from "./icons";

/**
 * No backend yet (Convex wiring is planned for a later phase, once the
 * infissi configurator work starts) — submitting composes a pre-filled SMS
 * to Donato's own number rather than emailing an address that doesn't
 * exist. Honest, works today, no server required.
 */
export default function RequestQuoteForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nome = String(data.get("nome") || "").trim();
    const telefono = String(data.get("telefono") || "").trim();
    const servizio = String(data.get("servizio") || "");
    const messaggio = String(data.get("messaggio") || "").trim();

    const body = [
      `Ciao Donato, sono ${nome || "un cliente"}.`,
      servizio && `Servizio: ${servizio}.`,
      messaggio && `${messaggio}`,
      telefono && `Mi puoi richiamare al ${telefono}.`,
    ]
      .filter(Boolean)
      .join(" ");

    window.location.href = `sms:+393470847219?body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <div className="rounded-2xl bg-(--color-ink) border border-(--color-line) p-7 md:p-9 shadow-(--shadow-soft)">
      <h3 className="font-display text-2xl text-(--color-cream-white)">
        Richiedi un preventivo
      </h3>
      <p className="mt-1.5 text-sm text-(--color-slate)">
        Compila i campi: si aprirà l&apos;app Messaggi con i dati già
        pronti da inviare a Donato.
      </p>

      <form onSubmit={handleSubmit} className="mt-8">
        <div className="relative mb-7">
          <input
            id="nome"
            name="nome"
            type="text"
            required
            placeholder=" "
            className="field-input peer w-full bg-transparent border-0 border-b border-white/35 py-2.5 text-(--color-cream-white) text-base outline-none focus:border-(--color-brass)"
          />
          <label
            htmlFor="nome"
            className="field-label absolute left-0 top-2.5 text-(--color-slate) text-base pointer-events-none"
          >
            Nome
          </label>
        </div>

        <div className="relative mb-7">
          <input
            id="telefono"
            name="telefono"
            type="tel"
            required
            placeholder=" "
            className="field-input peer w-full bg-transparent border-0 border-b border-white/35 py-2.5 text-(--color-cream-white) text-base outline-none focus:border-(--color-brass)"
          />
          <label
            htmlFor="telefono"
            className="field-label absolute left-0 top-2.5 text-(--color-slate) text-base pointer-events-none"
          >
            Numero di telefono
          </label>
        </div>

        <div className="mb-7">
          <label
            htmlFor="servizio"
            className="block text-xs text-(--color-slate) mb-2"
          >
            Tipo di servizio
          </label>
          <select
            id="servizio"
            name="servizio"
            defaultValue=""
            className="w-full bg-transparent border-0 border-b border-white/35 py-2.5 text-(--color-cream-white) text-base outline-none focus:border-(--color-brass)"
          >
            <option value="" disabled className="bg-(--color-ink)">
              Scegli un servizio
            </option>
            {serviceCategories.map((cat) => (
              <option key={cat.id} value={cat.title} className="bg-(--color-ink)">
                {cat.title}
              </option>
            ))}
            <option value="Altro" className="bg-(--color-ink)">
              Altro
            </option>
          </select>
        </div>

        <div className="relative mb-8">
          <textarea
            id="messaggio"
            name="messaggio"
            rows={3}
            placeholder=" "
            className="field-input peer w-full bg-transparent border-0 border-b border-white/35 py-2.5 text-(--color-cream-white) text-base outline-none focus:border-(--color-brass) resize-none"
          />
          <label
            htmlFor="messaggio"
            className="field-label absolute left-0 top-2.5 text-(--color-slate) text-base pointer-events-none"
          >
            Racconta il lavoro da fare (facoltativo)
          </label>
        </div>

        <button
          type="submit"
          className="btn-chase w-full inline-flex items-center justify-center gap-2 rounded-full bg-(--color-brass) text-(--color-ink) py-3.5 text-base font-semibold hover:bg-(--color-brass-light) transition-colors cursor-pointer"
        >
          Invia richiesta
          <ArrowRightIcon width={17} height={17} />
          <span aria-hidden />
          <span aria-hidden />
          <span aria-hidden />
          <span aria-hidden />
        </button>

        {sent && (
          <p className="mt-4 text-sm text-(--color-brass-light) text-center">
            App Messaggi aperta con la tua richiesta pronta &mdash; ti basta
            inviarla.
          </p>
        )}

        <p className="mt-4 text-xs text-(--color-slate) text-center">
          Preferisci chiamare?{" "}
          <a
            href={site.phoneHref}
            className="text-(--color-brass-light) hover:underline cursor-pointer"
          >
            {site.phoneDisplay}
          </a>
        </p>
      </form>
    </div>
  );
}
