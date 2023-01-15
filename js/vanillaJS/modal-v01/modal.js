const body = document.querySelector("body");
const openBtn = document.querySelector("#wrapper button");
const closeBtn = document.querySelector("#modal-close button");
const modalContainer = document.querySelector(".modal-container");

openBtn.addEventListener("click", openModal);

closeBtn.addEventListener("click", closeModal);

function openModal(e) {
  modalContainer.style.display = "flex";
  body.style.overflow = "hidden";
}

function closeModal() {
  modalContainer.style.display = "none";
  body.style.overflow = "scroll";
}
