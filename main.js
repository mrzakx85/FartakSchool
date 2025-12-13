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

document.getElementById("f1").addEventListener("click", function () {
  document.getElementById("f1-target").scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});

document.getElementById("f2").addEventListener("click", function () {
  document.getElementById("f2-target").scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});

document.getElementById("f3").addEventListener("click", function () {
  document.getElementById("f3-target").scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});

document.getElementById("f4").addEventListener("click", function () {
  document.getElementById("f4-target").scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});


document.getElementById("infoModalBtn").addEventListener("click", () => {
  window.location.href = "./aboutus/index.html";
});

document.getElementById("mainPage").addEventListener("click", () => {
  window.location.href = "./index.html";
});

document.getElementById("educationSystem").addEventListener("click", () => {
  window.location.href = "./educationsystem/index.html";
});

document.getElementById("aboutUs").addEventListener("click", () => {
  window.location.href = "./aboutus/index.html";
});

document.getElementById("contact").addEventListener("click", () => {
  window.location.href = "./contactus/index.html";
});