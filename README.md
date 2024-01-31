# Frases Estoicas

Aplicação simples em Node.js que retorna um objeto JavaScript após uma requisição `GET`.

### Utilização

Faça uma requisição `GET` para `/api/quote/random` para que seja retornado um JSON com uma frase estoica aleatória.

### Exemplo

Requisição: `GET => http://example.com/api/quote/random`

Exemplo de resposta:
```json
{
  "frase": "Cada homem vale tanto quanto as coisas de que se ocupa.",
  "autor": "Marco Aurélio"
}
```

### Banco de Dados

A aplicação em questão está utilizando uma estrutura para requisitar dados de um banco MySQL. Caso possua um outro tipo de banco de dados, esteja livre para realizar as alterações necessárias.

Para o caso do MySQL, será necessário criar um banco de dados. Com a Seguinte estrutura:

O banco de dados criado deve conter uma tabela com o nome `frases`, pois será nessa tabela que será realizada a busca pelas frases.

A estrutura da tabela é a seguinte:

---
| "frases"    |            |
| ----------- | ---------- |
| idFrase     | INT        |
| frase       | TEXT       |
| autor       | VARCHAR    |
| createAt    | DATETIME   |
| updatedAt   | DATETIME   |

### Variáveis de ambiente

É necessário se atentar para as variáveis de ambiente, que estão sendo usadas na conexão com o banco de dados. Para configurar as variáveis de ambiente, pode-se criar um arquivo `.env` na raiz da aplicação, com a seguinte estrutura:

| .env | |
| -- | -- |
| HOST      | 'localhost' |
| USER_DB   | 'user'      |
| PASSWD_DB | 'password'  |
| DATABASE  | 'database'  |
