const menuItemsData = [
  { id: 1, name: "Margherita Pizza", price: 15, image: "assets/images/pizza.jpg" },
  { id: 2, name: "Chicken Burger", price: 12, image: "assets/images/burger.jpg" },
  { id: 3, name: "Caesar Salad", price: 8, image: "assets/images/salad.jpg" },
  { id: 4, name: "Alfredo Pasta", price: 14, image: "assets/images/pasta.jpg" },
];

const menuContainer = document.getElementById("menu-items");
const cartList = document.getElementById("cart-list");
const cartCount = document.getElementById("cart-count");
const totalPriceElem = document.getElementById("total-price");
const cartSection = document.getElementById("cart-section");

let cart = [];

function renderMenu() {
  menuItemsData.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("menu-item");
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>$${item.price}</p>
      <button onclick="addToCart(${item.id})">Add to Cart</button>
    `;
    menuContainer.appendChild(div);
  });
}

function addToCart(id) {
  const item = menuItemsData.find(i => i.id === id);
  cart.push(item);
  updateCart();
}

function updateCart() {
  cartList.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
    total += item.price;
  });
  cartCount.textContent = cart.length;
  totalPriceElem.textContent = total;
}

document.getElementById("cart-btn").addEventListener("click", () => {
  cartSection.style.display = "block";
});

document.getElementById("close-cart-btn").addEventListener("click", () => {
  cartSection.style.display = "none";
});

document.getElementById("checkout-btn").addEventListener("click", () => {
  alert("Order confirmed! Thank you for choosing our restaurant 🍽️");
  cart = [];
  updateCart();
  cartSection.style.display = "none";
});

renderMenu();