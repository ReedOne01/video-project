const btn = document.querySelector(".btn-switch");
const loader = document.querySelector(".loader");
const video = document.querySelector(".video-container");

window.addEventListener("DOMContentLoaded", () => {
  loader.style.display = "none";
  console.log("object loaded");
});
btn.addEventListener("click", () => {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});
