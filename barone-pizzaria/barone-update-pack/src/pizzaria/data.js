export const BIZ = {
  brandName: 'BARONE PIZZARIA',
  address: 'Barone Pizzaria — Delivery',
  openHours: '18h–23h',
  instagram: '@barone_pizzaria',
  whatsappE164: '+5581996816509',
  deliveryFeeDefault: 7.5,
  colors: {
    primary: '#009739',
    secondary: '#E30613',
    metallic: '#C0C0C0',
    cream: '#FFF8E1',
    charcoal: '#121212',
  },
}

export const CATEGORIES = [
  { id: 'promo', name: 'Promoções' },
  { id: 'tradicionais', name: 'Tradicionais' },
  { id: 'especiais', name: 'Especiais' },
  { id: 'doces', name: 'Doces' },
  { id: 'bebidas', name: 'Bebidas' },
]

export const MENU = [
  { id: 'mussarela', name: 'Mussarela', description: 'Queijo mussarela, tomates e azeitonas.', price: 32, category: 'tradicionais', img: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2a?q=80&w=1000&auto=format&fit=crop' },
  { id: 'presunto', name: 'Presunto', description: 'Queijo mussarela e presunto ralado.', price: 32, category: 'tradicionais', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop' },
  { id: 'margherita', name: 'Margherita', description: 'Queijo mussarela, parmesão, tomates e manjericão.', price: 32, category: 'tradicionais', img: 'https://images.unsplash.com/photo-1548365328-9955c3a39b8c?q=80&w=1000&auto=format&fit=crop' },
  { id: 'calabresa', name: 'Calabresa', description: 'Calabresa, mussarela, cebolas finas.', price: 35, category: 'tradicionais', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop' },
  { id: 'frango', name: 'Frango', description: 'Frango temperado, mussarela, tomates e azeitonas.', price: 35, category: 'tradicionais', img: 'https://images.unsplash.com/photo-1541745537413-b8046dc6d66c?q=80&w=1000&auto=format&fit=crop' },
  { id: 'atum', name: 'Atum', description: 'Mussarela, atum e tomates.', price: 38, category: 'tradicionais', img: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=1000&auto=format&fit=crop' },
  { id: 'charque', name: 'Charque', description: 'Mussarela, charque, cebola e azeitonas.', price: 40, category: 'tradicionais', img: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=1000&auto=format&fit=crop' },
  { id: 'frango-caipira', name: 'Frango Caipira', description: 'Frango, mussarela, milho, ervilha, bacon e azeitonas.', price: 40, category: 'tradicionais', img: 'https://images.unsplash.com/photo-1541745537413-b8046dc6d66c?q=80&w=1000&auto=format&fit=crop' },
  { id: 'portuguesa', name: 'Portuguesa', description: 'Mussarela, presunto, ovo, milho, ervilha, tomate, cebola, pimentão e azeitonas.', price: 40, category: 'tradicionais', img: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=1000&auto=format&fit=crop' },
  { id: 'tres-queijos', name: '3 Queijos', description: 'Mussarela, cheddar, catupiry e azeitonas.', price: 40, category: 'tradicionais', img: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=1000&auto=format&fit=crop' },

  { id: 'calabresa-coalho', name: 'Calabresa com Queijo Coalho', description: 'Calabresa, cebolas finas e queijo coalho.', price: 42, category: 'especiais', img: 'https://images.unsplash.com/photo-1566847438210-0bfc1f3c54b0?q=80&w=1000&auto=format&fit=crop' },
  { id: 'calabresa-cream', name: 'Calabresa com Cream Cheese', description: 'Calabresa, cebola fina e cream cheese.', price: 42, category: 'especiais', img: 'https://images.unsplash.com/photo-1603072387531-3e3f3a2f5a5b?q=80&w=1000&auto=format&fit=crop' },
  { id: 'frango-catupiry', name: 'Frango com Catupiry', description: 'Frango temperado com catupiry.', price: 42, category: 'especiais', img: 'https://images.unsplash.com/photo-1541745537413-b8046dc6d66c?q=80&w=1000&auto=format&fit=crop' },
  { id: 'charque-catupiry', name: 'Charque com Catupiry', description: 'Charque, cebolas finas e catupiry.', price: 45, category: 'especiais', img: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=1000&auto=format&fit=crop' },
  { id: 'charque-coalho', name: 'Charque com Queijo Coalho', description: 'Charque com queijo coalho.', price: 45, category: 'especiais', img: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=1000&auto=format&fit=crop' },
  { id: 'carne-sol-coalho', name: 'Carne de Sol com Queijo Coalho', description: 'Carne de sol em cubos, cebolas finas e queijo coalho.', price: 45, category: 'especiais', img: 'https://images.unsplash.com/photo-1594007654729-407eedc4be3f?q=80&w=1000&auto=format&fit=crop' },
  { id: 'camarao', name: 'Camarão', description: 'Camarão ao molho com queijo mussarela.', price: 50, category: 'especiais', img: 'https://images.unsplash.com/photo-1603072387531-3e3f3a2f5a5b?q=80&w=1000&auto=format&fit=crop' },
  { id: 'camarao-catupiry', name: 'Camarão com Catupiry', description: 'Camarão ao molho com mussarela, parmesão e catupiry.', price: 60, category: 'especiais', img: 'https://images.unsplash.com/photo-1603072387531-3e3f3a2f5a5b?q=80&w=1000&auto=format&fit=crop' },

  // Doces
  { id: 'cartola', name: 'Cartola (Doce)', description: 'Mussarela, banana em rodelas, canela e leite condensado.', price: 35, category: 'doces', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop' },
]
