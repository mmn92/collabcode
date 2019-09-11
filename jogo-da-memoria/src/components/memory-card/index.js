function createMemoryCard() {
  const $memoryCard = document.createElement("article");

  const $iconCollab = `
        <img 
            class='icon' 
            src='assets/icon-collabcode.png' 
            alt='Gueio mascote da CollabCode' 
        />
    `;

  $memoryCard.classList.add("memory-card");
  $wrapCards.insertBefore($memoryCard, null);
  $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
}

function createMemoryCardFront() {
  const $flippedCard = document.createElement("article");

  const $iconCpp = `
    <img 
        class="icon" 
        src="assets/icon-c.png" 
        alt="icone c++" 
    />
`;

  $flippedCard.classList.add("memory-card", "-flipped");
  $wrapCards.insertBefore($flippedCard, null);
  $flippedCard.insertAdjacentHTML("afterbegin", $iconCpp);
}
