import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import ConfiguratorFrame from "@/components/ConfiguratorFrame";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/content";
import { PhoneIcon, ClipboardIcon, ShieldIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Configuratore Infissi — L'Artigiano Fidato | Donato",
  description:
    "Configura online i tuoi infissi in PVC, legno o alluminio e ottieni subito una stima di massima. Preventivo definitivo confermato da Donato dopo il sopralluogo.",
};

export default function ConfiguratoreInfissiPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative bg-(--color-ink) text-(--color-cream-white) pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 right-[-8%] w-[520px] h-[520px] rounded-full opacity-[0.16] blur-3xl"
            style={{
              background:
                "radial-gradient(circle, var(--color-brass-light) 0%, transparent 70%)",
            }}
          />
          <div className="relative mx-auto w-full px-5 sm:px-8 lg:px-12 xl:px-20 2xl:px-28">
            <Reveal>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-sm text-(--color-slate) hover:text-(--color-brass-light) transition-colors cursor-pointer"
              >
                ← Torna al sito
              </Link>

              <p className="mt-6 uppercase tracking-[0.22em] text-xs md:text-sm text-(--color-brass-light) font-semibold">
                Configuratore Infissi
              </p>
              <h1 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl leading-tight max-w-3xl">
                Il tuo infisso,{" "}
                <span className="italic text-(--color-brass-light)">
                  stimato in tempo reale.
                </span>
              </h1>
              <p className="mt-6 text-lg text-(--color-cream-white)/75 max-w-2xl leading-relaxed">
                Scegli materiale, misure e finiture: ottieni subito una stima
                indicativa in PVC, legno o alluminio. È un primo orientamento,
                non un ordine — il prezzo definitivo lo conferma sempre Donato
                dopo il sopralluogo.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={site.phoneHref}
                  className="cta-burst cta-burst-gold inline-flex items-center gap-2.5 rounded-full bg-(--color-brass) text-(--color-ink) px-6 py-3.5 text-base font-semibold hover:bg-(--color-brass-light) active:scale-[0.97] transition-[background-color,scale] duration-200 cursor-pointer shadow-(--shadow-lift)"
                >
                  <PhoneIcon width={18} height={18} />
                  Parla con Donato &middot; {site.phoneDisplay}
                </a>
                <span className="inline-flex items-center gap-2 text-sm text-(--color-slate)">
                  <ShieldIcon width={16} height={16} className="text-(--color-brass-light)" />
                  I tuoi dati restano tra te e Donato
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-(--color-paper) py-12 md:py-16">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
            <Reveal>
              <div className="mb-6 flex items-start gap-3 rounded-xl bg-(--color-card) border border-(--color-line) px-5 py-4 text-sm text-(--color-slate)">
                <ClipboardIcon width={18} height={18} className="shrink-0 mt-0.5 text-(--color-brass-light)" />
                <p>
                  <strong className="text-(--color-charcoal)">Versione dimostrativa (MVP).</strong>{" "}
                  I prezzi al m² sono indicativi e ancora da collegare a un
                  listino fornitore reale. Usalo per farti un&apos;idea di
                  massima — per il preventivo vincolante, contatta Donato.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl overflow-hidden border border-(--color-line) shadow-(--shadow-soft)">
                <ConfiguratorFrame />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
