import { useState, useCallback, useEffect } from 'react';
import projects from './data/projects';
import Loader from './components/Loader';
import DotGrid from './components/DotGrid';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Trayectoria from './components/Trayectoria';
import Stack from './components/Stack';
import Cursos from './components/Cursos';
import Laboratorio from './components/Laboratorio';
import Contacto from './components/Contacto';
import DetailPage from './components/DetailPage';
import CVPage from './components/CVPage';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [detailProject, setDetailProject] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [showCV, setShowCV] = useState(false);

  const openProject = useCallback((id) => {
    const p = projects.find((proj) => proj.id === id);
    if (!p) return;
    setDetailProject(p);
    setShowDetail(true);
    setShowCV(false);
    window.location.hash = 'proyecto/' + id;
  }, []);

  const closeSlide = useCallback(() => {
    setShowDetail(false);
    setShowCV(false);
    setDetailProject(null);
    window.history.pushState(null, '', window.location.pathname);
  }, []);

  const openCV = useCallback(() => {
    setShowDetail(false);
    setDetailProject(null);
    setShowCV(true);
    window.location.hash = 'cv';
  }, []);

  // Handle hash on load
  useEffect(() => {
    if (location.hash.startsWith('#proyecto/')) {
      const id = location.hash.replace('#proyecto/', '');
      setTimeout(() => openProject(id), 2500);
    } else if (location.hash === '#cv') {
      setTimeout(() => openCV(), 2500);
    }
  }, []);

  // Handle escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') closeSlide(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [closeSlide]);

  // Handle hash change
  useEffect(() => {
    const handler = () => {
      if (!location.hash.startsWith('#proyecto/') && location.hash !== '#cv') {
        if (showDetail || showCV) closeSlide();
      }
    };
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, [showDetail, showCV, closeSlide]);

  const scrollToContact = useCallback(() => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}

      {!loading && (
        <>
          <DotGrid />

          <div className={`back-btn ${showDetail || showCV ? 'show' : ''}`} id="backBtn" aria-label="Volver" onClick={closeSlide}>
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </div>

          <DetailPage project={detailProject} visible={showDetail} onClose={closeSlide} />
          <CVPage visible={showCV} onClose={closeSlide} />

          <div className="relative z-10 min-h-screen flex flex-col" id="mainContent">
            <Navbar onOpenContact={scrollToContact} onOpenCV={openCV} />
            <Hero />
            <Stats />
            <Trayectoria />
            <Stack />
            <Cursos />
            <Laboratorio onOpenProject={openProject} />
            <Contacto onOpenCV={openCV} />
          </div>
        </>
      )}
    </>
  );
}
