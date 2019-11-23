import nav from './nav';
import { footer } from './footer';
import makeButton from './button';
import { makeColorStyle } from './button-styles';
import makeImage from './image';
import imageUrl from './webpack-logo.jpg';

import './button.css';
import './footer.css';

const image = makeImage(imageUrl);
const button = makeButton("Yay! A Button!");
button.style = makeColorStyle("cyan");

document.body.appendChild(button);
document.body.appendChild(footer);
document.body.appendChild(image);

console.log(
  nav(),
  top,
);
