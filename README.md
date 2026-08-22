# AURA Digital Studio

> Landing pages leves, rápidas e bonitas — sem enrolação, sem framework pesado.

Site institucional/comercial da **AURA Digital Studio**, estúdio digital freelance focado em criar landing pages de alta conversão para pequenos negócios e profissionais liberais.

🔗 **Repo:** [`lp-home`](https://github.com/ferreirajrrr/lp-home)
📍 Fortaleza, CE — Brasil

---

## 🎯 Sobre o projeto

Este repositório contém a landing page principal da AURA, com:

- Apresentação do estúdio e proposta de valor
- **3 planos de serviço** (Entrada/Presença, Intermediário/Conversão, Premium/Experiência)
- **Simulador de investimento em tempo real** (preço do pacote + add-ons)
- Seção de FAQ, prova social e cases (Duplotec como case principal)
- SEO otimizado (checklist de 18 itens aplicado)

---

## 🛠️ Stack

Filosofia: **zero bloat**. Cada KB importa.

| Camada | Tecnologia |
|---|---|
| Estrutura | HTML5 puro |
| Estilo | CSS3 puro (sem Tailwind/Bootstrap) |
| Interatividade | JavaScript vanilla |
| Animações | [Motion.dev](https://motion.dev) via CDN (ES Module) |
| Hospedagem | Cloudflare Pages (produção) |
| Versionamento/testes | GitHub / GitHub Pages |

**Sem frameworks. Sem build tools. Sem dependências além de CDN (Google Fonts, Motion.dev).**

---

## 📁 Estrutura de pastas

```
lp-home/
├── index.html          # página principal
├── assets/
│   ├── logos/           # variações da marca AURA
│   │   ├── logo_AURA_black.png   # fundo claro
│   │   ├── logo_AURA_white.png   # fundo escuro
│   │   └── logo_aura.png         # versão neon/glow (dark mode)
│   └── img/              # imagens gerais do site
├── robots.txt
├── sitemap.xml
└── favicon.ico
```

> ⚠️ Duplotec (`.duplotec`) segue arquitetura diferente: `index.html` único com CSS/JS inline. Não confundir os dois repositórios.

---

## 🎨 Identidade visual

Uso do logo depende do fundo:

```html
<img src="/assets/logos/logo_AURA_black.png" alt="AURA Digital Studio">
```

- **Fundo claro** → `logo_AURA_black.png`
- **Fundo escuro** → `logo_AURA_white.png`
- **Seções de alto impacto / dark mode** → `logo_aura.png` (efeito neon)

---

## 💰 Planos comerciais

| Plano | Foco |
|---|---|
| **Entrada / Presença** | Presença digital básica, entrega rápida |
| **Intermediário / Conversão** | Otimizado pra gerar leads/vendas |
| **Premium / Experiência** | Full experience, animações, copy estratégica |

O simulador de investimento calcula o valor final somando plano base + add-ons selecionados, em tempo real, direto no front-end.

---

## ✅ Checklist de SEO aplicado

- [x] Meta description
- [x] Alt text em todas as imagens
- [x] robots.txt
- [x] Favicon
- [x] og:image (compartilhamento social)
- [x] Imagens otimizadas + lazy loading
- [x] CTA na primeira dobra
- [x] FAQ (mín. 5 perguntas) com schema
- [x] Links internos / breadcrumbs
- [x] sitemap.xml
- [x] Política de privacidade
- [x] Página de agradecimento
- [x] Página 404 customizada
- [x] Mensagens de erro úteis
- [x] Limite de caracteres nas meta tags

---

## 📜 Regras de conteúdo

- **Todo dado numérico usado como argumento de venda precisa ter fonte auditável** (Cetic.br, Google/Think with Google, Copyblogger via RD Station, etc.). Nada de estatística inventada.
- Copy voltada pro cliente final: direta, sem jargão técnico, focada em resultado.

---

## 🚀 Deploy

- **Produção:** Cloudflare Pages (deploy automático a partir da branch principal)
- **Dev/teste:** GitHub Pages

---

## 📄 Contratos

Fechamentos gerados automaticamente via script Python (`gerar_contrato.py`), com:

- `python-docx` + LibreOffice CLI (exporta `.docx` e `.pdf`)
- Cálculo automático do valor total (plano + add-ons)
- Cláusula fixa de **50% de entrada** (não negociável)

*(Script mantido em repositório/pasta separada do site.)*

---

## 🧩 Case de portfólio

**Duplotec** (assistência técnica de celulares, Mondubim — Fortaleza/CE) é o case pro bono usado como prova de trabalho real da AURA, com reviews reais do Google, mapa, FAQ com schema e microinterações.

---

## 📌 Roadmap

- [ ] Finalizar domínio da Duplotec e substituir placeholders `SEU-DOMINIO-AQUI`
- [ ] Substituir depoimentos/fotos placeholder por conteúdo real
- [ ] Expandir portfólio (novos cases via Workana)
- [ ] Avaliar migração futura para React (gatilho: uso de componentes 21st.dev)

---

## 👤 Autor

**Francisco Eudes Ferreira Júnior**
Desenvolvedor/Designer Web Freelancer — AURA Digital Studio
Fortaleza, CE — Brasil
