interface StatDisplayProps {
  value: string;
  label: string;
}

export function StatDisplay({ value, label }: StatDisplayProps) {
  return (
    <div className="flex flex-col">
      <span className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-2">
        {value}
      </span>
      <span className="text-sm sm:text-base text-black/60 font-light uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}
