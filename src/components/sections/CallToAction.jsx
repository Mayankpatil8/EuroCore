import { FadeIn } from '../ui/FadeIn';
import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <section className="bg-[#F7F7F6] pt-32 pb-40 text-center">
      <div className="max-w-container mx-auto px-6 md:px-10 flex flex-col items-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-black text-[#0F1113] tracking-tight mb-8">
            Operationalize Your Global Supply Chain
          </h2>
          <p className="text-[17px] md:text-lg leading-relaxed text-[#6B7280] max-w-[700px] mx-auto font-medium mb-12">
            Partner with Eurocore Global for expert procurement execution and seamless access to international markets. Our team is ready to secure your supply requirements with precision.
          </p>
          <Link to="/contact" className="inline-block bg-[#2563EB] text-[#F7F7F6] px-8 md:px-10 py-4 text-[15px] font-bold tracking-wide hover:bg-[#1d4ed8] transition-colors rounded-[2px] w-max">
            Initiate Partnership
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
