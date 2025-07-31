import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-24 section-padding">
        <div className="container-luxury">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-hero mb-4">Get in Touch</h1>
            <p className="text-subtitle max-w-2xl mx-auto">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-luxury">
              <h2 className="text-section mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary font-body"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary font-body"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary font-body resize-none"
                    required
                  />
                </div>
                
                <button type="submit" className="btn-luxury w-full">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Image & Info */}
            <div>
              <div className="mb-8">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop"
                  alt="Contact us"
                  className="w-full h-64 object-cover rounded-lg shadow-elegant"
                />
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-lg font-medium mb-4 text-foreground">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs text-primary-foreground">✉</span>
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Email</div>
                        <div className="text-muted-foreground">hello@yaqout.com</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs text-primary-foreground">☎</span>
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Phone</div>
                        <div className="text-muted-foreground">+212 5XX XXX XXX</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs text-primary-foreground">📍</span>
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Address</div>
                        <div className="text-muted-foreground">
                          Marrakech, Morocco<br />
                          Medina Quarter
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-lg font-medium mb-4 text-foreground">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>

                <div className="card-luxury bg-gradient-gold">
                  <h3 className="font-display text-lg font-medium mb-2 text-warm-charcoal">
                    Visit Our Atelier
                  </h3>
                  <p className="text-warm-charcoal/80 font-body">
                    Schedule a private appointment to see our artisans at work and 
                    explore our exclusive collection in person.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;