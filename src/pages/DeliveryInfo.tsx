import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const DeliveryInfoPage: React.FC = () => {
  const { t, currencySymbol } = useLanguage();
  const [label, setLabel] = useState<'office' | 'home'>('home');

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-6">{t('delivery_information')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><label className="text-sm">{t('full_name')}</label><input type="text" placeholder={t('enter_full_name')} className="input-field mt-1" /></div>
              <div><label className="text-sm">{t('region')}</label><select className="input-field mt-1"><option>{t('choose_region')}</option></select></div>
              <div><label className="text-sm">{t('phone_number')}</label><input type="tel" placeholder={t('enter_phone')} className="input-field mt-1" /></div>
              <div><label className="text-sm">{t('city')}</label><select className="input-field mt-1"><option>{t('choose_city')}</option></select></div>
              <div><label className="text-sm">{t('building_street')}</label><input type="text" placeholder={t('please_enter')} className="input-field mt-1" /></div>
              <div><label className="text-sm">{t('area')}</label><select className="input-field mt-1"><option>{t('choose_area')}</option></select></div>
              <div><label className="text-sm">{t('colony_landmark')}</label><input type="text" placeholder={t('please_enter')} className="input-field mt-1" /></div>
              <div><label className="text-sm">{t('address')}</label><input type="text" placeholder={t('address_example')} className="input-field mt-1" /></div>
            </div>
            <div className="mt-6">
              <p className="text-sm mb-3">{t('select_label')}</p>
              <div className="flex gap-3">
                <button onClick={() => setLabel('office')} className={`px-6 py-2 rounded-full border text-sm ${label === 'office' ? 'bg-primary text-primary-foreground' : 'border-border'}`}>{t('office').toUpperCase()}</button>
                <button onClick={() => setLabel('home')} className={`px-6 py-2 rounded-full border text-sm ${label === 'home' ? 'bg-primary text-primary-foreground' : 'border-border'}`}>{t('home').toUpperCase()}</button>
              </div>
            </div>
            <button className="btn-primary mt-6">{t('save')}</button>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-semibold mb-4">{t('promotion')}</h3>
            <div className="flex gap-2 mb-6"><input type="text" placeholder={t('coupon_code')} className="flex-1 input-field py-2" /><button className="btn-primary px-4">{t('apply')}</button></div>
            <p className="text-sm text-muted-foreground mb-4">{t('invoice_contact')}</p>
            <div className="flex justify-between text-sm mb-2"><span>{t('order_detail')}</span><span className="text-primary cursor-pointer">{t('edit')}</span></div>
            <div className="flex justify-between text-sm mb-2"><span>{t('items_total')} (1 {t('items')})</span><span>{currencySymbol}148.00</span></div>
            <div className="flex justify-between text-sm mb-4"><span>{t('delivery_fee')}</span><span>{currencySymbol} 20</span></div>
            <div className="flex justify-between font-semibold border-t pt-4"><span>{t('total')}:</span><span>{currencySymbol}148.20</span></div>
            <button className="w-full btn-primary mt-4">{t('apply')}</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DeliveryInfoPage;
