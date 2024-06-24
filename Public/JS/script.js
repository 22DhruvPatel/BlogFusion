document.addEventListener("DOMContentLoaded", function() {
  let button = document.getElementById("button");
  if (button) {
      button.addEventListener("click", function() {
          window.location.href = "https://www.google.com";
      });
  }
});
