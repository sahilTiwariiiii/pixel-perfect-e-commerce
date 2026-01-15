import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ChevronLeft, ChevronRight, Check, Star, ThumbsUp } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/ProductCard';
import RatingStars from '@/components/RatingStars';
import { useLanguage } from '@/contexts/LanguageContext';
import gamingBanner from '@/assets/gaming-laptop-product-banner.jpg';

const productImages = [
  'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500&h=500&fit=crop',
];

const colorVariants = [
  { name: 'Grey', color: '#4a4a4a' },
  { name: 'Silver', color: '#c0c0c0' },
];

const reviews = [
  {
    id: '1',
    user: 'Suchita Kumar',
    date: '27 Dec 2024',
    rating: 4.5,
    text: 'Very nice. I am impressed.',
    verified: true,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=100&h=100&fit=crop',
    likes: 24,
  },
  {
    id: '2',
    user: 'Suchita Kumar',
    date: '27 Dec 2024',
    rating: 4,
    text: 'Very nice. I am impressed.',
    verified: true,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=100&h=100&fit=crop',
    likes: 18,
  },
];

const ratingBreakdown = [
  { stars: 5, percentage: 88 },
  { stars: 4, percentage: 75 },
  { stars: 3, percentage: 55 },
  { stars: 2, percentage: 55 },
  { stars: 1, percentage: 25 },
];

const relatedProducts = [
  {
    id: '1',
    name: 'Apple iPhone 17 Pro Max 256 GB Cosmic Orange 5G eSim only) With FaceTime - Middle East Version',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop',
    price: 4506,
    originalPrice: 4508,
    rating: 4.8,
    reviewCount: '3.5k',
  },
  {
    id: '2',
    name: 'Acemgaic Gaming Laptop With 15.6 Inch Display, AMD Ryzen5 7430U Processor/16GB RAM',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=300&h=300&fit=crop',
    price: 1659,
    originalPrice: 2499,
    rating: 4.5,
    reviewCount: '3.5k',
  },
  {
    id: '3',
    name: 'Apple iPhone 16 Pro Max 256GB Desert Titanium 5G With FaceTime - Middle East Version',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop',
    price: 4299,
    originalPrice: 4506,
    rating: 4.5,
    reviewCount: '3.5k',
  },
  {
    id: '4',
    name: 'Front Loading Washing Machine WFSQ8012VMT, 1200RPM, SteamWash, Durable Inverter, Quick',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=300&h=300&fit=crop',
    price: 854.60,
    originalPrice: 1299,
    rating: 4.5,
    reviewCount: '3.5k',
  },
];

const ProductDetail: React.FC = () => {
  const { t, currencySymbol } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('Grey');
  const [isWishlisted, setIsWishlisted] = useState(false);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <Layout>
      {/* Banner */}
      <div className="w-full h-24 md:h-32 overflow-hidden relative">
        <img
          src={gamingBanner}
          alt="Gaming Laptop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
          <div className="container mx-auto px-4">
            <p className="text-primary-foreground text-xs md:text-sm opacity-80">Upgrade Your Laptop Experience</p>
            <h2 className="text-primary-foreground text-lg md:text-2xl font-bold">Gaming laptop</h2>
            <p className="text-primary-foreground text-xs opacity-80">Next-Gen Laptops for Work & Play</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Product Section */}
        <div className="bg-card rounded-xl border border-border p-4 md:p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Image Gallery */}
            <div className="lg:col-span-4">
              {/* Main Image */}
              <div className="relative aspect-square bg-muted rounded-lg overflow-hidden mb-4">
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="absolute top-3 right-3 z-10 w-8 h-8 bg-background/80 rounded-full flex items-center justify-center hover:bg-background transition-colors"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red text-red' : 'text-muted-foreground'}`} />
                </button>
                <img
                  src={productImages[selectedImage]}
                  alt="Product"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Thumbnails with navigation */}
              <div className="relative">
                <button
                  onClick={prevImage}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-7 h-7 bg-background border border-border rounded-full flex items-center justify-center hover:bg-secondary"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                
                <div className="flex gap-2 justify-center px-8">
                  {productImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`w-16 h-16 rounded-md overflow-hidden border-2 transition-colors ${
                        selectedImage === idx ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>

                <button
                  onClick={nextImage}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-7 h-7 bg-background border border-border rounded-full flex items-center justify-center hover:bg-secondary"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:col-span-5">
              <h1 className="text-lg md:text-xl font-semibold text-foreground mb-3">
                Acemgaic Gaming Laptop With 15.6 Inch Display, AMD Ryzen5 7430U Processor/16GB RAM...
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <RatingStars rating={4.5} size="sm" />
                <span className="font-medium">4.5</span>
                <Link to="#reviews" className="text-sm text-primary underline">3.5k review</Link>
              </div>

              {/* Color Selection */}
              <div className="mb-4">
                <div className="flex items-center gap-4">
                  {colorVariants.map((variant) => (
                    <button
                      key={variant.name}
                      onClick={() => setSelectedColor(variant.name)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-colors ${
                        selectedColor === variant.name
                          ? 'border-primary bg-secondary'
                          : 'border-border hover:border-primary'
                      }`}
                    >
                      <div
                        className="w-4 h-4 rounded-full border border-border"
                        style={{ backgroundColor: variant.color }}
                      />
                      <span className="text-sm">{variant.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-foreground">{currencySymbol} 1659.00</span>
                  <span className="text-sm text-muted-foreground line-through">2499.00</span>
                </div>
                <p className="text-sm text-green mt-1 font-medium">Get in tomorrow | orders within 2hr10m</p>
              </div>

              {/* Payment Discount */}
              <div className="flex gap-3 mb-4">
                <div className="flex-1 bg-gradient-to-r from-primary to-purple-light rounded-lg p-3 text-primary-foreground">
                  <p className="text-xs font-medium">Easy 4 month</p>
                  <p className="text-xs">Installment <span className="opacity-80">for new user</span></p>
                </div>
                <div className="flex-1 bg-gradient-to-r from-accent to-orange-dark rounded-lg p-3 text-accent-foreground">
                  <p className="text-xs font-medium">Earn 5% cashback</p>
                  <p className="text-xs opacity-80">on credit card</p>
                </div>
              </div>
            </div>

            {/* Seller & Actions */}
            <div className="lg:col-span-3">
              {/* Seller Card */}
              <div className="bg-secondary/50 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-12 h-12 bg-green rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground text-xs font-bold">SHOP</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Sold by</p>
                    <p className="font-semibold text-sm">DEALER NAME</p>
                    <p className="text-xs text-muted-foreground">2.1k reviews</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-3">
                  We've got some nice little tech shop you can come over here...
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-2 mb-4">
                {['1-Year Warranty', 'Free Delivery', 'Easy & Hassle-Free Returns', '100% Secure Payments'].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <div className="w-4 h-4 bg-green rounded flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors mb-3">
                BUY NOW
              </button>
              <button className="w-full border-2 border-primary text-primary py-3 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>

        {/* Product Overview */}
        <div className="bg-card rounded-xl border border-border p-4 md:p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">Product Overview</h2>
          
          <h3 className="font-medium mb-3">Highlights</h3>
          <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5 mb-6">
            <li>Powerful performance, efficient multitasking. Equipped with AMD Ryzen 5 7430U processor, featuring 6 cores and 12 threads, with a base frequency of 2.3GHz and an acceleration frequency up to 4.3GHz. It can easily handle office work, design tasks and light gaming requirements, ensuring smooth multitasking without any stress.</li>
            <li>High-speed and large memory, with rapid response. Equipped with 16GB DDR4 memory, it provides a stable and efficient operating environment, and also supports multi-program parallel operation; 512GB PCle3.0 NVMe solid-state drive, with read and write speeds for exceeding SATA SSD, significantly improving system startup and file transfer efficiency.</li>
            <li>Light and portable, with full HD visual experience. 15.6-inch IPS screen, 1920×1080 resolution, vivid and detailed colors, narrow bezel design enhances screen ratio. Lightweight and portable, it balances performance and mobility, suitable for business travel or daily commuting.</li>
            <li>Long-lasting battery life, fast charging. Equipped with a large-capacity battery, it offers extended battery life and is compatible with intelligent power-saving technology; it supports fast charging, allowing you to restore your battery quickly with just a short rest, meeting your needs for all-day work and entertainment.</li>
            <li>Rich interfaces, no worries about expansion. Equipped with mainstream interfaces such as USB 3.2, Type-C, HDMI etc., it supports external displays, storage devices and various peripherals; Dual-band Wi-Fi 6 and Bluetooth 5.2 ensure high-speed wireless connection, suitable for diverse usage scenarios.</li>
          </ul>
        </div>

        {/* Ratings & Reviews */}
        <div className="bg-card rounded-xl border border-border p-4 md:p-6 mb-8" id="reviews">
          <h2 className="text-lg font-semibold mb-4">
            Ratings & Reviews of 220ML Portable Oral Irrigator Cordless Dental Water Flosser For Teeth Cleaning Teeth Whitening 3 Pressure...
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Overall Rating */}
            <div className="flex items-center gap-4">
              <div>
                <div className="text-4xl font-bold">4.6/5</div>
                <RatingStars rating={4.6} size="md" />
                <p className="text-sm text-muted-foreground mt-1">88 rating</p>
              </div>
            </div>

            {/* Rating Breakdown */}
            <div className="md:col-span-2 space-y-2">
              {ratingBreakdown.map((item) => (
                <div key={item.stars} className="flex items-center gap-2">
                  <span className="text-sm w-4">{item.stars}</span>
                  <Star className="w-4 h-4 text-yellow fill-yellow" />
                  <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-10">{item.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Reviews */}
          <h3 className="font-semibold mb-4">Product Reviews</h3>
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-border pb-6 last:border-0">
                <RatingStars rating={review.rating} size="sm" />
                
                <div className="flex items-center gap-2 mt-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                    {review.user.charAt(0)}
                  </div>
                  <span className="text-sm font-medium">{review.user}</span>
                  {review.verified && (
                    <span className="text-xs bg-green/10 text-green px-2 py-0.5 rounded-full">
                      Verified Purchase
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mb-3">{review.date}</p>

                {review.image && (
                  <img
                    src={review.image}
                    alt="Review"
                    className="w-16 h-16 rounded-lg object-cover mb-3"
                  />
                )}

                <p className="text-sm text-foreground mb-3">{review.text}</p>

                <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{review.likes}</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* You May Also Like */}
        <section>
          <h2 className="text-lg md:text-xl font-bold text-foreground mb-4 uppercase">
            YOU MAY ALSO LIKE
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProductDetail;
