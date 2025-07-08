/*
 * Check ascii code for spacebar and call goToLocation in global to change URL
 */

document.addEventListener("DOMContentLoaded", function () {
  // SPACEBAR KEY PRESS
  document.addEventListener("keydown", function (e) {
    if (e.code === "Space") {
      goToLocation('/feed'); // Make sure this matches your actual file path
    }
  });

  // CLICK ON "fade_text"
  const fadeText = document.getElementById("fade_text");
  if (fadeText) {
    fadeText.addEventListener("click", function () {
      goToLocation('/feed');
    });
  }
});

