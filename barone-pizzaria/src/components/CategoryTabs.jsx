
// src/components/CategoryTabs.jsx
import React from "react";
import { BIZ } from "../pizzaria/data";

export default function CategoryTabs({ categories, active, onChange }) {
  return (
    <div className="flex gap-2 overflow-x-auto px-4 py-3 bg-white border-b sticky top-0 z-10">
      <button
        onClick={() => onChange("all")}
        className="px-4 py-2 rounded-full text-sm font-semibold"
        style={{
          backgroundColor: active === "all" ? BIZ.colors.basil : "#edf2f7",
          color: active === "all" ? "white" : "#1a202c",
        }}
      >
        Todas
      </button>

      {categories.map((c) => (
        <button
          key={c.id}
          onClick={() => onChange(c.id)}
          className="px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap"
          style={{
            backgroundColor: active === c.id ? BIZ.colors.basil : "#edf2f7",
            color: active === c.id ? "white" : "#1a202c",
          }}
        >
          {c.name}
        </button>
      ))}
    </div>
  );
}
