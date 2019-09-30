const formLogin = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-login {
        padding: 0 35px 35px;
      }

      .form-login > .forget-password {
        display: block;
        margin-top: 45px;
        margin-bottom: 100px;
        text-align: right;
        cursor: pointer;
      }

      .form-login > .forget-password > .form-label {
        font-size: 14px;
      }
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module._children = () => {
    const $userLabel = formLabel.render("Username or E-mail");
    const $userInput = formInput.render({
      inputType: "text",
      content: "example@email.com"
    });

    const $passwordLabel = formLabel.render("Password");
    const $passwordInput = formInput.render({
      inputType: "password",
      content: "Password"
    });

    const $forgetLabel = formLabel.render("Forget Password?");

    const $submitBtn = submitButton.render("Login");

    return `
      ${$userLabel}
      ${$userInput}

      ${$passwordLabel}
      ${$passwordInput}
      
      <a class="forget-password" href="#">${$forgetLabel}</a>

      ${$submitBtn}
    `;
  };

  module.render = () => {
    module._style();

    return `<form class="form-login" action="" mathod="POST">${module._children()}</form>`;
  };

  return {
    render: module.render
  };
})();
