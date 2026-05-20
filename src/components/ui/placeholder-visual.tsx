import { cn } from "@/lib/utils";

export function PlaceholderVisual({
  className,
  aspect = "aspect-[4/5]",
  label,
}: {
  className?: string;
  aspect?: string;
  label?: string;
}) {
  return (
    <div
      className={cn(
        "placeholder-stripes relative overflow-hidden",
        aspect,
        className,
      )}
      role="img"
      aria-label={label ?? "Platzhalter für Objektfoto"}
    >
      {label && (
        <span className="font-mono absolute bottom-3 left-3 text-[10px] uppercase tracking-widest text-muted">
          {label}
        </span>
      )}
    </div>
  );
}
