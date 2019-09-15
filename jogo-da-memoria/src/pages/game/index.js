const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();

const createMemoryCard = memoryCard();

const $memoryCardCpp = createMemoryCard({
  className: "-flipped",
  icon: "c",
  alt: "Icone de livro de C++"
});

const $memoryCardJs = createMemoryCard({
  className: "-flipped",
  icon: "js",
  alt: "Icone de livro de JS"
});

const $memoryCardWoman = createMemoryCard({
  className: "-flipped",
  icon: "woman",
  alt: "Icone de mulher programando"
});

const $memoryCardBug = createMemoryCard({
  className: "-flipped",
  icon: "bug",
  alt: "Icone de bug"
});

const $memoryCard = createMemoryCard({
  icon: "collabcode",
  alt: "Gueio mascote da CollabCode"
});

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCpp);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCpp);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
