function addToCart() {
    const popup = document.getElementById('popup-message');
    popup.style.display = 'block';
    setTimeout(() => {
      popup.style.display = 'none';
    }, 2500); // El mensaje desaparece después de 2.5 segundos
  }
  
  let cart = [];

  function addToCart(productName, price) {
      // Buscar si el producto ya está en el carrito
      const existingProduct = cart.find(item => item.name === productName);
      
      if (existingProduct) {
          existingProduct.quantity += 1;
      } else {
          cart.push({ name: productName, price: price, quantity: 1 });
      }
  
      // Guardar carrito en localStorage
      localStorage.setItem('cart', JSON.stringify(cart));
  
      // Mostrar mensaje emergente
      const popup = document.getElementById('popup-message');
      popup.style.display = 'block';
      setTimeout(() => {
          popup.style.display = 'none';
      }, 2500);
  
      // Opcional: actualizar un contador visual de productos aquí
  }
  
  // Cargar carrito guardado cuando se recarga la página
  window.onload = function() {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
          cart = JSON.parse(savedCart);
      }
  };
  