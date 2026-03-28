import { FadeIn } from '../ui/FadeIn';
import { Link } from 'react-router-dom';
import mapImg from '../../assets/world_map.png';

export default function Hero() {
  return (
    <section className="relative bg-[#F7F7F6] w-full min-h-screen flex items-center pt-20">
      <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-80px)]">

        {/* Left Content */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-20 py-16 lg:py-0">
          <FadeIn>
            <h1 className="text-5xl md:text-[64px] lg:text-[76px] font-black text-[#0F1113] leading-[1.05] tracking-tight mb-10">
              Turning sourcing into secured supply.
            </h1>

            <p className="text-[17px] md:text-lg text-[#6B7280] leading-relaxed max-w-[540px] mb-6 font-medium">
              Eurocore Global is a sourcing and procurement partner operating across international markets and complex supply environments.
            </p>

            <p className="text-[17px] md:text-lg text-[#6B7280] leading-relaxed max-w-[540px] mb-12">
              We connect demand with reliable supply, managing the full process from supplier identification to final delivery. Our focus is to ensure that sourcing leads to real, executable outcomes.
            </p>

            <Link to="/contact" className="inline-block bg-[#2563EB] text-[#F7F7F6] px-8 py-4 text-[15px] font-bold tracking-wide hover:bg-[#1d4ed8] transition-colors rounded-[2px] w-max">
              Inquiry Services
            </Link>
          </FadeIn>
        </div>

        {/* Right Content (World Map Graphic) */}
        <div className="relative w-full h-full min-h-[400px] lg:min-h-full bg-black/10 lg:rounded-l-3xl overflow-hidden m-4 lg:m-8 lg:mr-8 ml-0">
          <img
            src={mapImg}
            alt="Global Sourcing Network"
            className="absolute inset-0 w-full h-full object-cover object-center scale-[1.02]"
          />
          <div className="absolute inset-0 bg-[#2563EB]/20 mix-blend-multiply" />
        </div>

      </div>
    </section>
  );
}