# Números Mágicos

* São **valores numéricos usados diretamente no código sem explicação clara do que representam**.
* Quem lê o código (especialmente alguém que não conhece o contexto) pode não entender o significado daquele número.

Evitar números mágicos melhora:

* Legibilidade
* Manutenção
* Clareza
* Segurança do código
* Comunicação entre desenvolvedores

## 📌 Onde números mágicos aparecem com frequência?

### 1️⃣ Manipulação de datas e tempo (principalmente em JavaScript)

* Conversões como:

  * segundos → milissegundos
  * minutos → segundos
  * dias → horas

* Exemplo comum: `setTimeout` e `setInterval` usam milissegundos.
* Um número como `2592000000` não diz nada visualmente — é um número mágico.

### ⚠ Problemas específicos do JavaScript:

* API de datas considerada confusa.
* Exemplo: janeiro retorna `0` e não `1`.

## 📌 Como evitar números mágicos?

### ✅ 1. Escrever as operações explicitamente

Em vez de:

```js
2592000000
```

Usar:

```js
1000 * 60 * 60 * 24 * 30
```

Fica mais legível (30 dias).

### ✅ 2. Usar constantes com nomes descritivos

```js
const THIRTY_DAYS_IN_MS = 1000 * 60 * 60 * 24 * 30;
```

Isso deixa o código:

* Mais claro
* Mais fácil de manter
* Autoexplicativo

### ✅ 3. Usar comentários (quando necessário)

```js
1000 * 60 * 60 * 24 * 30 // 30 dias
```

### ✅ 4. Usar separador numérico (`_`) no JavaScript

Para números grandes:

```js
1_000_000_000
```

Melhora a leitura sem alterar o valor.

## 📌 Outro tipo comum de número mágico: formatos implícitos

Muito comum quando números representam algo maior:

### 💰 Trabalhando com dinheiro

* Boa prática: salvar valores em **centavos** (inteiros).
* Evita problemas de precisão com `float`.
* Exemplo ruim:

  ```js
  price
  ```
* Melhor:

  ```js
  priceInCents
  ```

### ⏱ Trabalhando com horários

* Salvar em minutos ao invés de string "18:00".
* Nomear claramente:

  * `durationInMinutes`
  * `timeInMinutes`

### 📉 Percentuais

Em vez de:

```js
discount
```

Usar:

```js
discountInPercent
```
