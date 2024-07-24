document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    const categories = {
      cupcakes: {
        title: 'Cupcakes Shop',
        items: [
          { name: 'Chocolate Fudge', price: 4.00},
          { name: 'Vanilla Bean', price: 4.00},
          { name: 'Red Velvet', price: 4.00}
        ]
      },
      cookies: {
        title: 'Cookies Shop',
        items: [
          { name: 'Chocolate Chip Cookie', price: 1.5, image: 'images/cookies/cc-cookie.jpg' },
          { name: 'Oatmeal Cookie', price: 1.5, image: 'images/cookies/cookie2.jpg' },
          { name: 'Peanut Butter Cookie', price: 1.5, image: 'images/cookies/cookie3.jpg' }
        ]
      },
      // Add other categories similarly...
    };
  
    const categoryData = categories[category];
    if (categoryData) {
      document.getElementById('category-title').textContent = categoryData.title;
      document.title = `${categoryData.title} - Abby's Bake House`;
  
      const galleryContainer = document.getElementById('gallery-container');
      categoryData.items.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('bg-white', 'shadow-md', 'rounded-lg', 'p-4');
        itemCard.innerHTML = `
          <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-cover rounded-t-lg">
          <div class="p-4">
            <h2 class="text-xl font-bold mb-2">${item.name}</h2>
            <p class="text-gray-700 mb-4">$${item.price.toFixed(2)}</p>
            <button class="add-to-cart bg-A19D9D text-white px-4 py-2 rounded">Add to Cart</button>
          </div>
        `;
        galleryContainer.appendChild(itemCard);
      });
  
      document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
          const itemName = event.target.parentElement.querySelector('h2').textContent;
          addToCart(itemName); // Call the addToCart function
        });
      });
    } else {
      document.getElementById('category-title').textContent = 'Category Not Found';
    }
  });
  