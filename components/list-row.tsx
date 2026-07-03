import type { ListEntry } from "@/lib/data";

export function ListRow({ letter, gradient, title, sub, date }: ListEntry) {
  return (
    <div className="mb-4 flex items-center gap-3.5 max-sm:mb-5 max-sm:gap-4">
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center font-display text-[18px] font-bold text-[#03121a] clip-logo max-sm:h-14 max-sm:w-14 max-sm:text-[21px]"
        style={{ background: gradient }}
      >
        {letter}
      </div>
      <div className="flex-1">
        <div className="text-base font-bold tracking-[0.3px] text-bright max-sm:text-lg">{title}</div>
        <div className="text-sm font-medium text-muted max-sm:text-[15px]">{sub}</div>
      </div>
      <div className="whitespace-nowrap font-mono text-[12.5px] uppercase text-cyber-cyan/85 max-sm:text-[13px]">
        {date}
      </div>
    </div>
  );
}
