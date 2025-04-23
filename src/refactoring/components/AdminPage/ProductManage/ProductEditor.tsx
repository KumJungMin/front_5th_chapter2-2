import React, { useState } from 'react';
import { Product, Discount } from '../../../../types';

interface Props {
  product: Product;
  onSave: (p: Product) => void;
  onCancel: () => void;
}

export default function ProductEditor({ product, onSave, onCancel }: Props) {
  const [draft, setDraft] = useState<Product>(product);
  const [disc, setDisc] = useState<Discount>({ quantity: 0, rate: 0 });

  const update = <K extends keyof Product>(k: K, v: Product[K]) =>
    setDraft({ ...draft, [k]: v });

  const addDisc = () => {
    setDraft({ ...draft, discounts: [...draft.discounts, disc] });
    setDisc({ quantity: 0, rate: 0 });
  };

  const removeDisc = (idx: number) =>
    setDraft({
      ...draft,
      discounts: draft.discounts.filter((_, i) => i !== idx),
    });

  return (
    <div className="bg-white p-4 rounded shadow space-y-3">
      <input
        className="w-full p-2 border rounded"
        value={draft.name}
        onChange={(e) => update('name', e.target.value)}
        placeholder="상품명"
      />
      <input
        className="w-full p-2 border rounded"
        type="number"
        value={draft.price}
        onChange={(e) => update('price', parseInt(e.target.value))}
        placeholder="가격"
      />
      <input
        className="w-full p-2 border rounded"
        type="number"
        value={draft.stock}
        onChange={(e) => update('stock', parseInt(e.target.value))}
        placeholder="재고"
      />

      {/* 할인 목록 */}
      <div className="space-y-1">
        {draft.discounts.map((d, i) => (
          <div key={i} className="flex justify-between">
            <span>
              {d.quantity}개 이상 {d.rate * 100}% 할인
            </span>
            <button
              onClick={() => removeDisc(i)}
              className="bg-red-500 text-white px-2 rounded hover:bg-red-600"
            >
              삭제
            </button>
          </div>
        ))}
      </div>

      {/* 할인 추가 */}
      <div className="flex gap-2">
        <input
          className="w-full p-2 border rounded"
          type="number"
          placeholder="수량"
          value={disc.quantity}
          onChange={(e) =>
            setDisc({ ...disc, quantity: parseInt(e.target.value) })
          }
        />
        <input
          className="w-full p-2 border rounded"
          type="number"
          placeholder="할인율(%)"
          value={disc.rate * 100}
          onChange={(e) =>
            setDisc({ ...disc, rate: parseInt(e.target.value) / 100 })
          }
        />
        <button
          onClick={addDisc}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          추가
        </button>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onSave(draft)}
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          수정 완료
        </button>
        <button
          onClick={onCancel}
          className="w-full bg-gray-300 text-gray-800 p-2 rounded hover:bg-gray-400"
        >
          취소
        </button>
      </div>
    </div>
  );
}
