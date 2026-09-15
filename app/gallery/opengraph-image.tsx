import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt = "Mushroom Farming Gallery";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "70px",
          background: "#ffffff",
          color: "#16351f",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            marginBottom: 20,
          }}
        >
          Organic Mushroom Farm
        </div>

        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.1,
          }}
        >
          Mushroom Farming Gallery
        </div>

        <div
          style={{
            fontSize: 30,
            marginTop: 28,
            color: "#45614d",
          }}
        >
          Mushroom cultivation • Farm setup • Growing rooms • Harvesting
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
