const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({
        "quote": "You become what you give your attention to.",
        "author": "Epictetus"
    });
});

app.listen(port, () => {
    console.info("Application running on https://localhost:"+port);
});
