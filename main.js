let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index - 1].style.display = "block";
  setTimeout(displayImages, 4000);
}
function updateCountdown() {
  const now = new Date();
  const target = new Date(now.getFullYear(), 0, 21, 0, 0, 0, 0); // January 21st of current year
  // If January 21st has passed this year, set to next year
  if (now > target) {
    target.setFullYear(now.getFullYear() + 1);
  }
  const timeDiff = target - now; // Time difference in milliseconds
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
  const seconds = Math.floor((timeDiff / 1000) % 60);
  // Format as DDD:HH:MM:SS

  document.getElementById("day").innerHTML = days.toString().padStart(3);
  document.getElementById("hour").innerHTML = hours.toString().padStart(2);
  document.getElementById("min").innerHTML = minutes.toString().padStart(2);
  document.getElementById("sec").innerHTML = seconds.toString().padStart(2);
}
// Update every second
setInterval(updateCountdown, 1000);
// Initial call
updateCountdown();
