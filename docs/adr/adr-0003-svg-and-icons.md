# ADR-003: Convenção de SVG e Ícones

- **Status:** Aceito
- **Data:** 2026-04-05
- **Autores:** Raul Andrade

---

## Contexto

Sem uma convenção estabelecida, SVGs inline tendem a aparecer espalhados em componentes de features e páginas — misturando markup visual de baixo nível com lógica de negócio. Isso gera três problemas concretos:

- **Acessibilidade difícil de auditar:** atributos como `aria-hidden`, `role` e `aria-label` ficam inconsistentes entre usos
- **Inconsistência visual:** tamanho e cor do ícone são definidos de formas diferentes (classes Tailwind, atributos inline, `style`)
- **Duplicação silenciosa:** o mesmo ícone pode ser reimplementado em mais de um lugar sem que seja óbvio

O projeto não utiliza nenhuma biblioteca de ícones externa — todos os SVGs são customizados.

---

## Decisão

### Regra central

**Nenhum SVG pode ser escrito diretamente dentro de componentes de features, páginas ou outros componentes.** Todo ícone deve ser encapsulado em um componente dedicado dentro de `src/components/icons/`.

### Localização

```
src/components/icons/
├── PlayIcon.tsx
├── PauseIcon.tsx
├── HeartIcon.tsx
└── index.ts        ← barrel de exportação
```

`components/icons/` é uma subpasta de `components/`, seguindo a hierarquia de camadas da ADR-002. Ícones ficam em `components/` (e não em `lib/`) porque são componentes React — não utilitários framework-agnostic.

### Contrato de interface

Todos os ícones devem seguir o mesmo tipo de props:

```tsx
type IconProps = {
  className?: string;
  size?: number;
  "aria-hidden"?: boolean;
};
```

### Convenções obrigatórias

| Regra                           | Justificativa                                                                        |
| ------------------------------- | ------------------------------------------------------------------------------------ |
| `fill="currentColor"` sempre    | Herda a cor do contexto CSS — sem props de cor, sem classes de cor internas          |
| `aria-hidden={true}` por padrão | Ícone é decorativo por natureza; acessibilidade contextual é responsabilidade do pai |
| `size` como número (px)         | Controle explícito de dimensão sem dependência de classes utilitárias                |
| Named export — nunca `default`  | Consistência com o restante do projeto; evita ambiguidade no import                  |
| Sem lógica, estado ou efeitos   | Ícone é um componente puramente presentacional                                       |

### Exemplo canônico

```tsx
// src/components/icons/PlayIcon.tsx

type IconProps = {
  className?: string;
  size?: number;
  "aria-hidden"?: boolean;
};

export function PlayIcon({
  className,
  size = 16,
  "aria-hidden": ariaHidden = true,
}: IconProps) {
  return (
    <svg
      viewBox="0  0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden={ariaHidden}
    >
      <path d="..." />
    </svg>
  );
}
```

### Uso correto — responsabilidade do pai

`className` expõe customização de posicionamento ou cor para o componente pai. Não deve ser usado para sobrescrever `fill` ou dimensões — use `size` para isso.

Quando o ícone estiver dentro de um elemento interativo sem label visível (ex: `<button>` icon-only), o pai é responsável por fornecer `aria-label`:

```tsx
// correto
<button aria-label="Play">
  <PlayIcon />
</button>

// incorreto — ícone com aria-hidden dentro de botão sem label
<button>
  <PlayIcon aria-hidden={false} />
</button>
```

---

## Alternativas consideradas

### SVG inline diretamente nos componentes

Mais rápido no curto prazo, mas gera duplicação, impossibilita auditoria de acessibilidade e mistura markup de baixo nível com lógica de feature. Descartado.

### Biblioteca de ícones externa (ex: Lucide React, Heroicons)

Reduziria o trabalho de criar e manter SVGs manualmente. Descartado nesta versão porque o projeto usa um conjunto pequeno de ícones customizados, e adicionar uma dependência externa para poucos ícones seria over-engineering. Caso o conjunto de ícones cresça significativamente, essa decisão deve ser revisada — e os ícones externos devem ser reexportados via `components/icons/` para preservar o ponto único de entrada.

### Sprite SVG (`<use>`)

Técnica válida para performance em projetos com muitos ícones repetidos. Descartada por complexidade de setup desnecessária para o escopo atual e por tornar o componente menos legível e testável isoladamente.

---

## Consequências

**Positivas:**

- Ponto único para auditar acessibilidade de todos os ícones do projeto
- Consistência garantida de cor (`currentColor`) e dimensão (`size`) sem depender de convenção implícita
- Ícones são componentes testáveis e isolados
- Sem SVG inline fora de `components/icons/` — regra simples e verificável via lint ou code review

**Negativas / trade-offs:**

- Um arquivo por ícone — overhead pequeno, mas real
- Ícones não-quadrados (ex: logos com proporção específica) precisam expor `width` e `height` separadamente; a ADR permite isso como exceção explícita desde que `fill="currentColor"` e `aria-hidden` sejam mantidos

---

## Referências

- ADR-002 — Estrutura de Pastas e Organização do Projeto
- [MDN — SVG aria-hidden](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)
- [WCAG 2.1 — Non-text Content (1.1.1)](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html)
