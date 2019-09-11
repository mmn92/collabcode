const createMemoryCard = (modifier = "", icon = "collabcode") => `
    <article class="memory-card ${modifier}">
      <img 
        class='icon' 
        src='assets/icon-${icon}.png' 
        alt='Gueio mascote da CollabCode' 
        onClick="handleClick()"
      />
    </article>
  `;

function handleClick() {
  console.log("asdasda");
}
