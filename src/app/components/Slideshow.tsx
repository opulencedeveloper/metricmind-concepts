"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import type { Photo } from "../data/media";

/** Resting place of each card in the shuffle stack, by depth (0 = front). */
const STACK: CSSProperties[] = [
  { transform: "translate(0,0) rotate(0deg) scale(1)", zIndex: 30, opacity: 1 },
  { transform: "translate(14px,-14px) rotate(4deg) scale(0.96)", zIndex: 20, opacity: 1 },
  { transform: "translate(26px,-26px) rotate(8deg) scale(0.92)", zIndex: 10, opacity: 0.9 },
];
const HIDDEN: CSSProperties = { transform: "translate(26px,-26px) rotate(8deg) scale(0.92)", zIndex: 0, opacity: 0 };

/**
 * Photo slideshow with dot controls.
 * - variant "fade": photos cross-fade in place.
 * - variant "shuffle": photos sit in a fanned card stack; the front card flies out and
 *   tucks in at the back while the next card rises from behind to the front.
 * Auto-advances; pauses on hover/focus and when the user prefers reduced motion.
 */
export default function Slideshow({
  photos,
  interval = 4500,
  sizes = "(min-width: 1024px) 560px, 100vw",
  className = "",
  cardClassName = "",
  priority = false,
  caption,
  variant = "fade",
}: {
  photos: Photo[];
  interval?: number;
  sizes?: string;
  /** Outer box (size/aspect). In "fade" mode also clips and rounds. */
  className?: string;
  /** "shuffle" only: classes for each card (radius, background, shadow). */
  cardClassName?: string;
  priority?: boolean;
  caption?: React.ReactNode;
  variant?: "fade" | "shuffle";
}) {
  const [index, setIndex] = useState(0);
  const [outgoing, setOutgoing] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const indexRef = useRef(0);
  const n = photos.length;

  const goTo = (next: number) => {
    if (next === indexRef.current) return;
    setOutgoing(indexRef.current);
    indexRef.current = next;
    setIndex(next);
  };

  useEffect(() => {
    if (paused || n < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      const next = (indexRef.current + 1) % n;
      setOutgoing(indexRef.current);
      indexRef.current = next;
      setIndex(next);
    }, interval);
    return () => window.clearInterval(id);
  }, [paused, n, interval]);

  const controls = (
    <>
      {/* readability gradient for caption + dots */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" aria-hidden />
      {caption && <div className="absolute left-4 bottom-4 right-24 text-white">{caption}</div>}
      {n > 1 && (
        <div className="absolute right-4 bottom-4 flex gap-1.5">
          {photos.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show photo ${i + 1} of ${n}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-6 bg-[var(--mm-lime)]" : "w-1.5 bg-white/60 hover:bg-white"}`}
            />
          ))}
        </div>
      )}
    </>
  );

  const hover = {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    onFocus: () => setPaused(true),
    onBlur: () => setPaused(false),
  };

  if (variant === "shuffle") {
    return (
      // `isolate` keeps the cards' z-index stack inside this box, so floating badges placed
      // over the slideshow (siblings outside it) always stay on top.
      <div className={`relative isolate ${className}`} {...hover} aria-roledescription="carousel">
        {photos.map((photo, i) => {
          const depth = (i - index + n) % n;
          const isOut = i === outgoing;
          return (
            <div
              key={i}
              aria-hidden={depth !== 0}
              // the card leaving the front plays the "fly out and tuck behind" animation
              className={`absolute inset-0 overflow-hidden transition-[transform,opacity] duration-700 ease-[cubic-bezier(.2,.8,.2,1)] ${cardClassName} ${isOut ? "mm-shuffle-out" : ""}`}
              style={STACK[depth] ?? HIDDEN}
              onAnimationEnd={() => isOut && setOutgoing(null)}
            >
              <Image
                src={photo.src}
                alt={depth === 0 ? photo.alt : ""}
                fill
                sizes={sizes}
                placeholder="blur"
                priority={priority && i === 0}
                className="object-cover"
              />
            </div>
          );
        })}
        {/* controls sit above the front card */}
        <div className={`pointer-events-none absolute inset-0 z-40 overflow-hidden ${cardClassName.match(/rounded-\S+/g)?.join(" ") ?? ""}`}>
          <div className="pointer-events-auto contents">{controls}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`} {...hover} aria-roledescription="carousel">
      {photos.map((photo, i) => (
        <Image
          key={i}
          src={photo.src}
          alt={i === index ? photo.alt : ""}
          aria-hidden={i !== index}
          fill
          sizes={sizes}
          placeholder="blur"
          priority={priority && i === 0}
          className={`object-cover transition-[opacity,transform] duration-[1200ms] ease-out ${
            i === index ? "opacity-100 scale-100" : "opacity-0 scale-[1.06]"
          }`}
        />
      ))}
      {controls}
    </div>
  );
}
