const colors = [
  "#FFFFсс",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const setRandomColor = () => {
  const randomIndexColor = randomIntegerFromInterval(0, 6);
  switcher.firstElementChild.style.backgroundColor = colors[randomIndexColor];
};
const switcher = document.querySelector(".switcher");
let randomColor = null;
let isIntervalFunctionWork = false;
const changeColor = elem => {
  if (
    elem.target.dataset.action === "start" &&
    isIntervalFunctionWork === false
  ) {
    randomColor = setInterval(() => setRandomColor(), 1000);
    isIntervalFunctionWork = true;
  }
  if (elem.target.dataset.action === "stop") {
    clearInterval(randomColor);
    isIntervalFunctionWork = false;
  }
};
switcher.addEventListener("click", changeColor);
