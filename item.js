//Sample product data (replace with your actual product data)
// const Grocery = [
//   { id: 1, name:'Sugar',info:"1 Kg", price: 20, oldPrice: 100 },
//   { id: 2, name:'Sooji',info:"1 Kg", price: 30, oldPrice: 100 },
//   { id: 3, name:'Atta', info:"1 Kg",price:40,oldPrice:100},
//   { id: 4, name:'Maida',info:"1 Kg", price:50,oldPrice:100},
//   { id: 5, name:'Sunrich Oil',info:"1 Kg", price:60,oldPrice:100},
//   { id: 6, name:'Saffola Oil',info:"1 Kg", price:70,oldPrice:100},
//   { id: 7, name:'Fortune Oil',info:"1 Kg", price:70,oldPrice:100},
//   { id: 8, name:'Gemini Oil',info:"1 Kg", price:70,oldPrice:100},
//   { id: 9, name: "Gowardhan Ghee",info:"1 Kg", price:70,oldPrice:100},
//   { id: 10,name:"Madhur Sugar",info:"1 Kg", price:70,oldPrice:100},
//   { id: 11,name:"School Supplies",info:"1 Kg", price:70,oldPrice:100},
//   { id: 12, name:'Tata Salt', info:"1 Kg",price:40,oldPrice:100},
//   { id: 13, name:'Aashirvaad Atta', info:"1 Kg",price:40,oldPrice:100},
//   { id: 14, name:'Aashirvaad Atta', info:"10 Kg",price:40,oldPrice:100},
//   { id: 15, name:'Atta', info:"10 Kg",price:40,oldPrice:100},
//   { id: 16, name:'India Gate', info:"5 Kg",price:40,oldPrice:100},
//   { id: 17, name:'Daawat Rice', info:"1 Kg",price:40,oldPrice:100},
//   { id: 18, name:'Suffola Gold', info:"1 Ltr",price:40,oldPrice:100},
//   { id: 19, name:'Gemini Groundnut Oil', info:"1 Ltr",price:40,oldPrice:100},
//   { id: 21, name:'Dhara Groundnut Oil', info:"1 Ltr",price:40,oldPrice:100},
// ];

// const VKS_Grocery = [
//   { id: 22, name:'Maggi Masala', info:"1 Ltr",price:40,oldPrice:100},
//   { id: 23, name:'Everest Tikhalal Powder', info:"",price:40,oldPrice:100},
//   { id: 24, name:'Vandevi Hing Powder', info:"",price:40,oldPrice:100},
//   { id: 25, name:'Chings Paneer Chilli Masala', info:"",price:40,oldPrice:100},
//   { id: 26, name:'LG Hing powder', info:"",price:40,oldPrice:100},
//   { id: 27, name:'Everest Kitchen King Masala', info:"10 Kg",price:40,oldPrice:100},
//   { id: 28, name:'Everest Sambhar Masala', info:"10 Kg",price:40,oldPrice:100},
//   { id: 29, name:'Everest Sabji Masala', info:"10 Kg",price:40,oldPrice:100},
//   { id: 30, name:'Everest Turmeric Powder', info:"",price:40,oldPrice:100},
//   { id: 31, name:'Chings Veg Manchurian Masala', info:"10 Kg",price:40,oldPrice:100},
//   { id: 32, name:'Nutrela Soya Chunks Box', info:"10 Kg",price:40,oldPrice:100},
//   { id: 33, name:'Nutrela Soya Chunks', info:"10 Kg",price:40,oldPrice:100},
// ];
// const Packaged_Food = [
//   { id: 34, name:'Cashew', info:"10 Kg",price:40,oldPrice:100},
//   { id: 35, name:'Dynamix Cow Ghee ', info:"10 Kg",price:40,oldPrice:100},
//   { id: 36, name:'Bourbon Biscuit', info:"10 Kg",price:40,oldPrice:100},
//   { id: 37, name:'Parle Gold Biscuit', info:"10 Kg",price:40,oldPrice:100},
//   { id: 38, name:'Hide & Seek Biscuit', info:"10 Kg",price:40,oldPrice:100},
//   { id: 39, name:'Nutri Choice Biscuit', info:"10 Kg",price:40,oldPrice:100},
//   { id: 30, name:'Gooday Biscuit', info:"10 Kg",price:40,oldPrice:100},
//   { id: 40, name:'Krack Jack Biscuit', info:"10 Kg",price:40,oldPrice:100},
//   { id: 41, name:'Maggi Masala Noodles', info:"10 Kg",price:40,oldPrice:100},
//   { id: 42, name:'Maggi Masala Noodles 8 Pack', info:"10 Kg",price:40,oldPrice:100},
//   { id: 43, name:'Maggi Paazta Macroni', info:"10 Kg",price:40,oldPrice:100},
//   { id: 44, name:'Maggi Veg Atta Noodles 8 Pack', info:"10 Kg",price:40,oldPrice:100},
//   { id: 45, name:'Chings Hakka Noodles', info:"10 Kg",price:40,oldPrice:100},
//   { id: 46, name:'Maggi Veg Atta Noodles', info:"10 Kg",price:40,oldPrice:100},
// ];
// const Beverages= [
//   { id: 47, name:'Red Label', info:"10 Kg",price:40,oldPrice:100},
//   { id: 48, name:'Red Label Natural Care', info:"10 Kg",price:40,oldPrice:100},
//   { id: 49, name:'Tata Agni Tea', info:"10 Kg",price:40,oldPrice:100},
//   { id: 50, name:'Society Tea Powder', info:"10 Kg",price:40,oldPrice:100},
//   { id: 51, name:'Tata Gold Tea', info:"10 Kg",price:40,oldPrice:100},
//   { id: 52, name:'Sprite', info:"10 Kg",price:40,oldPrice:100},
//   { id: 53, name:'Mirinda', info:"10 Kg",price:40,oldPrice:100},
//   { id: 54, name:'Thumps Up', info:"10 Kg",price:40,oldPrice:100},
//   { id: 55, name:'Sprite 600ml', info:"10 Kg",price:40,oldPrice:100},
//   { id: 56, name:'Nescafe Coffee', info:"10 Kg",price:40,oldPrice:100},
//   { id: 57, name:'Nescafe Coffee 90gm', info:"10 Kg",price:40,oldPrice:100},
//   { id: 58, name:'Nescafe Coffee 24gm', info:"10 Kg",price:40,oldPrice:100},
//   { id: 59, name:'Sunrise Coffee', info:"10 Kg",price:40,oldPrice:100},
//   { id: 61, name:'Bournvita 1 Kg', info:"10 Kg",price:40,oldPrice:100},
//   { id: 62, name:'Bournvita 750 gm', info:"10 Kg",price:40,oldPrice:100},
//   { id: 63, name:'Bournvita 200 gm', info:"10 Kg",price:40,oldPrice:100},
//   { id: 64, name:'Bournvita', info:"10 Kg",price:40,oldPrice:100},
// ];
// const Personal_Care = [
//   { id: 65, name:'Parachute Oil 300 ml', info:"10 Kg",price:40,oldPrice:100},
//   { id: 66, name:'Parachute Oil 600 ml', info:"10 Kg",price:40,oldPrice:100},
//   { id: 67, name:'Parachute Oil', info:"10 Kg",price:40,oldPrice:100},
//   { id: 68, name:'Clinic Plus', info:"10 Kg",price:40,oldPrice:100},
//   { id: 69, name:'Dove Shampoo', info:"10 Kg",price:40,oldPrice:100},
//   { id: 70, name:'Head & Shoulder', info:"10 Kg",price:40,oldPrice:100},
//   { id: 71, name:'Bajaj Almond Oil', info:"10 Kg",price:40,oldPrice:100},
//   { id: 72, name:'Godrej Hair Color', info:"10 Kg",price:40,oldPrice:100},
//   // Add more products as needed
// ];
// Function to dynamically generate product cards
function generateProductCards(products) {
  const productsContainer = document.getElementById("products");
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product");
    productCard.innerHTML = `
      <img src="./${product.name}.webp" alt="${product.name}" />
      <h2>${product.name} ${product.info}</h2>
      <p>VKS: ₹${product.price}</p>
      <p>MRP: ₹${product.oldPrice}</p>
      <br/>
      <div class="quantity-controls">
        <button class="quantity-btn" data-product-id="${product.id}" data-action="subtract">-</button>
        <span class="quantity" data-product-id="${product.id}">0</span>
        <button class="quantity-btn" data-product-id="${product.id}" data-action="add">+</button>
      </div>
      <button class="addToCartBtn" data-product-id="${product.id}">Add to Cart</button>
      <button class="updateCartBtn" data-product-id="${product.id}" style="display:none;">Update Cart</button>`;
    productsContainer.appendChild(productCard);
  });
  // Add event listeners after generating product cards
  addEventListenersToButtons();
}

// Function to update the quantity when the quantity control buttons are clicked
function updateQuantity(productId, action) {
  const quantityElement = document.querySelector(
    `.quantity[data-product-id="${productId}"]`
  );
  let currentQuantity = parseInt(quantityElement.textContent, 10);

  if (action === "add") {
    currentQuantity = currentQuantity + 1;
  } else if (action === "subtract" && currentQuantity > 1) {
    currentQuantity = currentQuantity - 1;
  }
  quantityElement.textContent = currentQuantity;
}

// Function to add event listeners to "Add to Cart" buttons
function addEventListenersToButtons() {
  document.querySelectorAll(".addToCartBtn").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.productId;
      const quantity = document.querySelector(
        `.quantity[data-product-id="${productId}"]`
      ).textContent; // Fixed quantity to 1 when adding to the cart
      addToCart(productId, quantity);
    });
  });
  // Add event listeners to quantity control buttons
  addQuantityEventListeners();
}

// Function to add event listeners to quantity control buttons
function addQuantityEventListeners() {
  document.querySelectorAll(".quantity-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.productId;
      const action = button.dataset.action;
      updateQuantity(productId, action);
    });
  });
}

// Function to handle adding a product to the cart with a specific quantity
function addToCart(productId, quantityElement) {
  // Update the button text to reflect quantity
  const addToCartBtn = document.querySelector(
    `.addToCartBtn[data-product-id="${productId}"]`
  );
  addToCartBtn.textContent = `In Cart (Qty: ${quantityElement})`;

  // Implement your logic to add the product to the cart with the specified quantity
  console.log(
    `Product with ID ${productId} added to the cart with quantity ${quantityElement}.`
  );
}

// Combine all product arrays into a single array
// const allProducts = [...Grocery, ...VKS_Grocery, ...Packaged_Food, ...Beverages, ...Personal_Care];

// Generate product cards and add event listeners on page load
window.onload = function () {
  generateProductCards(Grocery);
};
