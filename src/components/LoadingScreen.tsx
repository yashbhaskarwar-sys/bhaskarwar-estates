"use client";

import { useEffect, useState } from "react";

interface LoadingScreenProps {
  visible: boolean;
}

export default function LoadingScreen({ visible }: LoadingScreenProps) {
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => setBarWidth(100), 50);
    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#080808]"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "all" : "none",
        transition: "opacity 0.8s ease",
      }}
    >
      {/* Ambient center glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(201,169,110,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative flex flex-col items-center gap-10">
        {/* Monogram */}
        <div className="flex flex-col items-center gap-1.5">
          <span
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "11px",
              letterSpacing: "0.48em",
              color: "#4a4a44",
              textTransform: "uppercase",
            }}
          >
            Bhaskarwar
          </span>
          <span
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "11px",
              letterSpacing: "0.48em",
              color: "#4a4a44",
              textTransform: "uppercase",
            }}
          >
            Estates
          </span>
        </div>

        {/* Loading bar */}
        <div
          className="relative overflow-hidden"
          style={{ width: "80px", height: "1px", background: "#1a1a18" }}
        >
          <div
            style={{
              position: "absolute",
              inset: "0 auto 0 0",
              background: "#c9a96e",
              width: `${barWidth}%`,
              transition: "width 1.8s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
