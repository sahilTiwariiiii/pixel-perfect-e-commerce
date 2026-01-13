import React from 'react';
import Layout from '@/components/layout/Layout';
import AccountSidebar from '@/components/AccountSidebar';
import { useLanguage } from '@/contexts/LanguageContext';
import { Switch } from '@/components/ui/switch';

const AccountSettingsPage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-primary mb-6">{t('account')}</h1>
        <div className="flex flex-col md:flex-row gap-6">
          <AccountSidebar />
          <div className="flex-1 space-y-6">
            <h2 className="text-xl font-semibold">{t('account_settings')}</h2>
            
            {/* Personal Information */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-4">{t('personal_information')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground">{t('first_name')}</label>
                  <input type="text" defaultValue="Alex" className="input-field mt-1" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">{t('last_name')}</label>
                  <input type="text" defaultValue="Suprun" className="input-field mt-1" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">{t('email')}</label>
                  <input type="email" defaultValue="Alex.Suprun@2415.gmail.com" className="input-field mt-1" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">{t('phone')}</label>
                  <input type="tel" defaultValue="+971 50 XXX 4567" className="input-field mt-1" />
                </div>
              </div>
              <button className="btn-primary mt-4">{t('save_changes')}</button>
            </div>

            {/* Email Preferences */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-4">{t('email_preferences')}</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm">{t('order_updates')}</p>
                    <p className="text-xs text-muted-foreground">{t('order_updates_desc')}</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm">{t('promotions')}</p>
                    <p className="text-xs text-muted-foreground">{t('promotions_desc')}</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm">{t('newsletter')}</p>
                    <p className="text-xs text-muted-foreground">{t('newsletter_desc')}</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-4">{t('security')}</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground">{t('current_password')}</label>
                  <input type="password" className="input-field mt-1" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground">{t('new_password')}</label>
                    <input type="password" className="input-field mt-1" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">{t('confirm_password')}</label>
                    <input type="password" className="input-field mt-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Delete Account */}
            <div className="bg-card border border-red/30 rounded-lg p-6">
              <h3 className="font-semibold text-red mb-2">{t('delete_account')}</h3>
              <p className="text-sm text-muted-foreground mb-4">{t('delete_account_warning')}</p>
              <button className="bg-red text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red/90">{t('delete_account')}</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AccountSettingsPage;
