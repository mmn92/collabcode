const createMemoryCard = ({ alt, className, icon }) => `
    <article class="memory-card ${className}">
      <img 
        src="assets/icon-${icon}.png" 
        alt="${alt}" 
        class="icon" 
        onClick="handleClick()"
      />
    </article>
  `;

function handleClick() {
  console.log("asdasda");
}
