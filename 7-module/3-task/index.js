export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.create();
    this.addEventListener();
  }
  create() {
    this.elem = document.createElement("div");
    this.elem.classList.add("slider");
    this.elem.innerHTML = `<!--Ползунок слайдера с активным значением-->
      <div class="slider__thumb" style="left: 0%;">
        <span class="slider__value">0</span>
      </div>
      <!--Заполненная часть слайдера-->
      <div class="slider__progress" style="width: 0%;"></div>
      `;
    let sliderStep = document.createElement("div");
    sliderStep.classList.add("slider__steps");
    this.elem.append(sliderStep);
    for (let i = 0; i < this.steps; i++) {
      let span = document.createElement("span");
      sliderStep.append(span);
    }
    let sliderStepActive = this.elem.querySelectorAll(".slider__steps > span");
    sliderStepActive[this.value].classList.add("slider__step-active");
  }
  addEventListener(event) {
    this.elem.addEventListener("click", (event) => {
      let left = event.clientX - this.elem.getBoundingClientRect().left;
      let leftRelative = left / this.elem.offsetWidth;
      let segments = this.steps - 1;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);
      let valuePercents = (value / segments) * 100;
      let thumb = this.elem.querySelector(".slider__thumb");
      let progress = this.elem.querySelector(".slider__progress");
      let numValue = this.elem.querySelector(".slider__value");
      numValue.innerHTML = value;
      if (numValue) {
        thumb.style.left = `${valuePercents}%`;
        progress.style.width = `${valuePercents}%`;
      }

      let sliderStepActive = this.elem.querySelectorAll(
        ".slider__steps > span"
      );
      let sliderSteps = this.elem.querySelector(".slider__step-active");
      if (sliderSteps.classList.contains("slider__step-active")) {
        sliderSteps.classList.remove("slider__step-active");
      }
      sliderStepActive[value].classList.add("slider__step-active");

      let customEvent = new CustomEvent("slider-change", {
        detail: value,
        bubbles: true,
      });
      this.elem.dispatchEvent(customEvent);
    });
  }
}
