// Button.jsx
export function Button({ children, variant = 'primary', href, onClick, className = '' }) {
  const base = 'inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 px-6 py-3';
  const variants = {
    primary: 'bg-accent text-white hover:bg-blue-700',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-primary hover:text-accent underline underline-offset-4',
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button onClick={onClick} className={cls}>{children}</button>;
}
