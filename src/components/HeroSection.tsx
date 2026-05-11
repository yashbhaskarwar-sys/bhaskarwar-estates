"use client";

interface HeroSectionProps {
  visible: boolean;
}

export default function HeroSection({ visible }: HeroSectionProps) {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center px-6 transition-opacity duration-1000 delay-300"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {/* Background radial glow — center */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 45%, rgba(201,169,110,0.055) 0%, transparent 65%)",
        }}
      />

      {/* Subtle grid lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(168,168,160,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,168,160,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Top edge line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,169,110,0.2) 30%, rgba(201,169,110,0.2) 70%, transparent)",
          opacity: visible ? 1 : 0,
          transition: "opacity 2s ease 0.8s",
        }}
      />

      {/* Bottom edge line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,169,110,0.12) 30%, rgba(201,169,110,0.12) 70%, transparent)",
          opacity: visible ? 1 : 0,
          transition: "opacity 2s ease 1s",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Estate mark — top */}
        <div
          className="mb-16 flex items-center gap-4"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 1.2s ease 0.4s, transform 1.2s cubic-bezier(0.16,1,0.3,1) 0.4s",
          }}
        >
          <div className="h-px w-12 bg-[#c9a96e] opacity-40" />
          <span
            className="font-[family-name:var(--font-cormorant)] text-[10px] uppercase tracking-[0.5em] text-[#5a5a54]"
          >
            Est. 2026
          </span>
          <div className="h-px w-12 bg-[#c9a96e] opacity-40" />
        </div>

        {/* Primary wordmark */}
        <div
          className="mb-4 overflow-hidden"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1.4s ease 0.6s, transform 1.4s cubic-bezier(0.16,1,0.3,1) 0.6s",
          }}
        >
          <h1
            className="font-[family-name:var(--font-cormorant)] font-light text-[#e8e4dc]"
            style={{
              fontSize: "clamp(1.5rem, 10vw, 7rem)",
              letterSpacing: "0.18em",
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            BHASKARWAR
          </h1>
        </div>

        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1.4s ease 0.8s, transform 1.4s cubic-bezier(0.16,1,0.3,1) 0.8s",
          }}
        >
          <h2
            className="font-[family-name:var(--font-cormorant)] font-light text-[#a8a8a0]"
            style={{
              fontSize: "clamp(0.75rem, 3vw, 2.2rem)",
              letterSpacing: "0.55em",
              lineHeight: 1,
            }}
          >
            ESTATES
          </h2>
        </div>

        {/* Divider */}
        <div
          className="my-14 flex items-center gap-5"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 1.6s ease 1.0s",
          }}
        >
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#c9a96e] opacity-30" />
          <div
            className="h-1 w-1 rounded-full bg-[#c9a96e]"
            style={{ boxShadow: "0 0 6px 1px rgba(201,169,110,0.5)" }}
          />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#c9a96e] opacity-30" />
        </div>

        {/* Subtitle */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 1.4s ease 1.2s, transform 1.4s cubic-bezier(0.16,1,0.3,1) 1.2s",
          }}
        >
          <p
            className="font-[family-name:var(--font-cormorant)] font-light italic text-[#6a6a62]"
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
              letterSpacing: "0.06em",
              lineHeight: 1.6,
            }}
          >
            The Future of Bhaskarwar Estates
          </p>
        </div>

        {/* System line */}
        <div
          className="mt-8"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 1.4s ease 1.5s, transform 1.4s cubic-bezier(0.16,1,0.3,1) 1.5s",
          }}
        >
          <p
            className="font-[family-name:var(--font-cormorant)] text-[#4a4a44]"
            style={{
              fontSize: "clamp(0.6rem, 2.2vw, 1.1rem)",
              letterSpacing: "clamp(0.08em, 0.25em, 0.25em)",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            A New System Is Being Built
          </p>
        </div>

        {/* Location mark */}
        <div
          className="mt-20 flex items-center gap-4"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 1.6s ease 1.9s, transform 1.6s cubic-bezier(0.16,1,0.3,1) 1.9s",
          }}
        >
          <div className="h-px w-8 bg-[#c9a96e] opacity-20" />
          <span
            className="font-[family-name:var(--font-cormorant)] text-[#3e3e3a]"
            style={{
              fontSize: "clamp(0.6rem, 1.8vw, 0.9rem)",
              letterSpacing: "0.38em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            Wani · Maharashtra
          </span>
          <div className="h-px w-8 bg-[#c9a96e] opacity-20" />
        </div>
      </div>

      {/* Footer */}
      <footer
        className="absolute bottom-8 left-0 right-0 flex justify-center"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 2s ease 2.4s",
        }}
      >
        <p
          className="font-[family-name:var(--font-cormorant)] text-[#2e2e2a] uppercase"
          style={{
            fontSize: "10px",
            letterSpacing: "0.35em",
          }}
        >
          Phase 1 Initiated &nbsp;·&nbsp; 2026
        </p>
      </footer>
    </section>
  );
}
