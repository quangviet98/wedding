import { useState, useEffect, useRef } from 'react';

/**
 * Hook that detects when an element enters the viewport and triggers a callback
 * @param options IntersectionObserver options
 * @returns Object with ref to attach to the element and visibility state
 */
const useSectionVisibility = (options = { threshold: 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Once visible, no need to keep observing
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      }
    }, options);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [options]);

  return { sectionRef, isVisible };
};

export default useSectionVisibility;