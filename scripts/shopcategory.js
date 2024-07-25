document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const category = params.get('category');

  const categories = {
      cupcakes: {
          title: 'Cupcakes Shop',
          items: [
              { name: 'Chocolate Fudge', price: 4.00, image: 'images/cupcakes/chocolate fudge cupcake.png' },
              { name: 'Vanilla Bean', price: 4.00, image: 'images/cupcakes/vanilla bean cupcake.png' },
              { name: 'Red Velvet', price: 4.00, image: 'images/cupcakes/red velvet cupcake.png' }
          ]
      },
      cookies: {
          title: 'Cookies Shop',
          items: [
              { name: 'Chocolate Chip Cookie', price: 1.5, image: 'images/cookies/Chocolate Chip Cookie.jpg' },
              { name: 'Oatmeal Raisin', price: 1.75, image: 'images/cookies/Oatmeal Raisin Cookie.png' },
              { name: 'Peanut Butter Cookie', price: 1.75, image: 'images/cookies/peanut butter cookie.png' },
              { name: 'Sugar Cookie', price: 1.25, image: 'images/cookies/Sugar cookie.png' },
              { name: 'Double Chocolate Brownie', price: 3.5, image: 'images/cookies/Double Chocolate Brownie cookie.png' }
          ]
      },
      bread: {
        title: 'Breads Shop',
        items: [
          { name: 'Sourdough', price: 6.00, image: 'images/breads/sourdough bread.png' },
          { name: 'Baguette', price: 4.00, image: 'images/breads/baguette bread.png' },
          { name: 'Rye Bread', price: 6.00, image: 'images/breads/rye bread.png' },
          { name: 'Ciabatta', price: 5.00, image: 'images/breads/ciabatta bread.png' },
          { name: 'Focaccia', price: 7.00, image: 'images/breads/focaccia bread.png' }
      ]
    },
    donuts: {
      title: 'Donuts Shop',
      items: [
        { name: 'Glazed', price: 2.00, image: 'images/donuts/glazed donut.png' },
       { name: 'Chocolate', price: 2.50, image: 'images/donuts/chocolate donut.png' },
        { name: 'Jelly-Filled', price: 3.00, image: 'images/donuts/jelly-filled donut.png' },
        { name: 'Cinnamon Sugar', price: 2.50, image: 'images/donuts/cinnamon sugar donut.png' },
        { name: 'Maple Bacon', price: 3.50, image: 'images/donuts/maple bacon donut.png' }
      ]
    },
    pastry: {
      title: 'Pastry Shop',
      items: [
        { name: 'Lemon Tarts', price: 5.00, image: 'images/pastries/lemon tart.png' },
       { name: 'Eclairs', price: 4.00, image: 'images/pastries/eclaire.png' }
        
      ]
    },
    bagels: {
      title: 'Bagels and Croissants Shop',
      items: [
        { name: 'Plain Bagel', price: 2.00, image: 'images/bagelscroissants/plain bagel.png' },
       { name: 'Everything Bagel', price: 2.50, image: 'images/bagelscroissants/everything bagel.png' },
        { name: 'Blueberry Bagel', price: 2.50, image: 'images/bagelscroissants/blueberry bagel.png' },
        { name: 'Plain Croissant', price: 2.00, image: 'images/bagelscroissants/plain croissant.png' },
        { name: 'Almond Croissant', price: 2.00, image: 'images/bagelscroissants/almond croissant.png' }
      ]
    },
    loaves: {
      title: 'Loaves and Rolls Shop',
      items: [
        { name: 'Whole Wheat', price: 4.00, image: 'images/breads/sourdough.jpg' },
       { name: 'Multigrain', price: 5.00, image: 'images/breads/whole-wheat.jpg' },
        { name: 'Brioche', price: 5.00, image: 'images/breads/rye-bread.jpg' },
        { name: 'Dinner Rolls', price: 8.00, image: 'images/breads/whole-wheat.jpg' },
        { name: 'Pretzel Rolls', price: 10.00, image: 'images/breads/rye-bread.jpg' }
      ]
    },
    specialbread: {
      title: 'Specialty Breads Shop',
      items: [
        { name: 'Banana Bread', price: 8.00, image: 'images/specialbread/bananabr.jpg' },
       { name: 'Zucchini Bread', price: 9.00, image: 'images/breads/whole-wheat.jpg' },
        { name: 'Pumpkin Bread', price: 8.00, image: 'images/breads/rye-bread.jpg' },
        { name: 'Corn Bread', price: 8.00, image: 'images/breads/rye-bread.jpg' }
      ]
    },
    specialties: {
      title: 'Specialties Shop',
      items: [
        { name: 'Macarons', price: 2.50, image: 'images/breads/sourdough.jpg' },
       { name: 'Brownies', price: 3.00, image: 'images/breads/whole-wheat.jpg' },
        { name: 'Cheesecake Slices', price: 4.50, image: 'images/breads/rye-bread.jpg' },
        { name: 'Fruit Tart', price: 5.00, image: 'images/breads/whole-wheat.jpg' },
        { name: 'Cannoli', price: 3.50, image: 'images/breads/rye-bread.jpg' }
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
                  <button class="add-to-cart bg-A19D9D text-white px-4 py-2 rounded mt-2" data-name="${item.name}" data-price="${item.price}">Add to Cart</button>
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

      // Handle add to cart button
      document.querySelectorAll('.add-to-cart').forEach(button => {
          button.addEventListener('click', event => {
              const itemName = event.target.getAttribute('data-name');
              const itemPrice = parseFloat(event.target.getAttribute('data-price'));
              const quantity = parseInt(event.target.previousElementSibling.querySelector('.quantity').value, 10);
              addToCart(itemName, itemPrice, quantity);
          });
      });
  } else {
      document.getElementById('category-title').textContent = 'Category Not Found';
  }
  // Handle back button
  document.getElementById('back-button').addEventListener('click', () => {
    window.history.back();
});

  function addToCart(name, price, quantity) {
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      const existingItemIndex = cartItems.findIndex(item => item.name === name);

      if (existingItemIndex > -1) {
          cartItems[existingItemIndex].quantity += quantity;
      } else {
          cartItems.push({ name, price, quantity });
      }

      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      alert('Item added to cart!');
    }
});  
