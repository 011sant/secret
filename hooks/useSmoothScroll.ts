import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    const handleAnchorClick = (e: Event) => {
      const target = (e.target as HTMLAnchorElement);
      if (target.hash !== '') {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);
};
