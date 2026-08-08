<script>
document.addEventListener("DOMContentLoaded", function () {

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.querySelector(".nav-links");

  const dropdowns = document.querySelectorAll(".nav-links .dropdown");

  menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("mobile-open");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("mobile-open")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    } else {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }

  });


  /* Mobile dropdowns */

  dropdowns.forEach(function (dropdown) {

    const link = dropdown.querySelector(":scope > a");

    link.addEventListener("click", function (e) {

      if (window.innerWidth <= 992) {

        e.preventDefault();

        dropdown.classList.toggle("dropdown-open");

      }

    });

  });


  /* Close menu when clicking outside */

  document.addEventListener("click", function (e) {

    if (
      !e.target.closest(".navbar") &&
      navLinks.classList.contains("mobile-open")
    ) {

      navLinks.classList.remove("mobile-open");

      const icon = menuToggle.querySelector("i");

      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");

      dropdowns.forEach(function (dropdown) {
        dropdown.classList.remove("dropdown-open");
      });

    }

  });


  /* Reset mobile menu when returning to desktop */

  window.addEventListener("resize", function () {

    if (window.innerWidth > 992) {

      navLinks.classList.remove("mobile-open");

      dropdowns.forEach(function (dropdown) {
        dropdown.classList.remove("dropdown-open");
      });

      const icon = menuToggle.querySelector("i");

      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");

    }

  });

});
</script>