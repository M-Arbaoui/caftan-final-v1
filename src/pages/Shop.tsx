import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Caftans', 'Jellabas', 'Dresses'];

  const products = [
    {
      id: 1,
      name: 'Ivory Silk Caftan',
      price: 450,
      category: 'Caftans',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=500&fit=crop',
    },
    {
      id: 2,
      name: 'Ruby Heritage Dress',
      price: 380,
      category: 'Dresses',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=500&fit=crop',
    },
    {
      id: 3,
      name: 'Sand Jellaba',
      price: 320,
      category: 'Jellabas',
      image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=400&h=500&fit=crop',
    },
    {
      id: 4,
      name: 'Emerald Caftan',
      price: 520,
      category: 'Caftans',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=500&fit=crop',
    },
    {
      id: 5,
      name: 'Gold Thread Dress',
      price: 450,
      category: 'Dresses',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=500&fit=crop',
    },
    {
      id: 6,
      name: 'Traditional Jellaba',
      price: 290,
      category: 'Jellabas',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=500&fit=crop',
    },
    {
      id: 7,
      name: 'Royal Blue Caftan',
      price: 480,
      category: 'Caftans',
      image: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=400&h=500&fit=crop',
    },
    {
      id: 8,
      name: 'Desert Rose Dress',
      price: 390,
      category: 'Dresses',
      image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=500&fit=crop',
    },
    {
      id: 9,
      name: 'Midnight Jellaba',
      price: 340,
      category: 'Jellabas',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=500&fit=crop',
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
            <h1 className="text-hero mb-4">Our Collection</h1>
            <p className="text-subtitle max-w-2xl mx-auto">
              Discover handcrafted pieces that celebrate Moroccan heritage with contemporary elegance
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