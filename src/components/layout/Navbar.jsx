import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logoImg from '../../assets/logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const location = useLocation();
  const isDarkPage = location.pathname === '/critical-industries';

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 pb-0.5 ${isActive
      ? (isDarkPage ? 'text-white border-b border-white' : 'text-primary border-b border-primary')
      : (isDarkPage ? 'text-gray-400 hover:text-white' : 'text-primary hover:text-accent')
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled 
          ? (isDarkPage ? 'bg-[#0A0A0A] shadow-sm' : 'bg-gray-light shadow-sm')
          : (isDarkPage ? 'bg-[#000000]' : 'bg-gray-light')
      }`}
    >
      <div className="max-w-container mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-20 border-b border-gray-border">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logoImg}
              alt="Eurocore Global"
              className={`w-40 h-auto object-contain ${isDarkPage ? 'brightness-0 invert' : ''}`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" end className={linkClass}>Home</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/services" className={linkClass}>Services</NavLink>
            <NavLink to="/approach" className={linkClass}>Approach</NavLink>
            <NavLink to="/critical-industries" className={linkClass}>Critical Industries</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </nav>

          {/* Mobile menu toggle */}
          <MobileMenu isDarkPage={isDarkPage} />
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

function MobileMenu({ isDarkPage }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(!open)} className="p-2">
        <div className="space-y-1.5">
          <span className={`block h-0.5 w-6 transition-transform ${open ? 'rotate-45 translate-y-2' : ''} ${isDarkPage ? 'bg-white' : 'bg-primary'}`} />
          <span className={`block h-0.5 w-6 transition-opacity ${open ? 'opacity-0' : ''} ${isDarkPage ? 'bg-white' : 'bg-primary'}`} />
          <span className={`block h-0.5 w-6 transition-transform ${open ? '-rotate-45 -translate-y-2' : ''} ${isDarkPage ? 'bg-white' : 'bg-primary'}`} />
        </div>
      </button>
      {open && (
        <div className={`absolute top-20 left-0 right-0 border-b px-6 py-6 flex flex-col gap-5 ${isDarkPage ? 'bg-[#0A0A0A] border-white/10' : 'bg-gray-light border-gray-border'}`}>
          {['/', '/about', '/services', '/approach', '/critical-industries', '/contact'].map((path, i) => {
            const labels = ['Home', 'About', 'Services', 'Approach', 'Critical Industries', 'Contact'];
            return (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium ${isActive 
                    ? (isDarkPage ? 'text-white' : 'text-accent') 
                    : (isDarkPage ? 'text-gray-400' : 'text-primary')}`
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
