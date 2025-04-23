import React from 'react';
import { Product } from '../../../../types';

interface Props {
  product: Product;
  isOpen: boolean;
  onToggle: () => void;
  onEdit: () => void;
}

const ProductCard = React.memo(
  ({ product, isOpen, onToggle, onEdit }: Props) => (
    <div className="bg-white p-4 rounded shadow">
      <button onClick={onToggle} className="w-full text-left font-semibold">
        {product.name} - {product.price}원 (재고: {product.stock})
      </button>

      {isOpen && (
        <div className="mt-2">
          {product.discounts.map((d, i) => (
            <p key={i}>
              {d.quantity}개 이상 {d.rate * 100}% 할인
            </p>
          ))}
          <button
            onClick={onEdit}
            className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mt-2"
          >
            수정
          </button>
        </div>
      )}
    </div>
  ),
);
export default ProductCard;
