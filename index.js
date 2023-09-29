
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

  // JavaScript for toggling blog content
const blog1Toggle = document.getElementById("blog1-toggle");
const blog1More = document.getElementById("blog1-more");
const blog2Toggle = document.getElementById("blog2-toggle");
const blog2More = document.getElementById("blog2-more");

blog1Toggle.addEventListener("click", () => {
    toggleContent(blog1More, blog1Toggle);
});

blog2Toggle.addEventListener("click", () => {
    toggleContent(blog2More, blog2Toggle);
});

function toggleContent(contentElement, toggleElement) {
    if (contentElement.style.display === "none" || contentElement.style.display === "") {
        contentElement.style.display = "inline";
        toggleElement.textContent = " Read Less";
    } else {
        contentElement.style.display = "none";
        toggleElement.textContent = "... Read More";
    }
}

// Hide additional content initially
blog1More.style.display = "none";
blog2More.style.display = "none";
