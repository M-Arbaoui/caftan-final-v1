import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import heroImage from '@/assets/hero-image.jpg';
import caftansCollection from '@/assets/caftans-collection.jpg';
import jellabásCollection from '@/assets/jellabas-collection.jpg';
import heritageDresses from '@/assets/heritage-dresses.jpg';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    {
      title: 'Caftans',
      image: caftansCollection,
      description: 'Flowing elegance for every occasion',
    },
    {
      title: 'Jellabas',
      image: jellabásCollection,
      description: 'Traditional comfort, modern style',
    },
    {
      title: 'Heritage Dresses',
      image: heritageDresses,
      description: 'Contemporary takes on timeless designs',
    },
  ];

  const testimonials = [
    {
      text: "YAQOUT pieces make me feel like royalty. The craftsmanship is extraordinary.",
      author: "Amina K., Casablanca",
    },
    {
      text: "I wore my YAQOUT caftan to my wedding celebration. Pure elegance.",
      author: "Sarah M., Dubai",
    },
    {
      text: "Finally, fashion that honors our heritage while feeling completely modern.",
      author: "Leila R., Paris",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
        
        <div className={`relative z-10 text-center text-white px-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-hero mb-6 leading-tight">
            Timeless Moroccan<br />Elegance
          </h1>
          <p className="text-subtitle mb-8 max-w-2xl mx-auto">
            Handcrafted caftans and jellabas where heritage meets haute couture
          </p>
          <Link 
            to="/shop" 
            className="btn-luxury inline-block"
          >
            Explore the Collection
          </Link>
        </div>

        {/* Scroll Down Icon */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4">Our Collections</h2>
            <p className="text-subtitle max-w-2xl mx-auto">
              Each piece tells a story of Moroccan artistry, crafted with love and attention to detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div 
                key={category.title}
                className={`card-luxury group cursor-pointer animate-on-scroll ${
                  isVisible ? 'in-view' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-display font-medium mb-2 text-foreground">
                  {category.title}
                </h3>
                <p className="text-muted-foreground font-body">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-padding bg-sand/20">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-section mb-8">Born in Morocco. Adored Worldwide.</h2>
            <p className="text-lg font-body leading-relaxed text-muted-foreground mb-8">
              In the heart of Morocco, where ancient souks meet modern boulevards, YAQOUT was born. 
              Our journey began with a simple belief: that traditional Moroccan craftsmanship deserves 
              a place in the contemporary woman's wardrobe. Each piece is a bridge between worlds, 
              honoring our ancestors while embracing the future.
            </p>
            <div className="italic text-xl font-display text-primary">
              "Elegance is when tradition whispers into the future."
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4">Loved by Women Worldwide</h2>
            <p className="text-subtitle">Stories from our cherished clients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="card-luxury text-center"
              >
                <div className="text-primary text-4xl mb-4">"</div>
                <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="text-sm font-medium text-foreground">
                  {testimonial.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Etsy Shop Teaser */}
      <section className="section-padding bg-gradient-gold">
        <div className="container-luxury text-center">
          <h2 className="text-section mb-4 text-warm-charcoal">Shop YAQOUT on Etsy</h2>
          <p className="text-subtitle text-warm-charcoal/80 mb-8 max-w-2xl mx-auto">
            Discover our exclusive designs and limited collections available on our Etsy boutique
          </p>
          <button className="btn-luxury">
            Visit Our Etsy Boutique
          </button>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-section mb-4">Join the Inner Circle</h2>
            <p className="text-subtitle mb-8">
              Be the first to discover new collections and exclusive offers
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary font-body"
                required
              />
              <button
                type="submit"
                className="btn-luxury whitespace-nowrap"
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
