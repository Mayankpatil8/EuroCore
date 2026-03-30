import Hero from '../components/sections/Hero';
import CompanyOverview from '../components/sections/CompanyOverview';
import ExecutionFocus from '../components/sections/ExecutionFocus';
import CallToAction from '../components/sections/CallToAction';

export default function Home() {
  return (
    <div className="bg-[#0A1F3C] min-h-screen text-white">
      <Hero />
      <CompanyOverview />
      <ExecutionFocus />
      <CallToAction />
    </div>
  );
}
