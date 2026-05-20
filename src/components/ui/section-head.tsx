export function SectionHead({
  eyebrow,
  title,
  meta,
}: {
  eyebrow: string;
  title: React.ReactNode;
  meta: string;
  dark?: boolean;
}) {
  return (
    <div className="section-head">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="display" style={{ marginTop: 28 }}>
          {title}
        </h2>
      </div>
      <p className="head-meta">{meta}</p>
    </div>
  );
}
