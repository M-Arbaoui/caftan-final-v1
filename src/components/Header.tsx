import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Heart, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Caftans', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHomePage = location.pathname === '/';
  const isTransparent = isHomePage && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isTransparent 
          ? 'bg-transparent' 
          : 'bg-white shadow-sm border-b border-gray-200'
      }`}
    >
      <div className="container-luxury">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="logo-container">
              <img 
                src="/logos/logo.png"
                alt="YAQOUT" 
                className="h-20 w-auto transition-all duration-500 group-hover:scale-105" 
              />
              <div className="logo-glow"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-body font-medium tracking-wide transition-all duration-300 relative group ${
                  location.pathname === link.path
                    ? isHomePage ? 'text-soft-gold' : 'text-deep-ruby'
                    : isTransparent 
                      ? 'text-white hover:text-soft-gold' 
                      : 'text-black hover:text-deep-ruby'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full ${
                  location.pathname === link.path 
                    ? isHomePage ? 'bg-soft-gold w-full' : 'bg-deep-ruby w-full'
                    : isTransparent ? 'bg-soft-gold' : 'bg-deep-ruby'
                }`} />
              </Link>
            ))}
          </nav>
 
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className={`p-2 transition-colors duration-300 group ${
              isTransparent 
                ? 'text-white hover:text-soft-gold' 
                : 'text-black hover:text-deep-ruby'
            }`}>
              <Heart className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </button>
            <button className={`p-2 transition-colors duration-300 group ${
              isTransparent 
                ? 'text-white hover:text-soft-gold' 
                : 'text-black hover:text-deep-ruby'
            }`}>
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              isTransparent 
                ? 'text-white hover:text-soft-gold' 
                : 'text-black hover:text-deep-ruby'
            }`}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col space-y-4 pt-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-body font-medium tracking-wide transition-colors duration-300 py-2 ${
                  location.pathname === link.path
                    ? isHomePage ? 'text-soft-gold' : 'text-deep-ruby'
                    : isTransparent 
                      ? 'text-white hover:text-soft-gold' 
                      : 'text-black hover:text-deep-ruby'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
              <button className={`p-2 transition-colors duration-300 ${
                isTransparent 
                  ? 'text-white hover:text-soft-gold' 
                  : 'text-black hover:text-deep-ruby'
              }`}>
                <Heart className="w-5 h-5" />
              </button>
              <button className={`p-2 transition-colors duration-300 ${
                isTransparent 
                  ? 'text-white hover:text-soft-gold' 
                  : 'text-black hover:text-deep-ruby'
              }`}>
                <ShoppingBag className="w-5 h-5" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;