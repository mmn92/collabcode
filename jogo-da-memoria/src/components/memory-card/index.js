const memoryCard = () => {
  const $head = document.querySelector("head");
  const $style = document.createElement("style");
  $style.textContent = `
    .memory-card {
      width: 155px;
      height: 155px;
      position: relative;
    }
    
    .memory-card .card {
      width: 100%;
      height: 100%;
      background-color: #f25a70;
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      cursor: pointer;
      position: absolute;
    }

    .memory-card.-active .card {
      display: none;
    }

    .memory-card.-active .card.-flipped {
      display: flex;
    }

    .memory-card .card.-flipped {
      background-color: #fff;
      box-sizing: border-box;
      padding-bottom: 7px;
      position: absolute;
    }
  
    .memory-card .card.-flipped::before {
      content: "";
      background-color: #d4d4d4;
      position: absolute;
      width: 94px;
      height: 94px;
      transform: translateY(10px);
      border-radius: 50%;
    }
  
    .memory-card .card > .icon {
      width: 100px;
      height: 100px;
    }

    .memory-card .card.-flipped > .icon {
      position: absolute;
    }
  `;

  $head.insertBefore($style, null);

  return ({ alt, className, icon }) => `
      <div class="memory-card" onClick="handleClick(this)">
        <article class="card -flipped">
          <img
            src="assets/icon-${icon}.png"
            alt="${alt}"
            class="icon"
          />
        </article>
        <article class="card">
          <img
            src="assets/icon-collabcode.png"
            alt="Icone do mascote da CollabCode"
            class="icon"
          />
        </article>
      </div>
    `;
};

const handleClick = $component => {
  $component.classList.toggle("-active");
};
