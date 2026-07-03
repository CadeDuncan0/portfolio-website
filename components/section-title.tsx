export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-[18px] flex items-center gap-2.5 font-display text-[20px] font-bold uppercase tracking-[2px] text-bright neon-cyan max-sm:mb-5 max-sm:text-[23px]">
      <span className="text-cyber-magenta neon-magenta">//</span>
      <span>{children}</span>
      <span className="ml-1 h-px flex-1 bg-gradient-to-r from-edge to-transparent" />
    </h2>
  );
}
