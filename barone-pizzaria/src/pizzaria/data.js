// src/pizzaria/data.js
export const BIZ = {
  brandName: 'BARONE PIZZARIA',
  address: 'Av. Beira-Mar, 123 — Bairro Central',
  openHours: '18h–23h',
  instagram: '@barone.pizzaria',
  whatsappE164: '+5581999990000',
  deliveryFeeDefault: 7.5,
  colors: {
    primary: '#E53935',
    secondary: '#FBC02D',
    basil: '#43A047',
    charcoal: '#121212',
    cream: '#FFF8E1'
  }
};

export const CATEGORIES = [
  { id: 'promo', name: 'Promoções' },
  { id: 'tradicionais', name: 'Tradicionais' },
  { id: 'especiais', name: 'Especiais' },
  { id: 'doces', name: 'Doces' },
  { id: 'bebidas', name: 'Bebidas' },
];

export const MENU = [
  {
    id: 'calabresa',
    name: 'Calabresa',
    description: 'Mussarela, calabresa, cebola roxa, orégano.',
    price: 39.9,
    category: 'tradicionais',
    img: 'https://images.unsplash.com/photo-1542838132...'
  },
  {
    id: 'margarita',
    name: 'Margarita',
    description: 'Mussarela, tomate, manjericão fresco.',
    price: 42.9,
    category: 'tradicionais',
    img: 'https://images.unsplash.com/photo-1571997478779...'
  }
];

