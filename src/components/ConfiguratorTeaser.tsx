import Reveal from "./Reveal";
import { ClipboardIcon, WindowIcon, ArrowRightIcon } from "./icons";

const steps = [
  {
    title: "Scegli il materiale",
    desc: "PVC, legno o alluminio: confronti finiture e prezzi indicativi al m².",
  },
  {
    title: "Inserisci le misure",
    desc: "Larghezza, altezza, numero di ante: il configuratore calcola in tempo reale.",
  },
  {
    title: "Ricevi la stima",
    desc: "Scarichi il riepilogo e lo condividi con Donato per il preventivo definitivo.",
  },
];

export default function ConfiguratorTeaser() {
  return (
    <section className="bg-(--color-ink) text-(--color-cream-white) py-24 md:py-32">
      <div className="mx-auto w-full px-5 sm:px-8 lg:px-12 xl:px-20 2xl:px-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <Reveal className="lg:col-span-6">
            <p className="uppercase tracking-[0.22em] text-xs md:text-sm text-(--color-brass-light) font-semibold mb-4">
              Novità
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Configura i tuoi{" "}
              <span className="italic text-(--color-brass-light)">
                infissi online.
              </span>
            </h2>
            <p className="mt-6 text-(--color-cream-white)/75 leading-relaxed max-w-lg">
              Un primo calcolo di massima in pochi click, prima ancora di
              chiamare: scegli materiale e misure, ottieni subito una stima.
              Il preventivo definitivo resta sempre confermato da Donato dopo
              il sopralluogo.
            </p>

            <a
              href="/configuratore-infissi"
              className="cta-burst cta-burst-gold mt-10 inline-flex items-center gap-2.5 rounded-full bg-(--color-brass) text-(--color-ink) px-6 py-3.5 text-base font-semibold hover:bg-(--color-brass-light) active:scale-[0.97] transition-[background-color,scale] duration-200 cursor-pointer shadow-(--shadow-lift)"
            >
              <WindowIcon width={18} height={18} />
              Inizia a Configurare
              <ArrowRightIcon width={16} height={16} />
            </a>
          </Reveal>

          <Reveal stagger className="lg:col-span-6 grid gap-5">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="flex items-start gap-4 rounded-2xl bg-(--color-ink-2)/60 border border-(--color-line) p-5"
              >
                <span className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-(--color-brass) text-(--color-ink) font-display font-semibold text-sm">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg text-(--color-cream-white)">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-(--color-slate)">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-2 text-xs text-(--color-slate) pl-1">
              <ClipboardIcon width={14} height={14} className="text-(--color-brass-light)" />
              Versione dimostrativa — prezzi indicativi, confermati dopo sopralluogo.
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
