import React, { useState } from 'react';
import { Search, Heart, ShoppingCart, User, ChevronDown, Globe, Menu, X, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';

const navItems = [
  { key: 'nav.electronics', href: '/products?category=electronics' },
  { key: 'nav.fashion', href: '/products?category=fashion' },
  { key: 'nav.home_kitchen', href: '/products?category=home-kitchen' },
  { key: 'nav.beauty', href: '/products?category=beauty' },
  { key: 'nav.grocery', href: '/products?category=grocery' },
  { key: 'nav.accessories', href: '/products?category=accessories' },
  { key: 'nav.others', href: '/products?category=others' },
];

const Header: React.FC = () => {
  const { t, language, setLanguage, country, setCountry } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const navigate = useNavigate();

  const countryFlag = country === 'dubai' 
    ? '🇦🇪' 
    : '🇳🇵';

  const languageLabel = language === 'en' ? 'English' : language === 'ne' ? 'नेपाली' : 'العربية';

  return (
    <header className="sticky top-0 z-50">
      {/* Premium Top Bar with Gradient */}
      <div className="relative bg-gradient-to-r from-purple-700 via-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14 gap-4">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="Nepoora" className="h-10 md:h-11 w-auto brightness-0 invert" />
            </Link>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder={t('search.placeholder')}
                  className="w-full h-10 pl-4 pr-12 rounded-full bg-white/95 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-white/50 placeholder:text-muted-foreground"
                />
                <button className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-colors">
                  <Search className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3 md:gap-5">
              {/* Location/Country Selector */}
              <div className="hidden md:flex items-center gap-2 text-sm cursor-pointer hover:opacity-80 transition-opacity">
                <MapPin className="w-4 h-4" />
                <div className="text-xs">
                  <span className="opacity-80">{t('deliver.to')}</span>
                  <div className="font-semibold capitalize flex items-center gap-1">
                    {countryFlag} {country}
                  </div>
                </div>
              </div>

              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                  className="hidden md:flex items-center gap-1.5 text-sm px-3 py-1.5 hover:bg-white/10 rounded-full transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span className="font-medium">{languageLabel}</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                
                {showLanguageDropdown && (
                  <div className="absolute right-0 top-full mt-2 bg-card border border-border rounded-lg shadow-xl py-1 min-w-[140px] z-50">
                    <button
                      onClick={() => { setLanguage('en'); setCountry('dubai'); setShowLanguageDropdown(false); }}
                      className="w-full px-4 py-2.5 text-left text-sm hover:bg-secondary transition-colors text-foreground flex items-center gap-2"
                    >
                      🇦🇪 English
                    </button>
                    <button
                      onClick={() => { setLanguage('ne'); setCountry('nepal'); setShowLanguageDropdown(false); }}
                      className="w-full px-4 py-2.5 text-left text-sm hover:bg-secondary transition-colors text-foreground flex items-center gap-2"
                    >
                      🇳🇵 नेपाली
                    </button>
                    <button
                      onClick={() => { setLanguage('ar'); setCountry('dubai'); setShowLanguageDropdown(false); }}
                      className="w-full px-4 py-2.5 text-left text-sm hover:bg-secondary transition-colors text-foreground flex items-center gap-2"
                    >
                      🇦🇪 العربية
                    </button>
                  </div>
                )}
              </div>

              {/* Login */}
              <Link
                to="/account"
                className="hidden md:flex items-center gap-1.5 text-sm px-3 py-1.5 hover:bg-white/10 rounded-full transition-colors"
              >
                <User className="w-4 h-4" />
                <span className="font-medium">{t('login')}</span>
              </Link>

              {/* Wishlist */}
              <Link
                to="/wishlist"
                className="relative p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <Heart className="w-5 h-5" />
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  3
                </span>
              </Link>

              {/* Cart */}
              <Link
                to="/cart"
                className="relative p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  2
                </span>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Curved Wave Bottom */}
        <div className="absolute -bottom-3 left-0 right-0 h-4 overflow-hidden">
          <svg 
            viewBox="0 0 1440 40" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path 
              d="M0 0H1440V20C1440 20 1200 40 720 40C240 40 0 20 0 20V0Z" 
              className="fill-purple-700"
            />
          </svg>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="hidden md:block bg-background border-b border-border shadow-sm pt-3">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-center gap-8 h-11 overflow-x-auto scrollbar-hide">
            {navItems.map((item) => (
              <li key={item.key}>
                <Link
                  to={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap relative group"
                >
                  {t(item.key)}
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg animate-slide-in">
          {/* Mobile Search */}
          <div className="p-4 border-b border-border">
            <div className="relative">
              <input
                type="text"
                placeholder={t('search.placeholder')}
                className="w-full h-10 pl-4 pr-10 border border-border rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </div>
          </div>

          {/* Mobile Nav Items */}
          <ul className="py-2">
            {navItems.map((item) => (
              <li key={item.key}>
                <Link
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-sm font-medium hover:bg-secondary transition-colors"
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Language/Country */}
          <div className="p-4 border-t border-border space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{countryFlag}</span>
              <select
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value as 'dubai' | 'nepal');
                  setLanguage(e.target.value === 'nepal' ? 'ne' : 'en');
                }}
                className="flex-1 h-10 px-3 border border-border rounded-md bg-background text-sm"
              >
                <option value="dubai">Dubai (UAE)</option>
                <option value="nepal">Nepal</option>
              </select>
            </div>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'en' | 'ne' | 'ar')}
              className="w-full h-10 px-3 border border-border rounded-md bg-background text-sm"
            >
              <option value="en">English</option>
              <option value="ne">नेपाली</option>
              <option value="ar">العربية</option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
