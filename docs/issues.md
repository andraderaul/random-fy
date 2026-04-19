= ESLint 9 + FlatCompat com eslint-config-next 16

Este documento descreve uma falha conhecida na configuração atual do ESLint do projeto, por que ela ocorre, como corrigi-la e por que vale a pena tratar isso com prioridade.

== Sintoma

Ao rodar o ESLint diretamente (por exemplo `npx eslint src/lib/cn.ts`) ou via *lint-staged* no *pre-commit* do Husky, o processo encerra com erro semelhante a:

....
TypeError: Converting circular structure to JSON
    --> starting at object with constructor 'Object'
    |     property 'configs' -> object with constructor 'Object'
    |     property 'flat' -> object with constructor 'Object'
    |     ...
    |     property 'plugins' -> object with constructor 'Object'
    --- property 'react' closes the circle
Referenced from:
    at JSON.stringify (<anonymous>)
    at ... @eslint/eslintrc/lib/shared/config-validator.js ...
....

O stack trace costuma passar por `ConfigArrayFactory`, `_loadExtendedShareableConfig` e validação de schema (`validateConfigSchema` / `formatErrors`).

== Problema (causa raiz)

No `eslint.config.mjs` o preset do Next é carregado assim:

[source,javascript]
----
...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
----

O `FlatCompat` (`@eslint/eslintrc`) existe para adaptar *shareable configs* no **formato legado** (`.eslintrc*`: objeto com `extends`, `env`, etc.) para o **flat config** do ESLint 9.

Já o pacote `eslint-config-next` na linha 16 **já exporta flat config**: é um array de objetos com `files`, `plugins`, `languageOptions`, e assim por diante. Forçar esses presets por `compat.extends("next/...")` faz o compat tentar tratá-los como cadeia de `extends` no modelo antigo. O resultado tende a ser uma estrutura **incompatível ou inválida** frente ao validador do ESLint 9.

O `TypeError` em `JSON.stringify` **não é a causa primeira**: o validador encontrou (ou construiu) algo inválido e, ao tentar *formatar* a mensagem de erro, serializa objetos que incluem o grafo do `eslint-plugin-react` — que tem referências circulares intencionais (`configs` ↔ `plugins` ↔ `react`). A serialização quebra antes de você ver a mensagem de validação útil.

Em resumo: **preset já flat passado pelo `FlatCompat.extends("next/...")`** é a combinação problemática.

== Como resolver

Alinhar a configuração ao que o Next.js 16 e o ESLint 9 esperam hoje:

. **Importar a flat config do Next diretamente** no `eslint.config.mjs` e espalhar o array exportado (por exemplo `next/core-web-vitals` e `next/typescript` como módulos que já retornam flat config), em vez de envolvê-los com `FlatCompat.extends(...)`.
. Aplicar o **Prettier** no modo flat de `eslint-config-prettier` conforme a documentação atual do pacote (objeto ou array flat), também **sem** passar pelo `FlatCompat`, salvo se ainda for inevitável para algum preset estritamente legado.
. Manter as regras customizadas do projeto (por exemplo `import/no-restricted-paths`) como blocos flat adicionais no mesmo array exportado.
. Conferir o guia oficial do Next em `node_modules/next/dist/docs/` (API de ESLint / flat config) antes de fixar o formato final — o Next pode atualizar o snippet recomendado entre versões.

Depois de ajustar, validar com `npx eslint .` (ou alvo restrito) e um commit de teste para garantir que o *lint-staged* no Husky volta a passar **sem** `--no-verify`.

== Motivação

* **Pre-commit e CI confiáveis:** com o ESLint quebrando, *lint-staged* falha e a equipe tende a contornar com `--no-verify`, enfraquecendo barreiras de qualidade.
* **Feedback local:** desenvolvedores deixam de ter lint no editor e na linha de comando de forma previsível.
* **Manutenção:** `eslint-config-next` 16 e ESLint 9 foram feitos para flat config nativo; alinhar reduz atrito com upgrades futuros do Next e do ESLint.
* **Diagnóstico honesto:** entender que o `JSON.stringify` é sintoma de validação + compat evita perseguir “bug do plugin React” quando o ajuste é na camada de configuração.

== Referências no repositório

* `eslint.config.mjs` — uso de `FlatCompat` e `compat.extends("next/core-web-vitals", ...)`.
* `package.json` — `lint-staged` chama `eslint --fix` em `*.{ts,tsx}`.
* `node_modules/eslint-config-next/dist/index.js` — export em formato flat (array de configurações).
