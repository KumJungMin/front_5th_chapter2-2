import React from 'react';
import { Coupon } from '../../../../types';

interface Props {
  coupons: Coupon[];
}

const CouponList = React.memo(({ coupons }: Props) => (
  <div className="space-y-2">
    {coupons.map((c, i) => (
      <div key={i} className="bg-gray-100 p-2 rounded">
        {c.name} ({c.code}) :
        {c.discountType === 'amount'
          ? ` ${c.discountValue.toLocaleString()}원`
          : ` ${c.discountValue}%`}{' '}
        할인
      </div>
    ))}
  </div>
));
export default CouponList;
