import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Product = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');

  // Mock product data - in real app, this would come from API
  const product = {
    id: parseInt(id || '1'),
    name: 'Ivory Silk Caftan',
    price: 450,
    images: [
      'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=600&h=800&fit=crop',
    ],
    description: 'This exquisite ivory silk caftan embodies the perfect marriage of traditional Moroccan craftsmanship and contemporary elegance. Hand-embroidered with delicate gold thread, each piece tells a story of heritage and artistry passed down through generations of skilled artisans.',
    details: [
      'Premium silk fabric sourced from Morocco',
      'Hand-embroidered gold thread details',
      'Traditional caftan silhouette with modern fit',
      'Handmade by skilled Moroccan artisans',
      'Dry clean only',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    shipping: {
      domestic: 'Free shipping within Morocco (3-5 business days)',
      international: 'International shipping available (7-14 business days)',
      returns: '30-day return policy for unworn items',
    },
  };

  const relatedProducts = [
    {
      id: 2,
      name: 'Ruby Heritage Dress',
      price: 380,
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=300&h=400&fit=crop',
    },
    {
      id: 3,
      name: 'Sand Jellaba',
      price: 320,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=400&fit=crop',
    },
    {
      id: 4,
      name: 'Emerald Caftan',
      price: 520,
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=300&h=400&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-24 section-padding">
        <div className="container-luxury">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li>/</li>
              <li><Link to="/shop" className="hover:text-primary">Shop</Link></li>
              <li>/</li>
              <li className="text-foreground">{product.name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div>
              <div className="mb-4">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-96 lg:h-[600px] object-cover rounded-lg shadow-elegant"
                />
              </div>
              <div className="flex space-x-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === index
                        ? 'border-primary shadow-elegant'
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-section mb-4">{product.name}</h1>
              <p className="text-2xl font-semibold text-primary mb-6">${product.price}</p>
              
              <div className="mb-8">
                <p className="font-body text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Size Selection */}
              <div className="mb-8">
                <h3 className="font-display text-lg font-medium mb-4">Select Size</h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-lg border-2 font-medium transition-all duration-300 ${
                        selectedSize === size
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border hover:border-primary'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart Button */}
              <button className="btn-luxury w-full mb-8">
                Buy on Etsy
              </button>

              {/* Product Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-lg font-medium mb-3">Product Details</h3>
                  <ul className="space-y-2">
                    {product.details.map((detail, index) => (
                      <li key={index} className="font-body text-muted-foreground flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Shipping & Returns */}
                <div className="border-t border-border pt-6">
                  <details className="group">
                    <summary className="font-display text-lg font-medium cursor-pointer flex items-center justify-between">
                      Shipping & Returns
                      <span className="transition-transform group-open:rotate-180">
                        ↓
                      </span>
                    </summary>
                    <div className="mt-4 space-y-3 text-muted-foreground">
                      <p>• {product.shipping.domestic}</p>
                      <p>• {product.shipping.international}</p>
                      <p>• {product.shipping.returns}</p>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <section className="mt-24">
            <h2 className="text-section mb-8 text-center">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="card-luxury group"
                >
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-lg font-display font-medium mb-2">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-primary font-semibold">
                    ${relatedProduct.price}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Product;