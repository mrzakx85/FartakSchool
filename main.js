

var sliderSelector = ".swiper-container",
  defaultOptions = {
    breakpointsInverse: true,
    observer: true,
  };

var nSlider = document.querySelectorAll(sliderSelector);

[].forEach.call(nSlider, function (slider, index, arr) {
  var data = slider.getAttribute("data-swiper") || {};

  if (data) {
    var dataOptions = JSON.parse(data);
  }

  slider.options = Object.assign({}, defaultOptions, dataOptions);

  var swiper = new Swiper(slider, slider.options);

  console.log(slider.options.autoplay);

  /* stop on hover */
  if (
    typeof slider.options.autoplay !== "undefined" &&
    slider.options.autoplay !== false
  ) {
    slider.addEventListener("mouseenter", function (e) {
      swiper.autoplay.stop();
      // console.log("stop");
    });

    slider.addEventListener("mouseleave", function (e) {
      swiper.autoplay.start();
      // console.log("start");
    });
  }
});

const f1 = document.getElementById("f1");
const f2 = document.getElementById("f2");
const f3 = document.getElementById("f3");
const f4 = document.getElementById("f4");

const f1Target = document.getElementById("f1-target");
const f2Target = document.getElementById("f2-target");
const f3Target = document.getElementById("f3-target");
const f4Target = document.getElementById("f4-target");


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

f4.addEventListener("click", function () {
  f4Target.scrollIntoView({
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

const SlideNavMainPage = document.querySelector(".slidablenav #mainPage");
const SlideNavEducationSystem = document.querySelector(".slidablenav #educationSystem");
const SlideNavAboutUs = document.querySelector(".slidablenav #aboutUs");
const SlideNavContact = document.querySelector(".slidablenav #contact");


infoModalBtn.addEventListener("click", () => {
  window.location.href = "./aboutus/index.html";
});

mainPage.addEventListener("click", () => {
  window.location.href = "./index.html";
});

educationSystem.addEventListener("click", () => {
  window.location.href = "./educationsystem/index.html";
});

aboutUs.addEventListener("click", () => {
  window.location.href = "./aboutus/index.html";
});

contact.addEventListener("click", () => {
  window.location.href = "./contactus/index.html";
});

// 


SlideNavMainPage.addEventListener("click", () => {
  window.location.href = "./index.html";
});

SlideNavEducationSystem.addEventListener("click", () => {
  window.location.href = "./educationsystem/index.html";
});

SlideNavAboutUs.addEventListener("click", () => {
  window.location.href = "./aboutus/index.html";
});

SlideNavContact.addEventListener("click", () => {
  window.location.href = "./contactus/index.html";
});

function openSlidableNav() {
  slideNavBox.classList.toggle("open");
}
menu.addEventListener("click" , openSlidableNav);
