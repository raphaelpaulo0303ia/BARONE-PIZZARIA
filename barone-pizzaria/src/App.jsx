import React, { useMemo, useState } from 'react'
import { ShoppingCart, Pizza, Bike, Store, Minus, Plus, Trash2, Percent, MapPin, Phone, CreditCard, Wallet, Split } from 'lucide-react'
import { Button } from './components/Button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from './components/Card.jsx'
import { Input } from './components/Input.jsx'
import { Badge } from './components/Badge.jsx'
import { Separator } from './components/Separator.jsx'
import { BIZ, CATEGORIES, MENU } from './pizzaria/data.js'

export default function App() {
  const [tab, setTab] = useState('delivery') // delivery | retirada
  const [category, setCategory] = useState('promo')
  const [cartOpen, setCartOpen] = useState(false)
  const [address, setAddress] = useState('')
  const [coupon, setCoupon] = useState('')
  const [payment, setPayment] = useState('pix')
  const [customer, setCustomer] = useState({ name: '', phone: '' })
  const [changeFor, setChangeFor] = useState('')
  const [cart, setCart] = useState([]) // { id, name, price, qty, options }

  const filteredMenu = useMemo(() => {
    if (category === 'promo') return MENU.slice(0, 4)
    return MENU.filter(m => m.category === category)
  }, [category])

  const subtotal = useMemo(() => cart.reduce((acc, i) => acc + i.price * i.qty, 0), [cart])
  const discount = useMemo(() => (coupon.toLowerCase() === 'pizza10' ? subtotal * 0.1 : 0), [coupon, subtotal])
  const delivery = tab === 'delivery' && cart.length > 0 ? BIZ.deliveryFeeDefault : 0
  const total = Math.max(0, subtotal - discount) + delivery

  function addToCart(item, opts = {}) {
    const key = item.id + JSON.stringify(opts)
    setCart(prev => {
      const found = prev.find(i => i.id === key)
      if (found) return prev.map(i => i.id === key ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { id: key, name: item.name, price: item.price + (opts.borderPrice||0) + (opts.halfExtra||0), qty: 1, opts }]
    })
  }

  function updateQty(id, delta) {
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty: i.qty + delta } : i).filter(i => i.qty > 0))
  }

  function removeItem(id){ setCart(prev => prev.filter(i => i.id !== id)) }

  function buildWhatsAppMessage(order) {
    const items = order.items.map(i => {
      const opt = []
      if (i.opts?.halfA && i.opts?.halfB) opt.push(`1/2 ${i.opts.halfA} + 1/2 ${i.opts.halfB}`)
      if (i.opts?.border) opt.push(`Borda: ${i.opts.border}`)
      return `• ${i.qty}x ${i.name}${opt.length?` (${opt.join(', ')})`:''} — R$ ${(i.price * i.qty).toFixed(2)}`
    }).join('%0A')
    const addr = order.mode === 'delivery' ? `%0AEndereço: ${order.address}` : '%0ARetirada na loja'
    const pay = `Pagamento: ${order.payment.toUpperCase()}${order.payment === 'dinheiro' && order.changeFor ? ` (troco para ${order.changeFor})` : ''}`
    const head = `*${BIZ.brandName}* — Pedido #${order.id}%0A`
    const body = `${items}%0A%0ASubtotal: R$ ${order.subtotal.toFixed(2)}${order.discount>0?`%0ADesconto: -R$ ${order.discount.toFixed(2)}`:''}${order.delivery>0?`%0AEntrega: R$ ${order.delivery.toFixed(2)}`:''}%0A*Total: R$ ${order.total.toFixed(2)}*`
    const cust = `%0A%0ACliente: ${order.customer.name} (${order.customer.phone})${addr}%0A${pay}`
    return encodeURI(head + body + cust)
  }

  function checkout() {
    const order = {
      id: Math.random().toString(36).slice(2, 8).toUpperCase(),
      items: cart,
      customer,
      address,
      payment,
      changeFor,
      subtotal,
      discount,
      delivery,
      total,
      mode: tab,
    }
    const msg = buildWhatsAppMessage(order)
    const phone = BIZ.whatsappE164.replace('+','')
    const url = `https://wa.me/${phone}?text=${msg}`
    window.open(url, '_blank')
  }

  // Simple modal/cart without external libs
  function CartSheet() {
    if (!cartOpen) return null
    return (
      <div className="fixed inset-0 z-50 bg-black/30 grid place-items-end">
        <div className="w-full max-w-md bg-white h-screen p-4 overflow-y-auto">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Seu carrinho</h2>
            <button onClick={()=>setCartOpen(false)} className="text-sm underline">Fechar</button>
          </div>
          {cart.length === 0 ? (
            <p className="text-sm text-neutral-500 mt-4">Seu carrinho está vazio.</p>
          ) : (
            <div className="mt-4 space-y-4">
              {cart.map(i => (
                <div key={i.id} className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-medium">{i.name}</p>
                    {i.opts && (i.opts.halfA || i.opts.border) && (
                      <p className="text-xs text-neutral-500 truncate">
                        {i.opts.halfA?`1/2 ${i.opts.halfA}`:''} {i.opts.halfB?`+ 1/2 ${i.opts.halfB}`:''} {i.opts.border?`• Borda: ${i.opts.border}`:''}
                      </p>
                    )}
                    <p className="text-xs text-neutral-500">R$ {i.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="icon" variant="outline" onClick={()=>updateQty(i.id,-1)}>-</Button>
                    <span className="w-6 text-center">{i.qty}</span>
                    <Button size="icon" variant="outline" onClick={()=>updateQty(i.id,1)}>+</Button>
                    <Button size="icon" variant="ghost" onClick={()=>removeItem(i.id)}>🗑</Button>
                  </div>
                </div>
              ))}

              <div className="h-px bg-neutral-200 my-2"></div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span>🎫</span>
                  <Input placeholder="Cupom (ex: PIZZA10)" value={coupon} onChange={e=>setCoupon(e.target.value)} />
                </div>
                {tab === 'delivery' && (
                  <div className="flex items-center gap-2">
                    <span>📍</span>
                    <Input placeholder="Endereço para entrega" value={address} onChange={e=>setAddress(e.target.value)} />
                  </div>
                )}
              </div>

              <div className="text-sm space-y-1">
                <div className="flex justify-between"><span>Subtotal</span><span>R$ {subtotal.toFixed(2)}</span></div>
                {discount>0 && <div className="flex justify-between text-green-600"><span>Desconto</span><span>- R$ {discount.toFixed(2)}</span></div>}
                {delivery>0 && <div className="flex justify-between"><span>Entrega</span><span>R$ {delivery.toFixed(2)}</span></div>}
                <div className="flex justify-between font-bold text-base pt-2"><span>Total</span><span>R$ {total.toFixed(2)}</span></div>
              </div>

              <Button className="w-full" size="lg" onClick={()=>{setCartOpen(false); checkout();}}>Enviar no WhatsApp</Button>
            </div>
          )}
        </div>
      </div>
    )
  }

  function HalfHalfButton({item}){
    const [open,setOpen]=useState(false)
    const [halfA,setHalfA]=useState('Calabresa')
    const [halfB,setHalfB]=useState('Marguerita')
    const [border,setBorder]=useState('Nenhuma')
    const borderPrice = border==='Catupiry' ? 7.0 : 0
    const halfExtra = 2.0 // taxa de montagem meia-meia

    return (<div>
      <Button variant="outline" onClick={()=>setOpen(true)}>Meia‑meia / Borda</Button>
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 grid place-items-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Personalizar</h3>
              <button className="text-sm underline" onClick={()=>setOpen(false)}>Fechar</button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-sm">Metade A</label>
                <select className="w-full border rounded-xl px-3 py-2" value={halfA} onChange={e=>setHalfA(e.target.value)}>
                  {MENU.filter(m=>m.category!=='bebidas' && m.category!=='doces').map(m=>(<option key={m.id} value={m.name}>{m.name}</option>))}
                </select>
              </div>
              <div>
                <label className="text-sm">Metade B</label>
                <select className="w-full border rounded-xl px-3 py-2" value={halfB} onChange={e=>setHalfB(e.target.value)}>
                  {MENU.filter(m=>m.category!=='bebidas' && m.category!=='doces').map(m=>(<option key={m.id} value={m.name}>{m.name}</option>))}
                </select>
              </div>
            </div>
            <div>
              <label className="text-sm">Borda recheada</label>
              <select className="w-full border rounded-xl px-3 py-2" value={border} onChange={e=>setBorder(e.target.value)}>
                <option>Nenhuma</option>
                <option>Catupiry</option>
              </select>
              {border==='Catupiry' && <p className="text-xs text-neutral-500 mt-1">+ R$ 7,00</p>}
              <p className="text-xs text-neutral-500 mt-1">Taxa meia‑meia: + R$ {halfExtra.toFixed(2)}</p>
            </div>
            <Button className="w-full" onClick={()=>{addToCart(item,{halfA,halfB,border,borderPrice,halfExtra}); setOpen(false)}}>Adicionar personalizado</Button>
          </div>
        </div>
      )}
    </div>)
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="size-9 rounded-2xl grid place-items-center text-white" style={{backgroundColor: BIZ.colors.primary}}><span>🍕</span></div>
            <div>
              <h1 className="text-lg font-bold leading-tight">{BIZ.brandName}</h1>
              <p className="text-xs text-neutral-500 -mt-0.5">Aberto hoje • {BIZ.openHours}</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Button variant={tab==='delivery'?'default':'outline'} onClick={()=>setTab('delivery')}>Entrega</Button>
            <Button variant={tab==='retirada'?'default':'outline'} onClick={()=>setTab('retirada')}>Retirada</Button>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" onClick={()=>setCartOpen(true)}>
              🛒 Carrinho {cart.length>0 && <span className="ml-2 text-xs bg-neutral-200 rounded-full px-2">{cart.reduce((a,i)=>a+i.qty,0)}</span>}
            </Button>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 mt-6">
        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-4 border shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end gap-3 md:gap-6">
            <div className="flex-1">
              <p className="text-sm text-neutral-500">Faça seu pedido agora</p>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">{BIZ.brandName}: pizzas quentinhas em poucos cliques</h2>
            </div>
            {tab==='delivery' ? (
              <div className="flex-1 flex items-center gap-2">
                <Input placeholder="Digite seu endereço (rua, número, bairro)" value={address} onChange={e=>setAddress(e.target.value)} />
              </div>
            ) : (
              <div className="flex-1 flex items-center gap-2">
                <Input placeholder="Retirada na loja • Av. Principal, 123" disabled />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 mt-6">
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {CATEGORIES.map(c => (
            <Button key={c.id} variant={category===c.id?'default':'outline'} onClick={()=>setCategory(c.id)}>{c.name}</Button>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredMenu.map(m => (
          <Card key={m.id} className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="h-40 w-full bg-cover bg-center" style={{ backgroundImage: `url(${m.img})` }} />
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{m.name}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-neutral-500 min-h-10">{m.description}</p>
              <div className="flex items-center justify-between mt-3">
                <div className="text-lg font-bold">R$ {m.price.toFixed(2)}</div>
                <div className="flex items-center gap-2">
                  <HalfHalfButton item={m} />
                  <Button onClick={()=>addToCart(m)}>Adicionar</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <footer className="sticky bottom-0 mt-6 bg-white/80 backdrop-blur border-t">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="text-sm text-neutral-500 hidden sm:block">
            Atendimento: <a className="underline" href={`https://wa.me/${BIZ.whatsappE164.replace('+','')}`} target="_blank">WhatsApp</a> • <a className="underline" href={`https://instagram.com/${BIZ.instagram.replace('@','')}`} target="_blank">Instagram</a>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <Button variant="outline" onClick={()=>setCartOpen(true)}>Ver carrinho</Button>
            <Button onClick={()=>{cart.length ? checkout() : setCartOpen(true)}}>Finalizar</Button>
          </div>
        </div>
      </footer>

      <CartSheet/>
    </div>
  )
}
