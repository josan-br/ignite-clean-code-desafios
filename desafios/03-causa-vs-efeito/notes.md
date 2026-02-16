# Causa vs Efeito

Um erro comum na nomeação de variáveis é criar nomes baseados no **efeito visual ou comportamental**, em vez da **causa real do estado**.

Sempre nomeie variáveis pela **causa (motivo real do estado)** e não pelo **efeito (resultado visual ou consequência)**.

## 🧠 Exemplo apresentado

Em um componente React, existe um botão que pode estar desabilitado durante o envio de um formulário.

Uma abordagem comum (mas problemática) seria:

```js
const isButtonDisabled = true
```

E então:

* O botão recebe `disabled` se `isButtonDisabled` for `true`
* O texto muda para “Carregando” se `isButtonDisabled` for `true`

### ❗ Qual é o problema?

A variável `isButtonDisabled` foi criada com base no **efeito** (botão desabilitado), mas o verdadeiro motivo disso acontecer é que **o formulário está sendo enviado**.

Ou seja:

* O botão estar desabilitado é consequência.
* O envio do formulário é a causa.

## ✅ Abordagem correta: Nomear pela causa

Em vez de:

```js
const isButtonDisabled = true
```

O ideal seria:

```js
const isFormSubmitting = true
```

E então:

* O botão é desabilitado **quando o formulário está enviando**
* O texto muda para “Carregando” **quando o formulário está enviando**

## 🎯 Por que isso é melhor?

1. **Código mais claro e semântico**
   Fica explícito o que está acontecendo:

   > “Desabilita o botão quando o formulário está sendo enviado.”

2. **Melhor reutilização da informação**
   A mesma variável pode ser usada para:

   * Mostrar loading
   * Desabilitar campos
   * Exibir mensagens
   * Controlar outros comportamentos

3. **Evita confusão na leitura**
   Ler “se o botão está desabilitado, mostrar carregando” é estranho — porque estar desabilitado não é necessariamente sinônimo de estar carregando.

4. **Reduz acoplamento à interface**
   Nomear pela causa mantém a regra de negócio separada do efeito visual.
