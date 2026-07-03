import type { Project } from "@/lib/data";
import { Globe, Code } from "@/components/icons";

function LinkButton({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 border border-edge bg-fill px-2.5 py-[5px] font-mono text-[11px] uppercase tracking-[1px] text-cyber-cyan transition-colors clip-corner-sm hover:border-cyber-cyan/50 hover:bg-cyber-cyan/10"
    >
      {icon}
      {children}
    </a>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="relative overflow-hidden border border-edge bg-surface shadow-[0_0_0_1px_rgba(0,0,0,0.4),0_18px_40px_rgba(0,0,0,0.5)] transition-shadow duration-300 clip-card hover:shadow-[0_0_24px_rgba(0,234,255,0.25),0_18px_40px_rgba(0,0,0,0.5)]">
      <div className="absolute left-0 right-0 top-0 z-[3] h-[2px] bg-gradient-to-r from-cyber-cyan to-cyber-magenta shadow-[0_0_14px_rgba(0,234,255,0.6)]" />
      <div
        className="relative h-[140px] border-b border-edge-soft max-sm:h-[200px]"
        style={{ background: project.preview }}
      >
        <div className="absolute left-2.5 top-2 z-[2] flex gap-1.5">
          <i className="block h-2 w-2 rounded-full bg-cyber-magenta" />
          <i className="block h-2 w-2 rounded-full bg-cyber-yellow" />
          <i className="block h-2 w-2 rounded-full bg-cyber-cyan" />
        </div>
        <div className="absolute inset-0 opacity-50 preview-grid" />
      </div>
      <div className="px-[15px] pb-4 pt-3.5 max-sm:px-5 max-sm:pb-5 max-sm:pt-4">
        <h3 className="font-display text-[15px] font-bold uppercase tracking-[0.5px] text-bright max-sm:text-[18px]">
          {project.title}
        </h3>
        <p className="mt-[3px] font-mono text-[11px] text-cyber-magenta max-sm:text-[13px]">
          {project.date}
        </p>
        <p className="mt-2 text-[13.5px] font-medium leading-[1.5] text-muted max-sm:text-[15px]">
          {project.desc}
        </p>
        <div className="mt-[11px] flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-edge-soft bg-white/[0.02] px-[7px] py-0.5 font-mono text-[10px] uppercase tracking-[0.5px] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        {(project.website || project.source) && (
          <div className="mt-[13px] flex gap-2">
            {project.website && (
              <LinkButton href={project.website} icon={<Globe className="h-3 w-3" />}>
                Website
              </LinkButton>
            )}
            {project.source && (
              <LinkButton href={project.source} icon={<Code className="h-3 w-3" />}>
                Source
              </LinkButton>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
