import React from 'react';
import { Plus, MapPin } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import AccountSidebar from '@/components/AccountSidebar';
import { useLanguage } from '@/contexts/LanguageContext';

const addresses = [
  { id: '1', label: 'Home', address: 'Apartment 803, Palm View Residences, Al Khail Road, Jumeirah Village Circle (JVC), Dubai, United Arab Emirates', name: 'Alex Suprun', phone: '+971 50 123 4567', isDefault: true },
  { id: '2', label: 'Office', address: 'Office 1204, Silver Bay Tower Al Marasi Drive, Business Bay Dubai, United Arab Emirates', name: 'Alex Suprun', phone: '+971 50 125 4889', isDefault: false },
];

const AddressPage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-primary mb-6">{t('account')}</h1>
        <div className="flex flex-col md:flex-row gap-6">
          <AccountSidebar />
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">{t('my_addresses')}</h2>
              <button className="flex items-center gap-2 text-sm font-medium hover:text-primary">
                <Plus className="w-4 h-4" />
                {t('add_new_address')}
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {addresses.map((addr) => (
                <div key={addr.id} className="bg-card border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{addr.label}</span>
                    {addr.isDefault && <span className="text-xs bg-secondary text-primary px-2 py-1 rounded">{t('default')}</span>}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{addr.address}</p>
                  <p className="text-xs flex items-center gap-1"><MapPin className="w-3 h-3" />{addr.name}</p>
                  <p className="text-xs text-muted-foreground">{addr.phone}</p>
                  <div className="flex gap-3 mt-4">
                    <button className="text-xs border border-border px-3 py-1 rounded hover:bg-secondary">{t('edit')}</button>
                    <button className="text-xs text-red hover:underline">{t('remove')}</button>
                    {!addr.isDefault && <button className="text-xs border border-border px-3 py-1 rounded hover:bg-secondary">{t('make_default')}</button>}
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

export default AddressPage;
