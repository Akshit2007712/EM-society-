type Props = { number: string; label: string };
export function SectionHeading({ number, label }: Props) {
  return (
    <div className="flex items-center gap-4 text-xs font-semibold tracking-[0.22em] uppercase text-led">
      <span>{number}</span>
      <span className="h-px w-10 bg-border" />
      <span>{label}</span>
    </div>
  );
}
