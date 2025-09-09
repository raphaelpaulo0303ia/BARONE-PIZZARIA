// src/components/CategoryTabs.jsx
export default function CategoryTabs({ categories, value, onChange }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {categories.map((c) => (
        <button
          key={c.id}
          onClick={() => onChange(c.id)}
          className={`px-3 py-1 rounded-full text-sm border ${
            value === c.id
              ? "bg-black text-white"
              : "bg-white text-black hover:bg-gray-100"
          }`}
        >
          {c.name}
        </button>
      ))}
    </div>
  );
}
