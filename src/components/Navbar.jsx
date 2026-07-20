import { useState, useEffect } from 'react';

const LINKS = [
  { href: '#trayectoria', label: 'Trayectoria' },
  { href: '#stack', label: 'Stack' },
  { href: '#cursos', label: 'Cursos' },
  { href: '#laboratorio', label: 'Laboratorio' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar({ onOpenContact, onOpenCV }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id], footer[id]');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const closeMenu = () => { setMenuOpen(false); document.body.style.overflow = ''; };

  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#08080A]/80 border-b border-[#1F1F22]">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-sm font-semibold tracking-tight text-white">
            Erick Tenorio
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-[#888]">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`nav-link link-line hover:text-white ${active === l.href.slice(1) ? 'active' : ''}`}
                data-section={l.href.slice(1)}
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenContact}
              className="hidden md:inline-block mono text-xs border border-[#333] hover:bg-white hover:text-black px-4 py-2 rounded-full transition-all"
            >
              Hablemos
            </button>
            <button
              className="hamburger md:hidden flex flex-col gap-[5px] p-2 -mr-2"
              aria-label="Menú"
              onClick={() => { setMenuOpen(!menuOpen); document.body.style.overflow = menuOpen ? '' : 'hidden'; }}
            >
              <span className={menuOpen ? 'rotate-45 translate-y-[3.25px]' : ''} />
              <span className={menuOpen ? 'opacity-0' : ''} />
              <span className={menuOpen ? '-rotate-45 -translate-y-[3.25px]' : ''} />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`mobile-menu fixed inset-0 z-40 bg-[#08080A]/95 backdrop-blur-xl flex flex-col justify-center items-center gap-6 ${menuOpen ? 'open' : ''}`}
        id="mobileMenu"
      >
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-3xl font-light tracking-tight text-[#888] hover:text-white transition-colors"
            onClick={closeMenu}
          >
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}
