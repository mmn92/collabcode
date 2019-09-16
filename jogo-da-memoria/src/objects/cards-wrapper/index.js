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
      width: 100vw;
    }
    
    .cards-wrapper > .memory-card {
      margin-bottom: 16px;
    }  
  `;

  $head.insertBefore($style, null);

  return $cardsWrapper;
}

const cardWatcher = () => {
  let activeCards = 0;

  return $component => {
    if ($component.classList.contains("-active") || activeCards >= 2) {
      return false;
    } else {
      activeCards++;
      if (activeCards >= 2) {
        setTimeout(() => {
          activeCards = 0;
          resetCards();
        }, 2000);
      }
      return true;
    }
  };
};

const resetCards = () => {
  document
    .querySelectorAll(".-active")
    .forEach($card => $card.classList.remove("-active"));
};

const updateCard = cardWatcher();
