const start = document.getElementById("start");
const title = document.querySelector(".title");
const buttonStart = document.querySelector(".button-start");
const cover = document.querySelector(".section1");
const story = document.querySelector(".section2");

function startTransition() {
  title.classList.add("start-transition");
  buttonStart.classList.add("start-transition");
  cover.classList.add("start-transition");
  cover.classList.add("hidden");
  story.classList.remove("hidden");
}

start.addEventListener("click", startTransition);

start.addEventListener("touchstart", startTransition);
start.addEventListener("touchend", startTransition);
