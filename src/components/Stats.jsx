import { useEffect, useRef } from 'react';
import anime from 'animejs';

const stats = [
  { target: 3, label: 'Años experiencia' },
  { target: 15, label: 'Proyectos entregados' },
  { target: 12, label: 'Tecnologías' },
];

export default function Stats() {
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !done.current) {
            done.current = true;
            el.querySelectorAll('.stat-num').forEach((numEl) => {
              const o = { val: 0 };
              anime({
                targets: o,
                val: parseInt(numEl.dataset.target),
                round: 1,
                duration: 2000,
                easing: 'easeOutElastic(1,0.5)',
                update: () => { numEl.textContent = o.val + '+'; },
              });
            });
            anime({
              targets: el.querySelectorAll('.stat-col'),
              translateY: [20, 0],
              opacity: [0, 1],
              delay: anime.stagger(100),
              duration: 800,
              easing: 'easeOutExpo',
            });
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="border-t border-[#1F1F22]">
      <div ref={ref} className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-3 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="stat-col text-center md:text-left" style={{ opacity: 0 }}>
            <div className="text-3xl md:text-5xl font-bold tracking-tight">
              <span className="stat-num" data-target={s.target}>0</span>+
            </div>
            <div className="mono text-[10px] md:text-xs text-[#555] mt-1 uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
