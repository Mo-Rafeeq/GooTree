import { useEffect, useRef } from 'react';

const useAnimate = () => {
  const containerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current.querySelectorAll('.fade-in,.slide-in');
    elements.forEach((element) => observer.observe(element));


    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return containerRef;
};

export default useAnimate;
