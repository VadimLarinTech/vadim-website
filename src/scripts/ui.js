onInit(handleComingSoonBlocks);

function handleComingSoonBlocks() {
  const messageSelector = `[data-coming-soon]`;
  const hiddenClassName = 'hidden';
  const visibleClassName = 'absolute';
  const relativeClassName = 'relative';
  document.querySelectorAll(messageSelector).forEach(messageElement => {
    const parent = messageElement.parentElement;
    parent.classList.add(relativeClassName);
    parent.onmouseover = () => {
      messageElement.classList.remove(hiddenClassName);
      messageElement.classList.add(visibleClassName);
    };
    parent.onmouseleave = () => {
      messageElement.classList.remove(visibleClassName);
      messageElement.classList.add(hiddenClassName);
    };
  });
}
