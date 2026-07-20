export default function ProjectCard({ project, onOpen }) {
  return (
    <div className="proj-card group" onClick={() => onOpen(project.id)}>
      <div className={`proj-visual ${project.visClass}`}>
        <div className="proj-visual-inner" />
        <div className="proj-num">{project.num}</div>
        <div className="proj-overlay">
          <div className="proj-overlay-text">
            <span className="mono text-xs text-white/70">Ver proyecto →</span>
          </div>
        </div>
      </div>
      <div className="pt-5 pb-2">
        <div className="flex justify-between items-start mb-3">
          <div>
            <span className="proj-badge mb-3 inline-block">{project.badge}</span>
            <h3 className="text-xl font-medium mt-2 group-hover:text-[#bbb] transition-colors">{project.title}</h3>
          </div>
          <span className="mono text-xs text-[#555] shrink-0 mt-1">{project.year}</span>
        </div>
        <p className="text-[#777] text-sm leading-relaxed">{project.short}</p>
      </div>
    </div>
  );
}
