// components/SortSelect.tsx
import React from "react";

interface SortSelectProps {
  order: string;
  onChange: (value: string) => void;
}

export const SortSelect: React.FC<SortSelectProps> = ({ order, onChange }) => {
  return (
    <select
      aria-label="select order"
      value={order}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded p-2 text-black"
    >
      <option value="asc">Ordenar A-Z</option>
      <option value="desc">Ordenar Z-A</option>
    </select>
  );
};
