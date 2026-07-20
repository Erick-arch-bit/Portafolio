import { useEffect, useRef } from 'react';
import anime from 'animejs';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Laboratorio({ onOpenProject }) {
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

    const animatedEls = sectionRef.current?.querySelectorAll('[data-section-anim]');
    if (animatedEls) {
      animatedEls.forEach((el) => {
        const obs = new IntersectionObserver(
          ([e]) => { if (e.isIntersecting) { anime({ targets: el.querySelectorAll('[data-stagger]'), translateX: [-40, 0], opacity: [0, 1], duration: 800, easing: 'easeOutExpo', delay: anime.stagger(150) }); obs.unobserve(e.target); }},
          { threshold: 0.5 }
        );
        obs.observe(el);
      });
    }

    const cards = sectionRef.current?.querySelector('[data-cards-anim]');
    if (cards) {
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { anime({ targets: cards.querySelectorAll('.proj-card'), scale: [0.9, 1], translateY: [40, 0], opacity: [0, 1], duration: 800, easing: 'easeOutExpo', delay: anime.stagger(120) }); obs.unobserve(e.target); }},
        { threshold: 0.1 }
      );
      obs.observe(cards);
    }
  }, []);

  return (
    <section id="laboratorio" className="border-t border-[#1F1F22]" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-6 py-16 w-full">
        <div className="h-px bg-[#1F1F22] line-anim mb-12" data-line />
        <h2 className="text-sm mono text-[#555] uppercase tracking-widest mb-4" data-section-anim>
          <span className="inline-block" data-stagger="0">04.</span>{' '}
          <span className="inline-block" data-stagger="1">El Laboratorio</span>
        </h2>
        <p className="text-[#666] mb-12 text-sm" data-section-anim>
          <span className="inline-block" data-stagger="2">Proyectos nacidos de curiosidad. Click en cualquiera para ver detalles.</span>
        </p>
        <div className="grid md:grid-cols-2 gap-6" data-cards-anim>
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={onOpenProject} />
          ))}
        </div>
      </div>
    </section>
  );
}
