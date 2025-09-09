// src/pizzaria/data.js
export const NEGOCIOS = {
  brandName: "BARONE PIZZARIA",
  address: "Av. Beira-Mar, 123 – Bairro Central",
  instagram: "@barone.pizzaria",
  whatsappE164: "+5581999990000", // troque para o real no formato E164
  openHours: "18h–23h",
  cores: {
    primário: "#3E5395",
    secundário: "#FBC02D",
    manjericão: "#43A047",
    carvão: "#121212",
    creme: "#FFFBE1",
  },
};

export const CATEGORIES = [
  { id: "promo", name: "Promoções" },
  { id: "tradicionais", name: "Tradicionais" },
  { id: "especiais", name: "Especiais" },
  { id: "doces", name: "Doces" },
  { id: "bebidas", name: "Bebidas" },
];

export const MENU = [
  // exemplo
  {
    id: 1,
    name: "Calabresa",
    description:
      "Mussarela, calabresa, cebola roxa e orégano.",
    price: 39.9,
    category: "tradicionais",
    img: "https://images.unsplash.com/photo-1542831231-1c1b0f3f3d12",
  },
  // ...demais itens
];
