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
  
  // Example usage
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('order-form');
    
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const item = {
          name: formData.get('name'),
          phone: formData.get('phone'),
          date: formData.get('date'),
          cakeSize: formData.get('cake-size'),
          flavor: formData.get('flavor'),
          customSize: formData.get('custom-size') || 'N/A',
          shape: formData.get('shape'),
          cakeText: formData.get('cake-text'),
          colors: formData.get('colors'),
          decor: formData.get('decor'),
          largeOrders: formData.get('large-orders')
        };
        
        addToCart(item);
        alert('Item added to cart!');
        form.reset();
      });
    }