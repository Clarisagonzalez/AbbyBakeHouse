// Define and export the Cart class
export class Cart {
    constructor() {
        // Initialize the cart by loading it from localStorage or creating an empty array
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
    }

    // Method to add an item to the cart
    addToCart(item) {
        try {
            // Validate the item
            if (!item.id || !item.name || typeof item.price !== 'number' || typeof item.quantity !== 'number' || item.quantity <= 0) {
                throw new Error('Invalid item data');
            }

            // Ensure item.price and item.quantity are numbers
            item.price = parseFloat(item.price);
            item.quantity = parseInt(item.quantity);

            // Find if the item is already in the cart
            const existingItemIndex = this.cart.findIndex(cartItem => cartItem.id === item.id);

            if (existingItemIndex > -1) {
                // Item exists, update the quantity
                this.cart[existingItemIndex].quantity += item.quantity;
            } else {
                // Item does not exist, add it to the cart
                this.cart.push(item);
            }

            // Save the updated cart to localStorage
            this.saveCart();
            this.updateCartCount();
            console.log('Cart updated:', this.cart); // Debug log
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    }

    // Method to remove an item from the cart
    removeFromCart(itemId) {
        try {
            const newCart = this.cart.filter(item => item.id !== itemId);

            if (newCart.length === this.cart.length) {
                console.warn('Item not found in cart:', itemId);
            }

            this.cart = newCart;
            this.saveCart();
            this.updateCartCount();
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    }

    // Method to clear the cart
    clearCart() {
        try {
            this.cart = [];
            localStorage.removeItem('cart');
            this.updateCartCount();
        } catch (error) {
            console.error('Error clearing the cart:', error);
        }
    }
    // Method to update the cart count in the header
    updateCartCount() {
        const cartCountElement = document.getElementById('cart-count');
        if (cartCountElement) {
            const itemCount = this.cart.reduce((total, item) => total + item.quantity, 0);
            cartCountElement.textContent = itemCount;
        }
    }

    // Method to get all cart items
    getCartItems() {
        try {
            return this.cart;
        } catch (error) {
            console.error('Error retrieving cart items:', error);
            return [];
        }
    }

    // Save the cart to localStorage
    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }
}