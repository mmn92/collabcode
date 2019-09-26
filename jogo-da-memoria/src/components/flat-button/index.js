const flatButton = (function() {
  const module = {};

  module._$style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
    .flat-button{
      width: 186px;
      height: 176px;
      color: #fffcee;
      font-size: 24px;
      font-weight: bold;
      border: none;
      text-transform: uppercase;
    }

    .flat-button.-login {
      background-color: #eae6da;
    }

    .flat-button.-signup {
      background-color: #f25a70;
    }
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = (content, className) => {
    module._$style();
    return `
      <button class="flat-button ${className}">${content}</button>
    `;
  };

  return {
    render: module.render
  };
})();
