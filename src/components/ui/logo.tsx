import Image from "next/image";
import Link from "next/link";

const MARK = {
  src: "/logo-mark-house.png",
  width: 500,
  height: 500,
  alt: "",
} as const;

type LogoProps = {
  variant?: "header" | "footer";
  linked?: boolean;
};

function BrandContent({ variant }: { variant: "header" | "footer" }) {
  return (
    <>
      <span className="mark mark--icon" aria-hidden>
        <Image
          src={MARK.src}
          alt={MARK.alt}
          width={MARK.width}
          height={MARK.height}
          className="mark__img"
          priority={variant === "header"}
        />
      </span>
      <span className="stack">
        Kapitalanlagen
        <small>Deutschland · Boutique-Mandat</small>
      </span>
    </>
  );
}

export function Logo({ variant = "header", linked = true }: LogoProps) {
  const className = `brand brand--split brand--${variant}`;

  if (!linked) {
    return (
      <div className={className} aria-label="Kapitalanlagen Deutschland">
        <BrandContent variant={variant} />
      </div>
    );
  }

  return (
    <Link
      href="#"
      className={className}
      aria-label="Kapitalanlagen Deutschland — Startseite"
    >
      <BrandContent variant={variant} />
    </Link>
  );
}
