const topLogBtn = document.querySelector(".top-logbtn");
const preRegisterBtn = document.querySelector(".preRegister-btn");
const navBtn = document.getElementById("navPreregister");
const plans = document.getElementById("plans");
const loginBtn = document.querySelector(".login-btn");
const gallery = document.getElementById("gallery");
const contact = document.getElementById("contact");
const facility = document.getElementById("facility");
const morebtn = document.querySelector(".top-morebtn");
const mobileLogbtn = document.querySelector(".logbtn-img");

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

mobileLogbtn.addEventListener("click", () => {
  window.location.href = "./logIn/index.html";
});

//  //  //  //  //  //
const openSlider = document.querySelector(".open-sliderImg");
const sliderNav = document.querySelector(".slider-nav");

openSlider.addEventListener("click", (e) => {
  sliderNav.classList.add("open");
  e.stopPropagation();
});

sliderNav.addEventListener("click", (e) => {
  e.stopPropagation();
});

document.addEventListener("click", () => {
  sliderNav.classList.remove("open");
});
