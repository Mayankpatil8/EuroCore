import { useState } from 'react';
import { FadeIn } from '../ui/FadeIn';

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div className="bg-[#F7F7F6] pt-32 pb-24 relative overflow-hidden">
        <div className="max-w-container mx-auto px-6 md:px-10 relative z-10">
          
          {/* Header */}
          <FadeIn>
            <div className="mb-16 md:mb-24 flex flex-col items-start">
              <p className="text-xs font-bold tracking-widest text-[#2563EB] uppercase mb-4">
                COMMUNICATION INITIATION
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-[72px] font-black text-[#0F1113] tracking-tight leading-none mb-6">
                Get in Touch
              </h1>
              <div className="w-16 h-[2px] bg-[#2563EB]" />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left panel */}
            <div className="lg:col-span-5 flex flex-col justify-start">
              <FadeIn delay={100}>
                <p className="text-base text-[#6B7280] leading-relaxed mb-16 max-w-sm">
                  Provide a short outline of your sourcing or execution requirements. Our direct procurement desk responds within one business cycle.
                </p>

                <div className="space-y-12">
                  {/* Direct Contacts */}
                  <div>
                    <h3 className="text-xs font-bold tracking-widest text-[#0F1113]/50 uppercase mb-6">
                      Direct Contacts
                    </h3>
                    <div className="space-y-8">
                      <div className="relative pl-6 border-l-[3px] border-[#2563EB]">
                        <div className="font-bold text-[#0F1113] text-base md:text-lg mb-1">Lotta Riekki</div>
                        <div className="text-[13px] font-semibold tracking-wider uppercase text-[#0F1113]/60 mb-2">Managing Director</div>
                        <a href="mailto:lotta@eurocoreglobal.com" className="text-sm font-semibold text-[#2563EB] hover:text-[#1d4ed8] transition-colors underline underline-offset-4 decoration-[#2563EB]/30">lotta@eurocoreglobal.com</a>
                      </div>
                      <div className="relative pl-6 border-l-[3px] border-[#2563EB]">
                        <div className="font-bold text-[#0F1113] text-base md:text-lg mb-1">Ajay Chaudhari</div>
                        <div className="text-[13px] font-semibold tracking-wider uppercase text-[#0F1113]/60 mb-2">Commercial Director</div>
                        <a href="mailto:ajay@eurocoreglobal.com" className="text-sm font-semibold text-[#2563EB] hover:text-[#1d4ed8] transition-colors underline underline-offset-4 decoration-[#2563EB]/30">ajay@eurocoreglobal.com</a>
                      </div>
                    </div>
                  </div>

                  {/* Headquarters */}
                  <div className="pt-4">
                    <h3 className="text-xs font-bold tracking-widest text-[#0F1113]/50 uppercase mb-5">
                      Headquarters
                    </h3>
                    <div className="relative pl-6 border-l-[3px] border-[#0F1113]/10">
                      <div className="font-bold text-[#0F1113] text-base md:text-lg">Helsinki, Finland</div>
                      <div className="text-sm text-[#6B7280] mt-1.5">Eurocore Global Northern Office</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right: Dark Premium Form */}
            <div className="lg:col-span-7">
              <FadeIn delay={200}>
                <div className="bg-[#0F1113] shadow-[0_30px_60px_rgba(0,0,0,0.15)] p-8 md:p-14 relative overflow-hidden group">
                  {/* Premium Abstract Glowing Highlight */}
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-[#2563EB]/30 to-transparent rounded-full blur-[120px] opacity-40 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none transform translate-y-[-50%] translate-x-[40%]" />
                  <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-[#2563EB]/10 to-transparent rounded-full blur-[100px] opacity-50 pointer-events-none transform translate-y-[40%] translate-x-[-40%]" />
                  
                  {submitted ? (
                    <div className="flex flex-col items-start justify-center min-h-[560px] relative z-10">
                      <div className="w-16 h-16 border-2 border-[#2563EB] flex items-center justify-center mb-8 bg-[#2563EB]/10">
                        <svg className="w-7 h-7 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-[#F7F7F6] mb-5 tracking-tight">Transmission Secured</h3>
                      <p className="text-[#6B7280] text-base md:text-lg max-w-sm leading-relaxed">
                        We have received your communications exactly. Our commercial team will evaluate the requirements outlined and reply shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={submit} className="relative z-10">
                      <div className="mb-14">
                        <h2 className="text-3xl font-bold text-[#F7F7F6] mb-3 tracking-tight">Requirement Registration</h2>
                        <p className="text-[#6B7280] text-sm md:text-base">Please provide your operational details.</p>
                      </div>

                      <div className="space-y-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                          {/* First Name */}
                          <div className="relative">
                            <input
                              name="firstName"
                              required
                              value={form.firstName}
                              onChange={handle}
                              className="peer w-full bg-transparent border-b border-[#F7F7F6]/10 text-[#F7F7F6] text-base py-2 focus:border-[#2563EB] focus:outline-none transition-colors placeholder-transparent"
                              placeholder="First Name"
                              id="firstName"
                            />
                            <label 
                              htmlFor="firstName" 
                              className="absolute left-0 -top-4 text-[11px] font-bold tracking-widest text-[#6B7280] uppercase transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#F7F7F6]/30 peer-placeholder-shown:top-2 peer-placeholder-shown:font-medium peer-focus:-top-4 peer-focus:text-[11px] peer-focus:text-[#2563EB] peer-focus:font-bold cursor-text"
                            >
                              First name *
                            </label>
                          </div>

                          {/* Last Name */}
                          <div className="relative">
                            <input
                              name="lastName"
                              required
                              value={form.lastName}
                              onChange={handle}
                              className="peer w-full bg-transparent border-b border-[#F7F7F6]/10 text-[#F7F7F6] text-base py-2 focus:border-[#2563EB] focus:outline-none transition-colors placeholder-transparent"
                              placeholder="Last Name"
                              id="lastName"
                            />
                            <label 
                              htmlFor="lastName" 
                              className="absolute left-0 -top-4 text-[11px] font-bold tracking-widest text-[#6B7280] uppercase transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#F7F7F6]/30 peer-placeholder-shown:top-2 peer-placeholder-shown:font-medium peer-focus:-top-4 peer-focus:text-[11px] peer-focus:text-[#2563EB] peer-focus:font-bold cursor-text"
                            >
                              Last name *
                            </label>
                          </div>
                        </div>

                        {/* Email */}
                        <div className="relative">
                          <input
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={handle}
                            className="peer w-full bg-transparent border-b border-[#F7F7F6]/10 text-[#F7F7F6] text-base py-2 focus:border-[#2563EB] focus:outline-none transition-colors placeholder-transparent"
                            placeholder="Email"
                            id="email"
                          />
                          <label 
                            htmlFor="email" 
                            className="absolute left-0 -top-4 text-[11px] font-bold tracking-widest text-[#6B7280] uppercase transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#F7F7F6]/30 peer-placeholder-shown:top-2 peer-placeholder-shown:font-medium peer-focus:-top-4 peer-focus:text-[11px] peer-focus:text-[#2563EB] peer-focus:font-bold cursor-text"
                          >
                            Email address *
                          </label>
                        </div>

                        {/* Phone */}
                        <div className="relative">
                          <input
                            name="phone"
                            value={form.phone}
                            onChange={handle}
                            className="peer w-full bg-transparent border-b border-[#F7F7F6]/10 text-[#F7F7F6] text-base py-2 focus:border-[#2563EB] focus:outline-none transition-colors placeholder-transparent"
                            placeholder="Phone"
                            id="phone"
                          />
                          <label 
                            htmlFor="phone" 
                            className="absolute left-0 -top-4 text-[11px] font-bold tracking-widest text-[#6B7280] uppercase transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#F7F7F6]/30 peer-placeholder-shown:top-2 peer-placeholder-shown:font-medium peer-focus:-top-4 peer-focus:text-[11px] peer-focus:text-[#2563EB] peer-focus:font-bold cursor-text"
                          >
                            Phone number
                          </label>
                        </div>

                        {/* Message */}
                        <div className="relative pt-4">
                          <textarea
                            name="message"
                            required
                            rows={3}
                            value={form.message}
                            onChange={handle}
                            className="peer w-full bg-transparent border-b border-[#F7F7F6]/10 text-[#F7F7F6] text-base py-2 focus:border-[#2563EB] focus:outline-none transition-colors placeholder-transparent resize-none leading-relaxed"
                            placeholder="Message"
                            id="message"
                          />
                          <label 
                            htmlFor="message" 
                            className="absolute left-0 0 text-[11px] font-bold tracking-widest text-[#6B7280] uppercase transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#F7F7F6]/30 peer-placeholder-shown:top-4 peer-placeholder-shown:font-medium peer-focus:0 peer-focus:text-[11px] peer-focus:text-[#2563EB] peer-focus:font-bold cursor-text"
                          >
                            Operational Outline *
                          </label>
                        </div>

                        <div className="pt-10">
                          <button
                            type="submit"
                            className="w-full bg-[#2563EB] text-[#F7F7F6] text-sm font-bold tracking-widest uppercase py-5 hover:bg-[#1d4ed8] focus:ring-4 focus:ring-[#2563EB]/20 transition-all duration-300 outline-none"
                          >
                            Transmit Direct
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </FadeIn>
            </div>
            
          </div>
        </div>
      </div>

      {/* Global Presence Section */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-container mx-auto px-6 md:px-10">
          <FadeIn>
            <div className="mb-10">
              <p className="text-[13px] font-bold tracking-widest text-[#2563EB] uppercase mb-4">
                OUR PRESENCE
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#0F1113] tracking-tight">
                Global Strategic Operations
              </h2>
            </div>
          </FadeIn>

          <div className="w-full h-px bg-[#0F1113]/10 mb-20" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* European HQ */}
            <FadeIn delay={100}>
              <div className="flex flex-col">
                <p className="text-xs font-bold tracking-widest text-[#2563EB] uppercase mb-4">
                  EUROPEAN HEADQUARTERS
                </p>
                <h3 className="text-[22px] font-bold text-[#0F1113] mb-4">London, UK</h3>
                <p className="text-[15px] text-[#6B7280] leading-relaxed max-w-[240px]">
                  128 Canary Wharf<br />
                  London E14 5AA<br />
                  +44 20 7946 0123
                </p>
              </div>
            </FadeIn>

            {/* APAC Hub */}
            <FadeIn delay={200}>
              <div className="flex flex-col">
                <p className="text-xs font-bold tracking-widest text-[#2563EB] uppercase mb-4">
                  APAC STRATEGIC HUB
                </p>
                <h3 className="text-[22px] font-bold text-[#0F1113] mb-4">Singapore</h3>
                <p className="text-[15px] text-[#6B7280] leading-relaxed max-w-[240px]">
                  8 Marina View<br />
                  Asia Square Tower 1<br />
                  +65 6789 0123
                </p>
              </div>
            </FadeIn>

            {/* Americas Logistics */}
            <FadeIn delay={300}>
              <div className="flex flex-col">
                <p className="text-xs font-bold tracking-widest text-[#2563EB] uppercase mb-4">
                  AMERICAS LOGISTICS
                </p>
                <h3 className="text-[22px] font-bold text-[#0F1113] mb-4">New York, USA</h3>
                <p className="text-[15px] text-[#6B7280] leading-relaxed max-w-[240px]">
                  250 Hudson Street<br />
                  New York, NY 10013<br />
                  +1 212 555 0198
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="w-full h-px bg-[#0F1113]/10 mt-20" />
        </div>
      </section>
    </>
  );
}
