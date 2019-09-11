const $root = document.querySelector("#root");
const $wrapCards = document.createElement("section");

$wrapCards.classList.add("wrap-cards");

$root.insertBefore($wrapCards, null);

$wrapCards.addEventListener("click", e => {
  const clickedElement = e.target;
  console.log(clickedElement);
  if (clickedElement.classList.contains("memory-card")) {
    clickedElement.classList.toggle("-clicked");
  }
  if (clickedElement.classList.contains("icon")) {
    const parent = clickedElement.parentNode;
    parent.classList.toggle("-clicked");
  }
});
