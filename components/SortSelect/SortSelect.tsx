// components/SortSelect.tsx
import React from "react";

interface SortSelectProps {
  order: string;
  onChange: (value: string) => void;
}

const SortSelect: React.FC<SortSelectProps> = ({ order, onChange }) => {
  return (
    <select
      value={order}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded p-2 mb-4 text-black"
    >
      <option value="asc">Ordenar A-Z</option>
      <option value="desc">Ordenar Z-A</option>
    </select>
  );
};

export default SortSelect;
