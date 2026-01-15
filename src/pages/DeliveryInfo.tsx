import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const DeliveryInfoPage: React.FC = () => {
  const { t, currencySymbol } = useLanguage();
  const [label, setLabel] = useState<'office' | 'home'>('home');

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Delivery Form */}
          <div className="lg:col-span-2 bg-card border border-border rounded-xl p-6">
            <h2 className="text-xl font-semibold text-foreground mb-6">{t('delivery_information')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t('full_name')}</label>
                <input 
                  type="text" 
                  placeholder={t('enter_full_name')} 
                  className="w-full h-11 px-4 border border-border rounded-lg bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" 
                />
              </div>

              {/* Region */}
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t('region')}</label>
                <div className="relative">
                  <select className="w-full h-11 px-4 pr-10 border border-border rounded-lg bg-background text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-muted-foreground">
                    <option>{t('choose_region')}</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t('phone_number')}</label>
                <input 
                  type="tel" 
                  placeholder={t('enter_phone')} 
                  className="w-full h-11 px-4 border border-border rounded-lg bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" 
                />
              </div>

              {/* City */}
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t('city')}</label>
                <div className="relative">
                  <select className="w-full h-11 px-4 pr-10 border border-border rounded-lg bg-background text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-muted-foreground">
                    <option>{t('choose_city')}</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              {/* Building/Street */}
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t('building_street')}</label>
                <input 
                  type="text" 
                  placeholder={t('please_enter')} 
                  className="w-full h-11 px-4 border border-border rounded-lg bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" 
                />
              </div>

              {/* Area */}
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t('area')}</label>
                <div className="relative">
                  <select className="w-full h-11 px-4 pr-10 border border-border rounded-lg bg-background text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-muted-foreground">
                    <option>{t('choose_area')}</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              {/* Colony/Landmark */}
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t('colony_landmark')}</label>
                <input 
                  type="text" 
                  placeholder={t('please_enter')} 
                  className="w-full h-11 px-4 border border-border rounded-lg bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" 
                />
              </div>

              {/* Address */}
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t('address')}</label>
                <input 
                  type="text" 
                  placeholder={t('address_example')} 
                  className="w-full h-11 px-4 border border-border rounded-lg bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" 
                />
              </div>
            </div>

            {/* Label Selection */}
            <div className="mt-6">
              <p className="text-sm font-medium text-foreground mb-3">{t('select_label')}</p>
              <div className="flex gap-3">
                <button 
                  onClick={() => setLabel('office')} 
                  className={`px-8 py-2.5 rounded-full text-sm font-medium transition-colors ${
                    label === 'office' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'border border-border text-foreground hover:bg-secondary'
                  }`}
                >
                  {t('office').toUpperCase()}
                </button>
                <button 
                  onClick={() => setLabel('home')} 
                  className={`px-8 py-2.5 rounded-full text-sm font-medium transition-colors ${
                    label === 'home' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'border border-border text-foreground hover:bg-secondary'
                  }`}
                >
                  {t('home').toUpperCase()}
                </button>
              </div>
            </div>

            <button className="mt-6 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              {t('save')}
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1 space-y-6">
            {/* Promotion */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">{t('promotion')}</h3>
              <div className="flex gap-2 mb-6">
                <input 
                  type="text" 
                  placeholder={t('coupon_code')} 
                  className="flex-1 h-11 px-4 border border-border rounded-lg bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" 
                />
                <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                  {t('apply')}
                </button>
              </div>

              <p className="text-sm text-muted-foreground mb-4">{t('invoice_contact')}</p>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground">{t('order_detail')}</span>
                  <span className="text-sm text-primary cursor-pointer hover:underline">{t('edit')}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{t('items_total')} (1 {t('items')})</span>
                  <span className="text-foreground font-medium">{currencySymbol}148.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{t('delivery_fee')}</span>
                  <span className="text-foreground font-medium">{currencySymbol} 20</span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between">
                  <span className="font-semibold text-foreground">{t('total')}:</span>
                  <span className="font-bold text-lg text-foreground">{currencySymbol}148.20</span>
                </div>
              </div>

              <button className="w-full mt-4 bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                {t('apply')}
              </button>
            </div>

            {/* Cart Item Preview */}
            <div className="bg-card border border-border rounded-xl p-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="text-sm font-medium mb-1">{t('delivery_or_pickup')}</div>
                  <div className="text-lg font-bold text-foreground">{currencySymbol} 20</div>
                  <div className="text-xs text-muted-foreground">Standard delivery</div>
                  <div className="text-xs text-green font-medium">Get by 12-13 jan</div>
                </div>
                <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1594035910387-fea47794261f?w=100&h=100&fit=crop" 
                    alt="Product" 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-foreground line-clamp-2">Cool Water Intense Eau De Parfum 125ml</h4>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-bold text-foreground">{currencySymbol}148.00</span>
                    <span className="text-xs text-muted-foreground line-through">188.00</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Qty: 1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DeliveryInfoPage;
