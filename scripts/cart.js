// Function to add an item to the cart
function addToCart(name, price, quantity) {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const existingItemIndex = cartItems.findIndex(item => item.name === name);

  if (existingItemIndex > -1) {
      cartItems[existingItemIndex].quantity += quantity;
  } else {
      cartItems.push({ name, price, quantity });
  }

  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  alert('Item added to cart!');
}

// Function to get cart items
function getCart() {
  return JSON.parse(localStorage.getItem('cartItems')) || [];
}

// Function to remove an item from the cart
function removeFromCart(index) {
  let cart = getCart();
  cart.splice(index, 1);
  localStorage.setItem('cartItems', JSON.stringify(cart));
  renderCartItems(getCart()); // Re-render cart items
}

// Function to clear the cart
function clearCart() {
  localStorage.removeItem('cartItems');
  renderCartItems([]); // Clear cart items
}
