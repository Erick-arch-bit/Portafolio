import { useEffect } from 'react';
import anime from 'animejs';

export default function CVPage({ visible, onClose }) {

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
  }, [visible]);

  useEffect(() => {
    if (visible) { document.body.style.overflow = 'hidden'; }
    else { document.body.style.overflow = ''; }
  }, [visible]);

  return (
    <div id="cvPage" className={`slide-page ${visible ? 'active' : ''}`}>
      <div className="max-w-3xl mx-auto px-6 md:px-10 py-16 md:py-24 cv-container">

        <header className="cv-header">
          <div className="cv-header-inner">
            <h1 className="cv-name">Erick Tenorio</h1>
            <p className="cv-title">Creative Developer &amp; Maker</p>
            <p className="cv-contact">tenorioalcantaraerickangel@gmail.com · github.com/Erick-arch-bit · México · Remote</p>
          </div>
        </header>

        <section className="cv-section">
          <h2 className="cv-section-heading">Perfil</h2>
          <p className="cv-text">
            Desarrollador full stack con 3+ años construyendo SaaS, apps móviles y herramientas de datos para el sector público. Experiencia en React, Node.js, Python y Go con entregas que redujeron tiempos operativos hasta un 60%.
          </p>
        </section>

        <section className="cv-section">
          <h2 className="cv-section-heading">Experiencia</h2>

          <div className="cv-item">
            <div className="cv-item-header">
              <h3 className="cv-item-title">Desarrollador Full Stack (SaaS &amp; Mobile)</h3>
              <span className="cv-date">2023 — 2026</span>
            </div>
            <p className="cv-org">Institución Pública</p>
            <ul className="cv-list">
              <li>Desarrollé un SaaS interno que digitalizó 500+ expedientes y redujo tiempos de atención en un 60%.</li>
              <li>Creé app móvil con geolocalización y sincronización offline para 30+ técnicos en campo.</li>
            </ul>
          </div>

          <div className="cv-item">
            <div className="cv-item-header">
              <h3 className="cv-item-title">Investigación y Desarrollo Académico</h3>
              <span className="cv-date">2021 — 2023</span>
            </div>
            <p className="cv-org">Universidad / Investigación</p>
            <ul className="cv-list">
              <li>Construí pipelines procesando 10,000+ registros para investigación social. Plataforma educativa con 200+ usuarios activos.</li>
              <li>2 papers publicados con herramientas de análisis desarrolladas desde cero.</li>
            </ul>
          </div>

          <div className="cv-item">
            <div className="cv-item-header">
              <h3 className="cv-item-title">Desarrollo Web Freelance</h3>
              <span className="cv-date">2019 — 2020</span>
            </div>
            <p className="cv-org">Freelance</p>
            <ul className="cv-list">
              <li>10+ sitios web para negocios locales: restaurantes, consultoras y tiendas online.</li>
            </ul>
          </div>
        </section>

        <section className="cv-section">
          <h2 className="cv-section-heading">Proyectos</h2>

          <div className="cv-item">
            <div className="cv-item-header">
              <h3 className="cv-item-title">App de Hábitos Personal</h3>
              <span className="cv-date">React Native · 2024 — Actualidad</span>
            </div>
            <p className="cv-text">App móvil con sincronización offline, gráficas de consistencia y notificaciones. Racha personal de 120+ días. <span className="cv-url">github.com/Erick-arch-bit</span></p>
          </div>

          <div className="cv-item">
            <div className="cv-item-header">
              <h3 className="cv-item-title">API de Datos Random</h3>
              <span className="cv-date">Go · 2023 — 2024</span>
            </div>
            <p className="cv-text">API REST de alto rendimiento (~2ms, 10K req/s). Desplegada con Docker. <span className="cv-url">github.com/Erick-arch-bit</span></p>
          </div>
        </section>

        <section className="cv-section">
          <h2 className="cv-section-heading">Stack Técnico</h2>
          <p className="cv-text">
            <span className="cv-label">Frontend:</span> React, Next.js, TypeScript, Tailwind CSS, Three.js<br />
            <span className="cv-label">Backend:</span> Node.js, Python, Go, PostgreSQL, MongoDB<br />
            <span className="cv-label">Mobile:</span> React Native, Expo<br />
            <span className="cv-label">DevOps:</span> Git, Docker, Linux
          </p>
        </section>

        <section className="cv-section">
          <h2 className="cv-section-heading">Idiomas</h2>
          <p className="cv-text">Español (Nativo) · Inglés (B2)</p>
        </section>

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
