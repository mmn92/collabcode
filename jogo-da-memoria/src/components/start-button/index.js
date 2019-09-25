const startButton = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .start-button {
        background-color:#ddd;
        padding: 30px;  
        border: none;
        border-radius: 50%;
        position: absolute;
        bottom: 60px;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 2px 2px 2px #000;
        cursor: pointer;
        font-family: 'Roboto', sans-serif;
        color: #3a4042;
        font-weight: bold;
        font-size: 18px;
      }
      `;

    $head.insertBefore($style, null);
  };

  module.create = () => {
    module._style();
    return `
        <button class="start-button">
            GO!
        </button>
    `;
  };

  return {
    create: module.create
  };
})();
