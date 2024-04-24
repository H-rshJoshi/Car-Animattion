const forward = document.querySelector(".forward");
const backward = document.querySelector(".backward");
const road = document.querySelector(".road");
const background = document.querySelector(".backgroundImg img");
const wheel1 = document.querySelector(".wheel1 img");
const wheel2 = document.querySelector(".wheel2 img");
const car = document.querySelector(".car")

let moveInterval;
let moveDirection = 0; // 0: No movement, 1: Forward, -1: Backward

forward.addEventListener("mousedown", () => {
  moveDirection = 1;
  moveInterval = setInterval(moveCar, 10);
  moveInterval1 = setInterval(moveWheel1, 10);
  moveInterval2 = setInterval(moveWheel2, 10);
  road.classList.add("play-animation-forward");
  background.classList.add("play-forward");
  wheel1.classList.add("play-forward");
  wheel2.classList.add("play-forward");
});

backward.addEventListener("mousedown", () => {
  moveDirection = -1;
  moveInterval = setInterval(moveCar, 10);
  moveInterval1 = setInterval(moveWheel1, 10);
  moveInterval2 = setInterval(moveWheel2, 10);
  road.classList.add("play-animation-backward");
  background.classList.add("play-backward");
  wheel1.classList.add("play-backward");
  wheel2.classList.add("play-backward");
});

document.addEventListener("mouseup", () => {
  clearInterval(moveInterval);
  clearInterval(moveInterval1);
  clearInterval(moveInterval2);
  moveDirection = 0;
  road.classList.remove("play-animation-forward", "play-animation-backward");
  background.classList.remove("play-forward", "play-backward");
  wheel1.classList.remove("play-forward", "play-backward");
  wheel2.classList.remove("play-forward", "play-backward");
});

function moveCar() {
  const step = 2; 
  const currentLeft = parseFloat(getComputedStyle(car).left);
  const newLeft = currentLeft + moveDirection * step;
  car.style.left = newLeft + "px";
}
function moveWheel1() {
  const step = 2; 
  const currentLeft = parseFloat(getComputedStyle(wheel1).left);
  const newLeft = currentLeft + moveDirection * step;
  wheel1.style.left = newLeft + "px";
}
function moveWheel2() {
  const step = 2; 
  const currentLeft = parseFloat(getComputedStyle(wheel2).left);
  const newLeft = currentLeft + moveDirection * step;
  wheel2.style.left = newLeft + "px";
}
