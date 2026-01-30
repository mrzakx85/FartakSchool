
const f1 = document.getElementById("f1");
const f2 = document.getElementById("f2");
const f3 = document.getElementById("f3");

const f1Target = document.getElementById("f1-target");
const f2Target = document.getElementById("f2-target");
const f3Target = document.getElementById("f3-target");


f1.addEventListener("click", function () {
  f1Target.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});

f2.addEventListener("click", function () {
  f2Target.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});

f3.addEventListener("click", function () {
  f3Target.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});


const infoModalBtn = document.getElementById("infoModalBtn");
const mainPage = document.getElementById("mainPage");
const educationSystem = document.getElementById("educationSystem");
const aboutUs = document.getElementById("aboutUs");
const contact = document.getElementById("contact");
const menu = document.getElementById("openSlideNav");
const slideNavBox = document.querySelector(".slidablenav-box");





mainPage.addEventListener("click", () => {
  window.location.href = "../index.html";
});

educationSystem.addEventListener("click", () => {
  window.location.href = "../educationsystem/index.html";
});

aboutUs.addEventListener("click", () => {
  window.location.href = "./index.html";
});

contact.addEventListener("click", () => {
  window.location.href = "../contactus/index.html";
});


const SlideNavMainPage = document.querySelector(".slidablenav #mainPage");
const SlideNavEducationSystem = document.querySelector(".slidablenav #educationSystem");
const SlideNavAboutUs = document.querySelector(".slidablenav #aboutUs");
const SlideNavContact = document.querySelector(".slidablenav #contact");


SlideNavMainPage.addEventListener("click", () => {
  window.location.href = "../index.html";
});

SlideNavEducationSystem.addEventListener("click", () => {
  window.location.href = "../educationsystem/index.html";
});

SlideNavAboutUs.addEventListener("click", () => {
  window.location.href = "./index.html";
});

SlideNavContact.addEventListener("click", () => {
  window.location.href = "../contactus/index.html";
});

function openSlidableNav() {
  slideNavBox.classList.toggle("open");
}
menu.addEventListener("click" , openSlidableNav);
