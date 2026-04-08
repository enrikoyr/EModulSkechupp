document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link[data-target]');
  const moduleSections = document.querySelectorAll('.module-section');
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  // Handle Dropdown Toggles
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const parentLi = toggle.closest('.has-dropdown');
      if (parentLi) {
        parentLi.classList.toggle('open');
      }
    });
  });

  // Handle Navigation Links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Remove active class from all nav-links
      navLinks.forEach(l => l.classList.remove('active'));
      // Add active class to clicked link
      link.classList.add('active');

      // Hide all sections
      moduleSections.forEach(section => {
        section.classList.remove('active');
      });

      // Show the selected section
      const targetId = link.getAttribute('data-target');
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add('active');
        // Reset scroll position to top when switching modules
        document.querySelector('.main-content').scrollTop = 0;
      }
    });
  });
});
