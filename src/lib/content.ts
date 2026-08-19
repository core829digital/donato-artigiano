export const site = {
  name: "L'Artigiano Fidato",
  owner: "Donato",
  phoneDisplay: "347 084 7219",
  phoneHref: "tel:+393470847219",
  area: "Zona e dintorni — su chiamata",
};

export const navLinks = [
  { href: "/#servizi", label: "Servizi" },
  { href: "/configuratore-infissi", label: "Configuratore Infissi" },
  { href: "/#perche-noi", label: "Perché noi" },
  { href: "/#come-lavoriamo", label: "Come lavoriamo" },
  { href: "/#contatti", label: "Contatti" },
];

export type ServiceCategory = {
  id: string;
  icon: "truck" | "broom" | "window" | "key";
  title: string;
  tagline: string;
  items: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "sgomberi",
    icon: "truck",
    title: "Sgomberi & Traslochi",
    tagline: "Libera lo spazio, senza pensieri",
    items: [
      "Smaltimento rifiuti",
      "Sgombero cantine e scantinati",
      "Traslochi e trasporti",
    ],
  },
  {
    id: "pulizie",
    icon: "broom",
    title: "Pulizie",
    tagline: "Ambienti pronti da vivere",
    items: ["Pulizia appartamenti", "Pulizia negozi e locali commerciali"],
  },
  {
    id: "infissi",
    icon: "window",
    title: "Infissi & Riparazioni",
    tagline: "Su misura, montati a regola d'arte",
    items: [
      "Tapparelle e motorizzazione",
      "Zanzariere e veneziane 15/25/50mm",
      "Tende da sole",
      "Serramenti alluminio, legno e PVC",
      "Verande",
    ],
  },
  {
    id: "sicurezza",
    icon: "key",
    title: "Sicurezza Casa",
    tagline: "Chiudi bene, dormi tranquillo",
    items: [
      "Serrature e saracinesche",
      "Porte basculanti e blindate",
      "Maniglioni antipanico",
      "Rubinetteria",
      "Cancelli di sicurezza",
    ],
  },
];

export const usps = [
  {
    title: "Un solo numero",
    desc: "Sgomberi, pulizie, infissi, sicurezza: non serve chiamare quattro persone diverse.",
  },
  {
    title: "Preventivo chiaro",
    desc: "Prezzo definito prima di iniziare. Nessuna sorpresa in fattura.",
  },
  {
    title: "Interventi rapidi",
    desc: "Sopralluogo veloce e disponibilità per urgenze in zona.",
  },
  {
    title: "Lavoro garantito",
    desc: "Materiali di qualità e montaggio curato in ogni dettaglio.",
  },
];

export const process = [
  {
    step: "01",
    title: "Chiami o scrivi",
    desc: "Racconti il lavoro da fare: una foto basta per iniziare a capire.",
  },
  {
    step: "02",
    title: "Sopralluogo e preventivo",
    desc: "Valutazione sul posto e prezzo chiaro, senza impegno.",
  },
  {
    step: "03",
    title: "Intervento",
    desc: "Lavoro eseguito nei tempi concordati, con cura per ogni dettaglio.",
  },
  {
    step: "04",
    title: "Garanzia",
    desc: "Assistenza anche dopo l'intervento, se qualcosa non convince.",
  },
];
