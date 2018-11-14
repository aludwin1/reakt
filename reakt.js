import { createElement } from './index.js';
import { render } from './reaktDom.js';
/*Why use a virtual dom
the dom is very inefficient
and traversing it is very slow and
inefficient; however, using a virtual dom
in the form of a JS object, makes this traversal and manipulation much more efficient */

/* When a component renders inside a react app
does that mean that something is going to necessarily going to happen to the actual dom?

No, not necessarily. Only if there are differences*/


const Title = props => {
  return createElement(
    'h1',
    null,
    props.title
  );
};

const App = createElement('div',
  null,
  createElement(
    Title,
    {title: 'Hello Reakt'}
  );
)



const Title = createElement('h1', {}, 'Hello Reakt');

render(Title, document.body);
console.log(Title);
