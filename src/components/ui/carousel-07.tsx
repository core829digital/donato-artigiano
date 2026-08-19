"use client";

/**
 * Stacked draggable card carousel (adapted from a community shadcn/motion
 * component). The original used stock travel photography; here each card
 * carries one of Donato's own service categories with its icon as the
 * visual motif instead of an unrelated photo, brand colors throughout.
 */

import * as React from "react";
import type { SVGProps } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  type PanInfo,
  type MotionValue,
} from "motion/react";
import { cn } from "@/lib/utils";
import { serviceCategories, type ServiceCategory } from "@/lib/content";
import { TruckIcon, BroomIcon, WindowIcon, KeyIcon } from "../icons";

type IconComponent = (props: SVGProps<SVGSVGElement>) => React.ReactElement;

interface CarouselConfig {
  distanceDivisor: number;
  velocityDivisor: number;
  sensitivity: number;
  xMultiplier: number;
  yMultiplier: number;
  rotationMultiplier: number;
  scaleReduction: number;
}

const getCarouselConfig = (width: number): CarouselConfig => {
  if (width < 640) {
    return {
      distanceDivisor: 120,
      velocityDivisor: 500,
      sensitivity: 180,
      xMultiplier: 90,
      yMultiplier: 20,
      rotationMultiplier: 8,
      scaleReduction: 0.06,
    };
  }
  if (width < 1024) {
    return {
      distanceDivisor: 160,
      velocityDivisor: 650,
      sensitivity: 220,
      xMultiplier: 130,
      yMultiplier: 30,
      rotationMultiplier: 10,
      scaleReduction: 0.09,
    };
  }
  return {
    distanceDivisor: 200,
    velocityDivisor: 800,
    sensitivity: 250,
    xMultiplier: 170,
    yMultiplier: 40,
    rotationMultiplier: 12,
    scaleReduction: 0.12,
  };
};

const iconMap: Record<ServiceCategory["icon"], IconComponent> = {
  truck: TruckIcon,
  broom: BroomIcon,
  window: WindowIcon,
  key: KeyIcon,
};

export default function ServiceCarousel() {
  const scrollProgress = useMotionValue(0);
  const startProgress = React.useRef(0);
  const [windowWidth, setWindowWidth] = React.useState(0);

  const total = serviceCategories.length;

  React.useEffect(() => {
    // window.innerWidth is only knowable post-mount (SSR-safe init at 0)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const config = React.useMemo(
    () => getCarouselConfig(windowWidth),
    [windowWidth]
  );

  const handleDragStart = () => {
    startProgress.current = scrollProgress.get();
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const dragDistance = info.offset.x;
    const velocity = info.velocity.x;

    const distanceShift = -dragDistance / config.distanceDivisor;
    const velocityShift = -velocity / config.velocityDivisor;

    let totalShift = Math.round(distanceShift + velocityShift);
    totalShift = Math.max(-3, Math.min(3, totalShift));

    const target = Math.round(startProgress.current) + totalShift;

    animate(scrollProgress, target, {
      type: "spring",
      stiffness: 200,
      damping: 30,
      mass: 1,
    });
  };

  const goTo = (dir: 1 | -1) => {
    const target = Math.round(scrollProgress.get()) + dir;
    animate(scrollProgress, target, {
      type: "spring",
      stiffness: 200,
      damping: 30,
      mass: 1,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full overflow-hidden select-none">
      <div className="relative w-full h-96 sm:h-112 lg:h-128 flex items-center justify-center">
        {/* Transparent drag surface */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragStart={handleDragStart}
          onDrag={(_, info) => {
            const delta = -info.delta.x / config.sensitivity;
            scrollProgress.set(scrollProgress.get() + delta);
          }}
          onDragEnd={handleDragEnd}
          className="absolute inset-0 z-50 cursor-grab active:cursor-grabbing"
        />

        {serviceCategories.map((cat, i) => (
          <Card
            key={cat.id}
            cat={cat}
            Icon={iconMap[cat.icon]}
            index={i}
            total={total}
            progress={scrollProgress}
            config={config}
          />
        ))}
      </div>

      <div className="relative z-40 flex items-center gap-4 mt-8">
        <button
          type="button"
          aria-label="Servizio precedente"
          onClick={() => goTo(-1)}
          className="w-10 h-10 rounded-full border border-(--color-line) text-(--color-cream-white) hover:border-(--color-brass) hover:text-(--color-brass-light) transition-colors cursor-pointer flex items-center justify-center"
        >
          &larr;
        </button>
        <p className="text-xs uppercase tracking-[0.2em] text-(--color-slate)">
          Trascina o usa le frecce
        </p>
        <button
          type="button"
          aria-label="Servizio successivo"
          onClick={() => goTo(1)}
          className="w-10 h-10 rounded-full border border-(--color-line) text-(--color-cream-white) hover:border-(--color-brass) hover:text-(--color-brass-light) transition-colors cursor-pointer flex items-center justify-center"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}

interface CardProps {
  cat: ServiceCategory;
  Icon: IconComponent;
  index: number;
  total: number;
  progress: MotionValue<number>;
  config: CarouselConfig;
}

function Card({ cat, Icon, index, total, progress, config }: CardProps) {
  const offset = useTransform(progress, (p) => {
    let diff = (index - p) % total;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  });

  const x = useTransform(offset, (o) => o * config.xMultiplier);
  const rotate = useTransform(offset, (o) => {
    const absO = Math.abs(o);
    if (absO < 0.05) return 0;
    return o * config.rotationMultiplier;
  });
  const y = useTransform(offset, (o) => {
    const absO = Math.abs(o);
    if (absO < 0.05) return 0;
    return absO * config.yMultiplier;
  });
  const scale = useTransform(
    offset,
    (o) => 1 - Math.abs(o) * config.scaleReduction
  );
  const opacity = useTransform(
    offset,
    [-total / 2, -total / 2 + 0.5, 0, total / 2 - 0.5, total / 2],
    [0, 1, 1, 1, 0]
  );
  const zIndex = useTransform(offset, (o) => Math.round(100 - Math.abs(o) * 10));
  const dimOpacity = useTransform(offset, [-2, -0.5, 0, 0.5, 2], [0.5, 0.2, 0, 0.2, 0.5]);
  const textOpacity = useTransform(offset, [-0.5, 0, 0.5], [0, 1, 0]);

  return (
    <motion.div
      style={{ x, rotate, y, scale, opacity, zIndex }}
      className={cn(
        "absolute rounded-2xl overflow-hidden bg-(--color-card) group pointer-events-none",
        "w-52 h-72 sm:w-64 sm:h-88 lg:w-72 lg:h-104"
      )}
    >
      {/* Brand-colored backdrop with the service icon as texture, not a stock photo */}
      <div className="absolute inset-0 bg-gradient-to-br from-(--color-ink) via-(--color-card) to-(--color-ink)" />
      <Icon
        width={180}
        height={180}
        className="absolute -bottom-8 -right-8 text-(--color-brass)/10 transition-transform duration-700 group-hover:scale-110"
      />

      <motion.div
        style={{ opacity: dimOpacity }}
        className="absolute inset-0 bg-black pointer-events-none"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

      <span className="absolute top-4 right-4 sm:top-5 sm:right-5 px-2.5 py-1 rounded-full bg-(--color-brass) text-xs font-bold uppercase tracking-widest text-(--color-ink)">
        {String(index + 1).padStart(2, "0")}
      </span>

      <span className="absolute top-4 left-4 sm:top-5 sm:left-5 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur ring-1 ring-white/15 text-(--color-brass-light)">
        <Icon width={18} height={18} />
      </span>

      <div className="absolute bottom-5 left-4 right-4 sm:bottom-7 sm:left-6 sm:right-6 text-(--color-cream-white)">
        <motion.p
          style={{ opacity: textOpacity }}
          className="text-lg sm:text-xl font-display leading-tight mb-1.5"
        >
          {cat.title}
        </motion.p>
        <motion.p
          style={{ opacity: textOpacity }}
          className="text-xs text-white/70 line-clamp-3"
        >
          {cat.items.join(" · ")}
        </motion.p>
      </div>
    </motion.div>
  );
}
