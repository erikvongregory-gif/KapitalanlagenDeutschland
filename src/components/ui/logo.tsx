import Image from "next/image";
import Link from "next/link";

const LOGO = {
  src: "/logo-kapitalanlagen-deutschland.png",
  width: 1024,
  height: 309,
  alt: "Kapitalanlagen Deutschland",
} as const;

type LogoProps = {
  variant?: "header" | "footer";
  linked?: boolean;
};

export function Logo({ variant = "header", linked = true }: LogoProps) {
  const img = (
    <Image
      src={LOGO.src}
      alt={LOGO.alt}
      width={LOGO.width}
      height={LOGO.height}
      className={`logo logo--${variant}`}
      priority={variant === "header"}
      sizes={variant === "header" ? "(max-width: 640px) 160px, 200px" : "240px"}
    />
  );

  if (!linked) return img;

  return (
    <Link
      href="#"
      className={`brand brand--logo ${variant === "footer" ? "brand--logo-footer" : ""}`}
      aria-label="Kapitalanlagen Deutschland — Startseite"
    >
      {img}
    </Link>
  );
}
