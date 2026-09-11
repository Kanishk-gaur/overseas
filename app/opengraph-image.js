import { ImageResponse } from "next/og";
import { site } from "@/lib/siteConfig";
import { countries } from "@/data/countries";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0b2545 0%, #071a33 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", gap: 10 }}>
          {countries.map((c) => (
            <div
              key={c.slug}
              style={{
                display: "flex",
                padding: "6px 14px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.1)",
                fontSize: 20,
                fontWeight: 600,
                color: "#e0b25a",
              }}
            >
              {c.name}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, marginTop: 32 }}>
          {site.name}
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#e0b25a", marginTop: 16, maxWidth: 900 }}>
          {site.tagline}
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "rgba(255,255,255,0.6)", marginTop: 40 }}>
          Licensed Overseas Manpower Supply Agency
        </div>
      </div>
    ),
    { ...size }
  );
}
