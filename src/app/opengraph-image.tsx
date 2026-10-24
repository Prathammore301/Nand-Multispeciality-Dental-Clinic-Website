import { ImageResponse } from "next/og";

import { clinic, siteDescription } from "@/config/clinic";

export const alt = clinic.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f3efe7",
          color: "#1c2421",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.18em",
            color: "#0f4f56",
          }}
        >
          DENTAL CLINIC
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
          <div style={{ display: "flex", fontSize: 64, lineHeight: 1.05 }}>{clinic.name}</div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 28,
              lineHeight: 1.4,
              color: "#3e4a45",
            }}
          >
            {siteDescription}
          </div>
        </div>
        <div style={{ display: "flex", width: 148, height: 8, backgroundColor: "#0f4f56" }} />
      </div>
    ),
    size,
  );
}
