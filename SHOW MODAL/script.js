"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const showModalBtn = document.querySelectorAll(".show-modal");
const closeModalBtn = document.querySelector(".close-modal");

const displayModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const HideModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < showModalBtn.length; i++) {
  showModalBtn[i].addEventListener("click", displayModal);
}

closeModalBtn.addEventListener("click", HideModal);
overlay.addEventListener("click", HideModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    HideModal();
  }
});
