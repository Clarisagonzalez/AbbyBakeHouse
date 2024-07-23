document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    const categories = {
      cakes: {
        title: 'Cakes Shop',
        images: ['images/cakes/cake1.jpg', 'images/cakes/cake2.jpg', 'images/cakes/pinkcake.jpg'] // Add more images as needed
      },
      cookies: {
        title: 'Cookies Shop',
        images: ['images/cookies/cc-cookie.jpg', 'images/cookies/cookie2.jpg', 'images/cookies/cookie2.jpg']
      },
      bread: {
        title: 'Bread Shop',
        images: ['images/breads/focaccia.jpg', 'images/bread/bread2.jpg', 'images/cookies/cookie2.jpg']
      },
      donuts: {
        title: 'Donuts Shop',
        images: ['images/donuts/donut.jpg', 'images/donuts/donut2.jpg', 'images/cookies/cookie2.jpg']
      },
      pastry: {
        title: 'Pastry Shop',
        images: ['images/pastries/lemontart.jpg', 'images/pastry/pastry2.jpg', 'images/cookies/cookie2.jpg']
      },
      bagels: {
        title: 'Bagels Shop',
        images: ['images/bagels/bagel1.jpg', 'images/bagels/bagel2.jpg', 'images/cookies/cookie2.jpg']
      },
      loaves: {
        title: 'Loaves Shop',
        images: ['images/loaves/loaf1.jpg', 'images/loaves/loaf2.jpg', 'images/cookies/cookie2.jpg']
      },
      specialbread: {
        title: 'Special Bread Shop',
        images: ['images/specialbread/bananabr.jpg', 'images/specialbread/specialbread2.jpg', 'images/cookies/cookie2.jpg']
      },
      specialties: {
        title: 'Specialties Shop',
        images: ['images/specialties/specialty1.jpg', 'images/specialties/specialty2.jpg', 'images/cookies/cookie2.jpg']
      }
    };
  
    const categoryData = categories[category];
    if (categoryData) {
      document.getElementById('category-title').textContent = categoryData.title;
      document.title = `${categoryData.title} - Abby's Bake House`;
  
      const galleryContainer = document.getElementById('gallery-container');
      categoryData.images.forEach(src => {
        const link = document.createElement('a');
        link.href = src;
        link.setAttribute('data-lightbox', 'gallery');
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('gallery-img', 'bg-white', 'shadow-md');
        imgDiv.innerHTML = `<img src="${src}" alt="${category} image">`;
        link.appendChild(imgDiv);
        galleryContainer.appendChild(link);
      });
    } else {
      document.getElementById('category-title').textContent = 'Category Not Found';
    }
  });
  