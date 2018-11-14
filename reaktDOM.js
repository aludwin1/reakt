export function renderNode(vNode) {
  const { type, props, children } = vNode;

  if (typeof type === 'function') {
    return renderNode(type());
  }
  if (typeof type === 'string') {
    const element = document.createElement(type);
  }

  children.forEach(child => {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(children[0]));
    } else {
      element.appendChild(renderNode(child));
    }
  });

  for (let prop in props) {
  }
  element.appendChild(document.createTextNode(children));
  return element;
}

export function render(vNode, node) {
  node.appendChild(renderNode(vNode));
}
