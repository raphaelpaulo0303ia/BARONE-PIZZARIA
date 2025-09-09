// src/App.jsx
import React, { useMemo, useState } from "react";
import { BIZ, CATEGORIES, MENU } from "./pizzaria/data";
import CategoryTabs from "./components/CategoryTabs";
import MenuItemCard from "./components/MenuItemCard";

export default function App() {
  const [activeCat, setActiveCat] = useState("all");
  const [query, setQuery] = useState("");

  // Monta o texto e abre o WhatsApp para o item selecionado
  function orderViaWhatsApp(item) {
    const text =
      `Olá, gostaria de pedir *${item.name}* (R$ ${item.price.toFixed(2)}).\n` +
      `Endereço: \n` +
      `Obs: `;
    const url = `https://wa.me/${BIZ.whatsappE164}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  }

  // Filtragem por categoria e busca
  const filtered = useMemo(() => {
    return MENU.filter((m) => {
      const byCat = activeCat === "all" ? true : m.category === activeCat;
      const byText =
        !query?.trim() ||
        m.name.toLowerCase().includes(query.toLowerCase()) ||
        m.description?.toLowerCase().includes(query.toLowerCase());
      return byCat && byText;
    });
  }, [activeCat, query]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header
        className="flex items-center justify-between p-4 shadow-md"
        style={{ backgroundColor: BIZ.colors.primary, color: "white" }}
      >
        <div className="flex items-center gap-3">
          <img src="/logo-barone.png" alt="Barone Pizzaria" className="h-12" />
          <h1 className="text-2xl font-bold">{BIZ.brandName}</h1>
        </div>
        <span className="text-sm italic">{BIZ.openHours}</span>
      </header>

      {/* Busca */}
      <div className="px-4 pt-4 bg-white">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar pizza, ingrediente..."
          className="w-full border rounded-xl px-4 py-3 outline-none"
          style={{ borderColor: "#e2e8f0" }}
        />
      </div>

      {/* Categorias */}
      <CategoryTabs
        categories={CATEGORIES}
        active={activeCat}
        onChange={setActiveCat}
      />

      {/* Grid do cardápio */}
      <main className="flex-grow px-4 py-5">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500">Nada encontrado.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((item) => (
              <MenuItemCard
                key={`${item.category}-${item.name}`}
                item={item}
                onOrder={orderViaWhatsApp}
              />
            ))}
          </div>
        )}
      </main>

      {/* Botão flutuante WhatsApp (contato livre) */}
      <a
        href={`https://wa.me/${BIZ.whatsappE164}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 text-white px-5 py-3 rounded-full shadow-lg font-bold"
        style={{ backgroundColor: BIZ.colors.basil }}
      >
        Falar no WhatsApp
      </a>

      {/* Footer */}
      <footer
        className="mt-6 py-4 text-center text-sm"
        style={{ backgroundColor: BIZ.colors.charcoal, color: "white" }}
      >
        <p>{BIZ.address}</p>
        <p>📱 {BIZ.instagram}</p>
        <p>⏰ {BIZ.openHours}</p>
      </footer>
    </div>
  );
}

