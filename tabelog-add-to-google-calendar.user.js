// ==UserScript==
// @name         [tabelog] Add to Google Calendar
// @description  Add current shop to Google Calendar from send link (need to fix start/end date)
// @namespace    https://github.com/tkrkt/userscripts
// @version      1
// @match        https://tabelog.com/*
// @grant        none
// ==/UserScript==

const descArea = document.querySelector('.js-rst-info.infosend__textarea');
const container = document.querySelector('#js-send-button ul.infosend__btn-wrap');
if (descArea && container) {
  const style = document.createElement('style');
  style.textContent = `
  .infosend__btn {
    width: 33%;
  }
  `;
  document.head.appendChild(style);

  const desc = descArea.value;
  const title = desc.split('\n')[0];
  const location = desc.split('\n')[2];
  const current = new Date();
  const hour = 1000 * 60 * 60;

  const dates = [
    new Date(Math.ceil(new Date() / hour) * hour),
    new Date((Math.ceil(new Date() / hour) + 2) * hour)
  ].map(date => {
    return date.toISOString().replace(/[-:]/g, '').replace(/\.\d+Z/, '');
  }).join('/');

  const template = {
    text: title,
    details: desc,
    location,
    dates
  };

  const baseUrl = 'https://www.google.com/calendar/render?action=TEMPLATE';
  const query = Object.entries(template).map(([key, value]) => {
    return key + '=' + encodeURIComponent(value);
  }).join('&');

  const url = `https://www.google.com/calendar/render?action=TEMPLATE&${query}`;

  const li = document.createElement('li');
  li.classList.add('infosend__btn');
  li.innerHTML = `<p><a class="js-send-sc c-btn" href="${url}">GoogleCal</a></p>`;
  container.appendChild(li);
}
