// ==UserScript==
// @name         [Coursera] Scrollable Transcript
// @namespace    https://github.com/tkrkt
// @version      1
// @author       tkrkt
// @match        https://www.coursera.org/learn/*
// @grant        none
// ==/UserScript==

var style = document.createElement("style");
style.textContent = `
.rc-VideoItemWithHighlighting {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.rc-VideoHighlightingManager {
  overflow-y: scroll;
  flex-grow: 2;
}
`;

document.head.appendChild(style);
