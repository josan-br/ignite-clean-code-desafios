# Comentários vs Documentação

* Comentários são bem-vindos.
* Mas devem ser usados com propósito.
* Comentário não substitui documentação.
* Código claro + documentação adequada + comentários estratégicos = código sustentável.

## 1. Evitar extremismos

* Não é verdade que **código nunca pode ter comentários**.
* Também não é verdade que **tudo precisa ser comentado**.
* O equilíbrio é essencial.

## 2. Código autodocumentado é importante

* O código deve, sempre que possível, **explicar por si só o que faz**.
* Se é necessário escrever comentários explicando *o que o código faz*, isso pode indicar:

  * Nomes ruins de variáveis ou métodos.
  * Estrutura confusa.
  * Falta de clareza na implementação.

## 3. Comentário ≠ Documentação

Esse é o ponto central da aula.

### ❌ Comentário não é documentação.

* Documentação deve estar separada do código.
* Especialmente em regras de negócio complexas, o ideal é ter:

  * Documentação formal
  * Diagramas de sequência
  * Diagramas de caso de uso
* Comentários não substituem esse tipo de documentação.

## 4. Para que servem os comentários?

Comentários servem principalmente para explicar:

* **Por que algo foi feito daquela forma**, e não o que está sendo feito.
* Limitações de bibliotecas.
* Workarounds temporários.
* Decisões técnicas fora do padrão esperado.
* Bugs conhecidos ou comportamentos inesperados.

### Exemplo válido:

Quando um código foi escrito de forma “estranha” para contornar um problema de uma biblioteca que ainda não suporta determinada funcionalidade.

Nesse caso, é útil comentar:

* O motivo da decisão.
* Qual biblioteca está envolvida.
* Um link para uma issue ou pull request relacionada.

Isso ajuda a próxima pessoa que for manter o código a:

* Entender que não é erro.
* Verificar se o problema já foi resolvido.
* Atualizar a biblioteca se possível.

## 5. Problema da documentação em comentários

* Documentação já é difícil de manter.
* Documentação dentro de comentários é **quase impossível de manter**.
* O código pode mudar e o comentário ficar desatualizado.
* Comentários desatualizados são piores do que não ter comentário.

## 6. Regra prática sugerida

* Se você precisa comentar para explicar *o que o código faz*, talvez ele devesse ser reescrito.
* Se você precisa comentar para explicar *por que ele foi feito assim*, isso é válido e saudável.
