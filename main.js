"use strict"

const accordion = document.querySelector(".accordion__main");
const buttons = document.querySelectorAll(".accordion__button");

init();

accordion.onclick = function(event) {
  let button = event.target.closest(".accordion__button");
  if (!button) return;

  if (button.getAttribute("aria-expanded") == "true") {
    button.setAttribute("aria-expanded", false);
    button.parentElement.nextElementSibling.setAttribute("hidden", "");
  } else {
    button.setAttribute("aria-expanded", true);
    button.parentElement.nextElementSibling.removeAttribute("hidden");
  }
}

function init() {
  for (let button of buttons) {
    if (button.getAttribute("aria-controls") == "panel1") continue;
    button.setAttribute("aria-expanded", false);
    button.parentElement.nextElementSibling.setAttribute("hidden", "");
  }
}