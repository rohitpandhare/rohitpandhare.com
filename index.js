
// Function to toggle the navigation menu
function toggleNav() {
    var nav = document.querySelector(".navbar-nav");
    nav.classList.toggle("show");
}
// Function to close the navigation menu when a link is clicked
function closeNav() {
    var nav = document.querySelector(".navbar-nav");
    nav.classList.remove("show");
}

// Event listener to close the navigation menu on link click
var navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(function (link) {
    link.addEventListener("click", closeNav);
});

// Function to scroll smoothly to a section when a link is clicked
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            behavior: "smooth",
            top: section.offsetTop,
        });
    }
}

// Event listeners to scroll to specific sections when links are clicked
var scrollToLinks = document.querySelectorAll(".scroll-to-link");
scrollToLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        var sectionId = link.getAttribute("href").replace("#", "");
        scrollToSection(sectionId);
        closeNav(); // Close the navigation menu after clicking a link
    });
});

  // JavaScript for toggling story content
  const story1Toggle = document.getElementById("story1-toggle");
  const story1More = document.getElementById("story1-more");

  story1Toggle.addEventListener("click", () => {
      if (story1More.style.display === "none") {
          story1More.style.display = "inline";
          story1Toggle.textContent = " Read Less";
      } else {
          story1More.style.display = "none";
          story1Toggle.textContent = "... Read More";
      }
  });
