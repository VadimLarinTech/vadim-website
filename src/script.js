function onInit(fn) {
  window.addEventListener('load', fn);
}

onInit(handleNotReadyBlocks);

function handleNotReadyBlocks() {
  const elementSelector = `[data-coming-soon]`;
  const messageSelector = `[data-coming-soon-message]`;
  const hiddenClassName = 'hidden';
  const visibleClassName = 'absolute';
  const relativeClassName = 'relative';
  document.querySelectorAll(elementSelector).forEach(element => {
    element.classList.add(relativeClassName);
    element.onmouseover = () => {
      const message = element.querySelector(messageSelector);
      if (!message) {
        throw new Error(`Coming soon message element doesn't exist for ${element}`);
      }
      message.classList.remove(hiddenClassName);
      message.classList.add(visibleClassName);
    };

    element.onmouseleave = () => {
      const message = element.querySelector(messageSelector);
      if (!message) {
        throw new Error(`Coming soon message element doesn't exist for ${element}`);
      }
      message.classList.remove(visibleClassName);
      message.classList.add(hiddenClassName);
    };
  });
}
