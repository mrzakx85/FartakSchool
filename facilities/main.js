const logo = document.querySelector(".logo-box");
const navBtn = document.getElementById("navPreregister");
const loginBtn = document.querySelector(".login-btn");
const gallery = document.getElementById("gallery");
const plans = document.getElementById("plans");
const contact = document.getElementById("contact");

// 

plans.addEventListener("click", () => {
  window.location.href = "../plans/index.html"
})

navBtn.addEventListener("click", () => {
  window.location.href = "../preRegister/index.html";
});

loginBtn.addEventListener("click", () => {
  window.location.href = "../logIn/index.html";
});

logo.addEventListener("click", () => {
  window.location.href = "../index.html";
});

contact.addEventListener("click", () => {
  window.location.href = "../contactUs/index.html";
});

gallery.addEventListener("click", () => {
  window.location.href = "../gallery/index.html";
});
// //  //  //  \\   \\  \\  \\
const topicBtn = document.querySelectorAll(".slider-topicbtn");

topicBtn.forEach((btns) => {
  btns.addEventListener("click", () => {
    for (let i = 0; i < topicBtn.length; i++) {
      topicBtn[i].classList.remove("clicked");
    }
    btns.classList.add("clicked");
  });
});
// //  //  //  \\   \\  \\  \\
const sliderBtn1 = document.getElementById("sliderBtn1");
const sliderBtn2 = document.getElementById("sliderBtn2");
const sliderBtn3 = document.getElementById("sliderBtn3");
const sliderBtn4 = document.getElementById("sliderBtn4");
//
const sliders1 = document.getElementById("sliders1");
const sliders2 = document.getElementById("sliders2");
const sliders3 = document.getElementById("sliders3");
const sliders4 = document.getElementById("sliders4");

sliderBtn1.addEventListener("click", () => {
  sliders1.style.display = "grid";
  sliders2.style.display = "none";
  sliders3.style.display = "none";
  sliders4.style.display = "none";
});

sliderBtn2.addEventListener("click", () => {
  sliders1.style.display = "none";
  sliders2.style.display = "grid";
  sliders3.style.display = "none";
  sliders4.style.display = "none";
});

sliderBtn3.addEventListener("click", () => {
  sliders1.style.display = "none";
  sliders2.style.display = "none";
  sliders3.style.display = "grid";
  sliders4.style.display = "none";
});

sliderBtn4.addEventListener("click", () => {
  sliders1.style.display = "none";
  sliders2.style.display = "none";
  sliders3.style.display = "none";
  sliders4.style.display = "grid";
});
