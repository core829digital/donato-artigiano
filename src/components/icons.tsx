import type { SVGProps } from "react";

/**
 * Minimal, hand-authored line-icon set (1.6px stroke, matches the brass hardware
 * line-weight used across the site). Deliberately not an emoji or icon-font set.
 */

function base(props: SVGProps<SVGSVGElement>) {
  return {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M4.5 4h3.2l1.3 4.4-2 1.6a12.3 12.3 0 0 0 5.8 5.8l1.6-2 4.4 1.3v3.2c0 1-.8 1.7-1.8 1.6-6.6-.6-12-6-12.6-12.6C4.3 4.8 5 4 4.5 4Z" />
    </svg>
  );
}

export function TruckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M2.5 6.5h10v9h-10z" />
      <path d="M12.5 10.5h4.5l3.5 3v2h-8z" />
      <circle cx="6.5" cy="17.5" r="1.7" />
      <circle cx="16.5" cy="17.5" r="1.7" />
    </svg>
  );
}

export function BroomIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M14 3 6 17" />
      <path d="M4 21c1-3 3-5 3-5l3 1c0 2-1 3.3-2.4 4.2A5 5 0 0 1 4 21Z" />
      <path d="M13.2 5.5 17 9" />
    </svg>
  );
}

export function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M12 3.2 19 6v5.4c0 4.6-2.9 8-7 9.4-4.1-1.4-7-4.8-7-9.4V6Z" />
      <path d="M9.3 12.2l1.9 1.9 3.5-3.9" />
    </svg>
  );
}

export function WindowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect x="4" y="4" width="16" height="16" rx="1" />
      <path d="M4 9.3h16M4 14.6h16M12 4v16" />
    </svg>
  );
}

export function KeyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <circle cx="7.5" cy="14.5" r="3.3" />
      <path d="M9.8 12.2 18 4l1.8 1.8L18 7.6l1.6 1.6-2 2-1.6-1.6-1.7 1.7" />
    </svg>
  );
}

export function BoxIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M3.5 7.5 12 3l8.5 4.5L12 12 3.5 7.5Z" />
      <path d="M3.5 7.5V16l8.5 4.5V12M20.5 7.5V16L12 20.5" />
    </svg>
  );
}

export function GateIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M4 20V6l8-3 8 3v14" />
      <path d="M4 10h16M8 6v14M16 6v14M12 3v17" />
    </svg>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M4.5 12.5 9 17l10.5-11" />
    </svg>
  );
}

export function MapPinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M12 21s7-6.4 7-12a7 7 0 1 0-14 0c0 5.6 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.4" />
    </svg>
  );
}

export function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3.2 1.9" />
    </svg>
  );
}

export function ClipboardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect x="5.5" y="4.5" width="13" height="16" rx="1.4" />
      <path d="M9 4.5V3.3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V4.5M8.5 10.5h7M8.5 14h7M8.5 17.5h4.5" />
    </svg>
  );
}

export function WrenchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M14.7 6.3a4 4 0 0 1-5 5.2L4.5 16.7a1.9 1.9 0 0 0 2.8 2.8l5.2-5.2a4 4 0 0 1 5.2-5l-2.6 2.6-2-2 2.6-2.6Z" />
    </svg>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M4 12h16M13 5l7 7-7 7" />
    </svg>
  );
}
