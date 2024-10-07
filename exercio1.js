const animais = document.getElementById("animais");
console.log(animais);

const gridSection = document.getElementsByClassName("grid-section");

console.log(gridSection[1]);

const primeiraLi = document.querySelector("li");
console.log(primeiraLi);

const primeiraUl = document.querySelector("ul");
console.log(primeiraUl);

const linkInterno = document.querySelector("[href^='#']");
console.log(linkInterno);

const animaisImg = document.querySelectorAll(".animais img");
console.log(animaisImg[0]);

const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");

primeiraUl.classList.add("grid-section");

//console.log(gridSectionHTML[0]);
//console.log(gridSectionNode[0]);

gridSectionNode.forEach(function (item, inder) {
  console.log(item);
});

const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function (item) {
  console.log(item);
});

//section.clientHeight;// height+padding
//section.offsetHeight;// height+padding+border
//section.scrollHeight;// height total, mesmo dentro de scroll

//exercicio

// verifique a distância da primeira imagem em relação ao topo da página

const img = document.querySelector("img");
const imgTop = img.offsetTop;

console.log(imgTop);

// retorne a soma da largura de todas as imgs

const imagens = document.querySelectorAll("img");
console.log(imagens);

//obs : o js não espera a img carregar, dai deixando o código da forma básica ela provaavelmente dará erro e só carregará a primeira/ as primeiras imgs. FICARIA >>

function somaImagens() {
  const imagens = document.querySelectorAll("img");
  let soma = 0;
  imagens.forEach((imagem) => {
    soma = soma + imagem.offsetWidth;
  });
  console.log(soma);
}
window.onload = function () {
  somaImagens();
};

//verifique se os números da página possuem o minimo recomendado para telas utilizadas com o dado (48px/48px de acordo com o google)

const links = document.querySelectorAll("a");
links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if (linkWidth > 48 && linkHeight > 48) {
    console.log(link, " Boa acessibilidade");
  } else {
    console.log(link, "Não possui boa acessibilidade");
  }
});

//callback

// código:  const img= document.querySelector("img");
//function callback(){
// console.log('Clicou)
// }
// img.addEventListener('click', callback)
// img.addEventListener('click', callback()); undefined
// img.addEventListener('click', function (){
//console.log('Clicou');
//})
// img.addEventListener('click', () => { console.log('Clicou');})
