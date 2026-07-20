import { useEffect, useRef } from 'react';
import anime from 'animejs';

const courses = [
  {
    title: 'AWS Cloud Practitioner',
    org: 'Amazon Web Services',
    year: '2025',
    desc: 'Fundamentos de la nube AWS, arquitectura, facturación, seguridad y servicios core como EC2, S3, Lambda y RDS.',
  },
  {
    title: 'Meta Front-End Developer',
    org: 'Meta (Coursera)',
    year: '2024',
    desc: 'Desarrollo front-end profesional con React, HTML/CSS avanzado, diseño responsivo, testing y control de versiones.',
  },
  {
    title: 'Scrum Master Certified',
    org: 'Scrum Alliance',
    year: '2024',
    desc: 'Metodologías ágiles, roles de Scrum, sprints, ceremonias, gestión de equipos y entregas iterativas.',
  },
  {
    title: 'Google Data Analytics',
    org: 'Google (Coursera)',
    year: '2023',
    desc: 'Análisis de datos con SQL, hojas de cálculo, Tableau y R. Limpieza, transformación y visualización de datos.',
  },
  {
    title: 'CCNA: Introduction to Networks',
    org: 'Cisco Networking Academy',
    year: '2023',
    desc: 'Fundamentos de redes, direccionamiento IP, modelos OSI/TCP/IP, routing y switching básico.',
  },
];

export default function Cursos() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const line = sectionRef.current?.querySelector('[data-line]');
    if (line) {
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { anime({ targets: line, scaleX: [0, 1], duration: 1200, easing: 'easeInOutQuad' }); obs.unobserve(e.target); }},
        { threshold: 0.5 }
      );
      obs.observe(line);
    }

    const title = sectionRef.current?.querySelector('[data-section-anim]');
    if (title) {
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { anime({ targets: title.querySelectorAll('[data-stagger]'), translateX: [-40, 0], opacity: [0, 1], duration: 800, easing: 'easeOutExpo', delay: anime.stagger(150) }); obs.unobserve(e.target); }},
        { threshold: 0.5 }
      );
      obs.observe(title);
    }

    const cards = sectionRef.current?.querySelector('[data-cards-anim]');
    if (cards) {
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { anime({ targets: cards.querySelectorAll('.curso-card'), translateY: [40, 0], opacity: [0, 1], duration: 800, easing: 'easeOutExpo', delay: anime.stagger(100) }); obs.unobserve(e.target); }},
        { threshold: 0.1 }
      );
      obs.observe(cards);
    }
  }, []);

  return (
    <section id="cursos" className="border-t border-[#1F1F22]" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-6 py-16 w-full">
        <div className="h-px bg-[#1F1F22] line-anim mb-12" data-line />
        <h2 className="text-sm mono text-[#555] uppercase tracking-widest mb-10" data-section-anim>
          <span className="inline-block" data-stagger="0">03.</span>{' '}
          <span className="inline-block" data-stagger="1">Cursos y Certificaciones</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-5" data-cards-anim>
          {courses.map((c, i) => (
            <div
              key={i}
              className="curso-card border border-[#1F1F22] rounded-lg p-6 hover:border-[#333] transition-all duration-300"
              style={{ opacity: 0 }}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-medium text-base">{c.title}</h3>
                <span className="mono text-[10px] text-[#555] shrink-0 mt-0.5">{c.year}</span>
              </div>
              <p className="mono text-xs text-[#777] mb-2">{c.org}</p>
              <p className="text-[#888] text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
