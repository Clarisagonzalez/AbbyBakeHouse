import { addToCart } from './cart.js'; // Ensure you have this import if needed

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-summary-items');
    const cartTotal = document.getElementById('cart-summary-total');

    // Check if the elements exist before attempting to manipulate them
    if (!cartItemsContainer || !cartTotal) {
        console.error('Cart summary elements not found in the DOM.');
        return;  // Exit the function if the elements are missing
    }

    const cartData = localStorage.getItem('cart');
    const cartItems = JSON.parse(cartData) || [];

    let total = 0;
    cartItemsContainer.innerHTML = ''; // Clear existing items

    // Loop through the cart items and render them in the list
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}
        `;
        cartItemsContainer.appendChild(listItem);
        total += item.price * item.quantity;
    });

    // Update the total price in the cart summary
    cartTotal.textContent = total.toFixed(2);
}

document.addEventListener('DOMContentLoaded', () => {
    // Only run this after the DOM is fully loaded
    renderCartItems(); // Render items when the DOM is loaded

    const checkoutButton = document.getElementById('checkout-btn');
    
    // Handle checkout button click
    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            alert('Proceeding to checkout...');
        });
    }
});
