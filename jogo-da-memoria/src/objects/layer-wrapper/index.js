const layerWrapper = (function() {
  const module = {};

  module.handleClick = $component => {
    $component.querySelector(".block-layer").classList.add("-active");
    $component.querySelector(".start-button").classList.add("-active");
  };

  module.render = content => {
    const $blockLayer = blockLayer.render();
    const $startButton = startButton.render(content);

    return `
            <div class="layer-wrapper" onClick="layerWrapper.handleClick(this)">
                ${$blockLayer}
                ${$startButton}
            </div>
        `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
