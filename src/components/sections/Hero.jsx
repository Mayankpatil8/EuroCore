import { FadeIn } from '../ui/FadeIn';
import { Link } from 'react-router-dom';
import mapImg from '../../assets/world_map.png';

export default function Hero() {
  return (
    <section className="relative bg-[#F7F7F6] w-full min-h-screen flex items-center pt-20">
      <div className="max-w-[900px] mx-auto text-center px-6">
        {/* Left Content */}

        <div className="flex flex-col items-center text-center px-6">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F1113] leading-[1.1] tracking-tight mb-8">
              Connecting Capabilities,<br /> Partnerships and Markets.
            </h1>
            <div className="w-10 h-[1.5px] bg-[#0F1113]/20 mx-auto mb-10"></div>

            <div className="max-w-[800px] mx-auto text-center space-y-5 mb-10">

              <p className="text-[17px] text-[#6B7280] leading-[1.7] font-medium">
                Eurocore Global helps organizations identify capabilities, build strategic partnerships, access new markets, and develop resilient supply chains across Europe and selected international markets. We support companies operating in complex industries where finding the right supplier, manufacturing partner, technology provider, customer, or market opportunity can be challenging.
              </p>

              <p className="text-[17px] text-[#6B7280] leading-[1.7]">
                Our focus is simple: helping organizations find the right capabilities, build the right partnerships, and turn opportunities into execution.
              </p>

            </div>
            <br />
            <Link to="/contact" className="inline-block bg-[#426db3ff] text-[#F7F7F6] px-8 py-4 text-[15px] font-bold tracking-wide hover:bg-[#5085dcff] transition-colors rounded-[2px] w-max">
              Inquiry Services
            </Link>
          </FadeIn>
        </div>



      </div>
    </section>
  );
}