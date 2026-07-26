// DR Scripts site behavior
// Paddle.js handles the actual checkout overlay + payment. This file only
// renders product cards from products.js and opens Paddle checkout on click.
// No cart, no login, no local "account": none of that can work honestly on
// a static site, so it isn't faked here. Paddle emails the download link
// after payment (configured in Paddle Dashboard > that product > Fulfillment).

const PADDLE_VENDOR_TOKEN = "YOUR_PADDLE_CLIENT_TOKEN"; // Paddle Dashboard > Developer Tools > Authentication
const PADDLE_ENV = "production"; // use "sandbox" while testing

function initPaddle() {
  if (typeof Paddle === "undefined") return;
  if (PADDLE_ENV === "sandbox") Paddle.Environment.set("sandbox");
  Paddle.Initialize({ token: PADDLE_VENDOR_TOKEN });
}

function buyNow(priceId, productName) {
  if (!priceId) {
    alert(`${productName} is not live for purchase yet.`);
    return;
  }
  if (typeof Paddle === "undefined") {
    alert("Checkout is still loading, try again in a moment.");
    return;
  }
  Paddle.Checkout.open({
    items: [{ priceId, quantity: 1 }]
  });
}

function productCard(p) {
  const priceHtml = p.oldPrice
    ? `<span class="old-price">$${p.oldPrice}</span><span class="price">$${p.price}</span>`
    : `<span class="price">$${p.price}</span>`;

  const featuresHtml = p.features.map(f => `<li>${f}</li>`).join("");

  const imageHtml = p.image
    ? `<img src="${p.image}" alt="${p.name} screenshot" loading="lazy">`
    : `<div class="image-placeholder">${p.name}</div>`;

  return `
  <article class="product">
    <a class="product-image" href="product.html?id=${p.id}">${imageHtml}</a>
    <div class="product-body">
      <div class="product-category">${p.tag}</div>
      <h3 class="product-title"><a href="product.html?id=${p.id}">${p.name}</a></h3>
      <ul class="product-features">${featuresHtml}</ul>
      <div class="product-bottom">
        <div class="price-block">${priceHtml}</div>
        <button class="buy" onclick="buyNow('${p.paddlePriceId}', '${p.name.replace(/'/g, "\\'")}')">
          ${p.paddlePriceId ? "Buy Now" : "Coming Soon"}
        </button>
      </div>
    </div>
  </article>`;
}

function renderProducts(filter = "All") {
  const grid = document.getElementById("product-grid");
  if (!grid) return;
  const items = filter === "All" ? PRODUCTS : PRODUCTS.filter(p => p.tag === filter);
  grid.innerHTML = items.map(productCard).join("");
}

function initChips() {
  const chips = document.querySelectorAll(".chip");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      renderProducts(chip.dataset.filter);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  initChips();
  initPaddle();
});
