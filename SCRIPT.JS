// Simple Image Slider
let images = ["images/chicken1.jpg", "images/eggs1.jpg", "images/farm.jpg"];
let index = 0;
setInterval(() => {
  index = (index + 1) % images.length;
  document.getElementById("slider-image").src = images[index];
}, 3000);

// Custom Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("All fields are required!");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Thank you for contacting us!");
  this.reset();
});
