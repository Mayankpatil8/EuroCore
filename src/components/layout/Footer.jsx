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
              <p>Eurocore Global Oy</p>
            </div>
            <div className="text-sm text-white/60 space-y-1">
              <p>Business ID: 3517112-5</p>
            </div>
            <div className="text-sm text-white/60 space-y-1">
              <p>Helsinki, Finland</p>
            </div>
            <br></br>

            {/* Follow Us */}
            <div className="pt-2">
              <div className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-4">Follow Us</div>
              <a
                href="https://www.linkedin.com/company/eurocore-global/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform duration-300 hover:scale-110 hover:brightness-110 drop-shadow-lg"
                aria-label="LinkedIn"
              >
                <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="3.5" fill="#FFFFFF" />
                  <path d="M20.447 20.452H16.89V14.881C16.89 13.553 16.865 11.844 15.044 11.844C13.197 11.844 12.913 13.284 12.913 14.786V20.452H9.358V8.995H12.775V10.561H12.823C13.299 9.658 14.464 8.705 16.19 8.705C19.791 8.705 20.447 11.075 20.447 14.15V20.452ZM5.337 7.43C4.195 7.43 3.272 6.505 3.272 5.361C3.272 4.218 4.195 3.292 5.337 3.292C6.476 3.292 7.402 4.218 7.402 5.361C7.402 6.505 6.476 7.43 5.337 7.43ZM7.118 20.452H3.555V8.995H7.118V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.201 24 24 23.227 24 22.271V1.729C24 0.774 23.201 0 22.225 0Z" fill="#0A66C2"/>
                </svg>
              </a>
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
