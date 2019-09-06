const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $flippedCard = document.createElement("article");

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

$memoryCard.classList.add("memory-card");
$flippedCard.classList.add("memory-card", "-flipped");

$root.insertBefore($memoryCard, null);
$root.insertBefore($flippedCard, null);

$memoryCard.insertAdjacentHTML("afterbegin", $icon);
$flippedCard.insertAdjacentHTML("afterbegin", $iconCpp);
