// ==UserScript==
// @name        [Azusaar] Dialog closer
// @namespace   https://gist.github.com/tkrkt
// @description close the dialog by clicking outside
// @include     http://azusaar.appspot.com/*
// @version     1
// @grant       none
// ==/UserScript==

const isDialogElement = e => {
  if (e && e.classList.contains('ui-dialog')) {
    return true;
  } else if (e) {
    return isDialogElement(e.parentElement);
  } else {
    return false;
  }  
}

const closeAllDialogs = () => {
  Array.from(document.querySelectorAll('.ui-dialog'))
    .filter(e => e.style.display !== 'none')
    .forEach(e => e.querySelector('.ui-dialog-titlebar-close').click());
}

document.addEventListener('click', event => {
  !isDialogElement(event.target) && closeAllDialogs();
});
