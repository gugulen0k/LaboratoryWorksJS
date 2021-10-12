const showChildren = (name) => {
  const block = document.getElementById(name);
  const children = block.hasAttribute("data-children")
    ? block.dataset.children.split(" ")
    : null;

  if (block.style.opacity === "1") {
    block.style.cssText = `
        opacity: 0;
        pointer-events: none;
    `;
    if (children.length !== null) {
      for (child of children) {
        const element = document.getElementById(child);
        element.style.cssText = `
            opacity: 0;
            pointer-events: none;
        `;
      }
    }
  } else {
    block.style.cssText = `
        opacity: 1;
        pointer-events: all;
    `;
  }
};
