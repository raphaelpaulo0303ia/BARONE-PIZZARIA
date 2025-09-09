// src/pizzaria/money.js
export const money = (v) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(v ?? 0));

export default money;
