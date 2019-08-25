const $searchIcons = document.querySelectorAll(".search-icon");

$searchIcons.forEach($searchIcon => {
  $searchIcon.addEventListener("click", () => {
    document.querySelector(".search-wrapper").classList.toggle("-active");
  });
});
