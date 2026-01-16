import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const categories = [
    {
      title: 'footer.electronics',
      links: [
        { key: 'footer.mobiles', href: '#' },
        { key: 'footer.tablets', href: '#' },
        { key: 'footer.laptops', href: '#' },
        { key: 'footer.wearables', href: '#' },
        { key: 'footer.headphones', href: '#' },
        { key: 'footer.televisions', href: '#' },
        { key: 'footer.cameras', href: '#' },
      ],
    },
    {
      title: 'footer.fashion',
      links: [
        { key: 'footer.womens_fashion', href: '#' },
        { key: 'footer.mens_fashion', href: '#' },
        { key: 'footer.kids_fashion', href: '#' },
        { key: 'footer.footwear', href: '#' },
        { key: 'footer.watches', href: '#' },
        { key: 'footer.jewellery', href: '#' },
        { key: 'footer.eyewear', href: '#' },
      ],
    },
    {
      title: 'footer.home_kitchen',
      links: [
        { key: 'footer.large_appliances', href: '#' },
        { key: 'footer.small_appliances', href: '#' },
        { key: 'footer.furniture', href: '#' },
        { key: 'footer.cookware', href: '#' },
        { key: 'footer.storage', href: '#' },
        { key: 'footer.home_fragrance', href: '#' },
        { key: 'footer.drinkware', href: '#' },
      ],
    },
    {
      title: 'footer.beauty',
      links: [
        { key: 'footer.skincare', href: '#' },
        { key: 'footer.haircare', href: '#' },
        { key: 'footer.makeup', href: '#' },
        { key: 'footer.personal_care', href: '#' },
        { key: 'footer.mens_grooming', href: '#' },
        { key: 'footer.health_essentials', href: '#' },
      ],
    },
    {
      title: 'footer.grocery',
      links: [
        { key: 'footer.fruits_vegetables', href: '#' },
        { key: 'footer.snacks_beverages', href: '#' },
        { key: 'footer.staples', href: '#' },
        { key: 'footer.dairy_bakery', href: '#' },
        { key: 'footer.household', href: '#' },
      ],
    },
    {
      title: 'footer.others',
      links: [
        { key: 'footer.baby_toys', href: '#' },
        { key: 'footer.sports_fitness', href: '#' },
        { key: 'footer.books_stationery', href: '#' },
        { key: 'footer.automotive', href: '#' },
        { key: 'footer.pet_supplies', href: '#' },
        { key: 'footer.office_supplies', href: '#' },
        { key: 'footer.gifts_occasions', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Decorative Angular Wave */}
      <div className="relative h-16 bg-background">
        <div 
          className="absolute inset-0 bg-primary"
          style={{
            clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)'
          }}
        />
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="font-semibold text-sm mb-3">{t(category.title)}</h3>
              <ul className="space-y-1.5">
                {category.links.map((link) => (
                  <li key={link.key}>
                    <Link
                      to={link.href}
                      className="text-xs text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {t(link.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact & Links */}
        <div className="mt-10 pt-6 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-xs">
              <span>{t('footer.email')}</span>
              <span>{t('footer.help_center')}</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-6">
            <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs text-primary-foreground/70">
              <Link to="#" className="hover:text-primary-foreground transition-colors">
                {t('footer.warranty_policy')}
              </Link>
              <span>|</span>
              <Link to="#" className="hover:text-primary-foreground transition-colors">
                {t('footer.sell_with_us')}
              </Link>
              <span>|</span>
              <Link to="#" className="hover:text-primary-foreground transition-colors">
                {t('footer.terms_of_use')}
              </Link>
              <span>|</span>
              <Link to="#" className="hover:text-primary-foreground transition-colors">
                {t('footer.terms_of_sale')}
              </Link>
              <span>|</span>
              <Link to="#" className="hover:text-primary-foreground transition-colors">
                {t('footer.privacy_policy')}
              </Link>
              <span>|</span>
              <Link to="#" className="hover:text-primary-foreground transition-colors">
                {t('footer.consumer_rights')}
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-primary/90 py-3">
        <div className="container mx-auto px-4 text-center text-xs text-primary-foreground/70">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
