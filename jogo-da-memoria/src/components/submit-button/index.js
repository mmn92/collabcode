const submitButton = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .submit-button {
        border-radius: 24px;
        width: 100%;
        height: 48px;
        background-color: #f25a70;
        color: #fff;
        text-transform: uppercase;
        font-weight: bold;
      }
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = content => {
    module._style();

    return `<button class="submit-button">${content}</button>`;
  };

  return {
    render: module.render
  };
})();
