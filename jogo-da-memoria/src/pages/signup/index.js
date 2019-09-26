(function() {
  const $root = document.querySelector("#root");
  const $flatButtonLogin = flatButton.render("Log in", "-login");
  const $flatButtonSignup = flatButton.render("Sign up", "-signup");

  $root.insertAdjacentHTML("beforeend", $flatButtonLogin);
  $root.insertAdjacentHTML("beforeend", $flatButtonSignup);
})();
