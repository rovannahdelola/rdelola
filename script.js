document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('sidebar').classList.add('active');
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('active');
});

document.addEventListener('DOMContentLoaded', function() {
    // Certifications section
    const seeMoreBtn1 = document.getElementById('seeMoreBtn');
    const showLessBtn1 = document.getElementById('showLessBtn');
    const certificationsContent = document.querySelector('.certifications-content');

    seeMoreBtn1.addEventListener('click', function(e) {
        e.preventDefault();
        certificationsContent.style.display = 'block';
        seeMoreBtn1.style.display = 'none';
        showLessBtn1.style.display = 'inline-block';
    });

    showLessBtn1.addEventListener('click', function(e) {
        e.preventDefault();
        certificationsContent.style.display = 'none';
        seeMoreBtn1.style.display = 'inline-block';
        showLessBtn1.style.display = 'none';
    });

    // Projects Portfolio section
    const seeMoreBtn2 = document.getElementById('seeMoreBtn2');
    const showLessBtn2 = document.getElementById('showLessBtn2');
    const projectsContent = document.querySelector('.projects-content');

    seeMoreBtn2.addEventListener('click', function(e) {
        e.preventDefault();
        projectsContent.style.display = 'block';
        seeMoreBtn2.style.display = 'none';
        showLessBtn2.style.display = 'inline-block';
    });

    showLessBtn2.addEventListener('click', function(e) {
        e.preventDefault();
        projectsContent.style.display = 'none';
        seeMoreBtn2.style.display = 'inline-block';
        showLessBtn2.style.display = 'none';
    });

    // Personal Website Portfolio section
const seeMoreBtnPersonal = document.getElementById('seeMoreBtnPersonal');
const showLessBtnPersonal = document.getElementById('showLessBtnPersonal');
const personalContent = document.querySelector('.personal-content'); // Corrected variable name

seeMoreBtnPersonal.addEventListener('click', function(e) {
    e.preventDefault();
    personalContent.style.display = 'block'; // Fixed the variable name
    seeMoreBtnPersonal.style.display = 'none';
    showLessBtnPersonal.style.display = 'inline-block';
});

showLessBtnPersonal.addEventListener('click', function(e) {
    e.preventDefault();
    personalContent.style.display = 'none'; // Fixed the variable name
    seeMoreBtnPersonal.style.display = 'inline-block';
    showLessBtnPersonal.style.display = 'none';
});


});

// Get references to the menu icon, sidebar, close button, overlay, and nav links
const menuIcon = document.getElementById('menu-icon');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');
const navLinks = document.querySelectorAll('.nav-link'); // Select all navigation links

// Function to toggle the sidebar and overlay visibility
function toggleSidebar() {
    const isOpen = sidebar.classList.contains('open');
    if (isOpen) {
        // If open, remove the 'open' class from the sidebar and 'visible' class from the overlay
        sidebar.classList.remove('open');
        overlay.classList.remove('visible');
    } else {
        // If closed, add the 'open' class to the sidebar and 'visible' class to the overlay
        sidebar.classList.add('open');
        overlay.classList.add('visible');
    }
}

// Function to close the sidebar (for convenience)
function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('visible');
}

// Add event listeners to handle clicks on the menu icon, close button, and overlay
menuIcon.addEventListener('click', toggleSidebar);  // Toggle sidebar when menu icon is clicked
closeBtn.addEventListener('click', toggleSidebar);  // Toggle sidebar when close button is clicked
overlay.addEventListener('click', toggleSidebar);   // Toggle sidebar when overlay is clicked

// Close the sidebar when any nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', closeSidebar); // Close sidebar on navigation link click
});



// mao ni tung animations sa scroll2 //
ScrollReveal().reveal('.slide-up', {
    distance: '80px',
    origin: 'bottom',
    opacity: 0,
    duration: 800,
    delay: 50,
    reset: true // Ensures animations occur every time elements come into view
});

window.addEventListener('load', function() {
    setTimeout(function() {
      // Trigger fade-out by adding the 'fade-out' class
      const loaderOverlay = document.getElementById('loader');
      loaderOverlay.classList.add('fade-out');
      
      // After the fade-out transition completes (1 second), hide the loader completely
      setTimeout(function() {
        loaderOverlay.style.display = 'none';
      }, 1000); // Match the duration of the CSS transition (1 second)
      
    }, 5000); // Wait for 5 seconds before starting the fade-out
  });

  
