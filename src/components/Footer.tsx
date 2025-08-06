import { Link } from 'react-router-dom';
import { MessageCircle, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-warm-charcoal to-deep-ruby/90 text-white">
      <div className="container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/logos/logo.png"
                alt="YAQOUT" 
                className="h-12 w-auto" 
              />
            </Link>
            <p className="text-white/80 mb-6 max-w-md">
              Handcrafted Moroccan caftans where heritage meets haute couture. 
              Each piece tells a story of tradition, elegance, and timeless beauty.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://wa.me/212677196185" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300 group"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="mailto:contact@yaqout.com" 
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300 group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-white/80 hover:text-white transition-colors duration-300">
                  Caftans
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-medium mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-4 h-4 text-soft-gold" />
                <a 
                  href="https://wa.me/212677196185" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  +212 677 196 185
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-soft-gold" />
                <a 
                  href="mailto:contact@yaqout.com" 
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  contact@yaqout.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-soft-gold" />
                <span className="text-white/80">Morocco</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2024 YAQOUT. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;