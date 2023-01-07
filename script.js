let contactBtn = document.getElementById("contact-btn");

contactBtn.addEventListener("click", function () {
  //go to contact-me section
  let contactMe = document.getElementById("contact-me");
  contactMe.scrollIntoView({ behavior: "smooth" });
});
