(function() {
  const $root = document.querySelector("#root");
  const $flatButtonLogin = flatButton.render("Log in");
  const $flatButtonSignup = flatButton.render("Sign up", true);
  const $logoWrapper = logoWrapper.render("Welcome!");

  $root.insertAdjacentHTML("beforeend", $flatButtonLogin);
  $root.insertAdjacentHTML("beforeend", $flatButtonSignup);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
})();
