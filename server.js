const express = require("express");
const app = express();
const data = require("./quotes.json");
const path = require("path");

const port = process.env.PORT || 3000;



function getQuote() {
    // This function returns a random quote from the JS Object.
    let indexOfSelectedQuote = Math.floor(Math.random() * data.length);
    
    return data[indexOfSelectedQuote];
}

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET');
    app.use(cors());
    next();
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/info.html"));
});

app.get("/api/quote/random", (req, res) => {
    const randomQuote = getQuote();
    res.json(randomQuote);
});

app.listen(port, () => {
    console.info("Application running on https://localhost:"+port);
});

// console.log(getQuote());