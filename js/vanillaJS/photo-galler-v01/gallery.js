const images = document.querySelector(".images");
const showImg = document.querySelector(".show-img");
const body = document.querySelector("body");

images.addEventListener("click", openImage);

function openImage(e) {
  if (e.target.parentElement.className.indexOf("image") === 0) {
    // console.log(e.target);
    const clonedImg = document.importNode(e.target);
    showImg.appendChild(clonedImg);
    images.style.display = "none";
    showImg.style.display = "block";
    // showImg.classList.remove("hide");
    // showImg.classList.add("show");
    // images.classList.add("hide");
  }
}

// showImg.addEventListener("click", closeModal);
body.addEventListener("click", closeModal);

function closeModal(e) {
  if (e.target.nodeName !== "IMG") {
    // console.log(showImg.children);
    showImg.children[0].remove();
    images.style.display = "grid";
    showImg.style.display = "none";
    // showImg.classList.add("hide");
    // showImg.classList.remove("show");
    // images.classList.remove("hide");
  }
}
