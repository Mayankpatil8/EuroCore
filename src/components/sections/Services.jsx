import { FadeIn } from '../ui/FadeIn';
import robotImg from '../../assets/service-robots.jpg';

const SERVICES = [
  {
    title: 'International Sourcing',
    desc: 'Strategic identification and qualification of global suppliers to ensure high-quality production and cost-efficiency in complex international markets.',
  },
  {
    title: 'Execution Management',
    desc: 'Direct oversight of procurement logistics and supply chain workflows, transforming strategic planning into tangible results through hands-on local management.',
  },
  {
    title: 'Market Entry Solutions',
    desc: 'Navigating regulatory landscapes and infrastructure challenges to establish reliable supply routes and secure market presence in emerging economies.',
  },
  {
    title: 'Risk Mitigation',
    desc: 'Comprehensive quality control and supply chain auditing protocols to safeguard operations against international procurement volatility.',
  },
  {
    title: 'European Sourcing',
    desc: 'Leveraging established supplier relationships across European manufacturing hubs to deliver compliant, high-standard procurement outcomes.',
  },
  {
    title: 'Advisory & Commercial',
    desc: 'Structured commercial guidance on supplier negotiations, contract terms, and procurement strategy alignment with business objectives.',
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

        {/* Image Section */}
        <div className="mt-12 sm:mt-16 md:mt-24 lg:mt-32 w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[700px] overflow-hidden rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)]">

          <img
            src={robotImg}
            alt="Industrial robotic production"
            className="w-full h-full object-cover animate-reveal-rl origin-center transition-transform duration-[2000ms] ease-out hover:scale-[1.02]"
          />

        </div>

      </div>

    </div>
  );
}