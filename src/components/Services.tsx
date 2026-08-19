import Reveal from "./Reveal";
import ServiceCarousel from "./ui/carousel-07";
import { site } from "@/lib/content";

export default function Services() {
  return (
    <section id="servizi" className="bg-(--color-paper) py-24 md:py-32">
      <div className="mx-auto w-full px-5 sm:px-8 lg:px-12 xl:px-20 2xl:px-28">
        <Reveal>
          <p className="uppercase tracking-[0.22em] text-xs md:text-sm text-(--color-brass-light) font-semibold mb-4">
            Cosa facciamo
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-(--color-cream-white) max-w-2xl leading-tight">
            Quattro competenze,{" "}
            <span className="italic text-(--color-brass-light)">
              un solo artigiano.
            </span>
          </h2>
        </Reveal>

        <Reveal className="mt-8">
          <ServiceCarousel />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 rounded-2xl bg-(--color-ink) border border-(--color-brass)/25 text-(--color-cream-white) px-7 py-6 md:px-9 md:py-7">
            <p className="text-base md:text-lg font-display italic text-center sm:text-left">
              Non trovi il tuo problema in lista? Chiedi comunque.
            </p>
            <a
              href={site.phoneHref}
              className="shrink-0 inline-flex items-center justify-center rounded-full bg-(--color-brass) text-(--color-ink) px-5 py-2.5 text-sm font-semibold hover:bg-(--color-brass-light) transition-colors cursor-pointer"
            >
              {site.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
