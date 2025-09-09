export const BIZ = {
  brandName: 'BARONE PIZZARIA',
  address: 'Av. Beira-Mar, 123 — Bairro Central',
  openHours: '18h–23h',
  instagram: '@barone.pizzaria',
  whatsappE164: '+5581999990000', // TROCAR depois
  deliveryFeeDefault: 7.5,
  colors: {
    primary: '#E53935',
    secondary: '#FBC02D',
    basil: '#43A047',
    charcoal: '#121212',
    cream: '#FFF8E1'
  }
}

export const CATEGORIES = [
  { id: 'promo', name: 'Promoções' },
  { id: 'tradicionais', name: 'Tradicionais' },
  { id: 'especiais', name: 'Especiais' },
  { id: 'doces', name: 'Doces' },
  { id: 'bebidas', name: 'Bebidas' },
]

export const MENU = [
  { id: 'calabresa', name: 'Calabresa', description: 'Mussarela, calabresa, cebola roxa, orégano.', price: 39.9, category: 'tradicionais', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop' },
  { id: 'marguerita', name: 'Marguerita', description: 'Mussarela, tomate, manjericão fresco.', price: 42.9, category: 'tradicionais', img: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2a?q=80&w=1000&auto=format&fit=crop' },
  { id: 'frango-catupiry', name: 'Frango com Catupiry', description: 'Frango desfiado temperado, requeijão cremoso, milho.', price: 49.9, category: 'especiais', img: 'https://images.unsplash.com/photo-1541745537413-b8046dc6d66c?q=80&w=1000&auto=format&fit=crop' },
  { id: 'portuguesa', name: 'Portuguesa', description: 'Mussarela, presunto, ovos, azeitona, pimentão, cebola.', price: 47.9, category: 'especiais', img: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=1000&auto=format&fit=crop' },
  { id: 'chocolate', name: 'Chocolate com Morango', description: 'Chocolate ao leite, morangos frescos.', price: 44.9, category: 'doces', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop' },
  { id: 'refrigerante', name: 'Refrigerante Lata', description: 'Coca-Cola, Guaraná, Sprite (350ml)', price: 6.9, category: 'bebidas', img: 'https://images.unsplash.com/photo-1541976076758-347942db1970?q=80&w=1000&auto=format&fit=crop' },
]
