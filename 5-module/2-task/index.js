function toggleText() {
  let button = document.querySelector(".toggle-text-button");
  let div = document.getElementById("text");
  button.addEventListener("click", function () {
    if (div.hasAttribute("hidden")) {
      div.removeAttribute("hidden");
    } else {
      div.setAttribute("hidden", "");
    }
  });
}
