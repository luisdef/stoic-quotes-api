import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  password: process.env.PASSWD_DB,
  database: process.env.DATABASE,
});

async function getRandomQuote() {
  try {
    const [results] = await connection.query('SELECT COUNT(1) as nfrases FROM frases;');
    const totalLength = results[0]['nfrases'];
    let indexOfSelectedQuote = Math.floor(Math.random() * totalLength);
  
    try {
      const [results] = await connection.query(`SELECT * FROM frases WHERE idFrase = ${indexOfSelectedQuote}`);
  
      return {
        "frase": results[0]["frase"],
        "autor": results[0]["autor"]
      }
    } catch (err) {
      console.error(err);
    }
  } catch (err) {
    console.error(err);
  }
}

export { getRandomQuote };
