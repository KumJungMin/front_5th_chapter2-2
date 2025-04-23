import React, { useState, useCallback } from 'react';
import { Product } from '../../../../types';
import ProductCard from './ProductCard';
import ProductEditor from './ProductEditor';

interface Props {
  products: Product[];
  onUpdate: (p: Product) => void;
}

export default React.memo(function ProductList({ products, onUpdate }: Props) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [editing, setEditing] = useState<Product | null>(null);

  const toggle = useCallback(
    (id: string) => setOpenId((p) => (p === id ? null : id)),
    [],
  );

  const startEdit = useCallback((p: Product) => setEditing(p), []);
  const finishEdit = useCallback(
    (p: Product) => {
      onUpdate(p);
      setEditing(null);
    },
    [onUpdate],
  );

  return (
    <div className="space-y-2">
      {products.map((p) =>
        editing && editing.id === p.id ? (
          <ProductEditor
            key={p.id}
            product={editing}
            onSave={finishEdit}
            onCancel={() => setEditing(null)}
          />
        ) : (
          <ProductCard
            key={p.id}
            product={p}
            isOpen={openId === p.id}
            onToggle={() => toggle(p.id)}
            onEdit={() => startEdit(p)}
          />
        ),
      )}
    </div>
  );
});
