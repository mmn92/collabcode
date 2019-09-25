const startButton = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .start-button {
        width: 80px;
        height: 80px;
        border: none;
        border-radius: 50%;
        position: absolute;
        bottom: 60px;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 1px 2px 8px #000;
        cursor: pointer;
        background-color:#1fab89;
        color: #fff;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        font-size: 18px;
        text-transform: uppercase;
      }
      `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();
    return `
        <button class="start-button">
            Go!
        </button>
    `;
  };

  return {
    render: module.render
  };
})();
