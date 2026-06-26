import { FadeIn } from '../components/ui/FadeIn';
import { Link } from 'react-router-dom';

import defenseImg from '../assets/defense_security.png';
import aerospaceImg from '../assets/aerospace.png';
import roboticsImg from '../assets/robotics.png';
import infrastructureImg from '../assets/critical_infrastructure.png';

const HOW_WE_SUPPORT = [
  {
    number: '01',
    title: 'Capability Discovery',
    desc: 'Identifying the capabilities required to support strategic objectives and growth initiatives.'
  },
  {
    number: '02',
    title: 'Business Development',
    desc: 'Driving commercial growth through partnerships, customer development, and strategic introductions.'
  },
  {
    number: '03',
    title: 'Market Access',
    desc: 'Helping organizations enter new markets and build sustainable partner ecosystems.'
  },
  {
    number: '04',
    title: 'Supplier & Manufacturing Partner Identification',
    desc: 'Finding and evaluating suppliers, manufacturers, and technology partners for complex projects.'
  }
];

const INDUSTRIES = [
  {
    title: 'Defence & Security',
    img: defenseImg,
  },
  {
    title: 'Aerospace &\nAutonomous Systems',
    img: aerospaceImg,
  },
  {
    title: 'Robotics & Advanced\nManufacturing',
    img: roboticsImg,
  },
  {
    title: 'Critical Infrastructure &\nIndustrial Technology',
    img: infrastructureImg,
  }
];

export default function CriticalIndustriesPage() {
  return (
    <div className="bg-black min-h-screen text-white pt-24 pb-16 font-sans overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-20 px-6 md:px-10 max-w-[1200px] mx-auto">
        <div className="relative z-10 flex flex-col items-start max-w-[600px]">
          <FadeIn>
            <p className="text-[#3b6ac0] text-xs font-bold tracking-widest uppercase mb-6">
              CRITICAL INDUSTRIES
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.05] mb-8 tracking-tight">
              Navigating Complex Industries with Confidence
            </h1>
            <p className="text-gray-400 text-base md:text-sm mb-10 leading-relaxed max-w-[380px]">
              We help organizations operating in strategically important industries identify capabilities, build partnerships, and accelerate execution.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-[#2956A6] hover:bg-[#3B6AC0] text-white px-8 py-3.5 text-sm font-semibold rounded-[3px] transition-colors"
            >
              Contact Us <span className="ml-2">→</span>
            </Link>
          </FadeIn>
        </div>

        {/* Faded background text */}
        <div className="absolute right-[-2%] top-[5%] select-none pointer-events-none z-0 hidden md:block">
          <h2 className="text-[100px] md:text-[200px] lg:text-[280px] font-black leading-[0.8] text-[#2c2c2c] tracking-tighter text-right">
            CRIT<br/>ICAL
          </h2>
        </div>
      </section>

      {/* How We Support */}
      <section className="py-16 px-6 md:px-10 max-w-[1200px] mx-auto relative z-10">
        <FadeIn>
          <p className="text-gray-300 text-[10px] font-bold tracking-widest uppercase mb-8">
            HOW WE SUPPORT CRITICAL INDUSTRIES
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HOW_WE_SUPPORT.map((item, idx) => (
              <div key={idx} className="bg-[#050505] p-8 flex flex-col rounded-[2px] transition-all hover:bg-[#0c0c0c]">
                <span className="text-[#3b6ac0] text-[28px] font-semibold mb-6">{item.number}</span>
                <h3 className="text-lg font-bold text-white mb-4 leading-snug max-w-[200px]">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-[1.6] font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Industries Grid */}
      <section className="py-10 px-6 md:px-10 max-w-[1200px] mx-auto relative z-10">
        <FadeIn>
          <p className="text-gray-300 text-[10px] font-bold tracking-widest uppercase mb-8">
            INDUSTRIES WE SUPPORT
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {INDUSTRIES.map((ind, idx) => (
              <div 
                key={idx} 
                className="relative h-[220px] overflow-hidden group cursor-default rounded-[2px]"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0 bg-black">
                  <img 
                    src={ind.img} 
                    alt={ind.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03] opacity-60 group-hover:opacity-100"
                  />
                </div>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" />
                
                {/* Text content */}
                <div className="relative z-20 h-full flex flex-col justify-end p-8">
                  {ind.title.includes('Critical Infrastructure') ? (
                    <h3 className="text-xl font-bold text-white max-w-[280px] leading-snug whitespace-pre-line">
                      Critical Inf<span className="text-[#426db3]">rastructure</span> &<br />Industrial Technology
                    </h3>
                  ) : (
                    <h3 className="text-xl font-bold text-white max-w-[280px] leading-snug whitespace-pre-line">
                      {ind.title}
                    </h3>
                  )}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 px-6 md:px-10 max-w-[1200px] mx-auto relative z-10 mb-10">
        <FadeIn>
          <div className="bg-[#0c0c0c] border border-white/10 p-10 flex flex-col md:flex-row items-center justify-between gap-8 rounded-[2px]">
            <div className="border-l-[3px] border-[#426db3] pl-6">
              <h2 className="text-2xl md:text-[28px] font-bold text-white leading-[1.2]">
                Complex Challenges.<br />
                Strategic Solutions.
              </h2>
            </div>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-[#2956A6] hover:bg-[#3B6AC0] text-white px-8 py-3 text-sm font-semibold rounded-[3px] transition-colors whitespace-nowrap"
            >
              Contact Us <span className="ml-2">→</span>
            </Link>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}
