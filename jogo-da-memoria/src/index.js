const $root = document.querySelector("#root");

const $icon = `
    <img 
        class='icon' 
        src='assets/icon-collabcode.png' 
        alt='Gueio mascote da CollabCode' 
    />
`;
const $iconCpp = `
    <img 
        class="icon" 
        src="assets/icon-c.png" 
        alt="icone c++" 
    />
`;

// Flipped card
const $flippedCard = document.createElement("article");
$flippedCard.classList.add("memory-card", "-flipped");
$root.insertBefore($flippedCard, null);
$flippedCard.insertAdjacentHTML("afterbegin", $iconCpp);

// Memory card
const memoryCards = [...new Array(9)];
memoryCards.map(() => {
  const $memoryCard = document.createElement("article");
  $memoryCard.classList.add("memory-card");
  $root.insertBefore($memoryCard, null);
  $memoryCard.insertAdjacentHTML("afterbegin", $icon);
});
