// src/App.jsx
import React, { useMemo, useState } from "react";
import { NEGOCIOS as BIZ, CATEGORIES, MENU } from "./pizzaria/data";
import CategoryTabs from "./components/CategoryTabs";
import MenuItemCard from "./components/MenuItemCard";

export default function App() {
  const [activeCat, setActiveCat] = useState("promo"); // ou "tradicionais"
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return MENU.filter((m) => {
      const byCat = activeCat === "promo" ? true : m.category === activeCat;
      const t = `${m.name} ${m.description || ""}`.toLowerCase();
      const byText = t.includes(query.trim().toLowerCase());
      return byCat && byText;
    });
  }, [activeCat, query]);

  function onOrder(item) {
    const body = [
      `🍕 *${BIZ.brandName}*`,
      `Quero pedir: *${item.name}* – R$ ${item.price.toFixed(2)}`,
      "",
      "Endereço:",
      "",
    ].join("\n");

    const url =
      "https://wa.me/" +
      BIZ.whatsappE164.replace("+", "") +
      "?text=" +
      encodeURIComponent(body);

    window.open(url, "_blank");
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className="flex items-center justify-between p-4 shadow-md"
        style={{ backgroundColor: BIZ.cores.primário, color: "white" }}
      >
        <img src="/logo-barone.png" alt="Barone Pizzaria" className="h-12" />
        <h1 className="text-2xl font-bold">{BIZ.brandName}</h1>
        <span className="text-sm italic">{BIZ.openHours}</span>
      </header>

      {/* Filtros */}
      <main className="max-w-5xl mx-auto p-4">
        <div className="flex items-center justify-between gap-3 mb-4">
          <CategoryTabs
            categories={CATEGORIES}
            value={activeCat}
            onChange={setActiveCat}
          />
          <input
            className="border rounded px-3 py-2 w-64"
            placeholder="Buscar sabores..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* Lista */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <MenuItemCard key={item.id} item={item} onOrder={onOrder} />
          ))}
        </div>
      </main>

      {/* Footer simples */}
      <footer
        className="mt-6 py-4 text-center text-sm"
        style={{ backgroundColor: BIZ.cores.carvão, color: "white" }}
      >
        <p>{BIZ.address}</p>
        <p>📸 {BIZ.instagram}</p>
        <p>🕐 {BIZ.openHours}</p>
      </footer>
    </div>
  );
}
