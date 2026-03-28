import { useEffect, useRef, useState } from 'react';

export function useFadeIn(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

export function FadeIn({ children, delay = 0, className = '' }) {
  const [ref, visible] = useFadeIn();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(18px)',
        transitionDelay: visible ? `${delay}ms` : '0ms',
      }}
    >
      <div key={visible ? 'visible' : 'hidden'} className="contents">
        {children}
      </div>
    </div>
  );
}
