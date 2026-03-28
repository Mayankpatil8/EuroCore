import { FadeIn } from '../ui/FadeIn';

export default function CompanyOverview() {
  return (
    <section className="bg-[#F7F7F6] pt-24 pb-32">
      <div className="max-w-container mx-auto px-6 md:px-10 flex flex-col items-center text-center">
        
        <FadeIn>
          <p className="text-xs font-bold tracking-[0.2em] text-[#2563EB] uppercase mb-0">
            COMPANY OVERVIEW
          </p>
          
          <div className="w-px h-16 bg-[#0F1113]/20 mx-auto mt-6 mb-10" />

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0F1113] tracking-tight leading-[1.05] max-w-4xl mx-auto mb-10">
            Securing Global Supply with Execution-Focused Precision
          </h2>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#6B7280] max-w-3xl mx-auto font-medium">
            Eurocore Global bridges the gap between international markets and operational reality. We are not just advisors; we are procurement partners who navigate complex environments to ensure your supply chains remain resilient and your path to new markets remains clear.
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
