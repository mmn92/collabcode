const formSignup = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-signup {
        padding: 0 35px 35px;
      }
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module._children = () => {
    const $userLabel = formLabel.render("Username");
    const $userInput = formInput.render({
      inputType: "text",
      content: "Name-example"
    });

    const $emailLabel = formLabel.render("E-mail");
    const $emailInput = formInput.render({
      inputType: "email",
      content: "example@email.com"
    });

    const $passwordLabel = formLabel.render("Password");
    const $passwordInput = formInput.render({
      inputType: "password",
      content: "Password"
    });

    const $confirmPasswordLabel = formLabel.render("Confirm Password");
    const $confirmPasswordInput = formInput.render({
      inputType: "password",
      content: "Comfirm Password"
    });

    const $submitButton = submitButton.render("Submit");

    return `
      ${$userLabel}
      ${$userInput}

      ${$emailLabel}
      ${$emailInput}

      ${$passwordLabel}
      ${$passwordInput}

      ${$confirmPasswordLabel}
      ${$confirmPasswordInput}

      ${$submitButton}
    `;
  };

  module.render = () => {
    module._style();

    return `<form class="form-signup" action="" method="POST">${module._children()}</form>`;
  };

  return {
    render: module.render
  };
})();
