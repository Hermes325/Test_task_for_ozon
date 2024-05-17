class ProgressRing extends HTMLElement {
  constructor() {
    super();
    const template = document.getElementById("ring");
    const templateContent = template.content;
    this.attachShadow({ mode: "open" }).appendChild(
      templateContent.cloneNode(true)
    );

    this.circle = this.shadowRoot.querySelector(".progress-ring__circle");
    this.radius = this.circle.r.baseVal.value;
    this.circumference = 2 * Math.PI * this.radius;
    this.circle.style.strokeDasharray = `${this.circumference} ${this.circumference}`;
    this.circle.style.strokeDashoffset = this.circumference;
    this.svg = this.shadowRoot.querySelector("svg");
  }
  /**
   * Установить значение прогресса выполнения
   * @param {number} percent значение прогресса в %
   */
  setProgress(percent) {
    const offset = this.circumference - (percent / 100) * this.circumference;
    this.circle.style.strokeDashoffset = offset;
  }
  /**
   * Запустить анимацию
   */
  startAnimation() {
    let i = 0;
    this.intervalId = setInterval(() => {
      i = (i + 1) % 100;
      this.setProgress(i);
    }, 30);
  }
  /**
   * Останавить анимацию
   */
  finishAnimation() {
    if (!this.intervalId) return;
    clearInterval(this.intervalId);
    delete this.intervalId;
  }
  /**
   * Показать блок кольца
   */
  showBlock() {
    this.svg.classList.remove("hide");
  }
  /**
   * Скрыть блок кольца
   */
  hideBlock() {
    this.svg.classList.add("hide");
  }
}
customElements.define("progress-ring", ProgressRing);
