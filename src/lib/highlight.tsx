export function highlightAccent(text: string, accent: string) {
  const i = text.indexOf(accent);
  if (i === -1) return text;
  return (
    <>
      {text.slice(0, i)}
      <em>{accent}</em>
      {text.slice(i + accent.length)}
    </>
  );
}
