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

  const ex2Text = document.getElementById(
    "ex2_text",
  ) as HTMLInputElement | null;
  const ex2Content = document.getElementById("ex2_content");

  if (ex2Text && ex2Content) {
    ex2Content.textContent = "Wpisano 0 znaków";

    ex2Text.addEventListener("input", function () {
      const length = ex2Text.value.length;
      ex2Content.textContent = `Wpisano ${length} znaków`;
    });
  }

  const ex6Button = document.getElementById("ex6_button");
  const ex6Content = document.getElementById("ex6_content");

  let timer: number | null = null;
  let seconds = 0;

  if (ex6Button && ex6Content) {
    ex6Button.addEventListener("click", function () {
      if (timer) {
        clearInterval(timer);
        timer = null;
      } else {
        timer = setInterval(function () {
          seconds++;
          ex6Content.textContent = String(seconds);
        }, 1000);
      }
    });
  }
})();
