// ==UserScript==
// @name         [Google Calender] Weekend Color
// @namespace    https://github.com/tkrkt
// @version      0.1
// @match        https://calendar.google.com/calendar/r/*
// @grant        none
// ==/UserScript==

// https://qiita.com/yaslam/items/23ccf499a9c4049842bc

const style = document.createElement("style");

style.textContent = `
/*** week columnheader ***/
/* Saturday */
.PhLhOd.elYzab-cXXICe-Hjleke:nth-child(7) .wy3aMe {
    color: #6A6AFF !important;
}
/* Sunday */
.PhLhOd.elYzab-cXXICe-Hjleke:last-child .wy3aMe {
    color: #FF6A6B !important;
}

/*** month presentation ***/
/* Saturday */
.PhLhOd.elYzab-cXXICe-Hjleke:nth-child(7) {
    background-color: #eaf4ff !important;
}
.t8qpF.elYzab-cXXICe-Hjleke:nth-child(6) {
    background-color: #eaf4ff !important;
}
.t8qpF.elYzab-cXXICe-Hjleke.YK7obe:nth-child(6) .yzYBvd {
    color: #6A6AFF !important;
}
/* Sunday */
.PhLhOd.elYzab-cXXICe-Hjleke:last-child {
    background-color: #ffeaea !important;
}
.t8qpF.elYzab-cXXICe-Hjleke:last-child {
    background-color: #ffeaea !important;
}
.t8qpF.elYzab-cXXICe-Hjleke.YK7obe:last-child .yzYBvd {
    color: #FF6A6B !important;
}

/*** week columnheader ***/
/* Saturday */
.SoBqBf:nth-child(6) :first-child {
    color: #22F !important;
}
/* Sunday */
.SoBqBf:last-child :first-child {
    color: #E22 !important;
}

/*** month presentation ***/
/* Saturday */
.iMprOe:nth-child(6) .r4nke {
    color: #88F !important;
}
/* Sunday */
.iMprOe:last-child .r4nke {
    color: #E88 !important;
}
`;

document.head.appendChild(style);
