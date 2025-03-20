import { useEffect, useRef } from 'react';

export const useParallax = (speed = 0.1) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;
      const scrolled = window.pageYOffset;
      elementRef.current.style.transform = `translateY(${scrolled * speed}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return elementRef;
};
