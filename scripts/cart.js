// cart.js

// Function to add items to the cart
function addToCart(itemName) {
    // Retrieve the current cart from localStorage, or initialize an empty array if not found
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  