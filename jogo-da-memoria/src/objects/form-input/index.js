const formInput = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .input-label {
        font-size: 16px;
        color: #3a4042;
        opacity: 0.5;
      }
    
      .form-input {
        display: block;
        width: 300px;
        border-bottom: 1px solid rgba(58, 64, 66, 0.5);
        font-size: 18px;
        font-weight: bold;
        padding-bottom: 12px; 
        padding-top: 12px; 
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.validateEmail = email => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  module.render = content => {
    module._style();

    return `
      <label class="input-label" for="${content}">${content}</label>
      <input class="form-input" name="${content}" id="${content}" type="text" placeholder="Please insert ${content}" required />
    `;
  };

  return {
    render: module.render,
    validateEmail: module.validateEmail
  };
})();