let contactBtn = document.getElementById("contact-btn");
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');
const navLinks = document.querySelectorAll('.nav-link');

navbarToggler.addEventListener('click', function () {
  navbarCollapse.classList.toggle('show');
});

// Close the navigation bar when a link is clicked
navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    navbarCollapse.classList.remove('show');
  });
});

// Close the navigation bar when clicked outside
document.addEventListener('click', function (event) {
  const targetElement = event.target;
  if (
    !targetElement.classList.contains('navbar-toggler') &&
    !targetElement.closest('.navbar-collapse') &&
    navbarCollapse.classList.contains('show')
  ) {
    navbarCollapse.classList.remove('show');
  }

  contactBtn.addEventListener("click", function () {
    //go to contact-me section
    let contactMe = document.getElementById("contact-me");
    contactMe.scrollIntoView({ behavior: "smooth" });
  });
})

function toggleDarkMode() {
  var body = document.body;
  var icon = document.querySelector(".btn-dark-mode i");
  body.classList.toggle("dark-mode");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
}
