import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ne' | 'ar';
type Country = 'dubai' | 'nepal';

interface LanguageContextType {
  language: Language;
  country: Country;
  setLanguage: (lang: Language) => void;
  setCountry: (country: Country) => void;
  t: (key: string) => string;
  currency: string;
  currencySymbol: string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    'search.placeholder': 'What are you looking for?',
    'deliver.to': 'Deliver to',
    'login': 'Log in',
    'logout': 'Log out',
    
    // Navigation
    'nav.electronics': 'ELECTRONICS',
    'nav.fashion': 'FASHION',
    'nav.home_kitchen': 'HOME & KITCHEN',
    'nav.beauty': 'BEAUTY & PERSONAL CARE',
    'nav.grocery': 'GROCERY',
    'nav.accessories': 'ACCESSORIES',
    'nav.others': 'OTHERS',
    
    // Home
    'mega_deals': 'MEGA DEALS',
    'hurry_up': 'Hurry up! offers ends in',
    'recommended': 'RECOMMENDED FOR YOU',
    'view_more': 'View more',
    'lowest_prices': 'LOWEST PRICES ON TOP BRANDS',
    'trending_now': 'TRENDING NOW',
    'best_seller': 'Best seller',
    'womens_fashion': "WOMEN'S FASHION",
    'mens_fashion': "MEN'S FASHION",
    'home_kitchen': 'HOME & KITCHEN',
    
    // Product
    'add_to_cart': 'ADD TO CART',
    'buy_now': 'BUY NOW',
    'product_overview': 'Product Overview',
    'highlights': 'Highlights',
    'ratings_reviews': 'Ratings & Reviews',
    'product_reviews': 'Product Reviews',
    'you_may_also_like': 'YOU MAY ALSO LIKE',
    'verified_purchase': 'Verified Purchase',
    'review': 'review',
    'reviews': 'reviews',
    'rating': 'rating',
    'free_shipping': 'Eligible for free shipping',
    'year_warranty': '1-Year Warranty',
    'free_delivery': 'Free Delivery',
    'easy_returns': 'Easy & Hassle-Free Returns',
    'secure_payments': '100% Secure Payments',
    'get_in_tomorrow': 'Get in tomorrow',
    'order_within': 'order within',
    'payment_discount': 'PAYMENT DISCOUNT',
    'easy_installment': 'Easy 4 month installment',
    'for_new_user': 'for new user',
    'earn_cashback': 'Earn 5% cashback',
    'on_credit_card': 'on credit card',
    'sold_by': 'Sold by SHOP',
    'dealer_name': 'DEALER NAME',
    
    // Cart
    'cart': 'Cart',
    'got_coupon': 'Got a coupon?',
    'coupon_code': 'Coupon code',
    'apply': 'APPLY',
    'subtotal': 'Subtotal',
    'item': 'item',
    'items': 'items',
    'proceed_checkout': 'Proceed to checkout',
    'remove': 'Remove',
    'add_to_wishlist': 'Add to wishlist',
    
    // Wishlist
    'wishlist': 'Wishlist',
    'item_added': 'item added in',
    
    // Account
    'account': 'Account',
    'premium_member': 'Premium Member',
    'my_orders': 'My Orders',
    'my_wishlist': 'My Wishlist',
    'payment_method': 'Payment method',
    'my_reviews': 'My reviews',
    'address': 'Address',
    'account_setting': 'Account setting',
    'help_center': 'Help center',
    
    // Payment Methods
    'payment_methods': 'Payment Methods',
    'add_new_card': 'Add New Card',
    'default': 'Default',
    'expires': 'Expires',
    'edit': 'Edit',
    'make_default': 'Make Default',
    
    // Reviews
    'recent': 'Recent',
    'reviewed_on': 'Reviewed on',
    'edit_review': 'Edit Review',
    'delete': 'Delete',
    
    // Address
    'my_addresses': 'My Addresses',
    'add_new_address': 'Add New Address',
    'home': 'Home',
    'office': 'Office',
    
    // Delivery Information
    'delivery_information': 'Delivery Information',
    'full_name': 'Full name',
    'enter_full_name': 'Enter your first and last name',
    'phone_number': 'Phone Number',
    'enter_phone': 'Please enter your phone number',
    'building_street': 'Building / House No / Floor / Street',
    'please_enter': 'Please enter',
    'colony_landmark': 'Colony / Suburb / Locality / Landmark',
    'region': 'Region',
    'choose_region': 'Please choose your region',
    'city': 'City',
    'choose_city': 'Please choose your city',
    'area': 'Area',
    'choose_area': 'Please choose your area',
    'address_example': 'example House# 123, Street# 123, ABC Road',
    'select_label': 'Select a label for effective delivery:',
    'save': 'SAVE',
    'delivery_or_pickup': 'Delivery or Pickup',
    'standard_delivery': 'Standard delivery',
    'get_by': 'Get by',
    'qty': 'Qty',
    
    // Promotion
    'promotion': 'Promotion',
    'invoice_contact': 'Invoice and Contact Info',
    'order_detail': 'Order Detail',
    'items_total': 'Items Total',
    'delivery_fee': 'Delivery Fee',
    'total': 'Total',
    
    // Account Settings
    'account_settings': 'Account Settings',
    'personal_information': 'Personal Information',
    'first_name': 'First Name',
    'last_name': 'Last Name',
    'email': 'Email',
    'phone': 'Phone',
    'save_changes': 'Save Changes',
    'email_preferences': 'Email Preferences',
    'order_updates': 'Order Updates',
    'order_updates_desc': 'Receive notifications about your order status',
    'promotions': 'Promotions',
    'promotions_desc': 'Receive emails about new promotions and deals',
    'newsletter': 'Newsletter',
    'newsletter_desc': 'Subscribe to our weekly newsletter',
    'security': 'Security',
    'current_password': 'Current Password',
    'new_password': 'New Password',
    'confirm_password': 'Confirm Password',
    'delete_account': 'Delete Account',
    'delete_account_warning': 'Once you delete your account, there is no going back. Please be certain',
    
    // Footer
    'footer.electronics': 'Electronics',
    'footer.fashion': 'Fashion',
    'footer.home_kitchen': 'Home & Kitchen',
    'footer.beauty': 'Beauty & Personal Care',
    'footer.grocery': 'Grocery',
    'footer.others': 'Others',
    'footer.mobiles': 'Mobiles',
    'footer.tablets': 'Tablets',
    'footer.laptops': 'Laptops',
    'footer.wearables': 'Wearables',
    'footer.headphones': 'Headphones',
    'footer.televisions': 'Televisions',
    'footer.cameras': 'Cameras & Accessories',
    'footer.womens_fashion': "Women's Fashion",
    'footer.mens_fashion': "Men's Fashion",
    'footer.kids_fashion': "Kids Fashion",
    'footer.footwear': 'Footwear',
    'footer.watches': 'Watches',
    'footer.jewellery': 'Jewellery',
    'footer.eyewear': 'Eyewear',
    'footer.large_appliances': 'Large Appliances',
    'footer.small_appliances': 'Small Appliances',
    'footer.furniture': 'Furniture',
    'footer.cookware': 'Cookware',
    'footer.storage': 'Storage',
    'footer.home_fragrance': 'Home Fragrance',
    'footer.drinkware': 'Drinkware',
    'footer.skincare': 'Skincare',
    'footer.haircare': 'Haircare',
    'footer.makeup': 'Makeup',
    'footer.personal_care': 'Personal Care',
    'footer.mens_grooming': "Men's Grooming",
    'footer.health_essentials': 'Health Care Essentials',
    'footer.fruits_vegetables': 'Fruits & Vegetables',
    'footer.snacks_beverages': 'Snacks & Beverages',
    'footer.staples': 'Staples',
    'footer.dairy_bakery': 'Dairy & Bakery',
    'footer.household': 'Household Essentials',
    'footer.baby_toys': 'Baby & Toys',
    'footer.sports_fitness': 'Sports & Fitness',
    'footer.books_stationery': 'Books & Stationery',
    'footer.automotive': 'Automotive',
    'footer.pet_supplies': 'Pet Supplies',
    'footer.office_supplies': 'Office Supplies',
    'footer.gifts_occasions': 'Gifts & Occasions',
    'footer.email': 'Email: Nepoora@estore.com',
    'footer.help_center': 'Help center Help@Nepoora.com',
    'footer.warranty_policy': 'Warranty Policy',
    'footer.sell_with_us': 'Sell with us',
    'footer.terms_of_use': 'Terms of Use',
    'footer.terms_of_sale': 'Terms of Sale',
    'footer.privacy_policy': 'Privacy Policy',
    'footer.consumer_rights': 'Consumer Rights',
    'footer.copyright': '© Copywrite. All right reserved by Nepoora',
  },
  ne: {
    // Nepali translations - key items
    'search.placeholder': 'तपाईं के खोज्दै हुनुहुन्छ?',
    'deliver.to': 'डेलिभरी गर्नुहोस्',
    'login': 'लग इन',
    'logout': 'लग आउट',
    'nav.electronics': 'इलेक्ट्रोनिक्स',
    'nav.fashion': 'फेशन',
    'nav.home_kitchen': 'घर र भान्सा',
    'nav.beauty': 'सौन्दर्य र व्यक्तिगत',
    'nav.grocery': 'किराना',
    'nav.accessories': 'सामानहरू',
    'nav.others': 'अन्य',
    'mega_deals': 'मेगा डिलहरू',
    'add_to_cart': 'कार्टमा थप्नुहोस्',
    'buy_now': 'अहिले किन्नुहोस्',
    'cart': 'कार्ट',
    'wishlist': 'इच्छा सूची',
    'account': 'खाता',
    'my_orders': 'मेरो अर्डरहरू',
    'save': 'बचत गर्नुहोस्',
    // Add more Nepali translations as needed
  },
  ar: {
    // Arabic translations - key items
    'search.placeholder': 'ما الذي تبحث عنه؟',
    'deliver.to': 'توصيل إلى',
    'login': 'تسجيل الدخول',
    'logout': 'تسجيل الخروج',
    'nav.electronics': 'إلكترونيات',
    'nav.fashion': 'أزياء',
    'nav.home_kitchen': 'المنزل والمطبخ',
    'nav.beauty': 'الجمال والعناية الشخصية',
    'nav.grocery': 'بقالة',
    'nav.accessories': 'إكسسوارات',
    'nav.others': 'آخرون',
    'mega_deals': 'عروض ضخمة',
    'add_to_cart': 'أضف إلى السلة',
    'buy_now': 'اشتر الآن',
    'cart': 'السلة',
    'wishlist': 'قائمة الرغبات',
    'account': 'الحساب',
    'my_orders': 'طلباتي',
    'save': 'حفظ',
    // Add more Arabic translations as needed
  },
};

const currencyByCountry: Record<Country, { currency: string; symbol: string }> = {
  dubai: { currency: 'AED', symbol: 'Ð' },
  nepal: { currency: 'NPR', symbol: 'रू' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [country, setCountry] = useState<Country>('dubai');

  const t = (key: string): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  const { currency, symbol: currencySymbol } = currencyByCountry[country];

  return (
    <LanguageContext.Provider
      value={{
        language,
        country,
        setLanguage,
        setCountry,
        t,
        currency,
        currencySymbol,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
