import { useState, useEffect, useRef, RefObject } from 'react';

interface IntersectionObserverOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export function useIntersectionObserver(
  { triggerOnce, ...options }: IntersectionObserverOptions = {},
): [RefObject<any>, boolean] {
  const elementRef = useRef<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (triggerOnce && elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      } else if (!triggerOnce) {
        setIsVisible(false);
      }
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options, triggerOnce]);

  return [elementRef, isVisible];
}
