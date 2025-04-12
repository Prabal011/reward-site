// Get elements
const openBtn = document.getElementById("openRegister");
const closeBtn = document.getElementById("closeRegister");
const popup = document.getElementById("registerPopup");

// Show the popup when "Start Earning" is clicked
openBtn.addEventListener("click", () => {
  popup.classList.remove("hidden");
  popup.classList.add("visible");
});

// Hide the popup when "Close" is clicked
closeBtn.addEventListener("click", () => {
  popup.classList.remove("visible");
  popup.classList.add("hidden");
});