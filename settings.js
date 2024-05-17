const progressRing = document.querySelector("progress-ring");
const input = document.querySelector(".percent");
input.addEventListener("input", function () {
  progressRing.setProgress(input.value);
});

const anime_switch = document.getElementById("animate");
anime_switch.addEventListener("click", function () {
  progressRing.setProgress(0);
  input.value = 0;
  if (anime_switch.checked) {
    progressRing.startAnimation();
  } else {
    progressRing.finishAnimation();
  }
});
const hide_switch = document.getElementById("hide");
hide_switch.addEventListener("click", function () {
  if (hide_switch.checked) {
    progressRing.hideBlock();
  } else {
    progressRing.showBlock();
  }
});

