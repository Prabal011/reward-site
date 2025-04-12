let points = 0;

function updatePointsDisplay() {
  const display = document.getElementById("pointsDisplay");
  if (display) {
    display.innerText = `Your Points: ${points}`;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  updatePointsDisplay();

  const watchBtn = document.getElementById("watchVideoBtn");
  const surveyBtn = document.getElementById("takeSurveyBtn");
  const adBtn = document.getElementById("clickAdBtn");

  if (watchBtn) {
    watchBtn.addEventListener("click", function () {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
      points += 5;
      updatePointsDisplay();
    });
  }

  if (surveyBtn) {
    surveyBtn.addEventListener("click", function () {
      window.open("https://forms.gle/your-form-link", "_blank");
      points += 10;
      updatePointsDisplay();
    });
  }

  if (adBtn) {
    adBtn.addEventListener("click", function () {
      window.open("https://www.example.com", "_blank");
      points += 2;
      updatePointsDisplay();
    });
  }
});