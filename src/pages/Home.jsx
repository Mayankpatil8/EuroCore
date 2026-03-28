import Hero from '../components/sections/Hero';
import CompanyOverview from '../components/sections/CompanyOverview';
import ExecutionFocus from '../components/sections/ExecutionFocus';
import CallToAction from '../components/sections/CallToAction';

export default function Home() {
  return (
    <div className="bg-[#b0b4b8] min-h-screen">
      <Hero />
      <CompanyOverview />
      <ExecutionFocus />
      <CallToAction />
    </div>
  );
}
