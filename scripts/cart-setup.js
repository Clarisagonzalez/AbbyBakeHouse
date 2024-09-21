// Import the Cart class
import { Cart } from './cart.js';

// Create a cart instance and expose it globally
window.cart = new Cart();

// Function to add an item to the cart
function addToCart(id, name, price, quantity) {
    window.cart.addToCart({ id, name, price, quantity });
    updateCartSummary();
}

// Function to handle checkout (just a placeholder for now)
function handleCheckout() {
    console.log('Checkout function is not implemented yet.');
}

// Add event listener for the checkout button
document.addEventListener('DOMContentLoaded', () => {
    const checkoutButton = document.getElementById('checkout-btn');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', handleCheckout);
    }
});
