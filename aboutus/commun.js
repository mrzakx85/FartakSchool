document.getElementById("mainPage").addEventListener("click", () => {
  window.location.href = "../index.html";
});

document.getElementById("educationSystem").addEventListener("click", () => {
  window.location.href = "../educationsystem/index.html";
});

document.getElementById("aboutUs").addEventListener("click", () => {
  window.location.href = "../aboutus/index.html";
});

document.getElementById("contact").addEventListener("click", () => {
  window.location.href = "../contactus/index.html";
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