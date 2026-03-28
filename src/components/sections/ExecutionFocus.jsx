import { FadeIn } from '../ui/FadeIn';

const WORDS = ['EXECUTION FOCUS', 'MARKET ACCESS', 'STRATEGIC SOURCING', 'GLOBAL SUPPLY'];

export default function ExecutionFocus() {
  return (
    <section className="w-full flex flex-col lg:flex-row min-h-[500px] lg:min-h-[70vh] overflow-hidden">

      {/* Left Dark Section */}
      <div className="w-full lg:w-[30%] bg-[#0F1113] p-10 md:p-14 lg:p-20 flex flex-col justify-center relative z-20 shrink-0">
        <FadeIn>
          <h2 className="text-5xl md:text-[56px] lg:text-[64px] font-black text-[#F7F7F6] tracking-tight leading-[1.05] mb-8">
            Execution<br />Focus
          </h2>
          <p className="text-[16px] leading-relaxed text-[#6B7280] max-w-[320px]">
            Eurocore Global delivers on-the-ground support to ensure seamless international procurement. We don't just advise; we execute supply chain solutions that drive real business outcomes.
          </p>
        </FadeIn>
      </div>

      {/* Right Blue Section */}
      <div className="w-full lg:w-[70%] bg-[#2563EB] min-h-[400px] relative overflow-hidden flex-grow flex items-center">
        {/* Horizontal Scrolling Text */}
        <div className="absolute inset-y-0 left-0 right-0 pointer-events-none flex items-center overflow-hidden w-full">
          <div className="ticker-track">
            {[...WORDS, ...WORDS, ...WORDS, ...WORDS, ...WORDS, ...WORDS].map((w, i) => (
              <span key={i} className="text-[26px] lg:text-[40px] font-black tracking-tighter text-[#F7F7F6]/30 uppercase mx-8 inline-block leading-none select-none">
                {w}
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
