// ==UserScript==
// @name        [GitHub] Add gist link
// @description Add Gist link into user profile page
// @namespace   https://github.com/tkrkt
// @include     https://github.com/*
// @exclude     https://github.com/*/*
// @author      tkrkt
// @version     3
// @grant       none
// ==/UserScript==

const text = `View ${location.pathname.slice(1)} on Gist`;
const a = document.createElement("a");

a.classList.add("btn", "btn-block");
a.style.marginTop = "10px";
a.href = `https://gist.github.com${location.pathname}`
a.title = text;
a.textContent = text;

const container = document.querySelector('.user-profile-following-container');
container.appendChild(a);
