import { useEffect, useRef } from 'react';

export default function useIntersection(callback, threshold = 0.5) {
  const ref = useRef(null);
  const called = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !called.current) {
            called.current = true;
            callback(el);
            obs.unobserve(el);
          }
        });
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [callback, threshold]);

  return ref;
}
