let total = 0;

function addToCart(product, price) {
  const cartItems = document.getElementById("cart-items");

  const listItem = document.createElement("li");
  listItem.innerHTML = `
    ${product} - Rs. ${price}
    <button onclick="removeItem(this, ${price})">🗑</button>
  `;

  cartItems.appendChild(listItem);
  total += price;
  document.getElementById("cart-total").textContent = total;
}

function removeItem(button, price) {
  const li = button.parentElement;
  li.remove();
  total -= price;
  document.getElementById("cart-total").textContent = total;
}

document.getElementById('searchInput').addEventListener('keyup', function () {
  let input = this.value.toLowerCase();
  let products = document.getElementsByClassName('product-card');

  for (let i = 0; i < products.length; i++) {
    let title = products[i].getElementsByTagName('h3')[0].textContent.toLowerCase();
    if (title.includes(input)) {
      products[i].style.display = '';
    } else {
      products[i].style.display = 'none';
    }
  }
});

function filterProducts(category) {
  const products = document.querySelectorAll('.product-card');
  products.forEach(product => {
    if (category === 'all') {
      product.style.display = 'block';
    } else {
      product.style.display = product.classList.contains(category) ? 'block' : 'none';
    }
  });
}

const ratings = document.querySelectorAll(".user-rating");

ratings.forEach(rating => {
  const stars = rating.querySelectorAll(".star");

  stars.forEach((star, index) => {
    star.addEventListener("mouseover", () => {
      stars.forEach((s, i) => {
        s.classList.toggle("hovered", i <= index);
      });
    });

    star.addEventListener("mouseout", () => {
      stars.forEach(s => s.classList.remove("hovered"));
    });

    star.addEventListener("click", () => {
      stars.forEach((s, i) => {
        s.classList.toggle("selected", i <= index);
      });

      const selectedValue = star.getAttribute("data-value");
      alert(`You rated this product ${selectedValue} stars!`);
    });
  });
});
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}
