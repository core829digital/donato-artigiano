import { site } from "@/lib/content";
import { PhoneIcon } from "./icons";

/**
 * Persistent bottom call bar, mobile only. Local service businesses live and
 * die by the phone — keeping the call action always one thumb-tap away
 * (rather than a scroll back to the header) is the single highest-leverage
 * mobile-native pattern for this kind of site.
 */
export default function MobileCallBar() {
  return (
    <div
      className="md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-(--color-line) bg-(--color-paper)/95 backdrop-blur-sm px-4 pt-3"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <a
        href={site.phoneHref}
        className="flex items-center justify-center gap-2.5 rounded-full bg-(--color-brass) text-(--color-ink) py-3.5 text-base font-semibold active:bg-(--color-brass-light) transition-colors cursor-pointer"
      >
        <PhoneIcon width={18} height={18} />
        Chiama ora &middot; {site.phoneDisplay}
      </a>
    </div>
  );
}
