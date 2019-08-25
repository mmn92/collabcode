const $heart = document.querySelector(".hearts");
const $star = document.querySelectorAll(".star");

$heart.addEventListener("click", handleClick);

$star.forEach(function(star) {
  star.addEventListener("click", handleClickStar);
});

function handleClick() {
  $heart.classList.toggle("-active");
}

function handleClickStar() {
  let current = this;
  current.classList.toggle("-full");
  if (current.classList.contains("-full")) {
    while (current.previousElementSibling) {
      current = current.previousElementSibling;
      current.classList.add("-full");
    }
  } else {
    while (current.nextElementSibling) {
      current.nextElementSibling.classList.remove("-full");
      current = current.nextElementSibling;
    }
  }
}
