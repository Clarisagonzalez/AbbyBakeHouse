// cart.js

// Initialize the cart from localStorage
function getCart() {
    return JSON.parse(localStorage.getItem('cartItems')) || [];
}

// Add item to cart
function addToCart(item) {
    const cartItems = getCart();
    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);

    if (existingItemIndex > -1) {
        cartItems[existingItemIndex].quantity += item.quantity;
    } else {
        cartItems.push(item);
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCart();
    alert('Item added to cart!');
}

// Remove item from cart
function removeFromCart(itemId) {
    const cartItems = getCart();
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    updateCart();
}

// Clear the cart
function clearCart() {
    localStorage.removeItem('cartItems');
    updateCart();
}

// Update the cart display
function updateCart() {
    const cartItems = getCart();
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = ''; // Clear current cart items

    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <p>${item.name} x ${item.quantity}</p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartContainer.appendChild(itemElement);
    });

    // Update total items and price
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById('total-items').textContent = `Items: ${totalItems}`;
    document.getElementById('total-price').textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// Export functions for use in other files
export { addToCart, removeFromCart, clearCart, updateCart, getCart };
