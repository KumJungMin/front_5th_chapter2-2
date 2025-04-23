import React, { useCallback } from 'react';
import { Product } from '../../../../types';
import ProductList from './ProductList';
import NewProductForm from './NewProductForm';

interface Props {
  products: Product[];
  onAddProduct: (p: Product) => void;
  onUpdateProduct: (p: Product) => void;
  showNewForm: boolean;
  toggleNewForm: () => void;
}

export default React.memo(function ProductSection({
  products,
  onAddProduct,
  onUpdateProduct,
  showNewForm,
  toggleNewForm,
}: Props) {
  const handleAdd = useCallback(onAddProduct, [onAddProduct]);

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">상품 관리</h2>

      <button
        onClick={toggleNewForm}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4 hover:bg-green-600"
      >
        {showNewForm ? '취소' : '새 상품 추가'}
      </button>

      {showNewForm && <NewProductForm onSubmit={handleAdd} />}

      <ProductList products={products} onUpdate={onUpdateProduct} />
    </section>
  );
});
