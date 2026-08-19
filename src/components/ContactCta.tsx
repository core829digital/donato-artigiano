import Reveal from "./Reveal";
import RequestQuoteForm from "./RequestQuoteForm";
import { site } from "@/lib/content";
import { PhoneIcon, MapPinIcon, ClockIcon } from "./icons";

export default function ContactCta() {
  return (
    <section
      id="contatti"
      className="grain-overlay relative bg-(--color-ink) text-(--color-cream-white) py-24 md:py-32 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] w-[520px] h-[520px] rounded-full opacity-[0.14] blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-brass-light) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
        <div className="text-center lg:text-left">
          <Reveal>
            <p className="uppercase tracking-[0.22em] text-xs md:text-sm text-(--color-brass-light) font-semibold mb-5">
              Parliamone
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight">
              Un lavoro da fare?{" "}
              <span className="italic text-(--color-brass-light)">
                Chiama Donato.
              </span>
            </h2>
            <p className="mt-6 text-lg text-(--color-cream-white)/75 max-w-xl mx-auto lg:mx-0">
              Preventivo rapido, senza impegno. Rispondiamo il prima possibile.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <a
              href={site.phoneHref}
              className="cta-burst mt-10 inline-flex items-center gap-3 rounded-full bg-(--color-brass) text-(--color-ink) px-8 py-5 text-xl md:text-2xl font-display font-semibold hover:bg-(--color-brass-light) active:scale-[0.97] transition-[background-color,scale] duration-200 cursor-pointer shadow-(--shadow-lift)"
            >
              <PhoneIcon width={24} height={24} />
              {site.phoneDisplay}
            </a>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-14 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-6 sm:gap-10 text-sm text-(--color-cream-white)/70">
              <span className="inline-flex items-center gap-2">
                <MapPinIcon width={16} height={16} className="text-(--color-brass-light)" />
                {site.area}
              </span>
              <span className="inline-flex items-center gap-2">
                <ClockIcon width={16} height={16} className="text-(--color-brass-light)" />
                Rispondiamo anche per le urgenze
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <RequestQuoteForm />
        </Reveal>
      </div>
    </section>
  );
}
