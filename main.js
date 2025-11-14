window.addEventListener("scroll", function () {
  const relativeNavbar = document.querySelector(".relative-navbar");
  const fixedNavbar = document.querySelector(".fixed-navbar");
  const threshold = 10; // Adjust this value to control when the switch happens (e.g., after scrolling 10px)

  if (window.scrollY > threshold) {
    relativeNavbar.classList.add("hidden");
    fixedNavbar.classList.remove("hidden");
  } else {
    relativeNavbar.classList.remove("hidden");
    fixedNavbar.classList.add("hidden");
  }
});
