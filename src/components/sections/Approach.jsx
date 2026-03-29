import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import steelBanner from '../../assets/dark_steel.png';

const STEPS = [
  {
    num: '01',
    label: 'MARKET ASSESSMENT',
    desc: 'Deep analysis of global supply chains and regulatory landscapes to identify optimal procurement routes.',
  },
  {
    num: '02',
    label: 'SOURCING EXECUTION',
    desc: 'Direct engagement with verified international partners to secure quality supply at scale.',
  },
  {
    num: '03',
    label: 'LOGISTICS INTEGRATION',
    desc: 'Synchronized movement of goods through optimized freight and warehousing frameworks.',
  },
  {
    num: '04',
    label: 'MARKET ENTRY',
    desc: 'Final delivery and successful implementation within the target market environment.',
  },
];

const WORDS = ['PROCESS', 'SUPPLY CHAIN SECURITY', 'STRATEGIC SOURCING', 'GLOBAL PROCUREMENT', 'MARKET ACCESS'];

export default function Approach() {
  const containerRef = useRef(null);
  const bannerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"]
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

  return (
    <div className="bg-[#F7F7F6] min-h-screen pt-32 selection:bg-[#2563EB]/20">
      <div className="max-w-container mx-auto px-6 md:px-10 pb-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-bold tracking-[0.2em] text-[#2563EB] uppercase mb-4">
            OPERATIONAL FRAMEWORK
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-[#0F1113] mb-20 tracking-tighter leading-[0.9]">
            Our Methodology
          </h1>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-10">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.9, 
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1] 
              }}
              whileHover={{ y: -8 }}
              className="flex flex-col group cursor-default p-8 md:p-10 rounded-2xl bg-white/40 hover:bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(15,17,19,0.08)] transition-all duration-700 border border-[#0F1113]/5 relative overflow-hidden"
            >
              
              {/* Subtle Highlight Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#2563EB] opacity-0 group-hover:opacity-[0.05] blur-[50px] transition-opacity duration-1000 pointer-events-none rounded-full" />

              <div className="text-[100px] leading-none font-black text-[#0F1113]/5 mb-6 tracking-tighter group-hover:text-[#2563EB]/10 transition-colors duration-700 select-none">
                {step.num}
              </div>

              {/* Animated Progress Loader Line */}
              <div className="w-full h-[1px] mb-8 bg-[#0F1113]/5 relative overflow-hidden rounded-full">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 + (i * 0.2), ease: "circOut" }}
                  className="absolute inset-y-0 left-0 bg-[#2563EB]/40 group-hover:bg-[#2563EB] transition-colors duration-500"
                />
              </div>

              <h3 className="text-sm font-bold uppercase tracking-widest text-[#2563EB] mb-4 group-hover:translate-x-1 transition-transform duration-500">
                {step.label}
              </h3>

              <p className="text-[15px] leading-relaxed text-[#6B7280] group-hover:text-[#0F1113] transition-colors duration-500">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Parallax Hero Banner Section */}
      <section 
        ref={bannerRef}
        className="relative overflow-hidden w-full min-h-[70vh] flex flex-col items-center justify-center pt-32 pb-32 group cursor-default"
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#0F1113]">
          <motion.div 
            style={{ y: parallaxY }}
            className="absolute inset-x-0 -inset-y-20 h-[120%]"
          >
            <img
              src={steelBanner}
              alt="Steel framework"
              className="w-full h-full object-cover grayscale opacity-50 mix-blend-luminosity brightness-75 transition-all duration-1000 group-hover:brightness-90 group-hover:scale-[1.02]"
            />
          </motion.div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-[#F7F7F6] via-transparent to-[#0F1113] opacity-20" />
          <div className="absolute inset-0 bg-[#0F1113]/85 mix-blend-multiply" />
          
          {/* Pulsing Core Glow */}
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.15, 0.25, 0.15]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2563EB]/25 rounded-full blur-[160px] mix-blend-screen pointer-events-none" 
          />
        </div>

        {/* Text Content */}
        <div className="relative z-10 w-full px-6 max-w-container mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-[#F7F7F6] tracking-tight leading-[0.95] mb-10 max-w-4xl">
              Precision in Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Strategic Step</span>
            </h2>
            <p className="text-[17px] md:text-[19px] text-[#F7F7F6]/60 leading-relaxed max-w-2xl mx-auto font-light">
              Navigating the complexities of global procurement requires an execution-focused partner. We move with calm confidence to secure your supply chain and access new markets with unmatched reliability.
            </p>
            
            {/* Animated Underline */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
              className="h-[1px] bg-[#2563EB] mx-auto mt-16 mb-24 shadow-[0_0_20px_rgba(37,99,235,0.8)]" 
            />
          </motion.div>

          {/* Glowing Ticker - Premium Polish */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-full relative py-8"
          >
            {/* Edge Fades */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0F1113] to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0F1113] to-transparent z-20 pointer-events-none" />
            
            <div className="w-full overflow-hidden border-y border-white/5 bg-white/[0.02] backdrop-blur-sm py-6">
              <div className="ticker-track">
                {[...WORDS, ...WORDS, ...WORDS].map((w, i) => (
                  <span key={i} className="text-xs md:text-sm font-bold tracking-[0.3em] text-[#2563EB] uppercase mx-12 whitespace-nowrap opacity-80 filter brightness-125">
                    {w} <span className="mx-4 text-white/10">•</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
