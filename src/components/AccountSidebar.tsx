import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Package,
  Heart,
  CreditCard,
  Star,
  MapPin,
  Settings,
  Headphones,
  LogOut,
  User,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AccountSidebar: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();

  const menuItems = [
    { key: 'my_orders', icon: Package, href: '/account/orders' },
    { key: 'my_wishlist', icon: Heart, href: '/wishlist' },
    { key: 'payment_method', icon: CreditCard, href: '/account/payment' },
    { key: 'my_reviews', icon: Star, href: '/account/reviews' },
    { key: 'address', icon: MapPin, href: '/account/address' },
    { key: 'account_setting', icon: Settings, href: '/account/settings' },
    { key: 'help_center', icon: Headphones, href: '/account/help' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="w-full md:w-72 bg-card rounded-lg border border-border overflow-hidden">
      {/* Profile Section */}
      <div className="relative p-6 text-center bg-secondary/30">
        {/* Edit Profile Icon */}
        <button className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition-colors">
          <User className="w-5 h-5" />
        </button>

        {/* Avatar */}
        <div className="relative inline-block mb-3">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 mx-auto">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
              alt="Alex Suprun"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Verified Badge */}
          <div className="absolute bottom-1 right-1 w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center border-2 border-background">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
            </svg>
          </div>
        </div>

        {/* Name */}
        <h2 className="text-lg font-semibold text-foreground mb-2">Alex Suprun</h2>

        {/* Premium Badge */}
        <span className="inline-block px-4 py-1.5 bg-gradient-premium text-primary-foreground text-sm font-medium rounded-full">
          {t('premium_member')}
        </span>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link
              key={item.key}
              to={item.href}
              className={active ? 'sidebar-item-active' : 'sidebar-item'}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium">{t(item.key)}</span>
            </Link>
          );
        })}

        {/* Logout */}
        <button className="sidebar-item w-full text-left">
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-medium">{t('logout')}</span>
        </button>
      </nav>
    </div>
  );
};

export default AccountSidebar;
