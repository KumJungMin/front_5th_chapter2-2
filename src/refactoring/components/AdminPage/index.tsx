import React, { useCallback, useState } from 'react';
import { useProductContext } from '../../contexts/productContext';
import { useCouponContext } from '../../contexts/couponContext';

import ProductSection from './ProductManage/ProductSection';
import CouponSection from './CouponManage/CouponSection';

export default function AdminPage() {
  const { products, updateProduct, addProduct } = useProductContext();
  const { coupons, addCoupon } = useCouponContext();

  const [showNew, setShowNew] = useState(false);

  const handleAddProduct = useCallback(addProduct, [addProduct]);
  const handleUpdateProd = useCallback(updateProduct, [updateProduct]);
  const handleAddCoupon = useCallback(addCoupon, [addCoupon]);

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold">관리자 페이지</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProductSection
          products={products}
          onAddProduct={handleAddProduct}
          onUpdateProduct={handleUpdateProd}
          showNewForm={showNew}
          toggleNewForm={() => setShowNew((p) => !p)}
        />

        <CouponSection coupons={coupons} onAddCoupon={handleAddCoupon} />
      </div>
    </div>
  );
}
