import { useEffect, useRef } from 'react';
import anime from 'animejs';

export default function CVPage({ visible, onClose }) {
  const skillRef = useRef(null);

  useEffect(() => {
    if (!visible) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      document.getElementById('cvPage').style.transform = 'translateX(0)';
      document.getElementById('cvPage').style.opacity = '1';
      return;
    }
    document.getElementById('cvPage').scrollTop = 0;
    anime({
      targets: '#cvPage',
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
    setTimeout(() => {
      if (skillRef.current) {
        skillRef.current.querySelectorAll('.cv-skill-fill').forEach((el) => el.classList.add('animate'));
      }
    }, 500);
  }, [visible]);

  useEffect(() => {
    if (visible) { document.body.style.overflow = 'hidden'; }
    else { document.body.style.overflow = ''; }
  }, [visible]);

  return (
    <div id="cvPage" className={`slide-page ${visible ? 'active' : ''}`}>
      <div className="max-w-3xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="mb-16">
          <div className="flex gap-8 mb-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none mb-2">Erick Tenorio</h1>
              <p className="text-xl md:text-2xl font-light text-[#888] mb-4">Creative Developer & Maker</p>
              <div className="mono text-xs text-[#555] space-y-1">
                <div>tenorioalcantaraerickangel@gmail.com</div>
                <div>github.com/Erick-arch-bit</div>
                <div>México · Remote</div>
              </div>
            </div>
            <div className="cv-photo shrink-0">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-[#222] flex items-center justify-center text-[#444] mono text-[10px] uppercase tracking-widest overflow-hidden bg-[#0a0a0a]">
                <span className="cv-photo-text">Foto</span>
              </div>
            </div>
          </div>
          <div className="h-px bg-[#1F1F22]" />
        </div>

        <div className="mb-14">
          <div className="cv-section-title"><span className="mono text-xs text-[#555] uppercase tracking-widest">Perfil</span></div>
          <p className="text-[#888] leading-relaxed">
            Desarrollador full stack con 3+ años de experiencia construyendo SaaS, aplicaciones móviles y herramientas de datos. Combino experiencia formal en el sector público y académico con una pasión por los proyectos personales — desde APIs en Go hasta bots de automatización en Python. Mi mayor fortaleza es la capacidad de aprender cualquier tecnología rápidamente y entregar soluciones funcionales.
          </p>
        </div>

        <div className="mb-14">
          <div className="cv-section-title"><span className="mono text-xs text-[#555] uppercase tracking-widest">Experiencia</span></div>
          <div className="cv-timeline">
            <div className="cv-timeline-item">
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h3 className="font-medium text-lg">Desarrollador Full Stack (SaaS & Mobile)</h3>
                <span className="mono text-xs text-[#555]">2023 — 2026</span>
              </div>
              <p className="mono text-xs text-[#777] mb-3">Institución Pública</p>
              <ul className="text-[#888] text-sm leading-relaxed space-y-2 list-none">
                <li className="flex gap-2"><span className="text-[#555] mt-0.5">—</span><span>Desarrollé un SaaS interno para administración centralizada de técnicos y beneficiarios, digitalizando 500+ expedientes y reduciendo tiempos de atención en un 60%.</span></li>
                <li className="flex gap-2"><span className="text-[#555] mt-0.5">—</span><span>Creé una aplicación móvil para 30+ técnicos en campo: bitácora digital con geolocalización, reportes en tiempo real y sincronización offline.</span></li>
                <li className="flex gap-2"><span className="text-[#555] mt-0.5">—</span><span>Implementé cifrado end-to-end para manejo de datos sensibles de beneficiarios.</span></li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="mono text-[10px] text-[#555] border border-[#222] px-2 py-0.5 rounded">React</span>
                <span className="mono text-[10px] text-[#555] border border-[#222] px-2 py-0.5 rounded">Node.js</span>
                <span className="mono text-[10px] text-[#555] border border-[#222] px-2 py-0.5 rounded">React Native</span>
                <span className="mono text-[10px] text-[#555] border border-[#222] px-2 py-0.5 rounded">PostgreSQL</span>
              </div>
            </div>
            <div className="cv-timeline-item">
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h3 className="font-medium text-lg">Investigación y Desarrollo Académico</h3>
                <span className="mono text-xs text-[#555]">2021 — 2023</span>
              </div>
              <p className="mono text-xs text-[#777] mb-3">Universidad / Investigación</p>
              <ul className="text-[#888] text-sm leading-relaxed space-y-2 list-none">
                <li className="flex gap-2"><span className="text-[#555] mt-0.5">—</span><span>Construí pipelines de datos procesando 10,000+ registros para investigación social.</span></li>
                <li className="flex gap-2"><span className="text-[#555] mt-0.5">—</span><span>Plataforma educativa interna con 200+ usuarios activos mensuales.</span></li>
                <li className="flex gap-2"><span className="text-[#555] mt-0.5">—</span><span>2 papers publicados con herramientas de análisis desarrolladas desde cero.</span></li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="mono text-[10px] text-[#555] border border-[#222] px-2 py-0.5 rounded">Python</span>
                <span className="mono text-[10px] text-[#555] border border-[#222] px-2 py-0.5 rounded">Pandas</span>
                <span className="mono text-[10px] text-[#555] border border-[#222] px-2 py-0.5 rounded">Next.js</span>
              </div>
            </div>
            <div className="cv-timeline-item">
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h3 className="font-medium text-lg">Desarrollo Web Freelance</h3>
                <span className="mono text-xs text-[#555]">2019 — 2020</span>
              </div>
              <p className="mono text-xs text-[#777] mb-3">Freelance</p>
              <ul className="text-[#888] text-sm leading-relaxed space-y-2 list-none">
                <li className="flex gap-2"><span className="text-[#555] mt-0.5">—</span><span>10+ sitios web para negocios locales: restaurantes, consultoras, tiendas online.</span></li>
                <li className="flex gap-2"><span className="text-[#555] mt-0.5">—</span><span>Gestión completa del ciclo: requerimientos, desarrollo, despliegue y mantenimiento.</span></li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="mono text-[10px] text-[#555] border border-[#222] px-2 py-0.5 rounded">WordPress</span>
                <span className="mono text-[10px] text-[#555] border border-[#222] px-2 py-0.5 rounded">PHP</span>
                <span className="mono text-[10px] text-[#555] border border-[#222] px-2 py-0.5 rounded">MySQL</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-14">
          <div className="cv-section-title"><span className="mono text-xs text-[#555] uppercase tracking-widest">Proyectos Destacados</span></div>
          <div className="space-y-6">
            {[
              { title: 'App de Hábitos Personal', period: 'React Native · 2024 — Actualidad', desc: 'App móvil para rastrear hábitos con sincronización offline, gráficas de consistencia y notificaciones locales. Racha personal de 120+ días.' },
              { title: 'Librería de Animación UI', period: 'JS / WebGL · 2023 — 2024', desc: 'Librería open source (&lt;3KB gzipped) para animaciones GPU-acceleradas. 200+ descargas semanales en NPM, 40+ estrellas en GitHub.' },
              { title: 'API de Datos Random', period: 'Go · 2023 — 2024', desc: 'API REST de alto rendimiento (~2ms, 10K req/s) que genera datos aleatorios realistas. Desplegada en VPS con Docker.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="cv-dot mt-2 flex-shrink-0" />
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h3 className="font-medium">{item.title}</h3>
                    <span className="mono text-[10px] text-[#555]">{item.period}</span>
                  </div>
                  <p className="text-[#888] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-14" ref={skillRef}>
          <div className="cv-section-title"><span className="mono text-xs text-[#555] uppercase tracking-widest">Stack Técnico</span></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <div>
              <h4 className="mono text-[10px] text-[#555] uppercase tracking-wider mb-3">Frontend</h4>
              <div className="space-y-3">
                <SkillBar label="React / Next.js" pct={90} />
                <SkillBar label="TypeScript" pct={85} />
                <SkillBar label="Tailwind CSS" pct={95} />
                <SkillBar label="Three.js / WebGL" pct={60} />
              </div>
            </div>
            <div>
              <h4 className="mono text-[10px] text-[#555] uppercase tracking-wider mb-3">Backend</h4>
              <div className="space-y-3">
                <SkillBar label="Node.js / Express" pct={90} />
                <SkillBar label="Python" pct={80} />
                <SkillBar label="Go" pct={65} />
                <SkillBar label="PostgreSQL / MongoDB" pct={85} />
              </div>
            </div>
            <div>
              <h4 className="mono text-[10px] text-[#555] uppercase tracking-wider mb-3">Mobile</h4>
              <div className="space-y-3">
                <SkillBar label="React Native / Expo" pct={80} />
              </div>
            </div>
            <div>
              <h4 className="mono text-[10px] text-[#555] uppercase tracking-wider mb-3">DevOps / Tools</h4>
              <div className="space-y-3">
                <SkillBar label="Git / GitHub" pct={90} />
                <SkillBar label="Docker" pct={75} />
                <SkillBar label="Linux" pct={80} />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-14">
          <div className="cv-section-title"><span className="mono text-xs text-[#555] uppercase tracking-widest">Idiomas</span></div>
          <div className="flex flex-wrap gap-x-12 gap-y-4 text-sm">
            <div><span className="text-[#888]">Español</span> <span className="text-[#555] mono text-xs ml-2">Nativo</span></div>
            <div><span className="text-[#888]">Inglés</span> <span className="text-[#555] mono text-xs ml-2">B2</span></div>
          </div>
        </div>

        <div className="cv-print-hide pt-8 border-t border-[#1F1F22] flex flex-col sm:flex-row gap-4">
          <button onClick={() => window.print()} className="mono text-xs border border-[#333] hover:bg-white hover:text-black px-6 py-3 rounded-full transition-all">
            Imprimir / Guardar PDF
          </button>
          <button onClick={onClose} className="mono text-xs border border-[#333] hover:border-[#555] px-6 py-3 rounded-full transition-all">
            Volver al portfolio
          </button>
        </div>
      </div>
    </div>
  );
}

function SkillBar({ label, pct }) {
  return (
    <div>
      <div className="text-sm mb-1">{label}</div>
      <div className="cv-skill-bar">
        <div className="cv-skill-fill" style={{ width: pct + '%', transform: 'scaleX(0)' }} />
      </div>
    </div>
  );
}
