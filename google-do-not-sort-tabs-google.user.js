// ==UserScript==
// @name         [Google] Do not sort tabs Google
// @description  Fix order of tabs on google search
// @namespace    https://github.com/tkrkt/userscripts
// @version      3
// @author       tkrkt
// @include      https://www.google.co.jp/search*
// @include      https://www.google.com/search*
// @grant        none
// ==/UserScript==

// items
const order = [
  'search',
  'map',
  'image',
  'video',
  'news',
  'more', // add into dropdown menu after this
  'shopping',
  'books',
  'flight',
  'finance'
];

const style = document.createElement('style');
style.textContent = `
  .hover-gray:hover {background: rgba(0,0,0,0.1)};
`;
document.head.appendChild(style);

const links = {};

const tbmMap = {
  www: 'search',
  maps: 'map',
  isch: 'image',
  vid: 'video',
  nws: 'news',
  shop: 'shopping',
  bks: 'books',
  flm: 'flight',
  fin: 'finance'
};

const main = (tab, more) => {
  Array.from(tab.querySelectorAll('.hdtb-mitem')).forEach(element => {
    const a = element.firstChild;
    const href = a.href || location.href;
    const tbm = new URL(href).searchParams.get('tbm') || new URL(href).host.split('.')[0];
    links[tbmMap[tbm]] = {
      name: element.textContent.trim(),
      href,
      tbm,
      isActive: element.classList.contains('hdtb-msel')
    };
  });
  while (tab.firstChild && tab.removeChild(tab.firstChild));

  let moreClassName;
  if (more) {
    Array.from(more.querySelectorAll('a[role="menuitem"]')).forEach(a => {
      moreClassName = a.className;
      const tbm = new URL(a.href).searchParams.get('tbm') || new URL(a.href).host.split('.')[0];
      links[tbmMap[tbm]] = {
        name: a.textContent.trim(),
        href: a.href,
        tbm
      };
    });
    while (more.firstChild && more.removeChild(more.firstChild));
  }

  let isTab = true;
  order.forEach(type => {
    if (type === 'more') {
      isTab = false;
    } else {
      const item = links[type];
      if (isTab && item) {
        const div = document.createElement('div');
        if (item.isActive) {
          div.className = 'hdtb-mitem hdtb-msel hdtb-imb';
          div.textContent = item.name;
        } else {
          div.className = 'hdtb-mitem hdtb-imb';
          const a = document.createElement('a');
          a.textContent = item.name;
          a.className = 'q qs';
          a.href = item.href;
          div.appendChild(a);
        }
        tab.appendChild(div, tab.lastChild);
      } else if (more && item) {
        const a = document.createElement('a');
        a.textContent = item.name;
        a.className = moreClassName + ' hover-gray';
        a.href = item.href;
        a.setAttribute('role', 'menuitem');
        more.appendChild(a);
      }
    }
  });
};

let timer;
const watch = () => {
  clearInterval(timer);
  timer = setInterval(() => {
    const tab = document.getElementById('hdtb-msb-vis');
    const morebutton = document.querySelector("#ow15 > a");
    if (tab && morebutton) {
      morebutton.click();
      morebutton.click();
      const more = document.querySelector('#ow3 > div') || document.querySelector('#lb > div[role="menu"]');
      if (more) {
        main(tab, more);
      }
      clearInterval(timer);
    }
  }, 100);
};

watch();
window.addEventListener('hashchange', watch, false);
