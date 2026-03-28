export default function SectionHeader({ eyebrow, title, subtitle, center = false, light = false }) {
  return (
    <div className={center ? 'text-center' : ''}>
      {eyebrow && (
        <p className={`text-xs font-semibold tracking-widest uppercase mb-4 ${light ? 'text-white/50' : 'text-accent'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-4xl md:text-5xl font-bold leading-tight text-balance ${light ? 'text-white' : 'text-primary'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base md:text-lg leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-white/60' : 'text-gray-support'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
