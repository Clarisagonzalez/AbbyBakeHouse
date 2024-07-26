// cart-summary.js

document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-summary-items');
    const cartTotal = document.getElementById('cart-summary-total');
    const checkoutButton = document.getElementById('checkout-btn');

    // Check if elements exist
    if (!cartItemsContainer || !cartTotal || !checkoutButton) {
        console.error('One or more required elements are missing from the DOM.');
        return;
    }

    // Function to render cart items
    function renderCartItems() {
        // Example data - replace with actual cart data
        const cartItems = [
            { name: 'Chocolate Chip Cookie', price: 1.5, quantity: 2 },
            { name: 'Oatmeal Raisin Cookie', price: 1.75, quantity: 1 }
        ];

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

    renderCartItems(); // Render items when the DOM is loaded

    // Add event listener to the checkout button
    checkoutButton.addEventListener('click', () => {
        // Handle checkout logic here
        alert('Proceeding to checkout...');
    });
});
