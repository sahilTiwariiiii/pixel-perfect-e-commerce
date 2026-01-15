import React from 'react';
import { Filter, Pencil, Trash2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import AccountSidebar from '@/components/AccountSidebar';
import RatingStars from '@/components/RatingStars';
import { useLanguage } from '@/contexts/LanguageContext';

const reviews = [
  { id: '1', product: 'Xiaomi Redmi Watch 5 Active - Budget-Friendly Smartwatch with 2" LCD Display, Fitness', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100', rating: 5, date: 'Jan 04, 2026', text: 'Great smartwatch with a bright, responsive display and smooth performance. Health tracking and notifications work accurately for daily use. Comfortable design, good battery life, and easy smartphone connectivity.' },
  { id: '2', product: 'BLACKROOT Black half sleeve tshirt perfect for men', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100', rating: 5, date: 'Jul 01, 2025', text: 'Very comfortable loose t-shirt with a soft, breathable fabric. The relaxed fit looks stylish and feels perfect for all-day wear. Good quality stitching and color stays fresh after washing.' },
  { id: '3', product: 'XWH-CH520 Black Wireless Bluetooth On Ear With Mic For Phone Call Beige', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100', rating: 5, date: 'Mar 12, 2024', text: 'Excellent sound quality with clear audio and deep bass. Comfortable fit makes it perfect for long listening sessions.' },
];

const ReviewsPage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-primary mb-6">{t('account')}</h1>
        <div className="flex flex-col md:flex-row gap-6">
          <AccountSidebar />
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">{t('my_reviews')}</h2>
              <button className="flex items-center gap-2 text-sm border border-border px-4 py-2 rounded-lg hover:bg-secondary transition-colors">
                <Filter className="w-4 h-4" />
                {t('recent')}
              </button>
            </div>
            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                      <img src={review.image} alt={review.product} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground mb-2">{review.product}</h3>
                      <div className="flex items-center gap-3 mb-2">
                        <RatingStars rating={review.rating} size="sm" />
                        <span className="font-semibold text-lg">{review.rating}.0</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">{t('reviewed_on')} {review.date}</p>
                      <p className="text-sm text-muted-foreground">{review.text}</p>
                      <div className="flex gap-3 mt-4 pt-4 border-t border-border">
                        <button className="flex items-center gap-1 text-xs border border-border px-3 py-1.5 rounded-lg hover:bg-secondary transition-colors">
                          <Pencil className="w-3 h-3" />
                          {t('edit_review')}
                        </button>
                        <button className="flex items-center gap-1 text-xs text-red hover:underline">
                          <Trash2 className="w-3 h-3" />
                          {t('delete')}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReviewsPage;
