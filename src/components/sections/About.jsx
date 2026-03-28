import { FadeIn } from '../ui/FadeIn';
import aboutImg from '../../assets/about-steel.jpg';

export default function About() {
  return (
    <div className="bg-[#F7F7F6] min-h-screen">
      {/* First Section: The Foundation of Reliable Execution */}
      <section className="py-24 md:py-32">
        <div className="max-w-container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left text */}
            <div className="border-l border-[#0F1113]/20 pl-6">
              <FadeIn>
                <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-primary leading-[1.1] mb-8">
                  The Foundation of<br />Reliable Execution
                </h2>
                <p className="text-[#6B7280] text-base md:text-[17px] leading-relaxed max-w-[460px]">
                  Eurocore Global was established to bridge the gap between procurement strategy and real-world execution. In an increasingly fragmented global market, we serve as the critical link for clients navigating complex supply chains and seeking access to mature and emerging markets with confidence and precision.
                </p>
              </FadeIn>
            </div>

            {/* Right: Real image of steel beams */}
            <FadeIn delay={150}>
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={aboutImg}
                  alt="Steel foundation structure"
                  className="w-full h-full object-cover animate-image-reveal origin-center"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Second Section: Our Values */}
      <section className="pb-24 pt-10">
        <div className="max-w-container mx-auto px-6 md:px-10">
          <FadeIn>
            <div className="text-center mb-20">
              <p className="text-xs font-bold tracking-widest text-[#2563EB] uppercase mb-4">OUR VALUES</p>
              <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-primary tracking-tight">
                The Foundation of Execution
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
            <FadeIn delay={0}>
              <div className="flex flex-col items-center text-center px-4">
                <span className="mb-6 opacity-80 text-primary">
                  <IconBuilding />
                </span>
                <h3 className="text-xl md:text-[22px] font-bold text-primary mb-4">Unwavering Trust</h3>
                <p className="text-base text-[#6B7280] leading-relaxed max-w-[320px]">
                  We build long-term international partnerships through transparent operations and consistent reliability in procurement.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="flex flex-col items-center text-center px-4">
                <span className="mb-6 opacity-80 text-primary">
                  <IconPersonDesk />
                </span>
                <h3 className="text-xl md:text-[22px] font-bold text-primary mb-4">Quiet Confidence</h3>
                <p className="text-base text-[#6B7280] leading-relaxed max-w-[320px]">
                  Our expertise allows us to navigate complex global markets with a calm, execution-focused approach that ensures results.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="flex flex-col items-center text-center px-4">
                <span className="mb-6 opacity-80 text-primary">
                  <IconGlobe />
                </span>
                <h3 className="text-xl md:text-[22px] font-bold text-primary mb-4">Execution Mastery</h3>
                <p className="text-base text-[#6B7280] leading-relaxed max-w-[320px]">
                  We prioritize the art of delivery, maintaining understated professionalism while securing the vital supply chains our clients legacy depends on.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}

// Icons
function IconBuilding() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="10" width="16" height="12" rx="0" ry="0"/>
      <rect x="8" y="2" width="8" height="8" rx="0" ry="0"/>
      <path d="M10 6h4" />
      <path d="M12 10v12" />
      <path d="M6 14h2" />
      <path d="M16 14h2" />
      <path d="M6 18h2" />
      <path d="M16 18h2" />
    </svg>
  );
}

function IconPersonDesk() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 19a6 6 0 0 0-8-5.66" />
      <circle cx="10" cy="7" r="4" />
      <rect x="14" y="14" width="8" height="6" rx="1" />
      <path d="M16 14v-2a2 2 0 0 0-2-2h-1" />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );
}
