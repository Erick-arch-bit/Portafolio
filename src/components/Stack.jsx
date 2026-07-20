import { useEffect, useRef } from 'react';
import anime from 'animejs';

const tags = [
  'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js',
  'Node.js', 'Python', 'Go', 'React Native', 'PostgreSQL',
  'MongoDB', 'Docker', 'Git', 'Linux',
];

export default function Stack() {
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

    const tagContainer = sectionRef.current?.querySelector('[data-tags-anim]');
    if (tagContainer) {
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { anime({ targets: tagContainer.querySelectorAll('.tech-tag'), scale: [0, 1], opacity: [0, 1], duration: 600, easing: 'easeOutBack', delay: anime.stagger(50, { grid: [4, 4], from: 'center' }) }); obs.unobserve(e.target); }},
        { threshold: 0.2 }
      );
      obs.observe(tagContainer);
    }
  }, []);

  return (
    <section id="stack" className="border-t border-[#1F1F22]" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-6 py-16 w-full">
        <div className="h-px bg-[#1F1F22] line-anim mb-12" data-line />
        <h2 className="text-sm mono text-[#555] uppercase tracking-widest mb-10" data-section-anim>
          <span className="inline-block" data-stagger="0">02.</span>{' '}
          <span className="inline-block" data-stagger="1">Stack Tecnológico</span>
        </h2>
        <div data-tags-anim className="flex flex-wrap gap-2.5">
          {tags.map((t, i) => (
            <span key={i} className="tech-tag mono text-xs px-4 py-2 rounded-full">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
