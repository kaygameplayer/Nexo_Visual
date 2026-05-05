# 🎨 Plano de Construção — Site Nexo Visual

> **Estúdio de Design Gráfico | Portfólio Institucional Estático**
> Documento técnico para desenvolvedores · Versão 1.0

---

## 1. Visão Geral do Projeto

| Item | Detalhe |
|---|---|
| **Cliente** | Nexo Visual |
| **Tipo** | Site estático (100% frontend) |
| **Finalidade** | Portfólio institucional digital |
| **Stack principal** | HTML5 + CSS3 + JavaScript (Vanilla ou React) |
| **Responsividade** | Mobile-first (320px → 1920px+) |
| **Idioma** | Português (pt-BR) |

---

## 2. Paleta de Cores (baseada no logotipo)

```css
:root {
  /* Primárias */
  --azul-profundo:    #0D1B4B;   /* texto principal, headers */
  --azul-vibrante:    #1E4FD8;   /* CTAs, destaques */
  --teal:             #00C2C7;   /* acentos, hover, gradiente */

  /* Gradiente institucional */
  --gradient-main: linear-gradient(135deg, #1E4FD8 0%, #00C2C7 100%);
  --gradient-dark: linear-gradient(135deg, #0D1B4B 0%, #1E4FD8 100%);

  /* Neutras */
  --branco:           #FFFFFF;
  --cinza-claro:      #F4F6FB;
  --cinza-medio:      #D1D9E8;
  --cinza-texto:      #6B7A99;

  /* Sombras */
  --shadow-card: 0 8px 32px rgba(30, 79, 216, 0.12);
  --shadow-hover: 0 16px 48px rgba(0, 194, 199, 0.22);
}
```

---

## 3. Tipografia

| Uso | Fonte | Peso | Estilo |
|---|---|---|---|
| Display / Hero | **Syne** (Google Fonts) | 700–800 | Geométrico, moderno |
| Headings | **Syne** | 600–700 | — |
| Corpo / Parágrafos | **DM Sans** | 400–500 | Legível, humanista |
| Labels / Badges | **DM Mono** | 400 | Técnico, discreto |

```html
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400&display=swap" rel="stylesheet">
```

---

## 4. Estrutura de Páginas

```
/ (index.html)
├── #hero          → Abertura animada com tagline
├── #sobre         → Sobre a Nexo Visual
├── #servicos      → As 3 especialidades
├── #portfolio     → Projetos em grid filtrado
├── #processo      → Processo criativo (steps)
├── #depoimentos   → Testemunhos mockados
└── #contato       → Formulário visual (sem backend)

/404.html          → Página de erro customizada
```

> **Nota**: Site de página única (SPA-like) com navegação por âncoras suaves. Todas as seções estão em `index.html`.

---

## 5. Componentes e Seções Detalhadas

### 5.1 — Navbar

- **Comportamento**: Fixa no topo, muda background ao rolar (scroll > 80px: backdrop-blur + shadow)
- **Elementos**:
  - Logo SVG da Nexo Visual (esquerda)
  - Links de navegação: Sobre · Serviços · Portfólio · Processo · Contato
  - Botão CTA: "Fale Conosco" (gradiente, borda arredondada)
  - Menu hamburger (mobile)
- **Animações**: Slide-down na entrada, underline animado nos links

```css
.navbar {
  position: fixed;
  top: 0; width: 100%;
  transition: background 0.3s, box-shadow 0.3s;
  z-index: 1000;
}
.navbar.scrolled {
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(12px);
  box-shadow: 0 2px 24px rgba(30,79,216,0.10);
}
```

---

### 5.2 — Hero Section

- **Layout**: Full-viewport (100vh), centralizado
- **Elementos**:
  - Tag animada: `[ Estúdio de Design Gráfico ]`
  - Headline principal: "Conectamos ideias a experiências visuais impactantes"
  - Subtítulo: Breve descrição da Nexo Visual
  - Dois CTAs: "Ver Portfólio" (primário) + "Saiba Mais" (outline)
  - Background: Gradiente mesh animado + partículas sutis ou formas geométricas flutuantes
  - Logo mark da NV centralizado ou em overlay
- **Animações**:
  - Entrada em cascata (stagger) de cada elemento (opacity + translateY)
  - Formas geométricas com animação `float` contínua
  - Cursor personalizado com trailing effect (opcional, desktop)

```css
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50%       { transform: translateY(-20px) rotate(3deg); }
}
```

---

### 5.3 — Sobre a Empresa

- **Layout**: 2 colunas (texto + visual) em desktop, coluna única em mobile
- **Elementos**:
  - Título da seção com linha decorativa em gradiente
  - Parágrafo sobre missão e posicionamento da Nexo Visual
  - 3 cards de números/stats: "50+ Projetos", "8+ Anos", "100% Clientes Satisfeitos"
  - Imagem ou ilustração abstrata baseada na identidade visual
- **Visual**: Stats em cards com borda gradiente e ícone

---

### 5.4 — Serviços (Especialidades)

- **Layout**: 3 cards em grid (1col mobile, 3col desktop)
- **Cada card contém**:
  - Ícone SVG temático
  - Nome do serviço
  - Descrição curta (3–4 linhas)
  - Lista de entregáveis (bullets)
  - Link "Ver projetos →"
- **Serviços**:
  1. **Character Design** — Personagens para jogos, marcas e mídia
  2. **Game Design** — Conceitos visuais, interfaces e identidade de jogos
  3. **Design Publicitário** — Campanhas, branding e materiais promocionais
- **Animações**: Cards com hover lift (translateY + shadow upgrade), borda gradiente no hover

---

### 5.5 — Portfólio

- **Layout**: Masonry grid ou grade 3×N
- **Filtros**: Todos · Character Design · Game Design · Design Publicitário
- **Cada item**:
  - Imagem do projeto (placeholder com aspect-ratio 4:3 ou 16:9)
  - Overlay com nome do projeto + categoria ao hover
  - Transição suave (opacity + scale)
- **Animações**:
  - Filtragem com animação de fade+scale
  - Entrada dos cards via Intersection Observer (scroll reveal)
- **Implementação de filtros**: JavaScript puro com `data-category` attributes

```html
<div class="portfolio-item" data-category="character">
  <img src="..." alt="Nome do Projeto">
  <div class="overlay">
    <span class="tag">Character Design</span>
    <h3>Nome do Projeto</h3>
  </div>
</div>
```

---

### 5.6 — Processo Criativo

- **Layout**: Timeline horizontal (desktop) / vertical (mobile)
- **Etapas** (4–5 passos):
  1. **Briefing** — Entendemos o problema e os objetivos
  2. **Pesquisa** — Referências, moodboard e conceitos
  3. **Criação** — Desenvolvimento visual e iterações
  4. **Refinamento** — Ajustes, feedback e polimento
  5. **Entrega** — Arquivos finais e suporte
- **Visual**: Ícone + número + título + descrição por etapa
- **Animação**: Linha progressiva animada via scroll

---

### 5.7 — Depoimentos

- **Layout**: Carrossel (slider) horizontal com navegação por bullets e setas
- **Cada depoimento (mockado)**:
  - Avatar (iniciais em círculo colorido)
  - Nome e cargo/empresa
  - Estrelas (5/5)
  - Texto do depoimento
- **Implementação**: CSS Scroll Snap + JS mínimo para navegação

---

### 5.8 — Contato

- **Layout**: 2 colunas (informações + formulário)
- **Informações** (esquerda):
  - Email, Instagram, LinkedIn (mockados)
  - Frase de chamada
  - Formas decorativas
- **Formulário** (direita):
  - Nome · Email · Serviço de interesse (select) · Mensagem
  - Botão de envio com loading state (visual apenas)
  - Validação client-side básica (HTML5 + JS)
- **Nota**: Sem backend; exibir mensagem de sucesso visual após submit

---

### 5.9 — Footer

- **Elementos**:
  - Logo + tagline
  - Links rápidos (coluna)
  - Links sociais (ícones SVG)
  - Copyright `© 2025 Nexo Visual. Todos os direitos reservados.`
- **Visual**: Fundo azul profundo, texto claro

---

## 6. Tecnologias Recomendadas

### Stack Opção A — Vanilla (simples e performático)

| Tecnologia | Uso |
|---|---|
| HTML5 semântico | Estrutura do site |
| CSS3 + Custom Properties | Estilos, animações, responsividade |
| JavaScript ES6+ (Vanilla) | Interatividade, filtros, slider |
| Google Fonts | Tipografia |
| SVG inline | Ícones e logo |

### Stack Opção B — React (escalável)

| Tecnologia | Uso |
|---|---|
| React 18 + Vite | Base e build |
| CSS Modules ou Tailwind CSS | Estilos |
| Framer Motion | Animações |
| React Icons | Ícones |
| EmailJS (opcional) | Formulário sem backend |

> **Recomendação**: Para o MVP estático, use **Opção A (Vanilla)**. Migre para React quando o portfólio crescer ou precisar de CMS.

---

## 7. Organização de Arquivos

```
nexo-visual/
├── index.html
├── 404.html
│
├── assets/
│   ├── css/
│   │   ├── reset.css
│   │   ├── variables.css       ← tokens de design (cores, tipografia, espaços)
│   │   ├── global.css          ← estilos base
│   │   ├── components/
│   │   │   ├── navbar.css
│   │   │   ├── hero.css
│   │   │   ├── cards.css
│   │   │   ├── portfolio.css
│   │   │   ├── slider.css
│   │   │   ├── form.css
│   │   │   └── footer.css
│   │   └── animations.css      ← keyframes globais
│   │
│   ├── js/
│   │   ├── main.js             ← init, scroll events, navbar
│   │   ├── portfolio-filter.js ← lógica de filtros
│   │   ├── slider.js           ← carrossel de depoimentos
│   │   ├── scroll-reveal.js    ← Intersection Observer
│   │   └── form-validation.js  ← validação do formulário
│   │
│   ├── images/
│   │   ├── logo/
│   │   │   ├── nexo-logo.svg
│   │   │   └── nexo-logo-white.svg
│   │   ├── portfolio/
│   │   │   ├── character/
│   │   │   ├── game/
│   │   │   └── publicitario/
│   │   └── team/
│   │
│   └── icons/
│       └── (SVGs de ícones inline ou sprite)
│
├── .gitignore
├── README.md
└── plano-site.md               ← este documento
```

---

## 8. Padrões de UI/UX

### Espaçamentos (escala 8px)
```css
--space-xs:  8px;
--space-sm:  16px;
--space-md:  24px;
--space-lg:  48px;
--space-xl:  80px;
--space-2xl: 120px;
```

### Breakpoints
```css
/* Mobile first */
/* sm  */ @media (min-width: 480px)  { }
/* md  */ @media (min-width: 768px)  { }
/* lg  */ @media (min-width: 1024px) { }
/* xl  */ @media (min-width: 1280px) { }
/* 2xl */ @media (min-width: 1536px) { }
```

### Border Radius
```css
--radius-sm:   6px;
--radius-md:   12px;
--radius-lg:   24px;
--radius-full: 9999px;
```

---

## 9. Animações e Microinterações

| Elemento | Animação | Duração |
|---|---|---|
| Entrada de seção | fade-in + translateY(30px→0) | 0.6s ease-out |
| Cards de serviço | hover: translateY(-8px) + shadow | 0.3s ease |
| Links da navbar | underline grow (scaleX) | 0.25s ease |
| Botões CTA | hover: escala 1.03 + brilho | 0.2s ease |
| Portfolio hover | overlay opacity 0→1 | 0.35s ease |
| Formas hero | float keyframe | 4–6s infinite |
| Scroll progress | barra de progresso no topo | — |

---

## 10. Acessibilidade (WCAG 2.1 AA)

- Todos os `<img>` com `alt` descritivo
- Contraste de texto mínimo 4.5:1
- Navegação por teclado (foco visível customizado)
- `aria-label` em botões de ícone
- `role="navigation"` na navbar
- Skip link "Ir para o conteúdo" (visível no foco)
- Formulário com `<label>` explícito para cada campo
- Reduzir animações com `prefers-reduced-motion`

```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

---

## 11. Performance

- Imagens em formato **WebP** com fallback JPEG
- `loading="lazy"` em todas as imagens fora do viewport inicial
- Fontes com `font-display: swap`
- CSS crítico inline (acima do fold)
- JS com `defer` ou `type="module"`
- Compressão de assets (gzip/brotli via servidor)
- Meta tags de SEO completas

---

## 12. SEO e Meta Tags

```html
<meta name="description" content="Nexo Visual — Estúdio de Design Gráfico especializado em Character Design, Game Design e Design Publicitário.">
<meta property="og:title" content="Nexo Visual | Estúdio de Design Gráfico">
<meta property="og:image" content="/assets/images/og-image.jpg">
<meta property="og:type" content="website">
<link rel="canonical" href="https://nexovisual.com.br/">
```

---

## 13. Checklist de Entrega

- [ ] Navbar responsiva com scroll behavior
- [ ] Hero animado com gradiente mesh
- [ ] Seção Sobre com stats
- [ ] 3 cards de serviços com hover
- [ ] Grid de portfólio com filtros funcionais
- [ ] Timeline do processo criativo
- [ ] Carrossel de depoimentos
- [ ] Formulário de contato com validação
- [ ] Footer completo
- [ ] Responsividade mobile/tablet/desktop testada
- [ ] Acessibilidade básica validada
- [ ] Performance (Lighthouse 90+)
- [ ] Cross-browser (Chrome, Firefox, Safari, Edge)

---

*Documento gerado para uso interno da equipe de desenvolvimento da Nexo Visual.*
*Versão 1.0 — Maio 2025*
