import React from 'react';
import { Plus, MapPin, Phone, Pencil, Trash2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import AccountSidebar from '@/components/AccountSidebar';
import { useLanguage } from '@/contexts/LanguageContext';

const addresses = [
  { id: '1', label: 'Home', address: 'Apartment 803,\nPalm View Residences,\nAl Khail Road, Jumeirah Village Circle (JVC)\nDubai, United Arab Emirates', name: 'Alex Suprun', phone: '+971 50 123 4567', isDefault: true },
  { id: '2', label: 'Office', address: 'Office 1204,\nSilver Bay Tower Al Marasi Drive,\nBusiness Bay Dubai,\nUnited Arab Emirates', name: 'Alex Suprun', phone: '+971 50 125 4889', isDefault: false },
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
              <button className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                <Plus className="w-4 h-4" />
                {t('add_new_address')}
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {addresses.map((addr) => (
                <div key={addr.id} className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-foreground">{addr.label}</span>
                    {addr.isDefault && (
                      <span className="text-xs bg-secondary text-primary px-3 py-1 rounded-full font-medium">{t('default')}</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-pre-line mb-4">{addr.address}</p>
                  <div className="space-y-1.5 mb-4">
                    <p className="text-sm flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{addr.name}</span>
                    </p>
                    <p className="text-sm flex items-center gap-2 text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      <span>{addr.phone}</span>
                    </p>
                  </div>
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <button className="flex items-center gap-1 text-xs border border-border px-3 py-1.5 rounded-lg hover:bg-secondary transition-colors">
                      <Pencil className="w-3 h-3" />
                      {t('edit')}
                    </button>
                    <button className="flex items-center gap-1 text-xs text-red hover:underline">
                      <Trash2 className="w-3 h-3" />
                      {t('remove')}
                    </button>
                    {!addr.isDefault && (
                      <button className="text-xs border border-border px-3 py-1.5 rounded-lg hover:bg-secondary transition-colors ml-auto">
                        {t('make_default')}
                      </button>
                    )}
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
