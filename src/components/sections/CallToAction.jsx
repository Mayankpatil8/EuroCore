import { FadeIn } from '../ui/FadeIn';
import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <section className="bg-[#F7F7F6] pt-32 pb-40 text-center">
      <div className="max-w-container mx-auto px-6 md:px-10 flex flex-col items-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-black text-[#0F1113] tracking-tight mb-8">
Ready to Move Forward?
          </h2>
          <p className="text-[17px] md:text-lg leading-relaxed text-[#6B7280] max-w-[700px] mx-auto font-medium mb-12">
<p>From capability discovery and partner identification to market access and execution support, Eurocore helps organizations navigate complexity and accelerate results.</p>
<p>Start the conversation and let's explore the opportunities ahead.</p>
          </p>
          <Link to="/contact" className="inline-block bg-[#426db3ff] text-[#F7F7F6] px-8 md:px-10 py-4 text-[15px] font-bold tracking-wide hover:bg-[#5085dcff] transition-colors rounded-[2px] w-max">
            Contact us
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
