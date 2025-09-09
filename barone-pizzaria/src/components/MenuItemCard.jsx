
import { NEGOCIOS as BIZ, CATEGORIAS, MENU } from "../pizzaria/data";
import { money } from "../pizzaria/money";


export default function MenuItemCard({ item, onOrder }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border">
      {item.img && (
        <img src={item.img} alt={item.name} className="w-full h-40 object-cover" />
      )}

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <span
            className="px-2 py-1 rounded text-sm font-bold"
            style={{ backgroundColor: BIZ.colors.cream, color: BIZ.colors.charcoal }}
          >
            R$ {item.price.toFixed(2)}
          </span>
        </div>

        {item.description && (
          <p className="text-sm text-gray-600 mt-2">{item.description}</p>
        )}

        <button
          onClick={() => onOrder(item)}
          className="mt-3 w-full py-2 rounded-lg font-semibold text-white"
          style={{ backgroundColor: BIZ.colors.primary }}
        >
          Pedir pelo WhatsApp
        </button>
      </div>
    </div>
  );
}
