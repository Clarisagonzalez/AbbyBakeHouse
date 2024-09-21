// Import the Cart class
import { Cart } from './cart.js';

// Function to update the cart summary on the page
function updateCartSummary() {
    const cart = new Cart(); // Create an instance of the Cart class
    const cartItemsContainer = document.getElementById('cart-summary-items');
    const totalElement = document.getElementById('cart-summary-total');

    // Check if elements are present in the DOM
    if (!cartItemsContainer || !totalElement) {
        console.error('Cart summary items or total elements not found.');
        return;
    }

    // Clear existing cart items
    cartItemsContainer.innerHTML = '';

    const cartItems = cart.getCartItems(); // Retrieve cart items from localStorage

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<li>Your cart is empty.</li>';
        totalElement.textContent = '0.00';
        return;
    }

    let totalPrice = 0;

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ${item.quantity} x $${item.price.toFixed(2)}`;

        // Create a decrease button
        const decreaseButton = document.createElement('button');
        decreaseButton.textContent = '-';
        decreaseButton.classList.add('decrease-item');
        decreaseButton.dataset.id = item.id; // Set data attribute for item ID
        
        // Add event listener for the decrease button
        decreaseButton.addEventListener('click', () => {
            cart.decreaseQuantity(item.id); // Call the method to decrease quantity
            updateCartSummary(); // Refresh the cart display
        });
        
        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remove';
        deleteButton.classList.add('delete-item');
        deleteButton.dataset.id = item.id; // Set data attribute for item ID
        
        // Add event listener for the delete button
        deleteButton.addEventListener('click', () => {
            cart.removeFromCart(item.id); // Implement this method in your Cart class
            updateCartSummary(); // Refresh the cart display
        });

        // Append the button to the list item
        listItem.appendChild(deleteButton);
        cartItemsContainer.appendChild(listItem);
        totalPrice += item.price * item.quantity;
    });

    totalElement.textContent = totalPrice.toFixed(2);
}
// Clear Cart functionality
function clearCart() {
    const cart = new Cart();
    cart.clearCart(); // Implement this method in your Cart class to clear all items
    updateCartSummary(); // Refresh the cart display
}

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    updateCartSummary();

    const clearCartBtn = document.getElementById('clear-cart-btn');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', clearCart);
    }
});
