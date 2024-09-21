import { Cart } from './cart.js';

document.addEventListener('DOMContentLoaded', () => {
    const cart = new Cart(); // Create an instance of the Cart class

    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');

    const categories = {
        cupcakes: {
            title: 'Cupcakes Shop',
            items: [
                { id: '1', name: 'Chocolate Fudge', price: 4.00, image: 'images/cupcakes/chocolate fudge cupcake.png' },
                { id: '2', name: 'Vanilla Bean', price: 4.00, image: 'images/cupcakes/vanilla bean cupcake.png' },
                { id: '3', name: 'Red Velvet', price: 4.00, image: 'images/cupcakes/red velvet cupcake.png' }
            ]
        },
        cookies: {
            title: 'Cookies Shop',
            items: [
                { id: '4', name: 'Chocolate Chip Cookie', price: 1.5, image: 'images/cookies/Chocolate Chip Cookie.png' },
                { id: '5', name: 'Oatmeal Raisin', price: 1.75, image: 'images/cookies/Oatmeal Raisin Cookie.png' },
                { id: '6', name: 'Peanut Butter Cookie', price: 1.75, image: 'images/cookies/peanut butter cookie.png' },
                { id: '7', name: 'Sugar Cookie', price: 1.25, image: 'images/cookies/Sugar cookie.png' },
                { id: '8', name: 'Double Chocolate Brownie', price: 3.5, image: 'images/cookies/Double Chocolate Brownie cookie.png' }
            ]
        },
        bread: {
            title: 'Breads Shop',
            items: [
                { id: '9', name: 'Sourdough', price: 6.00, image: 'images/breads/sourdough bread.png' },
                { id: '10', name: 'Baguette', price: 4.00, image: 'images/breads/baguette bread.png' },
                { id: '11', name: 'Rye Bread', price: 6.00, image: 'images/breads/rye bread.png' },
                { id: '12', name: 'Ciabatta', price: 5.00, image: 'images/breads/ciabatta bread.png' },
                { id: '13', name: 'Focaccia', price: 7.00, image: 'images/breads/focaccia bread.png' }
            ]
        },
        donuts: {
            title: 'Donuts Shop',
            items: [
                { id: '14', name: 'Glazed', price: 2.00, image: 'images/donuts/glazed donut.png' },
                { id: '15', name: 'Chocolate', price: 2.50, image: 'images/donuts/chocolate donut.png' },
                { id: '16', name: 'Jelly-Filled', price: 3.00, image: 'images/donuts/jelly-filled donut.png' },
                { id: '17', name: 'Cinnamon Sugar', price: 2.50, image: 'images/donuts/cinnamon sugar donut.png' },
                { id: '18', name: 'Maple Bacon', price: 3.50, image: 'images/donuts/maple bacon donut.png' }
            ]
        },
        pastry: {
            title: 'Pastry Shop',
            items: [
                { id: '19', name: 'Lemon Tarts', price: 5.00, image: 'images/pastries/lemon tart.png' },
                { id: '20', name: 'Eclairs', price: 4.00, image: 'images/pastries/eclaire.png' }
            ]
        },
        bagels: {
            title: 'Bagels and Croissants Shop',
            items: [
                { id: '21', name: 'Plain Bagel', price: 2.00, image: 'images/bagelscroissants/plain bagel.png' },
                { id: '22', name: 'Everything Bagel', price: 2.50, image: 'images/bagelscroissants/everything bagel.png' },
                { id: '23', name: 'Blueberry Bagel', price: 2.50, image: 'images/bagelscroissants/blueberry bagel.png' },
                { id: '24', name: 'Plain Croissant', price: 2.00, image: 'images/bagelscroissants/plain croissant.png' },
                { id: '25', name: 'Almond Croissant', price: 2.00, image: 'images/bagelscroissants/almond croissant.png' }
            ]
        },
        loaves: {
            title: 'Loaves and Rolls Shop',
            items: [
                { id: '26', name: 'Whole Wheat', price: 4.00, image: 'images/loavesandrolls/whole wheat loaf.png' },
                { id: '27', name: 'Multigrain', price: 5.00, image: 'images/loavesandrolls/multigrain loaf.png' },
                { id: '28', name: 'Brioche', price: 5.00, image: 'images/loavesandrolls/brioche loaf.png' },
                { id: '29', name: 'Dinner Rolls', price: 8.00, image: 'images/loavesandrolls/dinner rolls.png' },
                { id: '30', name: 'Pretzel Rolls', price: 10.00, image: 'images/loavesandrolls/pretzel rolls.png' }
            ]
        },
        specialbread: {
            title: 'Specialty Breads Shop',
            items: [
                { id: '31', name: 'Banana Bread', price: 8.00, image: 'images/specialbread/banana bread.png' },
                { id: '32', name: 'Zucchini Bread', price: 9.00, image: 'images/specialbread/zucchini bread.png' },
                { id: '33', name: 'Pumpkin Bread', price: 8.00, image: 'images/specialbread/pumpkin bread.png' },
                { id: '34', name: 'Corn Bread', price: 8.00, image: 'images/specialbread/corn bread.png' }
            ]
        },
        specialties: {
            title: 'Specialties Shop',
            items: [
                { id: '35', name: 'Macarons', price: 2.50, image: 'images/specialties/macarons.png' },
                { id: '36', name: 'Brownies', price: 3.00, image: 'images/specialties/brownie.png' },
                { id: '37', name: 'Cheesecake Slices', price: 4.50, image: 'images/specialties/cheesecake.png' },
                { id: '38', name: 'Fruit Tart', price: 5.00, image: 'images/specialties/fruit tart.png' },
                { id: '39', name: 'Cannoli', price: 3.50, image: 'images/specialties/cannolis.png' }
            ]
        }
    };

 // Show feedback notification function
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            notification.style.display = 'none';
            notification.style.opacity = '1';
        }, 500);
    }, 2000);
}

const categoryData = categories[category];
if (categoryData) {
    document.getElementById('category-title').textContent = categoryData.title;
    document.title = `${categoryData.title} - Abby's Bake House`;

    const galleryContainer = document.getElementById('gallery-container');
    galleryContainer.innerHTML = ''; // Clear any previous content

    categoryData.items.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('bg-white', 'shadow-md', 'rounded-lg', 'p-4', 'm-4');
        itemCard.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-cover rounded-t-lg">
            <div class="p-4">
                <h2 class="text-xl font-bold mb-2">${item.name}</h2>
                <p class="text-gray-700 mb-4">$${item.price.toFixed(2)}</p>
                <div class="quantity-selector flex items-center">
                    <button class="decrease-quantity bg-gray-200 text-gray-700 px-2 py-1 rounded">-</button>
                    <input type="number" class="quantity mx-2 w-12 text-center" value="1" min="1">
                    <button class="increase-quantity bg-gray-200 text-gray-700 px-2 py-1 rounded">+</button>
                </div>
                <div class="button-container flex justify-center gap-2">
                    <button class="add-to-cart bg-A19D9D text-white px-4 py-2 rounded mt-2" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}">Add to Cart</button>
                    <button class="remove-from-cart bg-red-500 text-white px-4 py-2 rounded mt-2" data-id="${item.id}">Remove</button>
                </div>
            </div>
        `;

        galleryContainer.appendChild(itemCard);
    });

    // Handle quantity buttons
    document.querySelectorAll('.decrease-quantity').forEach(button => {
        button.addEventListener('click', event => {
            const quantityInput = event.target.nextElementSibling;
            if (quantityInput.value > 1) {
                quantityInput.value--;
            }
        });
    });

    document.querySelectorAll('.increase-quantity').forEach(button => {
        button.addEventListener('click', event => {
            const quantityInput = event.target.previousElementSibling;
            quantityInput.value++;
        });
    });

    // Add to cart functionality
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', event => {
            const id = event.target.dataset.id;
            const name = event.target.dataset.name;
            const price = parseFloat(event.target.dataset.price);
            const quantityInput = event.target.parentElement.parentElement.querySelector('.quantity');
            const quantity = parseInt(quantityInput.value);

            // Call the addToCart method from the cart instance
            cart.addToCart({ id, name, price, quantity });
            // Show the Go to Cart button
        const goToCartButton = document.getElementById('go-to-cart');
        goToCartButton.style.display = 'block'; // Show the button

        // Add click event to redirect to cart page
        goToCartButton.onclick = () => {
            window.location.href = 'cart-summary.html'; // Replace with the correct cart page URL
        };

            // Show notification
            showNotification(`Added ${name} to cart!`);
        });
    });

    // Remove from cart functionality
    document.querySelectorAll('.remove-from-cart').forEach(button => {
        button.addEventListener('click', event => {
            const id = event.target.dataset.id;
            cart.removeFromCart(id);
            showNotification(`Removed item from cart!`);
        });
    });

    // Handle back button
    const backButton = document.getElementById('back-button');
    if (backButton) {
        backButton.addEventListener('click', () => {
            window.history.back();
        });
    }
} else {
    document.getElementById('category-title').textContent = 'Category Not Found';
}

});
