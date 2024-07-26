document.addEventListener('DOMContentLoaded', function() {
    // Function to add an item to the cart
    function addToCart(item) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Display "Go to Cart" button when item is added
        const goToCartButton = document.getElementById('go-to-cart');
        if (goToCartButton) {
            goToCartButton.style.display = 'block';
        }
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
        renderCartItems(getCart()); // Re-render cart items
    }

    // Function to clear the cart
    function clearCart() {
        localStorage.removeItem('cart');
        renderCartItems([]); // Clear cart items
    }

    // Function to format price as currency
    function formatPrice(price) {
        return price.toFixed(2);
    }

    // Function to render cart items
    function renderCartItems(items) {
        const cartSummaryItems = document.getElementById('cart-summary-items');
        if (!cartSummaryItems) return; // If the element doesn't exist, exit the function

        cartSummaryItems.innerHTML = ''; // Clear existing items
        let total = 0;

        items.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.className = 'cart-item';
            listItem.innerHTML = `
                <span>${item.name} (x${item.quantity})</span> 
                <span>$${formatPrice(item.price * item.quantity)}</span>
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartSummaryItems.appendChild(listItem);
            total += item.price * item.quantity;
        });

        // Update total price
        const cartSummaryTotal = document.getElementById('cart-summary-total');
        if (cartSummaryTotal) {
            cartSummaryTotal.textContent = formatPrice(total);
        }
    }

    // Function to handle checkout
    function handleCheckout() {
        // Redirect to checkout page or handle order submission
        window.location.href = 'checkout.html'; // Replace with your checkout page URL
    }

    // Initial rendering of cart items
    renderCartItems(getCart());

    // Add event listener for checkout button
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', handleCheckout);
    }
});
