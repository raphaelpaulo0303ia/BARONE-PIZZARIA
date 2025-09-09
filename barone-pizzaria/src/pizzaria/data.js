// src/pizzaria/data.js

export const BIZ = {
  brandName: "BARONE PIZZARIA",
  address: "Av. Beira-Mar, 123 – Bairro Central",
  instagram: "@barone.pizzaria",
  whatsappE164: "+5581999990000", // troque pelo número real no formato E164
  openHours: "18h–23h",
  colors: {
    primary: "#3E5395",   // exemplo
    secondary: "#FBC02D", // exemplo
    basil: "#43A047",
    charcoal: "#121212",
    cream: "#FFF8E1",
  },
};

export const CATEGORIES = [
  { id: "promo", name: "Promoções" },
  { id: "tradicionais", name: "Tradicionais" },
  { id: "especiais", name: "Especiais" },
  { id: "doces", name: "Doces" },
  { id: "bebidas", name: "Bebidas" },
];

// Preencha com seu menu real:
export const MENU = [
  {
    name: "Calabresa",
    description: "Mussarela, calabresa, cebola roxa e orégano.",
    price: 39.9,
    category: "tradicionais",
    img: "https://images.unsplash.com/photo-154..." // opcional
  },
  // ...demais itens
];
