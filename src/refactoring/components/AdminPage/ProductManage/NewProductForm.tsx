import React, { useState } from 'react';
import { Product } from '../../../../types';

interface Props {
  onSubmit: (p: Product) => void;
}

export default function NewProductForm({ onSubmit }: Props) {
  const [form, setForm] = useState<Omit<Product, 'id'>>({
    name: '',
    price: 0,
    stock: 0,
    discounts: [],
  });

  const addProduct = () => {
    if (!form.name) return;
    onSubmit({ ...form, id: Date.now().toString() });
    setForm({ name: '', price: 0, stock: 0, discounts: [] });
  };

  return (
    <div className="bg-white p-4 rounded shadow space-y-2">
      <input
        className="w-full p-2 border rounded"
        placeholder="상품명"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        className="w-full p-2 border rounded"
        type="number"
        placeholder="가격"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: parseInt(e.target.value) })}
      />
      <input
        className="w-full p-2 border rounded"
        type="number"
        placeholder="재고"
        value={form.stock}
        onChange={(e) => setForm({ ...form, stock: parseInt(e.target.value) })}
      />

      <button
        onClick={addProduct}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        추가
      </button>
    </div>
  );
}
