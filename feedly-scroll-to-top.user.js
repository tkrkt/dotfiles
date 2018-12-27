// ==UserScript==
// @name        [Feedly] Scroll to Top
// @namespace   https://gist.github.com/tkrkt
// @description Add "Scroll to Top" button to header
// @version      4
// @include     https://feedly.com/*
// @grant        none
// ==/UserScript==

const wait = callback => {
  const container = document.querySelector('#headerBarFX');
  if (container) {
    callback(container);
  } else {
    setTimeout(() => wait(callback), 1000);
  }
};

wait(container => {
  const button = document.createElement('button');
  button.classList.add('secondary');
  button.style.fontSize = '20px';
  button.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.body.parentElement.scrollTop = 0;
  }, false);

  const span = document.createElement('span');
  span.textContent = unescape('%uD83D%uDD1D');
  span.style.opacity = '0.54';
  button.appendChild(span);

  new MutationObserver(() => {
    const header = container.querySelector('.right-col');
    if (header) {
      header.insertBefore(button, header.firstElementChild);
    }
  }).observe(container, {
    childList: true
  });
});
