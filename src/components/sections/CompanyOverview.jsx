import { FadeIn } from '../ui/FadeIn';

export default function CompanyOverview() {
  return (
    <section className="bg-[#F7F7F6] pt-24 pb-32">
      <div className="max-w-container mx-auto px-6 md:px-10 flex flex-col items-center text-center">

        <FadeIn>
          <p className="text-xs font-bold tracking-[0.2em] text-[#4067a4ff] uppercase mb-0">
            COMPANY OVERVIEW
          </p>

          <div className="w-px h-16 bg-[#0F1113]/20 mx-auto mt-6 mb-10" />

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0F1113] tracking-tight leading-[1.05] max-w-4xl mx-auto mb-10">
            From Opportunity to Execution
          </h2>

          <div className="text-[17px] md:text-[19px] leading-relaxed text-[#6B7280] max-w-3xl mx-auto font-medium space-y-6">
            <p>
              Eurocore Global operates at the intersection of business development, market access, capability discovery, and supply chain execution. We help organizations identify opportunities, connect with the right partners, validate capabilities, and navigate complex international markets.
            </p>
            <p>
              By combining strategic insight with practical execution, we support companies from initial opportunity identification through to successful implementation.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
