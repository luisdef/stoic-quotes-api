const url = `http://localhost:3000/api/quote/random`;

let fraseI = document.querySelector(".text");
let autor = document.querySelector(".author");

if (document.cookie) {
  let frase = document.cookie.split(":::");
  
  fraseI.innerHTML = frase[0];
  autor.innerHTML = frase[1];
  
  console.log("Usando cookies...");
}
else {
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const frase = [
      data.frase,
      data.autor
    ];
    fraseI.innerHTML = frase[0];
    autor.innerHTML = frase[1];

    // 1 Day = 24 Hrs = 24*60*60 = 86400.
    // 1 Hour = 1Hr = 1*60*60 = 3600
    document.cookie = `${frase[0]}:::${frase[1]}; max-age=3600; path=/;`;
    console.log("Usando o servidor...");
  });
}
