import React, { useState } from 'react';
import { Trash2, Star } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import QuantitySelector from '@/components/QuantitySelector';
import RatingStars from '@/components/RatingStars';
import { useLanguage } from '@/contexts/LanguageContext';
import groceryBanner from '@/assets/grocery-banner.jpg';

const wishlistItems = [
  {
    id: '1',
    name: 'Redmi Watch 5 Active - Budget-Friendly Smartwatch with 2" LCD Display, Fitness',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop',
    price: 1259,
    rating: 4.5,
    reviewCount: '3.5k',
    freeShipping: true,
    addedDate: 'January 2025',
    quantity: 1,
  },
  {
    id: '2',
    name: 'Cool Water Intense Eau De Parfum 125ml',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=200&h=200&fit=crop',
    price: 1259,
    rating: 4.5,
    reviewCount: '3.5k',
    freeShipping: true,
    addedDate: 'January 2025',
    quantity: 1,
  },
  {
    id: '3',
    name: 'Opti-Men Post-Workout - 90 Tablets',
    image: 'https://images.unsplash.com/photo-1544991875-5dc1b05f607d?w=200&h=200&fit=crop',
    price: 1259,
    rating: 4.5,
    reviewCount: '3.5k',
    freeShipping: true,
    addedDate: 'January 2025',
    quantity: 1,
  },
  {
    id: '4',
    name: 'Sleep Headphones Sleep Mask with Bluetooth Headphones RENPHO Ultra Soft 3D Blackout',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=200&h=200&fit=crop',
    price: 1259,
    rating: 4.5,
    reviewCount: '3.5k',
    freeShipping: true,
    addedDate: 'January 2025',
    quantity: 1,
  },
];

const WishlistPage: React.FC = () => {
  const { t, currencySymbol } = useLanguage();
  const [items, setItems] = useState(wishlistItems);

  const updateQuantity = (id: string, newQuantity: number) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Layout>
      {/* Banner */}
      <div className="w-full h-32 md:h-48 overflow-hidden">
        <img
          src={groceryBanner}
          alt="Daily Grocery Best Quality"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-card border border-border rounded-lg p-4 flex flex-col md:flex-row gap-4"
            >
              {/* Product Image */}
              <div className="w-full md:w-40 h-40 flex-shrink-0 bg-muted rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Product Details */}
              <div className="flex-1">
                <h3 className="font-medium text-foreground mb-2">{item.name}</h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-2">
                  <RatingStars rating={item.rating} size="sm" />
                  <span className="text-sm text-foreground">{item.rating}</span>
                  <span className="text-sm text-primary underline cursor-pointer">
                    {item.reviewCount} {t('review')}
                  </span>
                </div>

                {/* Free Shipping */}
                {item.freeShipping && (
                  <p className="text-xs text-muted-foreground mb-3">{t('free_shipping')}</p>
                )}

                {/* Quantity */}
                <QuantitySelector
                  quantity={item.quantity}
                  onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
                  onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
                />
              </div>

              {/* Right Section */}
              <div className="flex flex-col items-end justify-between md:w-48">
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">
                    {t('item_added')} {item.addedDate}
                  </p>
                  <p className="text-2xl font-bold text-foreground mt-2">
                    {currencySymbol} {item.price.toLocaleString()}
                  </p>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                  <button className="btn-primary px-6 py-2 text-sm">{t('add_to_cart')}</button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="flex items-center justify-center gap-1 text-sm text-red hover:underline"
                  >
                    <Trash2 className="w-4 h-4" />
                    {t('remove')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default WishlistPage;
