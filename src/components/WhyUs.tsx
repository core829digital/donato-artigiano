import Reveal from "./Reveal";
import { usps } from "@/lib/content";

export default function WhyUs() {
  return (
    <section id="perche-noi" className="bg-(--color-paper-2) py-24 md:py-32">
      <div className="mx-auto w-full px-5 sm:px-8 lg:px-12 xl:px-20 2xl:px-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <p className="uppercase tracking-[0.22em] text-xs md:text-sm text-(--color-brass-light) font-semibold mb-4">
              Perché scegliere Donato
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-(--color-cream-white) leading-tight">
              La fiducia si costruisce{" "}
              <span className="italic text-(--color-brass-light)">
                lavoro dopo lavoro.
              </span>
            </h2>
            <p className="mt-6 text-(--color-slate) leading-relaxed max-w-md">
              Non un&apos;impresa qualunque: un artigiano che risponde al
              telefono, arriva quando promette e tratta casa tua come fosse la
              sua.
            </p>
          </Reveal>

          <Reveal
            stagger
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10"
          >
            {usps.map((item, i) => (
              <div key={item.title} className="relative pl-14">
                <span className="absolute left-0 top-0 font-display text-3xl text-(--color-brass) leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl text-(--color-cream-white)">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-(--color-slate) leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
