import { useEffect, useRef } from 'react';
import anime from 'animejs';

export default function DotGrid() {
  const ref = useRef(null);
  const pos = useRef({ x: 0, y: 0, cx: 0, cy: 0 });

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { ref.current.style.opacity = '1'; return; }

    anime({ targets: ref.current, opacity: [0, 1], duration: 1000, easing: 'easeOutQuad' });

    const handleMouse = (e) => {
      pos.current.x = (e.clientX / window.innerWidth - 0.5) * 2 * 18;
      pos.current.y = (e.clientY / window.innerHeight - 0.5) * 2 * 18;
    };
    document.addEventListener('mousemove', handleMouse);

    let raf;
    const loop = () => {
      pos.current.cx += (pos.current.x - pos.current.cx) * 0.04;
      pos.current.cy += (pos.current.y - pos.current.cy) * 0.04;
      ref.current.style.transform = `translate(${pos.current.cx}px,${pos.current.cy}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener('mousemove', handleMouse);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div id="dotGrid" ref={ref} />;
}
