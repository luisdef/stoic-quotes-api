import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import { getRandomQuote } from './database.js';

const app = express();

const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "info")));

app.use((req, res, next) => {
  // Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
  res.header("Access-Control-Allow-Origin", "*");

  // Quais são os métodos que a conexão pode realizar na API
  res.header("Access-Control-Allow-Methods", 'GET');

  app.use(cors());
  next();
});

app.get("/", (req, res) => {
  console.log("acessado...");
  res.redirect("/api");
});

app.get("/api", (req, res) => {
  res.sendFile(path.join(__dirname, "/info/info.html"));
});

app.get("/api/quote/random", async (req, res) => {
  const frase = await getRandomQuote();
  if (frase) res.json(frase);
});

app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + '/info/404.html');
});

app.listen(port, () => {
  console.info("Aplicação rodando na porta " + port);
});
