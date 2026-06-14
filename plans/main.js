const navPreregister = document.getElementById("navPreregister");
const facility = document.getElementById("facility");
const loginBtn = document.querySelector(".login-btn");
const logo = document.querySelector(".logo-box");
const moreImgBtn = document.querySelector(".more-img-btn");
const gallery = document.getElementById("gallery");
const contact = document.getElementById("contact");

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

moreImgBtn.addEventListener("click", () => {
  window.location.href = "../gallery/index.html";
});

gallery.addEventListener("click", () => {
  window.location.href = "../gallery/index.html";
});

contact.addEventListener("click", () => {
  window.location.href = "../contactUs/index.html";
});

// // //  //  //
