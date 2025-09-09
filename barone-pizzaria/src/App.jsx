// src/App.jsx
import React from "react";
import { NEGOCIOS } from "./pizzaria/dados"; // caminho certo pro arquivo de dados

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* topo / header */}
      <header
        className="flex items-center justify-between p-4 shadow-md"
        style={{ backgroundColor: NEGOCIOS.cores.primario, color: "white" }}
      >
        <div className="flex items-center gap-3">
          <img src="/logo-barone.png" alt="Barone Pizzaria" className="h-12" />
          <h1 className="text-2xl font-bold">{NEGOCIOS.marca}</h1>
        </div>
        <span className="text-sm italic">{NEGOCIOS.horario}</span>
      </header>

      {/* miolo */}
      <main className="flex-grow px-4 py-10 text-center">
        <h2
          className="text-xl font-semibold"
          style={{ color: NEGOCIOS.cores.manjericao }}
        >
          Bem-vindo à {NEGOCIOS.marca}
        </h2>
        <p className="mt-2 text-gray-600">{NEGOCIOS.endereco}</p>
      </main>

      {/* botão flutuante do WhatsApp */}
      <a
        href={`https://wa.me/${NEGOCIOS.whatsappE164}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 text-white px-5 py-3 rounded-full shadow-lg font-bold"
        style={{ backgroundColor: NEGOCIOS.cores.manjericao }}
      >
        Pedir no WhatsApp
      </a>

      {/* rodapé */}
      <footer
        className="mt-6 py-4 text-center text-sm"
        style={{ backgroundColor: NEGOCIOS.cores.carvão, color: "white" }}
      >
        <p>{NEGOCIOS.endereco}</p>
        <p>📱 {NEGOCIOS.instagram}</p>
        <p>⏰ {NEGOCIOS.horario}</p>
      </footer>
    </div>
  );
}

