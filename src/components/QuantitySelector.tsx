import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  min?: number;
  max?: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onIncrease,
  onDecrease,
  min = 1,
  max = 99,
}) => {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onDecrease}
        disabled={quantity <= min}
        className="quantity-btn disabled:opacity-50 disabled:cursor-not-allowed"
      >
        −
      </button>
      <span className="w-8 text-center text-sm font-medium">{quantity}</span>
      <button
        onClick={onIncrease}
        disabled={quantity >= max}
        className="quantity-btn disabled:opacity-50 disabled:cursor-not-allowed"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
