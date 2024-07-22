document.addEventListener('DOMContentLoaded', () => {
    const cakeSizeSelect = document.getElementById('cake-size');
    const customDimensionsDiv = document.getElementById('custom-dimensions');
  
    cakeSizeSelect.addEventListener('change', () => {
      if (cakeSizeSelect.value === 'Custom') {
        customDimensionsDiv.classList.remove('hidden');
      } else {
        customDimensionsDiv.classList.add('hidden');
      }
    });
  
    const form = document.getElementById('order-form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      // Collect form data and process it (e.g., send it to a server or show a confirmation message)
      alert('Your order has been submitted!');
      form.reset(); // Optional: Reset the form after submission
    });
  });
  