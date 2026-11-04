(function () {
  const button = document.getElementById('ex6_animate_button');
  const element = document.getElementById('ex6_element');

  if (button && element) {
    button.addEventListener('click', function () {
      element.classList.toggle('animate');
    });
  }
})();