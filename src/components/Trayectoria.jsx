import { useEffect, useRef } from 'react';
import anime from 'animejs';

const items = [
  {
    period: '2023 — 2026',
    org: 'Institución Pública',
    title: 'Desarrollador Full Stack',
    desc: 'Desarrollé un <strong class="text-white">SaaS interno</strong> para administración centralizada, digitalizando 500+ expedientes. Reduje tiempos en un 60%. Creé <strong class="text-white">app móvil</strong> para 30+ técnicos con geolocalización y sync offline.',
    tags: ['SaaS', 'Mobile', 'Offline', 'GeoJSON'],
  },
  {
    period: '2021 — 2023',
    org: 'Universidad',
    title: 'Investigación y Desarrollo',
    desc: 'Pipelines procesando <strong class="text-white">10,000+ registros</strong>. Plataforma educativa con <strong class="text-white">200+ usuarios</strong> mensuales. 2 papers publicados.',
    tags: ['Data', 'Edu', 'Papers'],
  },
  {
    period: '2019 — 2020',
    org: 'Freelance',
    title: 'Desarrollo Web',
    desc: '<strong class="text-white">10+ sitios web</strong> para negocios locales. De requerimientos a despliegue.',
    tags: ['Web', 'E-Commerce'],
  },
];

export default function Trayectoria() {
  const sectionRef = useRef(null);
  const trajRef = useRef(null);

  useEffect(() => {
    const line = sectionRef.current?.querySelector('[data-line]');
    if (!line) return;
    const lineObs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { anime({ targets: line, scaleX: [0, 1], duration: 1200, easing: 'easeInOutQuad' }); lineObs.unobserve(line); }},
      { threshold: 0.5 }
    );
    lineObs.observe(line);

    const title = sectionRef.current?.querySelector('[data-section-anim]');
    if (title) {
      const titleObs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { anime({ targets: title.querySelectorAll('[data-stagger]'), translateX: [-40, 0], opacity: [0, 1], duration: 800, easing: 'easeOutExpo', delay: anime.stagger(150) }); titleObs.unobserve(title); }},
        { threshold: 0.5 }
      );
      titleObs.observe(title);
    }

    const blocks = trajRef.current?.querySelectorAll('.traj-block');
    if (blocks) {
      const blocksObs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { anime({ targets: blocks, translateX: [-60, 0], opacity: [0, 1], duration: 1000, easing: 'easeOutExpo', delay: anime.stagger(250) }); blocksObs.unobserve(e.target); }},
        { threshold: 0.1 }
      );
      blocksObs.observe(trajRef.current);
    }

    return () => { lineObs.disconnect(); };
  }, []);

  return (
    <section id="trayectoria" className="border-t border-[#1F1F22]" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-6 py-16 w-full">
        <div className="h-px bg-[#1F1F22] line-anim mb-12" data-line />
        <h2 className="text-sm mono text-[#555] uppercase tracking-widest mb-12" data-section-anim>
          <span className="inline-block" data-stagger="0">01.</span>{' '}
          <span className="inline-block" data-stagger="1">Trayectoria Formal</span>
        </h2>
        <div className="space-y-12" ref={trajRef}>
          {items.map((item, i) => (
            <div key={i} className="traj-block grid grid-cols-1 md:grid-cols-12 gap-6" style={{ opacity: 0 }}>
              <div className="md:col-span-4 mono text-sm text-[#555]">
                {item.period}<br /><span className="text-[#777]">{item.org}</span>
              </div>
              <div className="md:col-span-8">
                <h3 className="text-2xl md:text-3xl font-medium mb-3">{item.title}</h3>
                <p className="text-[#888] leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: item.desc }} />
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs mono text-[#555] uppercase tracking-wider">
                  {item.tags.map((t, j) => (
                    <span key={j}>{j > 0 && <span className="mr-4">·</span>}{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
