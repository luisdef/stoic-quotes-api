# API De Frases Estóicas

Aplicação simples em Node.js que retorna um objeto JavaScript após uma requisição `GET`.

Link: [https://luisdef-stoic-api.herokuapp.com](https://luisdef-stoic-api.herokuapp.com/);

### Utilização

Faça uma requisição `GET` para `/api/quote/random` para que seja retornado um JSON com uma frase estóica aleatória.

### Exemplo

Requisição: `GET => https://luisdef-stoic-api.herokuapp.com/api/quote/random`

Resposta:
```json
{
  "frase": "Cada homem vale tanto quanto as coisas de que se ocupa.",
  "autor": "Marco Aurélio"
}
```
