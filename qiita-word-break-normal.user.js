// ==UserScript==
// @name         [Qiita] word-break normal
// @namespace    https://gist.github.com/tkrkt
// @version      1
// @author       tkrkt
// @match        https://qiita.com/*
// @grant        none
// ==/UserScript==

const style = document.createElement('style');
style.textContent = `
.it-MdContent {
  word-break: normal;
}
`;
document.head.appendChild(style);
