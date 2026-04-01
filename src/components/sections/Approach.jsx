import { FadeIn } from '../ui/FadeIn';
import steelBanner from '../../assets/dark_steel.png';

const STEPS = [
  {
    num: '01',
    label: 'MARKET ASSESSMENT',
    desc: 'Deep analysis of global supply chains and regulatory landscapes to identify optimal procurement routes.',
  },
  {
    num: '02',
    label: 'SOURCING EXECUTION',
    desc: 'Direct engagement with verified international partners to secure quality supply at scale.',
  },
  {
    num: '03',
    label: 'LOGISTICS INTEGRATION',
    desc: 'Synchronized movement of goods through optimized freight and warehousing frameworks.',
  },
  {
    num: '04',
    label: 'MARKET ENTRY',
    desc: 'Final delivery and successful implementation within the target market environment.',
  },
];

const WORDS = ['PROCESS', 'SUPPLY CHAIN SECURITY', 'STRATEGIC SOURCING', 'GLOBAL PROCUREMENT', 'MARKET ACCESS'];

export default function Approach() {
  return (
    <div className="bg-[#F7F7F6] min-h-screen pt-24 sm:pt-28 md:pt-32">
      <div className="max-w-container mx-auto px-6 md:px-10 pb-24">

        {/* Header */}
        <FadeIn>
          <p className="text-xs font-bold tracking-widest text-[#3363b0ff] uppercase mb-4">
            OPERATIONAL FRAMEWORK
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0F1113] mb-10 sm:mb-14 md:mb-20 tracking-tight leading-none">
            Our Methodology
          </h1>
        </FadeIn>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mt-10">
          {STEPS.map((step, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="flex flex-col group cursor-default p-5 sm:p-6 md:p-8 rounded-xl hover:bg-white hover:shadow-[0_20px_40px_rgba(15,17,19,0.06)] transition-all duration-700 hover:-translate-y-1 border border-transparent hover:border-[#0F1113]/5 relative overflow-hidden">

                {/* Glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#3a63b0ff] opacity-0 group-hover:opacity-[0.03] blur-[40px] transition-opacity duration-700 pointer-events-none rounded-full transform translate-x-1/2 -translate-y-1/2" />

                <div className="text-[50px] sm:text-[70px] md:text-[80px] leading-none font-bold text-[#0F1113]/10 mb-4 tracking-tighter group-hover:text-[#3a63b0ff]/20 transition-colors duration-700">
                  {step.num}
                </div>

                {/* Animated Horizontal line */}
                <div className="w-full h-[2px] mb-6 bg-[#0F1113]/10 relative overflow-hidden rounded-full">
                  <div
                    className="absolute inset-y-0 left-0 bg-[#3a63b0ff] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] w-0 group-hover:w-full"
                  />
                </div>

                <h3 className="text-sm font-bold uppercase tracking-wide text-[#3a63b0ff] mb-3">
                  {step.label}
                </h3>

                <p className="text-[15px] leading-relaxed text-[#6B7280] group-hover:text-[#0F1113]/80 transition-colors duration-300">
                  {step.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Hero Banner Section */}
      <section className="relative overflow-hidden w-full flex flex-col items-center justify-center pt-24 sm:pt-32 md:pt-48 pb-16 sm:pb-24 md:pb-32 cursor-default">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[#0B0D10]/40">
          <img
            src={steelBanner}
            alt="Steel framework"
            className="w-full h-full object-cover grayscale opacity-80 animate-image-reveal origin-center mix-blend-luminosity transform scale-105 transition-transform duration-[2000ms] ease-out"
          />
          <div className="absolute inset-0 bg-[#0F1113]/55 mix-blend-multiply transition-colors duration-1000 " />

          {/* Pulsing Core Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-[#3a63b0ff]/10 rounded-full blur-[120px] opacity-40 pointer-events-none transition-all duration-[2000ms]" />        </div>

        {/* Text Content */}
        <div className="relative z-10 w-full px-6 max-w-container mx-auto flex flex-col items-center text-center">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-[68px] font-black text-[#F7F7F6] tracking-tighter leading-[1.1] mb-8 drop-shadow-2xl">
              Precision in Every Strategic Step
            </h2>
            <p className="text-sm sm:text-base md:text-[18px] text-[#F7F7F6] font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-xl opacity-90">
              Navigating the complexities of global procurement requires an execution-focused partner. We move with calm confidence to secure your supply chain and access new markets with unmatched reliability.
            </p>

            {/* Animated Underline */}
            <div className="mt-12 mb-10 sm:mb-14 md:mb-20" />
          </FadeIn>

          {/* Glowing Ticker */}
          <FadeIn delay={200} className="max-w-3xl mx-auto overflow-hidden relative border border-[#3a63b0ff]/10 py-3 px-6 bg-[#0F1113]/40 backdrop-blur-sm rounded-full" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
            <div className="ticker-track">
              {[...WORDS, ...WORDS, ...WORDS, ...WORDS, ...WORDS].map((w, i) => (
                <span key={i} className="text-xs sm:text-sm md:text-[15px] font-black tracking-[0.25em] text-[#3a63b0ff] uppercase mx-5 whitespace-nowrap drop-shadow-[0_0_12px_rgba(37,99,235,0.4)]">
                  {w} <span className="mx-2 opacity-40">•</span>
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
