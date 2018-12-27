// ==UserScript==
// @name        [GoogleTranslate] Fix balloon styles
// @namespace   https://gist.github.com/tkrkt
// @include     http://translate.googleusercontent.com/*
// @version     1
// @grant       none
// ==/UserScript==

const style = document.createElement("style");
style.textContent = `
.gmnoprint div[class^="SPRITE_iw"] {
  display: none;
}
.gmnoprint > div:last-child {
  background-color: white;
  box-shadow: 0 0 0 8px white, 0 0 0 10px grey;
  border-radius: 2px;
}
`;
document.head.appendChild(style);
