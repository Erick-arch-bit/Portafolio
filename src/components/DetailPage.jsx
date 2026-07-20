import { useEffect } from 'react';
import anime from 'animejs';

export default function DetailPage({ project, visible, onClose }) {
  useEffect(() => {
    if (!visible) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      document.getElementById('detailPage').style.transform = 'translateX(0)';
      document.getElementById('detailPage').style.opacity = '1';
      return;
    }
    document.getElementById('detailPage').scrollTop = 0;
    anime({
      targets: '#detailPage',
      translateX: ['100%', '0%'],
      opacity: [0, 1],
      duration: 700,
      easing: 'easeInOutCubic',
    });
    anime({
      targets: '#backBtn',
      translateX: ['-100px', '0px'],
      opacity: [0, 1],
      duration: 500,
      easing: 'easeOutExpo',
      delay: 300,
    });
  }, [visible]);

  useEffect(() => {
    if (visible) { document.body.style.overflow = 'hidden'; }
    else { document.body.style.overflow = ''; }
  }, [visible]);

  if (!project) return null;

  return (
    <div id="detailPage" className={`slide-page ${visible ? 'active' : ''}`}>
      <div className={`detail-visual ${project.visClass}`} />
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="-mt-20 relative z-10 pb-24">
          <div className="flex flex-wrap items-center gap-3 mb-6" id="detailMeta">
            <span className="proj-badge">{project.badge}</span>
            <span className="mono text-xs text-[#555]">{project.year}</span>
            <span className="mono text-xs text-[#555]">#{project.num}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-8">{project.title}</h1>

          <div className="detail-section pt-8 mb-8">
            <h3 className="mono text-xs text-[#555] uppercase tracking-widest mb-4">Descripción</h3>
            <div className="text-[#888] leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: project.desc }} />
          </div>

          <div className="detail-section pt-8 mb-8">
            <h3 className="mono text-xs text-[#555] uppercase tracking-widest mb-4">Mi Rol</h3>
            <div className="text-[#888] leading-relaxed" dangerouslySetInnerHTML={{ __html: project.role }} />
          </div>

          <div className="detail-section pt-8 mb-8">
            <h3 className="mono text-xs text-[#555] uppercase tracking-widest mb-4">Stack Técnico</h3>
            <div className="flex flex-wrap">
              {project.stack.map((s, i) => (
                <span key={i} className="detail-tag">{s}</span>
              ))}
            </div>
          </div>

          <div className="detail-section pt-8 mb-8">
            <h3 className="mono text-xs text-[#555] uppercase tracking-widest mb-4">Retos y Aprendizajes</h3>
            <div className="text-[#888] leading-relaxed" dangerouslySetInnerHTML={{ __html: project.challenges }} />
          </div>

          <div className="detail-section pt-8 mb-8">
            <h3 className="mono text-xs text-[#555] uppercase tracking-widest mb-4">Resultado</h3>
            <div className="text-[#888] leading-relaxed" dangerouslySetInnerHTML={{ __html: project.result }} />
          </div>

          <div className="flex flex-wrap gap-4 mt-12">
            {project.links.map((l, i) => (
              <a
                key={i}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mono text-sm border border-[#333] hover:bg-white hover:text-black px-5 py-3 rounded-full transition-all inline-flex items-center gap-2"
              >
                {l.icon} {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
