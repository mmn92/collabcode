// Desafio Básico
const $btnAdd = window.document.querySelector(".-secondary");

console.log($btnAdd);

// Desafio Intermediário
$btnAdd.addEventListener("click", handleClick);

function handleClick() {
  console.log("item adicionado");

  // Desafio Avançado
  const $carrinho = window.document.querySelector(".action.-last");
  console.log($carrinho);
  $carrinho.innerHTML = "ADICIONADO!";
}
