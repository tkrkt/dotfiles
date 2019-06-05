// ==UserScript==
// @name        [GitHub] Add starred repository link
// @description Add Repository link into user profile page
// @namespace   https://github.com/tkrkt
// @include     https://github.com/*
// @exclude     https://github.com/*/*
// @author      tkrkt
// @version     1
// @grant       none
// ==/UserScript==

const text = `View Starred Repositories`;
const a = document.createElement("a");

a.classList.add("btn", "btn-block");
a.style.marginTop = "10px";
a.href = `https://github.com/search?o=desc&q=user%3A${location.pathname.slice(1)}&s=stars&type=Repositories`;
a.title = text;
a.textContent = text;

const container = document.querySelector('.user-profile-following-container');
container.appendChild(a);
