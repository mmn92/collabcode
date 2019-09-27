(function() {
  const $root = document.querySelector("#root");
  const $flatButtonLogin = flatButton.render("Log in");
  const $flatButtonSignup = flatButton.render("Sign up", true);
  const $logo = logo.render();
  const $title = title.render("Welcome!");
  const $logoWrapper = logoWrapper.render($logo, $title);
  const $username = formInput.render("Username");

  $root.insertAdjacentHTML("beforeend", $flatButtonLogin);
  $root.insertAdjacentHTML("beforeend", $flatButtonSignup);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $username);
})();
