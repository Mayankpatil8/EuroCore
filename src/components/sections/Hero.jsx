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
            <h1 className="text-5xl md:text-[64px] lg:text-[72px] font-bold text-[#0F1113] leading-[1.08] tracking-tight mb-8">
              Turning sourcing<br />
              into secured supply.
            </h1>
            <div className="w-10 h-[1.5px] bg-[#0F1113]/20 mx-auto mb-10"></div>

            <div className="max-w-[620px] mx-auto text-center space-y-5 mb-10">

              <p className="text-[17px] text-[#6B7280] leading-[1.7] font-medium">
                Eurocore Global is a sourcing and procurement partner operating across
                international markets and complex supply environments.
              </p>

              <p className="text-[17px] text-[#6B7280] leading-[1.7]">
                We connect demand with reliable supply, managing the full process from
                supplier identification to final delivery.
              </p>

              <p className="text-[17px] text-[#6B7280] leading-[1.7]">
                Our focus is to ensure sourcing leads to real, executable outcomes.
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