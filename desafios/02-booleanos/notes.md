# Booleanos

Booleanos precisam ser autoexplicativos e naturais de ler dentro de condicionais.

Booleanos geralmente representam **estado** dentro da aplicação (ativo/inativo, carregando/não carregando, habilitado/desabilitado etc.), e por isso exigem um cuidado especial na nomenclatura.

## ❓ 1. Booleanos devem ser escritos como perguntas

A principal regra da aula:

> Variáveis booleanas devem soar como uma pergunta que pode ser respondida com “sim” ou “não”.

### ❌ Evite:

```js
userMajority
loading
disabled
```

### ✅ Prefira:

```js
isUserAdult
isLoading
isDisabled
```

Ou utilizando outras formas comuns:

* `is`
* `has`
* `does`

Exemplos:

```js
isUserLoggedIn
hasPermission
doesUserHaveAccess
```

## 🧠 2. Isso melhora a leitura das condicionais

Booleanos são muito usados em `if`.

Compare:

```js
if (loading)
```

vs

```js
if (isLoading)
```

A segunda forma é muito mais natural de ler:

> “Se está carregando…”

A regra prática ensinada:

> Leia o booleano sempre precedido de “if”.
> Se soar natural e semântico, está bem nomeado.

## 🚫 3. Evite nomes genéricos (mesmo em booleanos)

Assim como na aula anterior, nomes genéricos devem ser evitados.

### ❌ Genéricos:

```js
isLoading
isFetching
isDisabled
```

Se o contexto permitir algo mais específico, prefira:

### ✅ Específicos:

```js
isUserProfileLoading
isCheckoutProcessing
isLoginRequestPending
```

Isso deixa claro **o que exatamente está acontecendo**.

## 🧾 Conclusão da aula

Boas práticas para booleanos:

1. ✅ Sempre escreva como pergunta
2. ✅ Use prefixos como `is`, `has`, `does`
3. ✅ Teste lendo com “if” na frente
4. ❌ Evite nomes genéricos
5. ❌ Não use substantivos soltos (loading, disabled, fetching)
