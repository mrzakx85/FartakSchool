const navPreregister = document.getElementById("navPreregister");
const facility = document.getElementById("facility");
const loginBtn = document.querySelector(".login-btn");
const logo = document.querySelector(".logo-box");
const plans = document.getElementById("plans");
const gallery = document.getElementById("gallery");

navPreregister.addEventListener("click", () => {
  window.location.href = "../preRegister/index.html";
});

facility.addEventListener("click", () => {
  window.location.href = "../facilities/index.html";
});

loginBtn.addEventListener("click", () => {
  window.location.href = "../logIn/index.html";
});

logo.addEventListener("click", () => {
  window.location.href = "../index.html";
});

plans.addEventListener("click", () => {
  window.location.href = "../plans/index.html";
});

gallery.addEventListener("click", () => {
  window.location.href = "../gallery/index.html";
});