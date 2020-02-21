// ==UserScript==
// @name        [Feedly] Sort by engagement
// @description Add "Sort by engagement" button to header
// @namespace   https://github.com/tkrkt
// @include     https://feedly.com/*
// @version     10
// @grant       none
// ==/UserScript==

function watch(callback) {
  setTimeout(function() {
    if (document.querySelector("#feedlyPageFX .right-col")) {
      callback();
    } else {
      watch(callback);
    }
  }, 1000);
}

function parseEngagement(str) {
  str = str.trim();
  const num = Number.parseInt(str, 10);

  if (!str) return 0;
  if (str.endsWith("K")) return num * 1000;
  if (str.endsWith("M")) return num * 1000 * 1000;
  return num;
}

function sort() {
  const container = document.querySelector("#feedlyPageFX .list-entries");

  const sortedMarkerClass = "sorted-marker";
  const existingMarker = container.querySelector("h4.sorted-marker");
  if (existingMarker) {
    existingMarker.parentElement.removeChild(existingMarker);
  }

  const endOfFeed = container.querySelector("h4");
  const entries = Array.from(container.querySelectorAll(".entry"));
  !endOfFeed && entries.pop();

  const sorted = entries.filter(elem => {
    const ago = elem.querySelector(".ago");
    if (ago && ago.textContent.trim() === "Sponsored") {
      elem.style.display = "none";
      return false;
    } else {
      return elem.classList.contains("unread");
    }
  });
  const targets = sorted.length ? sorted : entries;

  const articleNumElement = document.querySelector(".MarkAsReadButton span");
  let articleNum;
  if (articleNumElement) {
    articleNum = +articleNumElement.textContent;
  }

  if (!endOfFeed && articleNum) {
    const marker = document.createElement("h4");
    marker.textContent = `Sorted ${
      targets.length
    } of ${articleNum} unread articles`;
    marker.classList.add("sorted-marker");
    Object.assign(marker.style, {
      marginTop: "1rem",
      marginBottom: "2rem"
    });
    container.insertBefore(marker, container.firstElementChild);
  }

  targets
    .map(elem => {
      const counter = elem.querySelector(".EntryEngagement");
      if (counter) {
        return [elem, parseEngagement(counter.textContent)];
      } else {
        return [elem, 0];
      }
    })
    .sort(([, a], [, b]) => a - b)
    .forEach(([elem]) => {
      container.insertBefore(elem, container.firstElementChild);
    });
}

function addButton(callback) {
  const buttonId = "sort-by-engagement";
  const controls = document.querySelector("#feedlyPageFX .right-col");
  const existing = document.getElementById(buttonId);
  if (existing) {
    existing.remove();
  }

  const button = document.createElement("button");
  button.id = buttonId;
  button.textContent = "Sort by engagement";
  button.title = "Sort";
  button.classList.add("secondary");
  button.addEventListener("click", callback, false);
  Object.assign(button.style, {
    textTransform: "none",
    height: "32px",
    lineHeight: "32px",
    padding: "0 10px"
  });
  controls.insertBefore(button, controls.firstChild);
}

watch(() => addButton(sort));
