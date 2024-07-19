// load-header.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header-container').innerHTML = data;
  
        // JavaScript to toggle the mobile menu
        document.getElementById('nav-toggle').addEventListener('click', function () {
          const menu = document.getElementById('nav-menu');
          menu.classList.toggle('hidden');
        });
      });
  });
  