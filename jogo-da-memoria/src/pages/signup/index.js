(function() {
  const $root = document.querySelector("#root");
  const $flatButtonLogin = flatButton.render("Log in");
  const $flatButtonSignup = flatButton.render("Sign up", true);
  const $logo = logo.render();
  const $title = title.render("Welcome!");
  const $logoWrapper = logoWrapper.render($logo, $title);

  const $userLabel = formLabel.render("Username");
  const $userInput = formInput.render("Username");

  const $emailLabel = formLabel.render("E-mail");
  const $emailInput = formInput.render("E-mail");

  const $passwordLabel = formLabel.render("Password");
  const $passwordInput = formInput.render("Password");

  const $confirmPasswordLabel = formLabel.render("Confirm Password");
  const $confirmPasswordInput = formInput.render("Confirm Password");

  const $submitButton = submitButton.render("Submit");

  $root.insertAdjacentHTML("beforeend", $flatButtonLogin);
  $root.insertAdjacentHTML("beforeend", $flatButtonSignup);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);

  $root.insertAdjacentHTML("beforeend", $userLabel);
  $root.insertAdjacentHTML("beforeend", $userInput);

  $root.insertAdjacentHTML("beforeend", $emailLabel);
  $root.insertAdjacentHTML("beforeend", $emailInput);

  $root.insertAdjacentHTML("beforeend", $passwordLabel);
  $root.insertAdjacentHTML("beforeend", $passwordInput);

  $root.insertAdjacentHTML("beforeend", $confirmPasswordLabel);
  $root.insertAdjacentHTML("beforeend", $confirmPasswordInput);

  $root.insertAdjacentHTML("beforeend", $submitButton);
})();
