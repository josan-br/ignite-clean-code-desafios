# Regras em condicionais

1. Evite negações em condicionais.
2. Prefira early return ao invés de else, quando fizer sentido.
3. Use `else` quando ele melhorar a clareza.
4. Evite condicionais aninhadas.
5. Sempre priorize legibilidade e simplicidade.

## 📌 1. Evite negações em condicionais

* Negações (`!`, `not`, etc.) dificultam a leitura.
* Elas exigem um “switch mental” para entender a lógica.
* Quando há múltiplas condições negadas, a legibilidade piora ainda mais.
* Muitas vezes é melhor:

  * Criar variáveis com nomes positivos e mais descritivos.
  * Reescrever a lógica para evitar a negação.

✅ **Prefira:**

```js
if (userIsYoungerThan18 && userLivesOutsideBrazil)
```

🚫 **Em vez de:**

```js
if (!userIsOlderThan18 && !userLivesInBrazil)
```

Nem sempre é possível evitar, mas **sempre que der, evite negações**.

## 📌 2. Early Return vs Else

### 🔹 Early Return

* Ao usar `return`, o restante da função não é executado.
* Permite eliminar `else` desnecessários.
* Deixa o fluxo mais direto e simples.
* Muito útil para validações e casos de erro.

Exemplo:

```js
if (!user) {
  return error
}

return user.age >= 18
```

### 🔹 E o `else`, pode usar?

Sim.

* O `else` pode trazer **mais semântica e clareza** em alguns casos.
* Quando há muitos `ifs`, muitos `early returns` ou lógica complexa, o `else` pode deixar mais claro o fluxo.
* Não existe regra absoluta — depende do contexto, do time e da legibilidade.

👉 Regra prática:

* Na maioria dos casos, prefira **early return**.
* Use `else` quando ele deixar o código **mais fácil de entender**.

## 📌 3. Evite condicionais aninhadas (if dentro de if)

* `if` dentro de `if` reduz muito a legibilidade.
* Cada condicional cria um novo “caminho” no fluxo do código.
* Condicionais aninhadas multiplicam a complexidade mental.

🚫 Evite:

```js
if (user.age >= 18) {
  if (user.country === 'BR') {
    ...
  }
}
```

✅ Prefira:

* Unir condições:

```js
if (user.age >= 18 && user.country === 'BR')
```

* Ou usar early return:

```js
if (user.age < 18) return
if (user.country !== 'BR') return
```
