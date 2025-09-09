// src/App.jsx
import React from "react";
import { BIZ } from "./pizzaria/data";

function App() {
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

      {/* Conteúdo principal */}
      <main className="flex-grow flex items-center justify-center">
        <h2
          className="text-2xl font-semibold"
          style={{ color: BIZ.colors.basil }}
        >
          Bem-vindo à {BIZ.brandName}
        </h2>
      </main>

      {/* Botão fixo do WhatsApp */}
      <a
        href={`https://wa.me/${BIZ.whatsappE164}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg font-bold"
      >
        Pedir no WhatsApp
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

export default App;
