import { useEffect, useRef } from 'react';
import anime from 'animejs';

export default function Loader({ onDone }) {
  const fillRef = useRef(null);
  const loaderRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      onDone();
      return;
    }
    anime({
      targets: fillRef.current,
      width: '100%',
      duration: 1200,
      easing: 'easeInOutQuad',
    });
    anime({
      targets: loaderRef.current,
      opacity: [1, 0],
      delay: 800,
      duration: 600,
      easing: 'easeInOutQuad',
      complete: onDone,
    });
  }, [onDone]);

  return (
    <div id="loader" ref={loaderRef} className="fixed inset-0 z-[9999] bg-[#08080A] flex items-center justify-center">
      <div className="w-[60px] h-[2px] bg-[#333] rounded-sm relative">
        <div ref={fillRef} className="absolute left-0 top-0 h-full w-0 bg-white rounded-sm" />
      </div>
    </div>
  );
}
