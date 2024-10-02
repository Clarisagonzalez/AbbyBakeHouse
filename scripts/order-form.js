// Initialize EmailJS
(function() {
  emailjs.init("XhcwgjMJvelCtExpz"); // Replace with your actual user ID
})();

// Order form submission
document.getElementById("order-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const orderDate = document.getElementById("date").value;
  const cakeSize = document.getElementById("cake-size").value;
  const flavor = document.getElementById("flavor").value;
  const shape = document.getElementById("shape").value;
  const cakeText = document.getElementById("cake-text").value;
  const specificColor = document.getElementById("colors").value;
  const decor = document.getElementById("decor").value;
  const largeOrder = document.getElementById("large-orders").value;
  const message = document.getElementById("message").value;

  // Create the template parameters object
  const templateParams = {
      from_name: name,
      name: name,
      email: email,
      phone: phone,
      order_date: orderDate,
      cake_size: cakeSize,
      flavor: flavor,
      shape: shape,
      cake_text: cakeText,
      specific_color: specificColor,
      decor: decor,
      large_order: largeOrder,
      message: message
  };

  // Send the email using EmailJS
  emailjs.send("service_ytpnq7s", "template_abbybakehouse", templateParams)
      .then(function(response) {
          console.log("Email sent successfully!", response.status, response.text);
          alert("Order submitted successfully!");
      }, function(error) {
          console.error("Failed to send email. Error: ", error);
          alert("Failed to send order. Please try again.");
      });
});
