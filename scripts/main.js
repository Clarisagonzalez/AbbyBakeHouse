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

  // Order Now Buttom
  document.addEventListener('DOMContentLoaded', function() {
    // Create a button element
    var button = document.createElement('button');
    button.innerHTML = 'Order Now';
    
    // Style the button
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.left = '50%';
    button.style.transform = 'translateX(-50%)';
    button.style.padding = '10px 20px';
    button.style.fontSize = '16px';
    button.style.backgroundColor = '#007BFF';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    
    // Add event listener to redirect to "the shop" page
    button.addEventListener('click', function() {
        window.location.href = '/the-shop';
    });

    // Append the button to the body
    document.body.appendChild(button);
});
