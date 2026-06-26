import { FadeIn } from '../ui/FadeIn';
import { Link } from 'react-router-dom';
import robotImg from '../../assets/service-robots.jpg';

const SERVICES = [
  {
    title: 'Business Development & Market Access',
    desc: 'Supporting international growth through partner identification, market entry strategies, commercial introductions, and business development activities across Europe and selected global markets.',
  },
  {
    title: 'Strategic Sourcing & Supplier Discovery',
    desc: 'Identification, qualification, and engagement of suppliers, manufacturers, and technology partners to secure resilient, cost-effective, and high-quality supply chains.',
  },
  {
    title: 'Capability Discovery',
    desc: 'Helping organizations identify companies with the right manufacturing, technical, industrial, or commercial capabilities to support strategic projects, sourcing initiatives, and market expansion.',
  },
  {
    title: 'Supply Chain Execution & Local Representation',
    desc: 'Hands-on management of sourcing projects, supplier coordination, negotiations, logistics, and local stakeholder engagement to ensure successful execution.',
  },
  {
    title: 'Commercial Advisory & Partnership Development',
    desc: 'Providing support in negotiations, partnership development, procurement structures, commercial strategy, and international business growth initiatives.',
  }
];

export default function Services() {
  return (
    <div className="bg-[#F7F7F6] min-h-screen pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24">

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10">

        {/* Header */}
        <FadeIn>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-black text-primary mb-10 sm:mb-14 md:mb-20 lg:mb-24 tracking-tight leading-none">
            Comprehensive Services
          </h1>
        </FadeIn>

        {/* Services List */}
        <div className="border-b border-[#0F1113]/10">

          {SERVICES.map((svc, i) => (
            <FadeIn key={i} delay={i * 80}>

              <div className="group border-t border-[#0F1113]/10 py-8 sm:py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-12 items-start transition-all duration-500 hover:bg-black/[0.02]">

                {/* Title */}
                <div className="md:col-span-5 lg:col-span-4">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-primary leading-tight transition-colors duration-500 group-hover:text-black/80">
                    {svc.title}
                  </h2>
                </div>

                {/* Description */}
                <div className="md:col-span-7 lg:col-span-8">
                  <p className="text-base text-[#6B7280] leading-relaxed max-w-full sm:max-w-[600px] transition-colors duration-500 group-hover:text-[#0F1113]/80">
                    {svc.desc}
                  </p>
                </div>

              </div>

            </FadeIn>
          ))}

        </div>

        {/* CTA Button */}
        <FadeIn delay={400}>
          <div className="mt-12 sm:mt-16 md:mt-20 flex justify-center">
            <Link 
              to="/contact" 
              className="inline-block bg-[#426db3ff] text-[#F7F7F6] px-10 py-4 text-[15px] font-bold tracking-wide hover:bg-[#5085dcff] transition-colors rounded-[2px]"
            >
              Initiate Partnership
            </Link>
          </div>
        </FadeIn>

        {/* Image Section
        <div className="mt-12 sm:mt-16 md:mt-24 lg:mt-32 w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[700px] overflow-hidden rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)]">

          <img
            src={robotImg}
            alt="Industrial robotic production"
            className="w-full h-full object-cover animate-reveal-rl origin-center transition-transform duration-[2000ms] ease-out hover:scale-[1.02]"
          />

        </div> */}

      </div>

    </div>
  );
}