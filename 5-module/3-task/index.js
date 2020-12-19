function initCarousel() {
  let left = document.querySelector(".carousel__arrow_left");
  let right = document.querySelector(".carousel__arrow_right");
  let carousel = document.querySelector(".carousel__inner");
  let image = document.querySelectorAll(".carousel__slide"); // 4
  let width = carousel.offsetWidth; // 944
  let position = 0;
  let a;

  left.style.display = "none";

  right.addEventListener("click", function () {
    if (position < image.length - 1) {
      position++;
      a = position * width;
    }

    if (position === image.length - 1) {
      right.style.display = "none";
    } else {
      right.style.display = "";
    }
    if (position !== 0) {
      left.style.display = "";
    }

    carousel.style.transform = `translateX(-${a}px)`;

    //alert(position);
  });
  left.addEventListener("click", function () {
    if (position > 0) {
      position--;
      a = position * width;
    }
    if (position !== image.length - 1) {
      right.style.display = "";
    }

    if (position === 0) {
      left.style.display = "none";
    }

    carousel.style.transform = `translateX(-${a}px)`;
  });
}
