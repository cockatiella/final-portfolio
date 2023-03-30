let contactBtn = document.getElementById("contact-btn");

contactBtn.addEventListener("click", function () {
  //go to contact-me section
  let contactMe = document.getElementById("contact-me");
  contactMe.scrollIntoView({ behavior: "smooth" });
});

function toggleDarkMode() {
  var body = document.body;
  var icon = document.querySelector(".btn-dark-mode i");
  body.classList.toggle("dark-mode");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
}
