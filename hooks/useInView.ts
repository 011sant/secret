import { useEffect, useState } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';

export const useInView = (options = {}, once = true) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [ref, isVisible] = useIntersectionObserver(options);

  useEffect(() => {
    if (isVisible && once) {
      setHasAnimated(true);
    }
  }, [isVisible, once]);

  return [ref, once ? hasAnimated || isVisible : isVisible];
};
