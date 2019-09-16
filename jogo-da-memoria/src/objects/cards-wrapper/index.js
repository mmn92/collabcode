function createCardsWrapper() {
  const $cardsWrapper = document.createElement("section");
  $cardsWrapper.classList.add("cards-wrapper");

  const $head = document.querySelector("head");

  const $style = document.createElement("style");
  $style.textContent = `
    .cards-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-top: 16px;
    }
    
    .cards-wrapper > .memory-card {
      margin-bottom: 16px;
    }  
  `;

  $head.insertBefore($style, null);

  $cardsWrapper.addEventListener("click", event => {
    const $clickedElement = event.target;
    if ($clickedElement.classList.contains("icon")) {
      $clickedElement.parentNode.classList.toggle("-flipped");
    }
  });

  return $cardsWrapper;
}
