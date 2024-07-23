// cart-summary.js

// Sample data for demonstration purposes
const cartItems = [
    { name: "Chocolate Fudge Cake", price: 35 },
    { name: "Vanilla Bean Cake", price: 30 },
    { name: "Red Velvet Cake", price: 25 },
    { name: "Lemon Tarts", price: 5 },
    { name: "Eclairs", price: 4 },
];

// Function to format price as currency
function formatPrice(price) {
    return price.toFixed(2);
}

// Function to render cart items
function renderCartItems(items) {
    const cartSummaryItems = document.getElementById('cart-summary-items');
    let total = 0;
    
    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span>${item.name}</span> <span>$${formatPrice(item.price)}</span>`;
        cartSummaryItems.appendChild(listItem);
        total += item.price;
    });

    // Update total price
    document.getElementById('cart-summary-total').textContent = formatPrice(total);
}

// Function to handle checkout
function handleCheckout() {
    // Redirect to checkout page or handle order submission
    window.location.href = 'checkout.html'; // Replace with your checkout page URL
}

// Initial rendering of cart items
renderCartItems(cartItems);

// Add event listener for checkout button
document.getElementById('checkout-btn').addEventListener('click', handleCheckout);
