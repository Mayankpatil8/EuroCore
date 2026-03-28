import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-container mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="font-bold text-lg mb-2">Eurocore Global</div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Turning sourcing into secured supply. Operating across international markets and complex supply environments.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-4">Navigation</div>
            <nav className="flex flex-col gap-2">
              {[['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/approach', 'Approach'], ['/contact', 'Contact']].map(([path, label]) => (
                <Link key={path} to={path} className="text-sm text-white/60 hover:text-white transition-colors">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-4">Contact</div>
            <div className="text-sm text-white/60 space-y-1">
              <p>Helsinki, Finland</p>
              <p>info@eurocoreglobal.com</p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-white/30 text-xs">© {new Date().getFullYear()} Eurocore Global. All rights reserved.</p>
          <p className="text-white/30 text-xs">European B2B Sourcing & Procurement</p>
        </div>
      </div>
    </footer>
  );
}
