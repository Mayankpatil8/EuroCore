import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handle = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const submit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div className="bg-[#F7F7F6] pt-28 md:pt-36 pb-20 md:pb-28">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12">

        {/* ── Page header ── */}
        <div className="mb-14 md:mb-20">
          <p className="text-[11px] font-bold tracking-[0.2em] text-[#2563EB] uppercase mb-4">
            Contact
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-[#0F1113] tracking-tight leading-[1.0] mb-6">
            Let's talk
          </h1>
          <p className="max-w-3xl text-[15px] md:text-[18px] text-[#2D333D] leading-relaxed mb-8">
            If you are dealing with sourcing challenges, supply constraints or entering new markets, we can help.
          </p>
          <div className="w-14 h-[3px] bg-[#2563EB]" />
        </div>

        {/* ── Two-column layout — FORM LEFT, INFO RIGHT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-start">

          {/* ── LEFT (col 1–7): dark form panel ── */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="bg-[#0F1113] relative overflow-hidden p-8 sm:p-10 md:p-14">

              {/* Blue glow — top-right */}
              <div
                aria-hidden="true"
                className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)' }}
              />
              {/* Blue glow — bottom-left */}
              <div
                aria-hidden="true"
                className="absolute -bottom-24 -left-24 w-[300px] h-[300px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 70%)' }}
              />

              {submitted ? (
                /* ── Success state ── */
                <div className="relative z-10 flex flex-col items-start justify-center min-h-[520px]">
                  <div className="w-14 h-14 border-2 border-[#2563EB] bg-[#2563EB]/10 flex items-center justify-center mb-8">
                    <svg className="w-6 h-6 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                    Message Received
                  </h3>
                  <p className="text-[#9CA3AF] text-base leading-relaxed max-w-sm">
                    We have received your message. We will respond quickly and define the next steps.
                  </p>
                </div>

              ) : (
                /* ── Contact form ── */
                <form onSubmit={submit} noValidate className="relative z-10">

                  <div className="mb-10 md:mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
                      Contact Form
                    </h2>
                    <p className="text-[#9CA3AF] text-sm font-medium">
                      Send a short description of your situation.
                    </p>
                  </div>

                  <div className="space-y-8 md:space-y-10">

                    {/* Name row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                      <FloatingField id="firstName" name="firstName" label="First name" required value={form.firstName} onChange={handle} />
                      <FloatingField id="lastName" name="lastName" label="Last name" required value={form.lastName} onChange={handle} />
                    </div>

                    <FloatingField id="email" name="email" label="Email address" type="email" required value={form.email} onChange={handle} />
                    <FloatingField id="phone" name="phone" label="Phone number" value={form.phone} onChange={handle} />

                    {/* Message textarea */}
                    <div className="relative pt-5">
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={handle}
                        placeholder="Message"
                        className="peer w-full bg-transparent border-b border-white/15 text-white text-base py-2 focus:border-[#2563EB] focus:outline-none placeholder-transparent resize-none leading-relaxed"
                      />
                      <label
                        htmlFor="message"
                        className="absolute left-0 top-0 text-[11px] font-bold tracking-[0.18em] uppercase text-[#9CA3AF] peer-placeholder-shown:top-7 peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/60 peer-placeholder-shown:font-medium peer-placeholder-shown:tracking-normal peer-focus:top-0 peer-focus:text-[11px] peer-focus:text-[#2563EB] peer-focus:font-bold peer-focus:tracking-[0.18em] cursor-text"
                      >
                        Your message *
                      </label>
                    </div>

                    {/* Submit */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full bg-[#2563EB] text-white text-sm font-bold tracking-[0.14em] uppercase py-4 md:py-5 hover:bg-[#1d4ed8] active:bg-[#1e40af] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 focus:ring-offset-2 focus:ring-offset-[#0F1113]"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* ── RIGHT (col 8–12): info panel ── */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col gap-10 lg:pt-2">
            <div>
              <p className="text-[11px] font-black tracking-[0.2em] text-[#0F1113]/70 uppercase mb-4">
                How it starts
              </p>
              <ul className="space-y-3 text-[15px] text-[#2D333D] font-medium leading-relaxed">
                <li>Send a short description of your situation.</li>
                <li>We respond quickly and define the next steps.</li>
                <li>Use the contact form box to share your requirement.</li>
              </ul>
            </div>

            {/* Direct Contacts */}
            <div>
              <p className="text-[11px] font-black tracking-[0.2em] text-[#0F1113]/70 uppercase mb-6">
                Direct Contact
              </p>
              <div className="flex flex-col gap-7">
                {[
                  {
                    name: 'Lotta Riekki',
                    role: 'CEO, Commercial Strategy & Partnerships',
                    email: 'lotta@eurocoreglobal.com',
                    phone: '+358 40 8497183',
                  },
                  {
                    name: 'Ajay Chaudhari',
                    role: 'Co-Founder & Head of Global Sourcing',
                    email: 'sales@eurocoreglobal.com',
                    phone: '+358 40 8500302',
                  },
                ].map((p, i) => (
                  <div key={i} className="pl-5 border-l-[3px] border-[#2563EB]">
                    <div className="font-bold text-[#0F1113] text-base leading-snug">{p.name}</div>
                    <div className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#0F1113]/80 mt-0.5 mb-2">
                      {p.role}
                    </div>
                    <a
                      href={`mailto:${p.email}`}
                      className="text-sm font-semibold text-[#2563EB] hover:text-[#1d4ed8] underline underline-offset-4 decoration-[#2563EB]/30"
                    >
                      {p.email}
                    </a>
                    <a
                      href={`tel:${p.phone.replace(/\s+/g, '')}`}
                      className="block mt-2 text-sm font-semibold text-[#0F1113] hover:text-[#2563EB]"
                    >
                      {p.phone}
                    </a>
                  </div>
                ))}
              </div>
              <p className="text-[14px] font-bold text-[#0F1113] mt-8">
                Located in Helsinki, Finland
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ── Reusable floating-label input ── */
function FloatingField({ id, name, label, type = 'text', required = false, value, onChange }) {
  return (
    <div className="relative pt-5">
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={label}
        className="peer w-full bg-transparent min-w-0 border-b border-white/15 text-white text-base py-2 focus:border-[#2563EB] focus:outline-none placeholder-transparent"
      />
       <label
        htmlFor={id}
        className="absolute left-0 top-0 text-[11px] font-bold tracking-[0.18em] uppercase text-[#9CA3AF] peer-placeholder-shown:top-7 peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/60 peer-placeholder-shown:font-medium peer-placeholder-shown:tracking-normal peer-focus:top-0 peer-focus:text-[11px] peer-focus:text-[#2563EB] peer-focus:font-bold peer-focus:tracking-[0.18em] cursor-text"
      >
        {label}{required ? ' *' : ''}
      </label>
    </div>
  );
}
