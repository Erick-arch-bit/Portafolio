import { useEffect, useRef } from 'react';
import anime from 'animejs';

export default function Contacto({ onOpenCV }) {
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

    const contact = sectionRef.current?.querySelector('[data-contact-anim]');
    if (contact) {
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) {
          anime({ targets: contact.querySelector('p'), translateY: [60, 0], opacity: [0, 1], duration: 1000, easing: 'easeOutExpo' });
          anime({ targets: contact.querySelector('a'), translateY: [40, 0], opacity: [0, 1], duration: 800, easing: 'easeOutExpo', delay: 200 });
          obs.unobserve(e.target);
        }},
        { threshold: 0.2 }
      );
      obs.observe(contact);
    }

    const footer = sectionRef.current?.querySelector('[data-footer-anim]');
    if (footer) {
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { anime({ targets: footer.children, translateY: [20, 0], opacity: [0, 1], duration: 600, easing: 'easeOutExpo', delay: anime.stagger(200) }); obs.unobserve(e.target); }},
        { threshold: 0.2 }
      );
      obs.observe(footer);
    }
  }, []);

  const handleGlitch = (e) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = e.currentTarget;
    const origText = el.textContent;
    const chars = '!@#$%^&*()_+{}|:<>?/ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let iter = 0;
    const iv = setInterval(() => {
      el.textContent = origText.split('').map((ch, i) => i < iter ? origText[i] : chars[Math.floor(Math.random() * chars.length)]).join('');
      if (iter >= origText.length) clearInterval(iv);
      iter += 0.5;
    }, 30);
  };

  return (
    <footer id="contacto" className="border-t border-[#1F1F22] mt-10" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-6 py-24 w-full">
        <div className="h-px bg-[#1F1F22] line-anim mb-12" data-line />
        <h2 className="text-sm mono text-[#555] uppercase tracking-widest mb-12" data-section-anim>
          <span className="inline-block" data-stagger="0">05.</span>{' '}
          <span className="inline-block" data-stagger="1">Contacto</span>
        </h2>
        <div data-contact-anim>
          <p className="text-4xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-12" style={{ opacity: 0 }}>
            Tengo una idea o un reto nuevo. ¿Empezamos?
          </p>
          <a
            href="mailto:tenorioalcantaraerickangel@gmail.com"
            className="link-line text-2xl md:text-4xl font-light text-[#888] hover:text-white transition-colors block mb-6"
            style={{ opacity: 0 }}
          >
            tenorioalcantaraerickangel@gmail.com
          </a>
        </div>
        <div className="mt-24 pt-8 border-t border-[#1F1F22] flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-[#555]" data-footer-anim>
          <div
            className="mono glitch-hover"
            onMouseEnter={handleGlitch}
          >
            Diseñado y construido por Erick Tenorio · 2026
          </div>
          <div className="flex gap-8 mono uppercase tracking-wider text-xs">
            <a href="https://github.com/Erick-arch-bit" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GitHub ↗
            </a>
            <a href="javascript:void(0)" onClick={onOpenCV} className="hover:text-white transition-colors">
              Ver CV ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
