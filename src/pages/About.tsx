import Header from '@/components/Header';
import Footer from '@/components/Footer';
import founderImage from '@/assets/about-founder.jpg';

const About = () => {
  const timeline = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Founded in the heart of Marrakech with a vision to preserve Moroccan craftsmanship.',
    },
    {
      year: '2021',
      title: 'First Collection',
      description: 'Launched our debut collection of handcrafted caftans, earning recognition from fashion enthusiasts.',
    },
    {
      year: '2022',
      title: 'International Recognition',
      description: 'Featured in prestigious fashion magazines and worn by celebrities worldwide.',
    },
    {
      year: '2023',
      title: 'Artisan Partnership',
      description: 'Expanded our network of skilled artisans, ensuring fair trade and quality craftsmanship.',
    },
    {
      year: '2024',
      title: 'Global Reach',
      description: 'Opened our Etsy boutique, bringing Moroccan elegance to customers worldwide.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-background">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-hero mb-6">Our Story</h1>
            <p className="text-subtitle">
              YAQOUT was born from the hands of Moroccan artisans and the hearts of women 
              who carry elegance wherever they go.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-padding bg-sand/20">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-section mb-6">Where Tradition Meets Innovation</h2>
              <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
                <p>
                  In the bustling souks of Marrakech, where the scent of jasmine mingles with 
                  the sounds of ancient crafts, YAQOUT discovered its calling. Our founder, 
                  inspired by her grandmother's stories of royal seamstresses, envisioned a 
                  brand that would honor Morocco's textile heritage while embracing the needs 
                  of the modern woman.
                </p>
                <p>
                  Each YAQOUT piece is more than clothing—it's a bridge between worlds. 
                  We work exclusively with master artisans who have inherited techniques 
                  passed down through generations. Their skilled hands transform premium 
                  fabrics into wearable art, ensuring that every stitch carries the spirit 
                  of Morocco.
                </p>
                <p>
                  Today, YAQOUT is worn by women from Casablanca to Dubai, from Paris to 
                  New York. Yet our heart remains in Morocco, committed to preserving 
                  traditional craftsmanship while creating employment opportunities for 
                  skilled artisans in their communities.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={founderImage}
                alt="YAQOUT Founder"
                className="w-full rounded-lg shadow-luxury"
              />
              <div className="absolute -bottom-4 -right-4 bg-soft-gold p-6 rounded-lg shadow-elegant">
                <div className="italic font-display text-warm-charcoal">
                  "Elegance is when tradition whispers into the future."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4">Our Journey</h2>
            <p className="text-subtitle">Milestones that shaped our story</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex items-start mb-12 last:mb-0">
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <div className="text-2xl font-display font-medium text-primary">
                    {item.year}
                  </div>
                </div>
                <div className="flex-shrink-0 w-4 mt-2 mr-8">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-16 bg-border ml-1.5 mt-2"></div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-medium mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gradient-gold">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-section mb-8 text-warm-charcoal">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-foreground">♦</span>
                </div>
                <h3 className="font-display text-lg font-medium mb-2 text-warm-charcoal">
                  Authenticity
                </h3>
                <p className="font-body text-warm-charcoal/80">
                  Every piece honors traditional Moroccan craftsmanship and cultural heritage.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-foreground">✦</span>
                </div>
                <h3 className="font-display text-lg font-medium mb-2 text-warm-charcoal">
                  Quality
                </h3>
                <p className="font-body text-warm-charcoal/80">
                  We source the finest materials and work with master artisans for exceptional quality.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-foreground">✧</span>
                </div>
                <h3 className="font-display text-lg font-medium mb-2 text-warm-charcoal">
                  Empowerment
                </h3>
                <p className="font-body text-warm-charcoal/80">
                  Supporting artisan communities and empowering women through fashion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-section mb-8">A Message from Our Founder</h2>
            <div className="card-luxury">
              <div className="text-4xl text-primary mb-6">"</div>
              <p className="font-body text-lg leading-relaxed text-muted-foreground mb-6">
                When I founded YAQOUT, I dreamed of creating more than a fashion brand. 
                I envisioned a movement that celebrates the artistry of Moroccan women, 
                honors our ancestors' wisdom, and empowers the next generation of creators. 
                Every time you wear a YAQOUT piece, you become part of this story—a story 
                of heritage, elegance, and the timeless beauty of Moroccan craftsmanship.
              </p>
              <div className="font-display text-lg text-foreground">
                — Aicha, Founder & Creative Director
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;