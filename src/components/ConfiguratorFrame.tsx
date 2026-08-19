"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Same-origin iframe embed of the static configurator (public/configuratore-infissi.html).
 * Auto-resizes to the widget's content height so there's no inner scrollbar —
 * safe because the iframe is same-origin (served from this app's own /public).
 */
export default function ConfiguratorFrame() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(1400);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const resize = () => {
      try {
        const doc = iframe.contentDocument;
        if (doc?.body) {
          setHeight(doc.body.scrollHeight + 40);
        }
      } catch {
        // cross-origin fallback — keep default height
      }
    };

    iframe.addEventListener("load", resize);
    const interval = setInterval(resize, 500);
    const stopPolling = setTimeout(() => clearInterval(interval), 6000);

    return () => {
      iframe.removeEventListener("load", resize);
      clearInterval(interval);
      clearTimeout(stopPolling);
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src="/configuratore-infissi.html"
      title="Configuratore infissi — preventivo PVC, legno e alluminio"
      style={{ height }}
      className="w-full border-0 block"
    />
  );
}
