const memoryCard = () => {
  const $head = document.querySelector("head");
  const $style = document.createElement("style");
  $style.textContent = `
    .memory-card {
      background-color: #f25a70;
      width: 155px;
      height: 155px;
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      cursor: pointer;
    }
  
    .memory-card.-clicked {
      background-color: #000;
    }
  
    .memory-card.-flipped {
      background-color: #fff;
      box-sizing: border-box;
      padding-bottom: 7px;
      position: relative;
    }
  
    .memory-card.-flipped::before {
      content: "";
      background-color: #d4d4d4;
      position: absolute;
      width: 94px;
      height: 94px;
      /*top: 50%;
      left: 50%;
      transform: translate(-50%, calc(-50% + 10px));*/
      transform: translateY(10px);
      border-radius: 50%;
    }
  
    .memory-card > .icon {
      width: 100px;
      height: 100px;
    }
  
    .memory-card.-flipped > .icon {
      position: absolute;
    }
  `;

  $head.insertBefore($style, null);

  return ({ alt, className, icon }) => `
    <article class="memory-card ${className}">
      <img 
        src="assets/icon-${icon}.png" 
        alt="${alt}" 
        class="icon"
        onClick="handleClick()" 
      />
    </article>
  `;
};

const handleClick = () => console.log(".");
