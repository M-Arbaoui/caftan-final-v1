import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Traditional', 'Modern', 'Luxury'];

  const products = [
    {
      id: 1,
      name: 'Ivory Silk Caftan',
      price: 450,
      category: 'Traditional',
      image: '/images/قفطان مغربي 😍🇲🇦Moroccan Luxury Kaftan.jpeg',
    },
    {
      id: 2,
      name: 'Ruby Heritage Caftan',
      price: 380,
      category: 'Luxury',
      image: '/images/𝐌𝐨𝐫𝐨𝐜𝐜𝐚𝐧 𝐂𝐚𝐟𝐭𝐚𝐧 __🇲🇦.jpeg',
    },
    {
      id: 3,
      name: 'Sand Silk Caftan',
      price: 320,
      category: 'Modern',
      image: '/images/Maryamacouture&art _ Caftan ⚜️ ⚜️Pièce unique ⚜️….jpeg',
    },
    {
      id: 4,
      name: 'Emerald Caftan',
      price: 520,
      category: 'Luxury',
      image: '/images/🇲🇦.jpeg',
    },
    {
      id: 5,
      name: 'Gold Thread Caftan',
      price: 450,
      category: 'Traditional',
      image: '/images/🇲🇦✨.jpeg',
    },
    {
      id: 6,
      name: 'Traditional Blue Caftan',
      price: 290,
      category: 'Traditional',
      image: '/images/fba750d8-0905-41ff-8c09-97c607b95d81.jpeg',
    },
    {
      id: 7,
      name: 'Royal Blue Caftan',
      price: 480,
      category: 'Luxury',
      image: '/images/47c04834-8013-4fcd-b61c-8b697df5be7b.jpeg',
    },
    {
      id: 8,
      name: 'Desert Rose Caftan',
      price: 390,
      category: 'Modern',
      image: '/images/Piece of chocolate 🍫🤎 Model @ahlam_elmaaizi….jpeg',
    },
    {
      id: 9,
      name: 'Midnight Caftan',
      price: 340,
      category: 'Modern',
      image: '/images/🌟.jpeg',
    },
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Header Section */}
      <section className="pt-24 pb-12 bg-background">
        <div className="container-luxury">
          <div className="text-center">
            <h1 className="text-hero mb-4">Our Caftan Collection</h1>
            <p className="text-subtitle max-w-2xl mx-auto">
              Discover handcrafted Moroccan caftans that celebrate heritage with contemporary elegance
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8 bg-background">
        <div className="container-luxury">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-elegant'
                    : 'bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link 
                key={product.id}
                to={`/product/${product.id}`}
                className="card-luxury group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="btn-luxury">View Details</span>
                  </div>
                </div>
                <h3 className="text-xl font-display font-medium mb-2 text-foreground">
                  {product.name}
                </h3>
                <p className="text-lg font-semibold text-primary">
                  ${product.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section className="pb-16 bg-background">
        <div className="container-luxury">
          <div className="flex justify-center items-center space-x-4">
            <button className="btn-outline">Previous</button>
            <span className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">1</span>
            <span className="px-4 py-2 text-muted-foreground">2</span>
            <span className="px-4 py-2 text-muted-foreground">3</span>
            <button className="btn-outline">Next</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;