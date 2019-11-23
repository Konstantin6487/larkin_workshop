import nav from './nav';
// import { footer } from './footer';
import makeButton from './button';
import { makeColorStyle } from './button-styles';
import makeImage from './image';
import imageUrl from './webpack-logo.jpg';

import './button.css';
import './footer.css';

// import footer from './footer';
const loadFooter = () => import('./footer');

const image = makeImage(imageUrl);
const button = makeButton("Yay! A Button!");
button.style = makeColorStyle("cyan");

button.addEventListener('click', (e) => {
  loadFooter().then((m) => {
    document.body.appendChild(m.footer);
  })
});

document.body.appendChild(button);

document.body.appendChild(image);

console.log(
  nav(),
  top,
);
