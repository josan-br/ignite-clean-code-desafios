# Parâmetros e Desestruturação

A aula enfatiza **legibilidade, previsibilidade e extensibilidade**.

Desestruturação e uso de objetos como parâmetros:

* Melhoram a clareza
* Evitam confusão
* Facilitam manutenção
* Reduzem necessidade de refatorações futuras

> Código explícito é melhor que código implícito.

## 📌 1. Problema comum: repasse de dados entre funções

Em aplicações (especialmente back-end), é comum:

* A rota receber dados (ex: `nome`, `email`, `senha`)
* Repassar para o controller
* O controller repassar para um service/use case/repository
* O repository usar esses dados para salvar no banco

Frequentemente, o mesmo objeto (`data`, `body`, etc.) é repassado intacto entre funções.

### ❌ Problema disso

* Fica pouco claro o que está sendo enviado.
* `data` pode conter qualquer coisa.
* Ao separar arquivos (rota, controller, repository), perde-se contexto.
* Mesmo com TypeScript, em produção não há garantia real do conteúdo do objeto.

## 📌 2. Solução: Desestruturação

**Desestruturar** significa extrair propriedades de um objeto (ou elementos de um array) em variáveis separadas.

Exemplo conceitual:

```js
const { nome, email, senha } = data
```

### ✅ Vantagens:

* Código mais explícito
* Mais legível
* Mais seguro (só repassa o que foi extraído)
* Evita enviar propriedades indesejadas

Antes:

```js
repository.create(data)
```

Depois:

```js
repository.create({ nome, email, senha })
```

Agora fica claro exatamente o que está sendo enviado.

## 📌 3. Prefira parâmetros nomeados (objetos)

Evite funções com múltiplos parâmetros posicionais:

```js
createUser(body, params)
```

Problema:

* Se quiser enviar apenas `params`, precisa passar `null` ou `undefined` no primeiro argumento.
* Fica confuso para quem lê o código.
* Perde clareza sem contexto.

### ✅ Melhor abordagem:

Receber um objeto:

```js
createUser({ body, params })
```

E chamar assim:

```js
createUser({
  body: { nome, email, senha },
  params: { id: 1 }
})
```

Ou apenas:

```js
createUser({
  params: { id: 1 }
})
```

### Benefícios:

* Não precisa passar `null`
* Código autoexplicativo
* Muito mais legível
* Escalável para o futuro

## 📌 4. Retorne objetos também

Não apenas os parâmetros devem ser objetos — os retornos também.

Em vez de:

```js
return user
```

Prefira:

```js
return { user }
```

Ou:

```js
return { data: user }
```

### Por quê?

Se no futuro precisar retornar mais informações:

```js
return {
  user,
  token,
  metadata
}
```

## 📌 5. Principais boas práticas destacadas

✔ Sempre que possível, receba parâmetros como objeto
✔ Use desestruturação para tornar explícito o que está sendo usado
✔ Reenvie apenas os dados necessários
✔ Prefira parâmetros nomeados em vez de posicionais
✔ Retorne objetos para facilitar extensão futura
✔ Código maior não é pior — código mais explícito é melhor
