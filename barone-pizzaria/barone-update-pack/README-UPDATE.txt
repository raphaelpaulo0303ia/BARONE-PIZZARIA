# BARONE PIZZARIA — Update Pack (logo + PWA + cardápio real)
Suba estes arquivos no seu repositório:

/public
  - manifest.webmanifest
  - sw.js
  - favicon.png
  - logo-barone.png
  /icons
    - icon-192.png
    - icon-512.png
    - icon-maskable-512.png

/src/pizzaria
  - data.js  (cores, WhatsApp e cardápio reais)

E cole estes trechos:
- HEAD_TAGS_SNIPPET.html → dentro do <head> do index.html
- REGISTER_SW_SNIPPET.txt → no final do src/main.jsx
