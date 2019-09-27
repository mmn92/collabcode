const logoWrapper = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .logo-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 141px;
        left: 50%;
        transform: translateX(-50%);
      }

      .logo-wrapper::before {
        content: "";
        background-color: #fff;
        width: 252px;
        height: 252px;
        border-radius: 50%;
        position: absolute;
        top: -39px;
        left: -40px;
      }

      .logo-wrapper > .logo-img {
        margin-bottom: 38px;
        z-index: 1;
      }
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = (text = "") => {
    module._style();

    const $logo = logo.render();
    const $title = title.render(text);
    return `
      <dl class="logo-wrapper">
        <dd class="logo-img">
          ${$logo}
        </dd>
        <dt class="logo-title">
          ${$title}
        </dt>
      </dl>
    `;
  };

  return {
    render: module.render
  };
})();
