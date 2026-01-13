import React from 'react';
import { Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: string;
  isBestSeller?: boolean;
  showWishlistButton?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  image,
  price,
  originalPrice,
  rating,
  reviewCount,
  isBestSeller = false,
  showWishlistButton = true,
}) => {
  const { currencySymbol } = useLanguage();

  return (
    <Link to={`/product/${id}`} className="card-product group relative">
      {/* Best Seller Badge */}
      {isBestSeller && (
        <span className="absolute top-2 left-2 badge-seller z-10">Best seller</span>
      )}

      {/* Wishlist Button */}
      {showWishlistButton && (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            // Add to wishlist logic
          }}
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-secondary"
        >
          <Heart className="w-4 h-4 text-muted-foreground" />
        </button>
      )}

      {/* Product Image */}
      <div className="aspect-square bg-muted rounded-md overflow-hidden mb-3">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-1.5">
        <h3 className="text-sm font-medium line-clamp-2 text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <span className="text-sm text-muted-foreground">{rating}</span>
          <span className="text-xs text-muted-foreground">{reviewCount}</span>
          <Star className="w-3.5 h-3.5 text-yellow fill-yellow" />
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-base font-semibold text-foreground">
            {currencySymbol} {price.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              {originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
