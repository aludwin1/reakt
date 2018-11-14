import './reakt.js';
console.log('index.js');

export function createElement(type, props, ...children) {
  return { type, props, children };
}
