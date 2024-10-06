
 const icons = document.querySelectorAll('.icon');
 const cartItems = document.getElementById('cart-items');
 const clearCartButton = document.getElementById('clear-cart');
 
 icons.forEach(icon => {
 icon.addEventListener('click', function() {
 const itemName = this.nextElementSibling.innerText; 
 const itemPrice = this.parentElement.querySelector('.price').innerText;   

 const item = document.createElement('div');
  item.innerText = $`{itemName} - ${itemPrice}`;
 cartItems.appendChild(item);
 });
 });

 clearCartButton.addEventListener('click', function() {
 cartItems.innerHTML = ''; 
 });
