import React, { useState } from 'react';
import { Coupon } from '../../../../types';

interface Props {
  onSubmit: (c: Coupon) => void;
}

export default function CouponForm({ onSubmit }: Props) {
  const [form, set] = useState<Coupon>({
    name: '',
    code: '',
    discountType: 'percentage',
    discountValue: 0,
  });

  const reset = () =>
    set({ name: '', code: '', discountType: 'percentage', discountValue: 0 });

  const add = () => {
    if (!form.name || !form.code) return;
    onSubmit(form);
    reset();
  };

  return (
    <div className="space-y-2">
      <input
        className="w-full p-2 border rounded"
        placeholder="쿠폰 이름"
        value={form.name}
        onChange={(e) => set({ ...form, name: e.target.value })}
      />
      <input
        className="w-full p-2 border rounded"
        placeholder="쿠폰 코드"
        value={form.code}
        onChange={(e) => set({ ...form, code: e.target.value })}
      />

      <div className="flex gap-2">
        <select
          className="w-full p-2 border rounded"
          value={form.discountType}
          onChange={(e) =>
            set({
              ...form,
              discountType: e.target.value as 'amount' | 'percentage',
            })
          }
        >
          <option value="amount">금액(원)</option>
          <option value="percentage">할인율(%)</option>
        </select>
        <input
          className="w-full p-2 border rounded"
          type="number"
          placeholder="할인 값"
          value={form.discountValue}
          onChange={(e) =>
            set({ ...form, discountValue: parseInt(e.target.value) })
          }
        />
      </div>

      <button
        onClick={add}
        className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
      >
        쿠폰 추가
      </button>
    </div>
  );
}
