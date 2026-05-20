import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { OG_IMAGE_ALT, OG_IMAGE_SIZE } from "@/lib/og";

export const alt = OG_IMAGE_ALT;
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default async function Image() {
  const heroPath = join(process.cwd(), "public/hero-bestand-a-lage.jpg");
  const heroBytes = await readFile(heroPath);
  const heroSrc = `data:image/jpeg;base64,${heroBytes.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#15130f",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroSrc}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(0deg, rgba(21,19,15,0.94) 0%, rgba(21,19,15,0.5) 48%, rgba(21,19,15,0.28) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "52px 60px",
            height: "100%",
            width: "100%",
            color: "#f4efe6",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 20,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(244,239,230,0.72)",
            }}
          >
            Premium Immobilieninvestment · DACH
          </p>
          <p
            style={{
              margin: "14px 0 0",
              fontSize: 58,
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              fontFamily: "Georgia, 'Times New Roman', serif",
              maxWidth: 920,
            }}
          >
            Kapitalanlagen Deutschland
          </p>
          <p
            style={{
              margin: "18px 0 0",
              fontSize: 26,
              lineHeight: 1.35,
              color: "rgba(244,239,230,0.92)",
              maxWidth: 780,
            }}
          >
            Strategischer Partner für dein Immobilienvermögen — Off-Market,
            Finanzierung und Verwaltung aus einer Hand.
          </p>
        </div>
      </div>
    ),
    { ...size },
  );
}
