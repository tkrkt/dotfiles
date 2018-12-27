// ==UserScript==
// @name         [Qiita] word-break normal
// @description  add `word-break: normal` into qiita article
// @namespace    https://github.com/tkrkt/userscripts
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
