// Function to add an item to the cart
function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  // Function to get cart items
  function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
  }
  
  // Function to remove an item from the cart
  function removeFromCart(index) {
    let cart = getCart();
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  // Function to clear the cart
  function clearCart() {
    localStorage.removeItem('cart');
  }
