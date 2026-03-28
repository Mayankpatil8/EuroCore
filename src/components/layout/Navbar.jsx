import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 pb-0.5 ${isActive
      ? 'text-primary border-b border-primary'
      : 'text-primary hover:text-accent'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-gray-light transition-shadow duration-300 ${scrolled ? 'shadow-sm' : ''
        }`}
    >
      <div className="max-w-container mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-20 border-b border-gray-border">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logoImg}
              alt="Eurocore Global"
              className="w-40 h-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" end className={linkClass}>Home</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/services" className={linkClass}>Services</NavLink>
            <NavLink to="/approach" className={linkClass}>Approach</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </nav>

          {/* Mobile menu toggle */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function GlobeLogo() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="20" stroke="#0F1113" strokeWidth="1.5" fill="none" />
      {/* Latitude lines */}
      <ellipse cx="22" cy="22" rx="20" ry="8" stroke="#0F1113" strokeWidth="1" fill="none" />
      <ellipse cx="22" cy="22" rx="20" ry="14" stroke="#0F1113" strokeWidth="0.8" fill="none" />
      {/* Vertical meridian lines */}
      <line x1="22" y1="2" x2="22" y2="42" stroke="#0F1113" strokeWidth="1" />
      <path d="M 22 2 Q 36 22 22 42" stroke="#0F1113" strokeWidth="0.8" fill="none" />
      <path d="M 22 2 Q 8 22 22 42" stroke="#0F1113" strokeWidth="0.8" fill="none" />
      <path d="M 22 2 Q 42 10 42 22" stroke="#0F1113" strokeWidth="0.8" fill="none" />
      <path d="M 22 2 Q 2 10 2 22" stroke="#0F1113" strokeWidth="0.8" fill="none" />
    </svg>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(!open)} className="p-2">
        <div className="space-y-1.5">
          <span className={`block h-0.5 w-6 bg-primary transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-primary transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-primary transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </button>
      {open && (
        <div className="absolute top-20 left-0 right-0 bg-gray-light border-b border-gray-border px-6 py-6 flex flex-col gap-5">
          {['/', '/about', '/services', '/approach', '/contact'].map((path, i) => {
            const labels = ['Home', 'About', 'Services', 'Approach', 'Contact'];
            return (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium ${isActive ? 'text-accent' : 'text-primary'}`
                }
              >
                {labels[i]}
              </NavLink>
            );
          })}
        </div>
      )}
    </div>
  );
}
