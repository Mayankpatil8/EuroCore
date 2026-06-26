import { FadeIn } from '../ui/FadeIn';
import aboutImg from '../../assets/about-steel.jpg';

export default function About() {
  return (
    <div className="bg-[#F7F7F6] min-h-screen">
      {/* First Section: The Foundation of Reliable Execution */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Left text */}
            <div className="border-l border-[#0F1113]/20 pl-4 sm:pl-6">
              <FadeIn>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-primary leading-[1.1] mb-8">
                  The Foundation of<br />Reliable Execution
                </h2>
                <div className="text-[#6B7280] text-base md:text-[17px] leading-relaxed max-w-full sm:max-w-[600px] space-y-5">
                  <p>
                    Eurocore Global was established to support organizations operating in complex international environments where decisions often depend on access to the right information, capabilities, partners, and local market insight.
                  </p>
                  <p>
                    We believe that successful outcomes are built on a combination of preparation, validation, and execution. Whether entering a new market, evaluating potential partners, or exploring new supply and manufacturing options, organizations need more than assumptions. They need confidence in the decisions they make.
                  </p>
                  <p>
                    Our role is to help clients navigate uncertainty, evaluate opportunities, and move forward with clarity.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Right: Real image of steel beams */}
            <FadeIn delay={150}>
              <div className="relative w-full h-[250px] sm:h-[320px] md:h-[380px] lg:h-[420px] overflow-hidden rounded-md">
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
              <p className="text-xs font-bold tracking-widest text-[#4067a4ff] uppercase mb-4">OUR VALUES</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">
                Core Values & Strategy
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-16">
            <FadeIn delay={0}>
              <div className="flex flex-col items-center text-center px-4">
                <span className="mb-6 opacity-80 text-primary">
                  <IconBuilding />
                </span>
                <h3 className="text-xl md:text-[22px] font-bold text-primary mb-4">Strategic Curiosity
</h3>
                <p className="text-base text-[#6B7280] leading-relaxed max-w-[320px]">
We believe better decisions begin with better understanding. We continuously explore markets, industries, technologies, and capabilities to identify opportunities others may overlook.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="flex flex-col items-center text-center px-4">
                <span className="mb-6 opacity-80 text-primary">
                  <IconPersonDesk />
                </span>
                <h3 className="text-xl md:text-[22px] font-bold text-primary mb-4">Relationship Focused</h3>
                <p className="text-base text-[#6B7280] leading-relaxed max-w-[320px]">
Sustainable growth is built on trust. We invest in long-term relationships with partners, suppliers, customers, and stakeholders across international markets.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="flex flex-col items-center text-center px-4">
                <span className="mb-6 opacity-80 text-primary">
                  <IconGlobe />
                </span>
                <h3 className="text-xl md:text-[22px] font-bold text-primary mb-4">Execution Oriented</h3>
                <p className="text-base text-[#6B7280] leading-relaxed max-w-[320px]">
Ideas only create value when they are implemented. We focus on outcomes rather than activity, supporting clients from initial opportunity identification through to implementation.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Third Section: What Clients Value */}
      <section className="py-24 bg-[#0F1113] text-white">
        <div className="max-w-container mx-auto px-6 md:px-10">
          <div className="text-center mb-20">
            <FadeIn>
              <p className="text-xs font-bold tracking-widest text-[#4067a4ff] uppercase mb-4">RELATIONSHIP FIRST</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
                What our clients value
              </h2>
              <div className="w-16 h-1 bg-[#4067a4ff] mx-auto" />
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {[
              {
                title: "Access to Opportunities",
                desc: "Connecting organizations with partners, capabilities, customers, suppliers, and markets that support strategic growth.",
                icon: <IconSuppliers />
              },
              {
                title: "Capability Visibility",
                desc: "Helping clients identify who can build, supply, manufacture, or support the solutions they require.",
                icon: <IconSpeed />
              },
              {
                title: "Market Intelligence",
                desc: "Providing practical insight into industries, ecosystems, and stakeholder networks across international markets.",
                icon: <IconMarkets />
              },
              {
                title: "From Strategy to Execution",
                desc: "Supporting implementation through partner engagement, business development, and practical execution support.",
                icon: <IconOwnership />
              }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 100}>

                {/* CARD */}
                <div className="group h-full flex flex-col justify-between bg-white/5 border border-white/10 rounded-xl p-6 md:p-7 transition-all duration-300 hover:bg-white/10 hover:border-[#4067a4ff]/40 hover:shadow-lg">

                  {/* Top Content */}
                  <div>
                    <div className="mb-5 text-[#4067a4ff] transform transition-transform duration-300 group-hover:scale-110">
                      {item.icon}
                    </div>

                    <h3 className="text-lg md:text-xl font-semibold mb-3 text-white">
                      {item.title}
                    </h3>

                    <p className="text-[#9CA3AF] text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                </div>

              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Fourth Section: Trust & Confidentiality */}
      
      <br></br>
      
      <br></br>
    </div>
  );
}

// Icons
function IconBuilding() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="10" width="16" height="12" rx="0" ry="0" />
      <rect x="8" y="2" width="8" height="8" rx="0" ry="0" />
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
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function IconMarkets() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconSuppliers() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconOwnership() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 11.08 22 12 12 22 7 17" />
      <path d="M12 22v-5" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

function IconSpeed() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function IconSecurity({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
