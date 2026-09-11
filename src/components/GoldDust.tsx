import { useMemo } from "react";

type Props = {
  count?: number;
  direction?: "up" | "down";
};

export function GoldDust({ count = 34, direction = "up" }: Props) {
  const motes = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 1 + Math.random() * 2.6,
        delay: Math.random() * 18,
        duration: 16 + Math.random() * 20,
        opacity: 0.25 + Math.random() * 0.6,
      })),
    [count],
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {motes.map((m) => (
        <span
          key={m.id}
          className="absolute rounded-full bg-gold"
          style={{
            left: `${m.left}%`,
            top: direction === "up" ? "100%" : "-2%",
            width: m.size,
            height: m.size,
            opacity: m.opacity,
            boxShadow: "0 0 8px 1px var(--gold-dim)",
            animation: `${direction === "up" ? "dust-rise" : "dust-fall"} ${m.duration}s linear ${m.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
