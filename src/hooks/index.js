import { useEffect, useRef, useState } from 'react';

function useFullHeight(ref) {
  useEffect(() => {
    if (!ref.current) return;

    const setHeight = () => {
      ref.current.style.height = `${window.innerHeight}px`;
    };

    setHeight(); // Set height initially

    window.addEventListener('resize', setHeight);

    return () => {
      window.removeEventListener('resize', setHeight);
    };
  }, [ref]);
}

const useObserveSection = (threshold = 0.1) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold }
    );

    const current = ref.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [threshold]);

  return [ref, isInView];
}

export {
  useFullHeight,
  useObserveSection
}