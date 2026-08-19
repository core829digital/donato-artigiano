import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-(--color-paper-2) border-t border-(--color-line) pb-[76px] md:pb-0">
      <div className="mx-auto w-full px-5 sm:px-8 lg:px-12 xl:px-20 2xl:px-28 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-display italic text-(--color-cream-white) text-lg">
          L&apos;Artigiano Fidato
        </p>
        <p className="text-sm text-(--color-slate)">
          {site.owner} &middot;{" "}
          <a href={site.phoneHref} className="hover:text-(--color-brass-light) cursor-pointer">
            {site.phoneDisplay}
          </a>
        </p>
        <p className="text-xs text-(--color-slate)">
          &copy; {new Date().getFullYear()} &mdash; Tutti gli interventi su preventivo
        </p>
      </div>
    </footer>
  );
}
