export function renderNode(vNode) {
  const { type, props, children } = vNode;
  const element = document.createElement(type);

  if (typeof type === 'function') {
    return renderNode(type());
  }
  if (typeof type === 'string') {
    const element = document.createElement(type);
  }
  element.appendChild(document.createTextNode(children));
  return element;
}

export function render(vNode, node) {
  node.appendChild(renderNode(vNode));
}
