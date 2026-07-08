import { useEffect, useRef } from "react";

/**
 * A hand-built interactive dot field rendered to <canvas>.
 *
 * Dots sit on a fixed grid. As the cursor moves, dots within a radius
 * brighten and scale up, producing a soft "spotlight" that tracks the
 * pointer. Everything is drawn with requestAnimationFrame and eased with
 * a simple lerp so motion feels physical rather than snappy.
 *
 * Design constraints:
 *  - Respects prefers-reduced-motion (falls back to a static faint grid).
 *  - Skips the pointer effect on touch devices (no hover to react to).
 *  - Reads its accent color from the CSS custom property --primary so it
 *    always matches the active theme.
 */

const GRID_GAP = 30; // px between dots
const BASE_RADIUS = 1; // px, resting dot size
const MAX_RADIUS = 2.6; // px, dot size at the cursor's center
const INFLUENCE = 130; // px, how far the cursor's glow reaches
const BASE_ALPHA = 0.14;
const MAX_ALPHA = 0.9;

interface Dot {
  x: number;
  y: number;
  /** eased 0..1 proximity to cursor */
  glow: number;
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export const InteractiveDots = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouch = window.matchMedia("(hover: none)").matches;

    let dots: Dot[] = [];
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Pointer position in CSS pixels; starts off-screen so nothing glows.
    const pointer = { x: -9999, y: -9999 };
    // Eased pointer for silky trailing.
    const easedPointer = { x: -9999, y: -9999 };

    // Read the theme accent (HSL triplet like "217 91% 60%") from CSS.
    const readAccent = () => {
      const raw = getComputedStyle(document.documentElement)
        .getPropertyValue("--primary")
        .trim();
      return raw || "217 91% 60%";
    };
    let accent = readAccent();

    const buildGrid = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots = [];
      // Inset by half a gap so the grid feels centered.
      for (let y = GRID_GAP / 2; y < height; y += GRID_GAP) {
        for (let x = GRID_GAP / 2; x < width; x += GRID_GAP) {
          dots.push({ x, y, glow: 0 });
        }
      }
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      for (const dot of dots) {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, BASE_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${accent} / ${BASE_ALPHA})`;
        ctx.fill();
      }
    };

    let rafId = 0;

    const render = () => {
      // Ease the pointer toward its real position for a trailing feel.
      easedPointer.x = lerp(easedPointer.x, pointer.x, 0.18);
      easedPointer.y = lerp(easedPointer.y, pointer.y, 0.18);

      ctx.clearRect(0, 0, width, height);

      const influenceSq = INFLUENCE * INFLUENCE;

      for (const dot of dots) {
        const dx = dot.x - easedPointer.x;
        const dy = dot.y - easedPointer.y;
        const distSq = dx * dx + dy * dy;

        // Target glow: 1 at the pointer, 0 beyond INFLUENCE.
        let target = 0;
        if (distSq < influenceSq) {
          const dist = Math.sqrt(distSq);
          target = 1 - dist / INFLUENCE;
          target *= target; // ease-in falloff, tighter spotlight
        }

        // Ease each dot toward its target so glow fades smoothly.
        dot.glow = lerp(dot.glow, target, 0.12);

        const radius = lerp(BASE_RADIUS, MAX_RADIUS, dot.glow);
        const alpha = lerp(BASE_ALPHA, MAX_ALPHA, dot.glow);

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${accent} / ${alpha})`;
        ctx.fill();
      }

      rafId = requestAnimationFrame(render);
    };

    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    };

    const handlePointerLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    const handleResize = () => {
      buildGrid();
      if (reduceMotion || isTouch) drawStatic();
    };

    // React to theme changes (class toggles on <html>).
    const themeObserver = new MutationObserver(() => {
      accent = readAccent();
      if (reduceMotion || isTouch) drawStatic();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    buildGrid();

    if (reduceMotion || isTouch) {
      // No pointer interactivity: draw once, keep it calm.
      drawStatic();
    } else {
      window.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });
      window.addEventListener("pointerdown", handlePointerMove, {
        passive: true,
      });
      document.addEventListener("pointerleave", handlePointerLeave);
      rafId = requestAnimationFrame(render);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("resize", handleResize);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`h-full w-full ${className}`}
    />
  );
};
