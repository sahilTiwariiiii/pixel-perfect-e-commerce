import React, { useState } from 'react';
import { Trash2, Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/ProductCard';
import QuantitySelector from '@/components/QuantitySelector';
import RatingStars from '@/components/RatingStars';
import { useLanguage } from '@/contexts/LanguageContext';
import sportsBanner from '@/assets/sports-banner.jpg';

const cartItems = [
  {
    id: '1',
    name: 'Smart Laptop With 15.6 Inch Display, AMD Ryzen5 7430U Processor/16GB RAM...',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&h=200&fit=crop',
    price: 1259,
    rating: 4.5,
    reviewCount: '3.5k',
    freeShipping: true,
    quantity: 1,
  },
];

const recommendedProducts = [
  {
    id: '1',
    name: 'Osmo Pocket 3 Creator Combo, Vlogging Camera With 1" CMOS & 4K/120fps Video, 3-Axis',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=300&fit=crop',
    price: 1921.95,
    originalPrice: 2219,
    rating: 4.5,
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
    name: 'Essentials Pour Homme | The Signature Smoky-Fruity Eau De Parfum for Men | Intense',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=300&h=300&fit=crop',
    price: 69,
    originalPrice: 199,
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
  {
    id: '5',
    name: 'Cool Water Intense Eau De Parfum 125ml',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=300&h=300&fit=crop',
    price: 854.60,
    originalPrice: 1299,
    rating: 4.5,
    reviewCount: '3.5k',
  },
  {
    id: '6',
    name: 'Xiaom Redmi Watch 5 Active - Budget-Friendly Smartwatch with 2" LCD Display, Fitness',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
    price: 1659,
    originalPrice: 2499,
    rating: 4.5,
    reviewCount: '3.5k',
  },
  {
    id: '7',
    name: 'Bournvita Chocolate Drink 500grams',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop',
    price: 17.50,
    originalPrice: 20.01,
    rating: 4.5,
    reviewCount: '3.5k',
  },
  {
    id: '8',
    name: '1200 Watt Hair Dryer Brush Ceramic Dryer And Styler 2 In 1 Professional Black/Beige 1200W',
    image: 'https://images.unsplash.com/photo-1522338242042-2d1c917f7a5a?w=300&h=300&fit=crop',
    price: 73.45,
    originalPrice: 288,
    rating: 4.5,
    reviewCount: '3.5k',
  },
];

const CartPage: React.FC = () => {
  const { t, currencySymbol } = useLanguage();
  const [items, setItems] = useState(cartItems);
  const [couponCode, setCouponCode] = useState('');

  const updateQuantity = (id: string, newQuantity: number) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Layout>
      {/* Banner */}
      <div className="w-full h-32 md:h-48 overflow-hidden">
        <img
          src={sportsBanner}
          alt="50% OFF Sports Shoes"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-card border border-border rounded-lg p-4 flex flex-col sm:flex-row gap-4"
              >
                {/* Product Image */}
                <div className="w-full sm:w-36 h-36 flex-shrink-0 bg-muted rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <h3 className="font-medium text-foreground mb-2 line-clamp-2">{item.name}</h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-2">
                    <RatingStars rating={item.rating} size="sm" />
                    <span className="text-sm text-foreground">{item.rating}</span>
                    <Link to="#" className="text-sm text-primary underline">
                      {item.reviewCount} {t('review')}
                    </Link>
                  </div>

                  {/* Free Shipping */}
                  {item.freeShipping && (
                    <p className="text-xs text-muted-foreground mb-3">{t('free_shipping')}</p>
                  )}

                  {/* Quantity & Actions */}
                  <div className="flex flex-wrap items-center gap-4">
                    <QuantitySelector
                      quantity={item.quantity}
                      onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
                      onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
                    />

                    <button className="flex items-center gap-1 text-sm text-red hover:underline">
                      <Trash2 className="w-4 h-4" />
                      {t('remove')}
                    </button>

                    <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
                      <Heart className="w-4 h-4" />
                      {t('add_to_wishlist')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
              {/* Coupon */}
              <div className="mb-6">
                <p className="text-sm font-medium text-foreground mb-2">{t('got_coupon')}</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder={t('coupon_code')}
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 input-field py-2"
                  />
                  <button className="btn-primary px-4 py-2 text-sm">{t('apply')}</button>
                </div>
              </div>

              {/* Subtotal */}
              <div className="text-center mb-4">
                <p className="text-sm text-primary font-medium">
                  {t('subtotal')} ({itemCount} {itemCount === 1 ? t('item') : t('items')})
                </p>
                <p className="text-3xl font-bold text-foreground">
                  {currencySymbol} {subtotal.toLocaleString()}
                </p>
              </div>

              {/* Checkout Button */}
              <Link
                to="/checkout/delivery"
                className="w-full btn-primary text-center block"
              >
                {t('proceed_checkout')}
              </Link>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <section className="mt-12">
          <h2 className="text-lg md:text-xl font-bold text-foreground mb-4 uppercase">
            {t('you_may_also_like')}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {recommendedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CartPage;
