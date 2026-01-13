import React from 'react';
import { CreditCard, Plus } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import AccountSidebar from '@/components/AccountSidebar';
import { useLanguage } from '@/contexts/LanguageContext';

const paymentMethods = [
  { id: '1', type: 'Visa', last4: '4385', expires: '08/2028', isDefault: true },
  { id: '2', type: 'Mastercard', last4: '7485', expires: '09/2027', isDefault: false },
];

const PaymentMethodPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-primary mb-6">{t('account')}</h1>
        <div className="flex flex-col md:flex-row gap-6">
          <AccountSidebar />
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">{t('payment_methods')}</h2>
              <button className="flex items-center gap-2 text-sm font-medium hover:text-primary">
                <CreditCard className="w-4 h-4" />
                {t('add_new_card')}
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {paymentMethods.map((card) => (
                <div key={card.id} className="bg-card border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <CreditCard className="w-8 h-8 text-primary" />
                    <div className="flex gap-2">
                      {card.isDefault && <span className="text-xs bg-secondary text-primary px-2 py-1 rounded">{t('default')}</span>}
                      <span className="text-xs bg-muted px-2 py-1 rounded">{card.type}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">•••• •••• •••• {card.last4}</p>
                  <p className="text-xs text-muted-foreground mt-1">{t('expires')} {card.expires}</p>
                  <div className="flex gap-3 mt-4">
                    <button className="text-xs border border-border px-3 py-1 rounded hover:bg-secondary">{t('edit')}</button>
                    <button className="text-xs text-red hover:underline">{t('remove')}</button>
                    {!card.isDefault && <button className="text-xs border border-border px-3 py-1 rounded hover:bg-secondary">{t('make_default')}</button>}
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

export default PaymentMethodPage;
