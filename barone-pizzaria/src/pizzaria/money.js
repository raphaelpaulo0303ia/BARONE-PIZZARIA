// src/components/MenuItemCard.jsx
import { NEGOCIOS as BIZ, CATEGORIAS, MENU } from "../pizzaria/data";
import { money } from "../pizzaria/money";

export default function MenuItemCard({ item, onOrder }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border">
      {item.img && (
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-40 object-cover"
        />
      )}

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <span
            className="px-2 py-1 rounded text-sm font-bold"
            style={{
              backgroundColor: BIZ.cores.creme,
              color: BIZ.cores.carvão,
            }}
          >
            {money(item.price)}
          </span>
        </div>

        {item.description && (
          <p className="text-sm text-gray-600 mt-2">{item.description}</p>
        )}
      </div>

      <button
        onClick={() => onOrder(item)}
        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 font-semibold rounded-b-2xl"
      >
        Adicionar
      </button>
    </div>
  );
}
