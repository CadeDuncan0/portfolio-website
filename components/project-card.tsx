import { Globe, Code } from '@/components/icons'
import type { Project } from '@/lib/data'

function LinkButton({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) {
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
  )
}

/**
 * The hover glow lives on a wrapper and uses drop-shadow rather than
 * box-shadow: the card itself is clip-card'd, and clip-path crops a box-shadow
 * away entirely, while a parent's drop-shadow traces the clipped silhouette —
 * notched corner included (same trick as .cta-pulse).
 *
 * Every level from that wrapper down to the text block is a row subgrid
 * spanning the same five tracks of the projects grid — preview, heading,
 * description, tags, links. Track heights are therefore shared by every card in
 * a grid row, so a long description or a wrapped tag list in one card pushes
 * the matching rows of its neighbours down with it and each band starts on the
 * same y-axis regardless of how much content sits above it. A card that omits a
 * band (no links) simply leaves that track empty instead of pulling the rows
 * below it upward. Gaps are zeroed at each level so the grid's 18px card gutter
 * applies only between card rows, never inside a card; spacing between bands
 * stays on the children's own margins.
 *
 * Title and meta line share the heading track rather than taking one each: the
 * meta line reads as part of the title, so it stays tucked under its own title
 * instead of being pushed off by a neighbour's second title line.
 *
 * Tags carry the same cyan-on-fill treatment as the skills chips, dialled down
 * (softer text, a fainter inset glow) so a card's tag row reads as supporting
 * detail rather than competing with the section's own chips.
 *
 * Browsers without subgrid fall through to a plain auto-row grid, which stacks
 * the same bands in order — alignment across cards is the enhancement, not the
 * layout itself.
 */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="row-span-5 grid grid-rows-subgrid gap-y-0 transition duration-300 hover:drop-shadow-[0_0_24px_rgba(0,234,255,0.25)]">
      <div className="relative row-span-5 grid w-full grid-rows-subgrid gap-y-0 overflow-hidden border border-edge bg-surface clip-card">
        <div className="absolute left-0 right-0 top-0 z-[3] h-[2px] bg-gradient-to-r from-cyber-cyan to-cyber-magenta shadow-[0_0_14px_rgba(0,234,255,0.6)]" />
        <div className="relative h-[140px] border-b border-edge-soft max-sm:h-[200px]" style={{ background: project.preview }}>
          <div className="absolute left-2.5 top-2 z-[2] flex gap-1.5">
            <i className="block h-2 w-2 rounded-full bg-cyber-magenta" />
            <i className="block h-2 w-2 rounded-full bg-cyber-yellow" />
            <i className="block h-2 w-2 rounded-full bg-cyber-cyan" />
          </div>
          <div className="absolute inset-0 opacity-50 preview-grid" />
        </div>
        <div className="row-span-4 grid grid-rows-subgrid gap-y-0 px-[15px] pb-4 pt-3.5 max-sm:px-5 max-sm:pb-5 max-sm:pt-4">
          <div>
            <h3 className="font-display text-[15px] font-bold uppercase tracking-[0.5px] text-bright max-sm:text-[18px]">{project.title}</h3>
            <p className="mt-[3px] flex items-center gap-1.5 font-mono text-[11px] max-sm:text-[13px]">
              <span className="text-cyber-magenta">{project.status}</span>
            </p>
            <div className="mt-[11px] flex flex-wrap content-start gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="h-fit border border-edge bg-fill px-[7px] py-0.5 font-mono text-[10px] uppercase tracking-[0.5px] text-cyber-cyan/85 shadow-[inset_0_0_10px_rgba(0,234,255,0.06)] clip-corner-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <p className="mt-2 text-[13.5px] font-medium leading-[1.5] text-muted max-sm:text-[15px]">{project.desc}</p>
          {(project.website || project.source) && (
            <div className="mt-[13px] flex content-start items-start gap-2">
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
    </div>
  )
}
