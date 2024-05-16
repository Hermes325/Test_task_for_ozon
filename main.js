const circle = document.querySelector(".progress-ring__circle");
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

const input = document.querySelector(".percent");
input.addEventListener("change", function () {
  setProgress(input.value);
});

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}
setProgress();

const anime_switch = document.getElementById("animate");
const anime = document.querySelector(".progress-ring__circle");

anime_switch.addEventListener("click", function () {
  if (anime_switch.checked == true) {
    setProgress(0);
    input.value = 0;
    anime.classList.add("progress-ring__anime");
  } else {
    anime.classList.remove("progress-ring__anime");
  }
});

const hide_switch = document.getElementById("hide");
const svg = document.querySelector("svg");

hide_switch.addEventListener("click", function () {
  if (hide_switch.checked == true) {
    setProgress(0);
    input.value = 0;
    svg.classList.add("visibility");
  } else {
    svg.classList.remove("visibility");
  }
});
