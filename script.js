(function () {
  const button = document.getElementById("ex6_animate_button");
  const element = document.getElementById("ex6_element");

  if (button && element) {
    button.addEventListener("click", function () {
      element.classList.toggle("animate");
    });
  }

  const ex4Button = document.getElementById("ex4_button");
  const colors = ["#00ff00", "#ff0000", "#0000ff", "#ffa31a"];

  if (ex4Button) {
    ex4Button.addEventListener("click", function () {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      document.body.style.backgroundColor = randomColor;
    });
  }
})();
