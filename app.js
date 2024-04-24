const forward = document.querySelector(".forward");
const backward = document.querySelector(".backward");
const road = document.querySelector(".road");
const background = document.querySelector(".backgroundImg img");
const wheel1 = document.querySelector(".wheel1 img");
const wheel2 = document.querySelector(".wheel2 img");
const wholeBody = document.querySelector(".wholecar");

let margin = 0;
const moveDistance = 0;

forward.addEventListener("mousedown", () => {
  road.classList.toggle("play-animation-forward");
  background.classList.toggle("play-forward");
  wheel1.classList.toggle("play-forward");
  wheel2.classList.toggle("play-forward");
});

backward.addEventListener("mousedown", () => {
  road.classList.toggle("play-animation-backward");
  background.classList.toggle("play-backward");
  wheel1.classList.toggle("play-backward");
  wheel2.classList.toggle("play-backward");
});

document.addEventListener("mouseup", () => {
  road.classList.remove("play-animation-forward", "play-animation-backward");
  background.classList.remove("play-forward", "play-backward");
  wheel1.classList.remove("play-forward", "play-backward");
  wheel2.classList.remove("play-forward", "play-backward");
});
