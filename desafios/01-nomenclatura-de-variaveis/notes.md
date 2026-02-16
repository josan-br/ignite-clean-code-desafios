# Nomenclatura de variáveis

O nome de uma variável deve explicar sua intenção sem exigir contexto adicional.

## 🏷️ 1. Use nomes descritivos (mesmo que sejam maiores)

Um erro comum, principalmente no início da carreira, é usar nomes curtos demais:

```js
u
d
filtered
data
```

Esses nomes funcionam, mas **não comunicam claramente a intenção**.

✔ Melhor exemplo:

```js
usersStartingWithLetterD
```

### 📌 Ponto-chave:

> O tamanho do nome da variável não importa.
> O que importa é **clareza e legibilidade**.

Um código pode até ficar maior, mas será mais compreensível.

## 🚫 2. Evite diminutivos e abreviações

Não use:

* `u` em vez de `user`
* `d` em vez de `date`
* abreviações desnecessárias

Isso prejudica a leitura, principalmente quando o código cresce ou está em outro arquivo.

## 🚫 3. Evite nomes genéricos

Nomes como:

* `data`
* `response`
* `list`
* `args`
* `params`

São problemáticos porque descrevem apenas a **estrutura**, mas não o **conteúdo**.

Exemplo ruim:

```js
const data = getUsersFromDatabase()
```

Melhor:

```js
const users = getUsersFromDatabase()
```

### 📌 Problema dos nomes genéricos:

Conforme a função cresce (validações, mapeamentos, transformações), o nome genérico perde totalmente o significado.

## 📈 4. Código pequeno é fácil — o problema é quando ele cresce

Em exemplos simples, nomes ruins parecem aceitáveis.
Mas em sistemas maiores, nomes pouco descritivos tornam o código difícil de entender.

Clean Code é mais importante **à medida que o sistema cresce**.

## 🔄 5. Pequenas mudanças em nomes transformam a legibilidade

Foi apresentado um exemplo real de código difícil de entender, com nomes como:

* `date`
* `interval`
* `response`
* `data`

Depois, apenas trocando os nomes para algo mais descritivo:

* `compareYearAndMonth`
* `availableWeekdays`
* `blockedWeekdays`
* `blockedDatesResponse`
* `blockedDates`

O código passou a deixar claro que se tratava de:

> Um sistema de comparação de datas para verificar disponibilidade de um usuário (agenda/calendário), retornando dias e datas bloqueadas.

Tudo isso **sem mudar a lógica**, apenas os nomes.

## 🧠 Conclusão Geral

Boas práticas de nomenclatura:

1. ✅ Ser descritivo
2. ✅ Usar nomes semânticos
3. ✅ Preferir clareza a economia de caracteres
4. ❌ Evitar abreviações desnecessárias
5. ❌ Evitar nomes genéricos
