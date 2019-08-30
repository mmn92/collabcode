const $searchIcons = document.querySelectorAll(".search-icon");
const $menuIcons = document.querySelectorAll(".menu-icon");

$searchIcons.forEach($searchIcon => {
  $searchIcon.addEventListener("click", () => {
    document.querySelector(".search-wrapper").classList.toggle("-active");
  });
});

$menuIcons.forEach($menuIcon => {
  $menuIcon.addEventListener("click", () => {
    document.querySelector(".menu-wrapper").classList.toggle("-active");
  });
});
