import { ImageResponse } from "next/og";

export const alt = "Vakxo — The voice-native developer agent by Pathixo";
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
          backgroundColor: "#f6f7f3",
          color: "#101210",
          padding: "56px 64px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontSize: "28px",
              fontWeight: 700,
              letterSpacing: "-0.03em",
            }}
          >
            <div
              style={{
                width: "18px",
                height: "18px",
                borderRadius: "999px",
                backgroundColor: "#ccff00",
                border: "2px solid #101210",
              }}
            />
            Vakxo
          </div>
          <div
            style={{
              display: "flex",
              backgroundColor: "#101210",
              color: "#ccff00",
              padding: "10px 20px",
              borderRadius: "999px",
              fontSize: "16px",
              fontWeight: 600,
              letterSpacing: "0.08em",
            }}
          >
            PRIVATE BETA · DEC 4
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: "96px",
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
            }}
          >
            Say it. It ships.
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#43483f",
              maxWidth: "820px",
              lineHeight: 1.35,
            }}
          >
            The voice-native developer agent that writes code, runs your
            terminal, works across your desktop, and opens the PR.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid #d7dbd0",
            paddingTop: "24px",
            fontSize: "18px",
            color: "#52574d",
          }}
        >
          <span>BUILT BY PATHIXO</span>
          <span>vakxo.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
