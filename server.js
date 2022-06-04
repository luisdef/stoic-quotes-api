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

getQuote();