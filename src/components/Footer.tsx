import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const Footer = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialIcons = [
    {
      name: 'Pinterest',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12c.343 0 .683-.014 1.02-.042-.234-2.176-.71-4.262-1.267-6.276l.9-3.636c.187.356.574.636 1.03.636.482 0 .918-.195 1.238-.51.32-.314.501-.74.501-1.174 0-.87-.708-1.578-1.578-1.578-.87 0-1.578.708-1.578 1.578 0 .193.03.38.086.555l-.43 1.736c-.103-.198-.314-.327-.555-.327-.435 0-.788.353-.788.788 0 .434.353.787.788.787.261 0 .492-.128.634-.325l.364-1.472c.244.462.728.78 1.283.78 1.305 0 2.364-1.059 2.364-2.364s-1.059-2.364-2.364-2.364z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
    {
      name: 'TikTok',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-background border-t border-border section-padding">
      <div className="container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="YAQOUT" className="h-12 w-auto" />
            </Link>
            <p className="text-muted-foreground font-body leading-relaxed max-w-md">
              Timeless Moroccan elegance meets modern sophistication. 
              Handcrafted caftans and jellabas for the contemporary woman.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-lg font-medium mb-4 text-foreground">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-medium mb-4 text-foreground">
              Connect
            </h3>
            <div className="space-y-3">
              <p className="text-muted-foreground font-body">
                hello@yaqout.com
              </p>
              <p className="text-muted-foreground font-body">
                +212 5XX XXX XXX
              </p>
              <div className="flex items-center space-x-4 pt-2">
                {socialIcons.map((social) => (
                  <button
                    key={social.name}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 p-2 -m-2"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground font-body text-sm">
              © YAQOUT 2025 — All rights reserved
            </p>
            <p className="text-muted-foreground font-body text-sm">
              Born in Morocco. Adored Worldwide.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;