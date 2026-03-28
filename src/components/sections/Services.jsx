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
    <div className="bg-[#F7F7F6] min-h-screen pt-32 pb-24">
      <div className="max-w-container mx-auto px-6 md:px-10">

        {/* Header */}
        <FadeIn>
          <h1 className="text-5xl md:text-6xl lg:text-[64px] font-black text-primary mb-16 md:mb-24 tracking-tight leading-none">
            Comprehensive Services
          </h1>
        </FadeIn>

        {/* Services List */}
        <div className="border-b border-[#0F1113]/10">
          {SERVICES.map((svc, i) => (
            <FadeIn key={i} delay={i * 50}>
              <div className="border-t border-[#0F1113]/10 py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start">
                <div className="md:col-span-5 lg:col-span-4">
                  <h2 className="text-[22px] md:text-2xl font-bold text-primary leading-tight">
                    {svc.title}
                  </h2>
                </div>
                <div className="md:col-span-7 lg:col-span-8">
                  <p className="text-base text-[#6B7280] leading-relaxed max-w-[600px]">
                    {svc.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-20 md:mt-32 w-full h-[400px] md:h-[600px] lg:h-[750px] overflow-hidden rounded-xl shadow-2xl">
          <img
            src={robotImg}
            alt="Industrial robotic production"
            className="w-full h-full object-cover animate-reveal-rl origin-center"
          />
        </div>

      </div>
    </div>
  );
}
