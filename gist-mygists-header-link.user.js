// ==UserScript==
// @name        [Gist] MyGists Header Link
// @description Add "MyGists" link into header
// @namespace   https://github.com/tkrkt/userscripts
// @include     https://gist.github.com/*
// @version     3
// @grant       none
// ==/UserScript==

const meta = document.querySelector('meta[name=user-login]');

if (meta){
  const user = meta.getAttribute('content');
  const container = document.querySelector('[role=navigation]');
  
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.setAttribute('class', 'HeaderNavlink px-2');
  a.setAttribute('href', '/' + user);
  a.textContent = 'My Gists';
  li.appendChild(a);
  
  container.insertBefore(li, container.firstChild);
}
