import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Bhaskarwar Estates";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#080808",
          position: "relative",
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(201,169,110,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Top rule */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "10%",
            right: "10%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(201,169,110,0.3), transparent)",
          }}
        />

        {/* Bottom rule */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "10%",
            right: "10%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(201,169,110,0.15), transparent)",
          }}
        />

        {/* Content — rendered after background layers (painter's algorithm, no z-index needed) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "16px",
            }}
          >
            <div
              style={{ height: "1px", width: "40px", background: "rgba(201,169,110,0.3)" }}
            />
            <span
              style={{
                color: "#4a4a44",
                fontSize: "13px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
              }}
            >
              Est. 2026
            </span>
            <div
              style={{ height: "1px", width: "40px", background: "rgba(201,169,110,0.3)" }}
            />
          </div>

          {/* Primary wordmark */}
          <div
            style={{
              color: "#e8e4dc",
              fontSize: "88px",
              fontWeight: 300,
              letterSpacing: "0.18em",
              lineHeight: 1,
            }}
          >
            BHASKARWAR
          </div>

          <div
            style={{
              color: "#a8a8a0",
              fontSize: "32px",
              fontWeight: 300,
              letterSpacing: "0.55em",
            }}
          >
            ESTATES
          </div>

          {/* Divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              margin: "20px 0",
            }}
          >
            <div
              style={{
                height: "1px",
                width: "60px",
                background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.3))",
              }}
            />
            <div
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "#c9a96e",
              }}
            />
            <div
              style={{
                height: "1px",
                width: "60px",
                background: "linear-gradient(90deg, rgba(201,169,110,0.3), transparent)",
              }}
            />
          </div>

          {/* Tagline */}
          <div
            style={{
              color: "#6a6a62",
              fontSize: "22px",
              fontStyle: "italic",
              letterSpacing: "0.05em",
            }}
          >
            A New System Is Being Built
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            color: "#2a2a26",
            fontSize: "11px",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
          }}
        >
          Phase 1 Initiated · 2026
        </div>
      </div>
    ),
    { ...size }
  );
}
