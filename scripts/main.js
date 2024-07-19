// Smooth scrolling for nav bar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  // JavaScript to toggle the mobile menu
document.getElementById('nav-toggle').addEventListener('click', function () {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('hidden');
  });
  
  
  // Basic form validation
  function validateForm() {
    var name = document.forms["orderForm"]["name"].value;
    var email = document.forms["orderForm"]["email"].value;
    var orderDetails = document.forms["orderForm"]["orderDetails"].value;
    if (name == "" || email == "" || orderDetails == "") {
      alert("All fields must be filled out");
      return false;
    }
  }