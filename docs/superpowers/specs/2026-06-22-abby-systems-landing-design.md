# Abby Systems — Landing Page Design Spec
_2026-06-22_

## Brief
Landing page para a Abby Systems, empresa de desenvolvimento de software. Objetivo: apresentar a empresa e seu portfólio. Identidade visual criativa e original com logo.

## Tokens

### Cores
| Token | Hex | Uso |
|---|---|---|
| `bg-deep` | `#1E0B2C` | Background principal |
| `bg-dark` | `#0F0718` | Cards, seções alternadas |
| `bg-surface` | `#2A1440` | Nav, superfícies elevadas |
| `gold` | `#D4A853` | Acento primário, CTAs |
| `gold-light` | `#E8C87A` | Hover states |
| `mint` | `#4ECDC4` | Links, detalhes técnicos |
| `text-primary` | `#F5F0E8` | Corpo de texto |
| `text-muted` | `#9B8FA8` | Labels, secundário |
| `border` | `#3D2552` | Divisórias |

### Tipografia
- **Display:** Syne Bold (Google Fonts) — títulos, logo wordmark
- **Body:** Plus Jakarta Sans (Google Fonts) — parágrafos, navegação
- **Mono:** JetBrains Mono (Google Fonts) — snippets, detalhes técnicos

## Logo
Lettermark "A" geométrico: duas diagonais + barra horizontal com nó de circuito na ponta direita. SVG, cor ouro. Wordmark "ABBY SYSTEMS" em Syne caps, letter-spacing: 0.15em.

## Assinatura
Hero background: linhas SVG de circuito animadas crescendo em ângulos 90° (traços de PCB), opacidade 18%, cor ouro. Animação `stroke-dashoffset` no carregamento.

## Seções

### Nav
Sticky, `bg-surface` com blur. Logo à esquerda. Links: Sobre, Portfólio, Contato. CTA "Fale conosco" em ouro.

### Hero
Viewport completo. Circuit animation atrás. Título grande em Syne:
> "Abby constrói. / Você cresce."

Subtítulo: "Desenvolvimento de software sob medida para negócios que não param."
CTA primário: "Ver portfólio →"

### Sobre
2 colunas: texto da empresa (esquerda) + 3 métricas numéricas em ouro (direita). Ex: "3+ Projetos entregues", "100% Sob medida", "0 Template".

### Portfólio
Grid de cards. Card principal: vipsfibra.com.br (TypeScript, ISP). Cards adicionais: placeholder "Em desenvolvimento". Cada card: nome, descrição, linguagem, link GitHub.

### Serviços
3 items horizontais com ícone SVG: Web Apps, Sistemas Backend, Consultoria Técnica.

### Contato
CTA simples: "Pronto para começar?" + email como link destacado + botão.

### Footer
Logo, copyright, link GitHub.

## Arquivos
```
abby-systems/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    └── logo.svg
```

## Responsividade
- Mobile-first, breakpoint: 768px
- Nav vira menu hambúrguer no mobile
- Grid de portfólio: 1 col mobile, 2 cols tablet, 3 cols desktop
- Reduced motion: `prefers-reduced-motion` desativa circuit animation
