import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, ShoppingBag, Sparkles, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    {
      title: 'Traditional Caftans',
      image: '/images/قفطان مغربي 😍🇲🇦Moroccan Luxury Kaftan.jpeg',
      description: 'Classic Moroccan elegance with intricate embroidery',
      price: 'From $189',
    },
    {
      title: 'Modern Caftans',
      image: '/images/Maryamacouture&art _ Caftan ⚜️ ⚜️Pièce unique ⚜️….jpeg',
      description: 'Contemporary designs with traditional craftsmanship',
      price: 'From $149',
    },
    {
      title: 'Luxury Caftans',
      image: '/images/𝐌𝐨𝐫𝐨𝐜𝐜𝐚𝐧 𝐂𝐚𝐟𝐭𝐚𝐧 __🇲🇦.jpeg',
      description: 'Premium caftans for special occasions',
      price: 'From $229',
    },
  ];

  const testimonials = [
    {
      text: "YAQOUT caftans make me feel like royalty. The craftsmanship is extraordinary.",
      author: "Amina K.",
      location: "Casablanca",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      text: "I wore my YAQOUT caftan to my wedding celebration. Pure elegance.",
      author: "Sarah M.",
      location: "Dubai",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      text: "Finally, caftans that honor our heritage while feeling completely modern.",
      author: "Leila R.",
      location: "Paris",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
  ];

  if (isLoading) {
    return null; // PageLoader will be handled in App.tsx
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
          style={{ 
            backgroundImage: `url(/images/hero-caftan.jpg.jpeg)`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        >
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
        
        <div className={`relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-medium mb-4 sm:mb-6 leading-tight animate-fade-in-up">
            Timeless Moroccan<br />
            <span className="text-soft-gold animate-pulse">Caftans</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-subtitle mb-6 sm:mb-8 max-w-2xl mx-auto px-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Handcrafted Moroccan caftans where heritage meets haute couture
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link 
              to="/shop" 
              className="btn-luxury inline-flex items-center group text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover-lift w-full sm:w-auto justify-center"
            >
              Explore Our Caftans
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <button className="btn-outline border-white text-white hover:bg-white hover:text-foreground text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover-lift w-full sm:w-auto justify-center">
              Watch Our Story
            </button>
          </div>
        </div>

        {/* Scroll Down Icon */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm hover:border-white/80 transition-colors duration-300">
            <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="section-padding bg-gradient-to-br from-ivory to-sand/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c53030' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container-luxury relative z-10">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium mb-3 sm:mb-4 text-deep-ruby">Our Caftan Collections</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-subtitle max-w-2xl mx-auto px-4 text-warm-charcoal/80">
              Each caftan tells a story of Moroccan artistry, crafted with love and attention to detail
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {categories.map((category, index) => (
              <div 
                key={category.title}
                className={`card-luxury group cursor-pointer animate-on-scroll bg-white/80 backdrop-blur-sm border border-soft-gold/20 hover:border-soft-gold/40 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover-lift ${
                  isVisible ? 'in-view' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredCategory(index)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className="relative overflow-hidden rounded-lg mb-4 sm:mb-6">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <button className="p-1.5 sm:p-2 bg-deep-ruby/20 backdrop-blur-sm rounded-full text-deep-ruby hover:bg-deep-ruby/30 transition-all duration-300 transform hover:scale-110 hover-glow">
                      <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                    <span className="px-2 sm:px-3 py-1 bg-deep-ruby text-white text-xs sm:text-sm rounded-full transform hover:scale-105 transition-transform duration-300">
                      {category.price}
                    </span>
                  </div>
                  {/* Hover Effect Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-deep-ruby/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4`}>
                    <span className="text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      View Collection
                    </span>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-display font-medium mb-2 text-deep-ruby group-hover:text-deep-ruby/80 transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground font-body mb-3 sm:mb-4">
                  {category.description}
                </p>
                <Link 
                  to="/shop" 
                  className="inline-flex items-center text-deep-ruby hover:text-deep-ruby/80 transition-all duration-300 group text-sm sm:text-base transform hover:translate-x-1 hover-text-shimmer"
                >
                  Shop Caftans
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-padding bg-gradient-to-br from-deep-ruby/5 to-soft-gold/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-30" />
        {/* Floating Elements - Hidden on mobile for performance */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
          <div className="absolute top-20 left-10 w-20 h-20 border border-soft-gold/20 rounded-full animate-spin-slow" />
          <div className="absolute bottom-20 right-10 w-16 h-16 border border-deep-ruby/20 rounded-full animate-spin-slow-reverse" />
        </div>
        
        <div className="container-luxury relative z-10">
          <div className="max-w-4xl mx-auto text-center px-4 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium mb-6 sm:mb-8 text-deep-ruby">Born in Morocco. Adored Worldwide.</h2>
            <p className="text-sm sm:text-base md:text-lg font-body leading-relaxed text-warm-charcoal/80 mb-6 sm:mb-8">
              In the heart of Morocco, where ancient souks meet modern boulevards, YAQOUT was born. 
              Our journey began with a simple belief: that traditional Moroccan caftan craftsmanship deserves 
              a place in the contemporary woman's wardrobe. Each caftan is a bridge between worlds, 
              honoring our ancestors while embracing the future.
            </p>
            <div className="italic text-lg sm:text-xl font-display text-deep-ruby mb-6 sm:mb-8 animate-pulse">
              "Elegance is when tradition whispers into the future."
            </div>
            <Link to="/about" className="btn-luxury bg-deep-ruby text-white hover:bg-deep-ruby/90 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover-lift">
              Learn Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-br from-ivory to-sand/20 relative overflow-hidden">
        <div className="container-luxury">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium mb-3 sm:mb-4 text-deep-ruby">Loved by Women Worldwide</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-subtitle px-4 text-warm-charcoal/80">Stories from our cherished caftan clients</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="card-luxury text-center group bg-white/80 backdrop-blur-sm border border-soft-gold/20 hover:border-soft-gold/40 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-soft-gold fill-current animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                  ))}
                </div>
                <p className="font-body text-sm sm:text-base text-warm-charcoal/80 mb-4 sm:mb-6 leading-relaxed italic group-hover:text-warm-charcoal transition-colors duration-300">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-soft-gold/30 transform group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="text-left">
                    <div className="font-medium text-sm sm:text-base text-deep-ruby">{testimonial.author}</div>
                    <div className="text-xs sm:text-sm text-warm-charcoal/60">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gradient-to-br from-soft-gold/20 to-deep-ruby/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-20" />
        {/* Animated Background Elements - Hidden on mobile for performance */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-soft-gold/5 rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-deep-ruby/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container-luxury text-center relative z-10 px-4 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium mb-3 sm:mb-4 text-deep-ruby">Get in Touch</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-subtitle text-warm-charcoal/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Ready to discover your perfect caftan? Contact us directly for personalized service
          </p>
          <a 
            href="https://wa.me/212677196185" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-luxury bg-deep-ruby text-white hover:bg-deep-ruby/90 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 transform hover:scale-105 transition-all duration-300 hover:shadow-xl group inline-flex items-center hover-lift"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            WhatsApp: +212 677 196 185
          </a>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-to-br from-ivory to-sand/30 relative overflow-hidden">
        <div className="container-luxury">
          <div className="max-w-2xl mx-auto text-center px-4 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium mb-3 sm:mb-4 text-deep-ruby">Join the Inner Circle</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-subtitle mb-6 sm:mb-8 text-warm-charcoal/80">
              Be the first to discover new caftan collections and exclusive offers
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-lg border border-soft-gold/30 bg-white/80 focus:outline-none focus:ring-2 focus:ring-deep-ruby font-body transition-all duration-300 text-sm sm:text-base transform hover:scale-105 focus:scale-105 focus-ring"
                required
              />
              <button
                type="submit"
                className="btn-luxury bg-deep-ruby text-white hover:bg-deep-ruby/90 whitespace-nowrap text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover-lift"
              >
                Join the Inner Circle
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
