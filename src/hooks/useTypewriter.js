import { useState, useEffect } from 'react';

export default function useTypewriter(text, speed = 40, delay = 600) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const iv = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) clearInterval(iv);
      }, speed);
      return () => clearInterval(iv);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return displayed;
}
