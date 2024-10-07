//const imgs = document.querySelectorAll("img");

//imgs.forEach((item) => {
//  console.log(item);
//});

//let i = 0;
//imgs.forEach(function () {
// console.log(i++);
//});
//versão longa do cód
//imgs.forEach(() => console.log(i++));
//versão curta do cód

// mostre no console cada parágrafo do site
const paragrafos = document.querySelectorAll("p");
console.log(paragrafos);

paragrafos.forEach((item) => {
  console.log(item);
});

//mostre os textos do parágrafo no console
paragrafos.forEach((item) => {
  console.log(item.innerText);
});

//correção de texto

const imgs = document.querySelectorAll("img");

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);
