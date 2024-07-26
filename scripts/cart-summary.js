// Combined cart.js and cart-summary.js

// Function to add an item to the cart
export function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);

    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += item.quantity;
    } else {
        cart.push(item);
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    // Show "Go to Cart" button if items are added
    const goToCartButton = document.getElementById('go-to-cart');
    if (goToCartButton) {
        goToCartButton.style.display = 'block';
        goToCartButton.addEventListener('click', () => {
            window.location.href = 'cart-summary.html';
        });
    }
}

// Function to render cart items
function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-summary-items');
    const cartTotal = document.getElementById('cart-summary-total');

    // Check if elements exist
    if (!cartItemsContainer || !cartTotal) {
        console.error('One or more required elements are missing from the DOM.');
        return;
    }

    const cartData = localStorage.getItem('cart');
    const cartItems = JSON.parse(cartData) || [];

    let total = 0;
    cartItemsContainer.innerHTML = ''; // Clear existing items

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}
        `;
        cartItemsContainer.appendChild(listItem);
        total += item.price * item.quantity;
    });

    cartTotal.textContent = total.toFixed(2);
}

// Event listener for DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
    const checkoutButton = document.getElementById('checkout-btn');
    
    renderCartItems(); // Render items when the DOM is loaded

    // Add event listener to the checkout button
    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            // Handle checkout logic here
            alert('Proceeding to checkout...');
        });
    }
});
