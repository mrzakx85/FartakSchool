const topLogBtn = document.querySelector(".top-logbtn");
const preRegisterBtn = document.querySelector(".preRegister-btn");
const navBtn = document.getElementById("navPreregister");
const plans = document.getElementById("plans");
const loginBtn = document.querySelector(".login-btn");
const gallery = document.getElementById("gallery");
const contact = document.getElementById("contact");
const facility = document.getElementById("facility");
const morebtn = document.querySelector(".top-morebtn");

morebtn.addEventListener("click", () => {
  window.location.href = "./plans/index.html";
});

navBtn.addEventListener("click", () => {
  window.location.href = "./preRegister/index.html";
});

loginBtn.addEventListener("click", () => {
  window.location.href = "./logIn/index.html";
});

preRegisterBtn.addEventListener("click", () => {
  window.location.href = "./preRegister/index.html";
});

topLogBtn.addEventListener("click", () => {
  window.location.href = "./preRegister/index.html";
});

facility.addEventListener("click", () => {
  window.location.href = "./facilities/index.html";
});

plans.addEventListener("click", () => {
  window.location.href = "./plans/index.html";
});

gallery.addEventListener("click", () => {
  window.location.href = "./gallery/index.html";
});

contact.addEventListener("click", () => {
  window.location.href = "./contactUs/index.html";
});
