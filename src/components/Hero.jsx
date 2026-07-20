import { useEffect, useRef } from 'react';
import anime from 'animejs';
import useTypewriter from '../hooks/useTypewriter';
import LetterGlitch from './LetterGlitch';

export default function Hero() {
  const subRef = useRef(null);
  const descRef = useRef(null);
  const displayed = useTypewriter('Del código formal al hobby creativo. Construyo de todo.', 40, 600);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const tl = anime.timeline({ easing: 'easeOutExpo' });
    tl.add({ targets: subRef.current, translateY: [-20, 0], opacity: [0, 1], duration: 800 })
      .add({ targets: descRef.current, translateY: [30, 0], opacity: [0, 1], duration: 1000 }, '-=200');
  }, []);

  return (
    <div className="relative min-h-[80vh] md:min-h-screen">
      <div className="absolute inset-0 z-0">
        <LetterGlitch
          glitchColors={['#1a1a1a', '#2a2a2a', '#111111']}
          glitchSpeed={60}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
        />
      </div>
      <header className="relative z-10 flex flex-col justify-center max-w-5xl mx-auto w-full px-6 pt-24 pb-16 md:pt-40 md:pb-24" style={{ minHeight: 'inherit' }}>
        <div ref={subRef} className="mono text-xs text-[#555] mb-6" style={{ opacity: 0 }}>
          Disponible para crear, aprender y construir — Remote
        </div>
        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-8 h-[120px] md:h-[200px]">
          <span>{displayed}</span>
          <span className="typewriter-cursor">|</span>
        </h1>
        <div ref={descRef} className="max-w-xl mt-2" style={{ opacity: 0 }}>
          <p className="text-lg text-[#888] leading-relaxed">
            Desarrollador con experiencia construyendo SaaS y aplicaciones móviles para el sector público. Me apasiona
            aprender tecnologías nuevas y transformar ideas en APIs, librerías o lo que sea necesario.
          </p>
        </div>
      </header>
    </div>
  );
}
