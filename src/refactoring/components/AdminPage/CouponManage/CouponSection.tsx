import React, { useCallback } from 'react';
import { Coupon } from '../../../../types';
import CouponForm from './CouponForm';
import CouponList from './CouponList';

interface Props {
  coupons: Coupon[];
  onAddCoupon: (c: Coupon) => void;
}

export default React.memo(function CouponSection({
  coupons,
  onAddCoupon,
}: Props) {
  const handleAdd = useCallback(onAddCoupon, [onAddCoupon]);

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">쿠폰 관리</h2>
      <div className="bg-white p-4 rounded shadow space-y-4">
        <CouponForm onSubmit={handleAdd} />
        <CouponList coupons={coupons} />
      </div>
    </section>
  );
});
