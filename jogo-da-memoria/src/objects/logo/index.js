const logo = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .logo {
        display: block;
        width: 171px;
        height: 175px;
      }
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = () => {
    module._style();
    return `<img class="logo" src="assets/icon-collabcode.png" alt="Ícone do mascote do CollabCode"/>`;
  };

  return {
    render: module.render
  };
})();
