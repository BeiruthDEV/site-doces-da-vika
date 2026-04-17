# Design System: Doces da Vika (Editorial Artisanal)

## 1. Visual Theme & Atmosphere
Uma interface contida e elegante no clima "Art Gallery Airy" focado em Assimetria Intencional (Variance: 8) e Profundidade Tonal (Density: 5). Em contraste com e-commerces tradicionais superlotados, este sistema trata a interface digital como um espaço de galeria curado. Ele deve parecer "lento", intencional e requintado, privilegiando o produto — os doces esculturais — como elemento central da estrutura de design.

## 2. Color Palette & Roles
- **Canvas White** (#FAF9F6) — Superfície principal do fundo (background).
- **Pure Surface** (#FFFFFF) — Preenchimento de cartões e áreas flutuantes principais (surface-container-lowest).
- **Charcoal Ink** (#303330) — Texto principal (on-surface).
- **Muted Steel** (#5D605C) — Texto secundário, descrições secundárias (on-surface-variant).
- **Whisper Border** (rgba(176,179,174,0.15)) — Bordas leves para contraste acessível (outline-variant).
- **Rose Gold Glaze** (#884F50) — Acento primário para botões e CTAs fortes, emulação de "vitrificado/glaze" (primary).
- **Soft Mousse** (#F4F4F0) — Fundo agrupador que cria quebra suave sem uso de linha.
(Nenhuma cor super saturada. Absolutamente NADA de botões neon, azuis ou roxos cibernéticos.)

## 3. Typography Rules
- **Display:** `Noto Serif` — Espaçamento contido, escala estruturada. Romance e contraste altíssimo, momentos de "herói".
- **Body:** `Plus Jakarta Sans` — Letra moderna e limpa, altura de linha relaxada (max 65ch width). Utilizado em descritivos longos e meta-dados.
- **Label:** `Plus Jakarta Sans` — Em maiúsculas (all-caps), rastreamento aberto (+5%) para meta-dados de estrutura (ex: "PROCESSOS").
- **Banned:** `Inter`, fontes genéricas do sistema para o contexto principal, qualquer Roboto.

## 4. Component Stylings
* **Buttons:** Fundo pílula macia, arredondado (1.5rem ou `full`). Efeito de recuo tátil no ativo e leve sombreamento difuso no hover (dim pra #7a4445). Nada de borda dura (0.25rem mínimo generalizado).
* **Cards:** Cantos arrendondados `DEFAULT` a `md`. Fortemente proibido usar `hr` para quebras, toda seção do cartão muda trocando apenas superfícies (#FAF9F6 p/ #F4F4F0). Uso de Label Small para categorias.
* **Inputs:** Fundo macio `surface-container-low` e cantos sútis. Label sempre fora. Linha inferior `primary` é tolerada APENAS estado de focus por acessibilidade. Sem caixas fechadas inteiras.
* **Ingredient Chips:** Fundo `secondary-container` (#C7E7F8), texto escuro #375663. Formato totalmente arredondado.
* **Loaders & Empty:** Nenhuma rodinha de spinner. Estrutura esquelética na dimensão do conteúdo original.

## 5. Layout Principles
- Padrão **No-Line Rule**: Bordas sólidas genéricas de 1px entre seções estão proibidas. Toda barreira é espacial (Negative Space) ou tonal (Background Shifts).
- Arquitetura descentralizada. Sem hero headers 100% chapados ao centro; utilizar Assimetria, "Split Screens" ou blocos sobrepostos tipo revista de alta moda.
- Proibida interposição total horizontal em versão Mobile (< 768px), forçar cascata única e limpeza de padding. `min-h-[100dvh]` nos herois principais.

## 6. Motion & Interaction
- Movimentação suave inspirada em papel de alta qualidade flutuando e efeito "Glassmorphism" nas áreas de flutuação e Headings de navegação (blur(12 a 20px) no Navigation em rgba com saturação de 180%).
- Nenhuma modificação via top/left, apenas transforms de translação para criar alívio visual (subida do cartão). Elevado com difusão de sombra ultra-baixa com tonalidade quente `rgba(48, 51, 48, 0.06)`. NUNCA use shadow preta pura (#000000).

## 7. Anti-Patterns (Banned)
- Proibido qualquer emoji.
- Proibidas as fontes `Inter`, `Times New Roman`, `Arial`.
- Proibido uso do preto 100% puro (`#000000`), a escuridão do design é térmica.
- Proibidos outer-glows de neon.
- Proibidos layouts de "3 colunas de cards idênticas simétricas". Utilizar fluxo zigue-zague ou grids irregulares.
- Proibidos nomes genéricos, tipo John Doe.
- Proibidos labels inventados ou métricas de dashboard, já que a Vika tem produtos reais ("Nossos Números: 99.8% entregas" é absolutamente VETADO).
- Sem clichês de UI copy (Unleash, Next-Gen, Seamless).
- Proibido texto de instrução (ex: "Scroll para descer o site", setas pulando de CTA).
- Proibidos Herois (banners iniciais) perfeitamente alinhados ao centro em grandes densidades; prefira divisões orgânicas e margens de tipografia mesclados com imagens. O texto JAMAIS flutua opacizado num fundo barulhento de fumaça preta sem razão.
