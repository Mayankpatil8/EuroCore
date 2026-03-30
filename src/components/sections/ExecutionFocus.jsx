import { FadeIn } from '../ui/FadeIn';
import { useEffect, useRef } from 'react';

// Words to cycle through in the vertical ticker
const WORDS = [
  '• SOURCING ',
  '• MARKET ACCESS ',
  '• PROCUREMENT ',
  '• EXECUTION ',
  '• GLOBAL SUPPLY ',
  '• STRATEGIC ',
  '• MARKET ACCESS ',
  '• SOURCING ',
  '• EXECUTION ',
  '• PROCUREMENT ',
];

function VerticalTicker() {
  const wrapperRef = useRef(null);
  const posRef = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const speed = 1; // px per frame

    const animate = () => {
      posRef.current -= speed;
      // get height of first child (the primary list)
      const firstChild = wrapper.children[0];
      const listH = firstChild ? firstChild.offsetHeight : 0;

      if (listH > 0 && Math.abs(posRef.current) >= listH) {
        posRef.current = 0;
      }

      wrapper.style.transform = `translateY(${posRef.current}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const wordList = (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {WORDS.map((word, i) => (
        <span
          key={i}
          className="select-none text-white font-black uppercase"
          style={{
            writingMode: 'vertical-lr',
            textOrientation: 'mixed',
            fontSize: 'clamp(2.5rem, 3vw, 3.4rem)',
            letterSpacing: '-0.02em',
            lineHeight: 1,
            padding: '0.2em 0',
            transform: 'rotate(180deg)',
            display: 'block',
            whiteSpace: 'nowrap',
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );

  return (
    // outer clip container
    <div
      style={{
        position: 'absolute',
        top: 0,
        right: window.innerWidth < 768 ? 10 : 300,
        width: window.innerWidth < 768 ? '70px' : '130px',
        bottom: 0,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {/* moving wrapper — contains two copies for seamless loop */}
      <div
        ref={wrapperRef}
        style={{
          display: 'flex',
          flexDirection: 'column',
          willChange: 'transform',
        }}
      >
        {wordList}
        {/* duplicate for seamless loop */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {WORDS.map((word, i) => (
            <span
              key={i}
              className="select-none text-white font-black uppercase"
              style={{
                writingMode: 'vertical-lr',
                textOrientation: 'mixed',
                fontSize: 'clamp(2.5rem, 3vw, 3.4rem)',
                letterSpacing: '-0.02em',
                lineHeight: 1,
                padding: '0.2em 0',
                transform: 'rotate(180deg)',
                display: 'block',
                whiteSpace: 'nowrap',
              }}
            >
              {word}
            </span>
          ))}
        </div> */
      </div>
    </div>
  );
}

export default function ExecutionFocus() {
  return (
    <section
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: window.innerWidth < 768 ? 'column' : 'row',
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* ── LEFT: dark text panel ── */}
      <div
        style={{
          width: window.innerWidth < 768 ? '100%' : '28%',
          minWidth: window.innerWidth < 768 ? '100%' : '260px',
          background: '#0F1113',
          padding: window.innerWidth < 768 ? '3rem 1.5rem' : '5rem 3.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 20,
          flexShrink: 0,
        }}
      >
        <FadeIn>
          <h2
            style={{
              fontFamily: 'inherit',
              fontWeight: 900,
              color: '#F7F7F6',
              lineHeight: 1.02,
              letterSpacing: '-0.03em',
              marginBottom: '2rem',
              fontSize: 'clamp(2rem, 2.5vw, 3rem)',
            }}
          >
            Execution<br />Focus
          </h2>
          <p
            style={{
              fontSize: '0.95rem',
              lineHeight: 1.7,
              color: '#9CA3AF',
              maxWidth: '270px',
            }}
          >
            Eurocore Global delivers on-the-ground support to ensure seamless
            international procurement. We don't just advise; we execute supply
            chain solutions that drive real business outcomes.
          </p>
        </FadeIn>
      </div>

      {/* ── RIGHT: blue panel with vertical scrolling text ── */}
      <div
        style={{
          flex: 1,
          background: '#4067a4ff',
          position: 'relative',
          overflow: 'hidden',
          minHeight: window.innerWidth < 768 ? '250px' : '500px',
        }}
      >
        <VerticalTicker />
      </div>
    </section>
  );
}
